// eslint-disable-next-line
import injector from 'vue-inject';

import {config} from './ahoi-config'

import * as AhoiClient from '../../ahoi-sdk/src/index'

import {HttpService} from "../http.service";
import {StorageService} from "../storage-service";
import {ReplaySubject, throwError} from "rxjs";

class AhoiService {


    baseUrl = 'https://banking-sandbox.starfinanz.de'

    installationId = null;

    bankingAccess = null;

    installationStorageKey = "ahoi_installation_id";


    parentAccount = null;
    childAccount = null;


    saldoSubjects = {}


    constructor() {
        this.storageService = window.StorageService
        this.ahoiClient = AhoiClient.ApiClient.instance
        this.ahoiClient.basePath = this.baseUrl + '/ahoi/api/v2'
        this.ahoiClient.setOAuthCredentials(this.baseUrl + '/auth/v1/oauth/token?grant_type=client_credentials',
            config.clientId, config.clientSecret, config.appSecretKey, config.appSecretIV)

        this.installationId = window.localStorage.getItem(this.installationStorageKey);
        if (this.installationId) {
            this.ahoiClient.oAuthClient.setInstallationId(this.installationId);
        }
        this.dataObs = this.storageService.watch();

        this.dataObs.subscribe((data) =>{
            Object.keys(this.saldoSubjects).forEach((key) =>{
                let subj = this.saldoSubjects[key]
                this.loadSaldo(key)
                    .then(saldo => subj.next(saldo))
            });
        })

    }

    getInstallationId() {
        if (this.installationId) {
            return Promise.resolve(this.installationId);
        }
        return new Promise((resolve, reject) => {
            new AhoiClient.RegistrationApi().register((error, data) => {
                if (error) {
                    reject(error)
                    return;
                }

                this.ahoiClient.oAuthClient.setInstallationId(this.installationId)
                resolve(data.installation);
            })
        }).then((installation) => {
            this.installationId = installation;
            window.localStorage.setItem(this.installationStorageKey, this.installationId);
            this.ahoiClient.oAuthClient.setInstallationId(installation);
            return this.installationId;
        })
    }

    init() {
        return this.getInstallationId()
            .then(() => {
                return new Promise((resolve, reject) => {
                    new AhoiClient.ProviderApi().getProviders(null, (error, data) => {
                        let providerId = data[0].id;
                        new AhoiClient.AccessApi().postAccess({
                            "providerId": providerId,
                            "type": "BankAccess",
                            "accessFields": {
                                "CUSTOMERNUMBER": null,
                                "USERNAME": config.ahoiAccessFields.USERNAME,
                                "PIN": config.ahoiAccessFields.PIN
                            }
                        }, (error, data) => {

                            if (error) {
                                reject(error)
                                return;
                            }
                            this.bankingAccess = data
                            resolve(data)
                        })
                    })
                })
            }).then(access => {
                return new Promise((resolve, reject) => {

                    new AhoiClient.AccountApi()
                        .getAccounts(access.id, (error, data) => {
                            if (error) {
                                reject(error)
                                return;
                            }
                            this.parentAccount =
                                data.filter((account) => {
                                    return account.iban === config.parentAccountIban
                                })[0]
                            this.childAccount =
                                data.filter((account) => {
                                    return account.iban === config.childAccountIban
                                })[0]

                            resolve(this)
                        })
                })
            })

    }

    getAccount(iban) {

        return new Promise((resolve, reject) => {
            new AhoiClient.AccountApi()
                .getAccounts(this.bankingAccess.id, (error, data) => {
                    if (error) {
                        reject(error)
                        return;
                    }

                    let account =
                        data.filter((account) => {
                            return account.iban === iban
                        })
                    if (account && account.length > 0) {
                        resolve(account[0])
                    } else {
                        reject('No bank account found for iban ' + iban)
                    }
                })
        });
    }

    loadSaldo(iban) {
        return this.getAccount(iban)
            .then((account) => {
                return new Promise((resolve, reject) => {
                    new AhoiClient.TransactionApi()
                        .listTransactions(this.bankingAccess.id, account.id, {limit: 1, maxAge: 0}, (error, data) => {
                            if (error) {
                                reject(error)
                                return;
                            }
                            resolve()
                        })
                });
            })
            .then(() => this.getAccount(iban))
            .then(account => {
                return account.balance.amount.value
            })
    }

    saldo(iban) {
        if (!this.bankingAccess) {
            return throwError("no banking access present. please log in")
        }

        if(this.saldoSubjects[iban]){
            return this.saldoSubjects[iban]
        }

        let subj = new ReplaySubject(1)
        this.saldoSubjects[iban] = subj
        this.loadSaldo(iban)
            .then((saldo)=>{
                subj.next(saldo)
            })
        return subj

    }

    transfer(transaction) {
        if (!this.parentAccount || !this.childAccount) {
            return Promise.reject('No parent or child account set')
        }

        let amount = transaction.freeAmount;
        let purpose = transaction.purpose;

        let transfer = {
                "iban": transaction.child.bankAccount.iban,
            "bic": transaction.child.bankAccount.bic,
            "name": this.childAccount.owner,
            "amount": {
                "value": amount,
                "currency": "EUR"
            },
            "purpose": purpose
        }

        return new Promise((resolve, reject) => {
            new AhoiClient.TransferApi()
                .postTransfer(this.bankingAccess.id, this.parentAccount.id, transfer, (error, data) => {
                    if (error) {
                        reject(error);
                        return;
                    }

                    this.pollState(data.id, 'AUTHORIZATION_PENDING')
                        .then(() => {
                            return new Promise((resolve1, reject1) => {
                                return new AhoiClient.TaskApi()
                                    .getChallenge(data.id, (error, data) => {
                                        if (error) {
                                            reject1(error)
                                        }
                                        resolve1(data);
                                    })
                            })
                        })
                        .then((challenge)=>{
                            const regex = /\*\*\*([0-9]*)\*\*\*/g;
                            const str = challenge.challenge;

                            let tanMatch = regex.exec(str)

                            let req = {
                                "type": "TanChallengeResponse",
                                "response": tanMatch[1]
                            }

                            return new Promise((resolve1, reject1) => {
                                new AhoiClient.TaskApi()
                                    .postChallengeResponse(data.id, req, (error, data) => {
                                        if(error){
                                            reject1(error)
                                        }
                                        resolve(data);
                                    })
                            })
                        }).then((authorizeAnswer)=>{
                          if(authorizeAnswer.state === 'DONE'){
                              return {success: true}
                          }
                          return this.pollState(data.id, 'DONE')
                    }).then(resolve, reject)
                })
        });
    }

    pollState(taskId, successState) {

        return new Promise((resolve, reject) => {
            pollFn(resolve, reject)
        });

        function pollFn(resolve, reject) {
            getTaskStatus()
                .then((taskStatus) => {
                    if (taskStatus.state === successState) {
                        resolve()
                    } else if (taskStatus.state === 'FAILED', taskStatus.state === 'AUTHORIZATION_WRONG') {
                        reject(taskStatus)
                    }
                    else {
                        setTimeout(() => pollFn(resolve, reject), 500)
                    }

                })
                .catch(reject)
        }

        function getTaskStatus() {
            return new Promise((resolve, reject) => {
                new AhoiClient.TaskApi()
                    .getTask(taskId, (error, data) => {
                        if (error) {
                            reject(error);
                            return;
                        }

                        resolve(data);
                    })
            })
        }
    }
}

injector.service('ahoiService', AhoiService);
window.ahoi = new AhoiService()