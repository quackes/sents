// eslint-disable-next-line
import injector from 'vue-inject';

import {config} from './ahoi-config'

import * as AhoiClient from '../../ahoi-sdk/src/index'

import {HttpService} from "../http.service";

class AhoiService {


    baseUrl = 'https://banking-sandbox.starfinanz.de'

    installationId = null;

    bankingAccess = null;

    installationStorageKey = "ahoi_installation_id";


    parentAccount = null;
    childAccount = null;


    constructor(){
        this.ahoiClient =  AhoiClient.ApiClient.instance
        this.ahoiClient.basePath = this.baseUrl + '/ahoi/api/v2'
        this.ahoiClient.setOAuthCredentials(this.baseUrl + '/auth/v1/oauth/token?grant_type=client_credentials',
            config.clientId, config.clientSecret, config.appSecretKey, config.appSecretIV)

        this.installationId = window.localStorage.getItem(this.installationStorageKey);
        if(this.installationId){
            this.ahoiClient.oAuthClient.setInstallationId(this.installationId);
        }

    }

    getInstallationId(){
        if(this.installationId){
            return Promise.resolve(this.installationId);
        }
        return new Promise((resolve, reject) => {
            new AhoiClient.RegistrationApi().register((error, data)=>{
                if(error){
                    reject(error)
                    return;
                }

                this.ahoiClient.oAuthClient.setInstallationId(this.installationId)
                resolve(data.installation);
            })
        }).then((installation) =>{
            this.installationId = installation;
            window.localStorage.setItem(this.installationStorageKey, this.installationId);
            this.ahoiClient.oAuthClient.setInstallationId(installation);
            return this.installationId;
        })
    }

    init(){
        return this.getInstallationId()
            .then(()=>{
                return new Promise((resolve, reject) => {
                    new AhoiClient.ProviderApi().getProviders(null, (error, data)=>{
                        let providerId = data[0].id;
                        new AhoiClient.AccessApi().postAccess({
                            "providerId": providerId,
                            "type": "BankAccess",
                            "accessFields": {
                                "CUSTOMERNUMBER": null,
                                "USERNAME": config.ahoiAccessFields.USERNAME,
                                "PIN": config.ahoiAccessFields.PIN
                            }
                        }, (error, data)=>{

                            if(error){
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
                            if(error){
                                reject(error)
                                return;
                            }
                            console.log(data)
                            this.parentAccount =
                                data.filter((account)=>{
                                    return account.iban === config.parentAccountIban
                                })[0]
                            this.childAccount =
                                data.filter((account)=>{
                                    return account.iban === config.childAccountIban
                                })[0]

                            resolve(this)
                        })
                })
            })

    }

    transfer(transactionDef) {
        if(!this.parentAccount || !this.childAccount){
            return Promise.reject('No parent or child account set')
        }

        let amount = 100
        let purpose = "TEst"

        let transfer = {
            "iban" : this.childAccount.iban,
            "bic" : this.childAccount.bic,
            "name" : this.childAccount.owner,
            "amount" : {
                "value" : amount,
                "currency" : "EUR"
            },
            "purpose" : purpose
        }

        return new Promise((resolve, reject) => {
            new AhoiClient.TransferApi()
                .postTransfer(this.bankingAccess.id, this.parentAccount.id, transfer, (error, data) =>{
                    if(error){
                        reject(error);
                        return;
                    }

                    pollState(data.id)
                        .then(()=>{
                            return new AhoiClient.TaskApi()
                                .getChallenge(data.id, (error, data)=>{
                                    console.log(data);
                                })
                        })

                })
        });

        function pollState(taskId){

            return new Promise((resolve, reject) => {
                pollFn(resolve, reject)
            });

            function pollFn(resolve, reject){
                getTaskStatus()
                    .then((taskStatus)=>{
                        if(taskStatus.state === 'AUTHORIZATION_PENDING'){
                            resolve()
                        }else if(taskStatus.state === 'FAILED'){
                            reject(taskStatus)
                        }
                        else {
                            setTimeout(()=> pollFn(resolve, reject) , 500)
                        }

                    })
                    .catch(reject)
            }

            function getTaskStatus(){
                return new Promise((resolve, reject) => {
                    new AhoiClient.TaskApi()
                        .getTask(taskId, (error, data) =>{
                            if(error){
                                reject(error);
                                return;
                            }

                            resolve(data);
                        })
                })
            }
        }

    }
}

injector.service('ahoiService', AhoiService);
