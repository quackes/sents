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

    saldo(iban) {
        if(this.bankingAccess){
            return Promise.reject("no banking access present. please log in")
        }

        return new Promise((resolve, reject) => {

            new AhoiClient.AccountApi()
                .getAccounts(access.id, (error, data) => {
                    if(error){
                        reject(error)
                        return;
                    }

                    let account =
                        data.filter((account)=>{
                            return account.iban === iban
                        })
                    if(account && account.length > 0){
                        resolve(account[0])
                    }else{
                        reject('No bank account found for iban ' + iban)
                    }
                })
        })
        .then(account => {
            return account.balance.amount
        })
    }

    transfer(transaction) {
        if(!this.parentAccount || !this.childAccount){
            return Promise.reject('No parent or child account set')
        }

        let amount = transaction.freeAmount();
        let purpose = transaction.purpose();

        let transfer = {
            "iban" : this.transaction.child.bankAccount.iban,
            "bic" : this.transaction.child.bankAccount.bic,
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

                    this.pollState(data.id, 'AUTHORIZATION_PENDING')
                        .then(()=>{
                            return new AhoiClient.TaskApi()
                                .getChallenge(data.id, (error, data)=>{
                                    if(error){
                                        reject(error)
                                    }
                                    resolve(data);
                                })
                        })

                })
        });
    }

    pollState(taskId, successState){

        return new Promise((resolve, reject) => {
            pollFn(resolve, reject)
        });

        function pollFn(resolve, reject){
            getTaskStatus()
                .then((taskStatus)=>{
                    if(taskStatus.state === successState){
                        resolve()
                    }else if(taskStatus.state === 'FAILED', taskStatus.state === 'AUTHORIZATION_WRONG'){
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

injector.service('ahoiService', AhoiService);
window.ahoi = new AhoiService()