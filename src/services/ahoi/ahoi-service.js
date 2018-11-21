// eslint-disable-next-line
import injector from 'vue-inject';

import { config } from './ahoi-config';

import * as AhoiClient from '../../ahoi-sdk/src/index';

class AhoiService {
  httpClient = injector.get('HttpService');

  baseUrl = 'https://banking-sandbox.starfinanz.de';

  installationId = null;

  bankingAccess = null;

  installationStorageKey = 'ahoi_installation_id';

  parentAccount = null;
  childAccount = null;

  constructor() {
    this.ahoiClient = AhoiClient.ApiClient.instance;
    this.ahoiClient.basePath = this.baseUrl + '/ahoi/api/v2';
    this.ahoiClient.setOAuthCredentials(
      this.baseUrl + '/auth/v1/oauth/token?grant_type=client_credentials',
      config.clientId,
      config.clientSecret,
      config.appSecretKey,
      config.appSecretIV
    );

    this.installationId = window.localStorage.getItem(this.installationStorageKey);
    if (this.installationId) {
      this.ahoiClient.oAuthClient.setInstallationId(this.installationId);
    }
  }

  getInstallationId() {
    if (this.installationId) {
      return Promise.resolve(this.installationId);
    }
    return new Promise((resolve, reject) => {
      new AhoiClient.RegistrationApi().register((error, data) => {
        if (error) {
          reject(error);
          return;
        }

        this.ahoiClient.oAuthClient.setInstallationId(this.installationId);
        resolve(data.installation);
      });
    }).then(installation => {
      this.installationId = installation;
      window.localStorage.setItem(this.installationStorageKey, this.installationId);
      this.ahoiClient.oAuthClient.setInstallationId(installation);
      return this.installationId;
    });
  }

  init() {
    this.getInstallationId()
      .then(() => {
        return new Promise((resolve, reject) => {
          new AhoiClient.ProviderApi().getProviders(null, (error, data) => {
            let providerId = data[0].id;
            new AhoiClient.AccessApi().postAccess(
              {
                providerId: providerId,
                type: 'BankAccess',
                accessFields: {
                  CUSTOMERNUMBER: null,
                  USERNAME: config.ahoiAccessFields.USERNAME,
                  PIN: config.ahoiAccessFields.PIN
                }
              },
              (error, data) => {
                if (error) {
                  reject(error);
                  return;
                }
                this.bankingAccess = data;
                resolve(data);
              }
            );
          });
        });
      })
      .then(access => {
        return new Promise((resolve, reject) => {
          new AhoiClient.AccountApi().getAccounts(access.id, (error, data) => {
            if (error) {
              reject(error);
              return;
            }
            console.log(data);
            this.parentAccount = data.filter(account => {
              return account.iban === config.parentAccountIban;
            })[0];
            this.childAccount = data.filter(account => {
              return account.iban === config.childAccountIban;
            })[0];

            console.log(this.parentAccount, this.childAccount);
          });
        });
      });
  }
}

injector.service('ahoiService', AhoiService);
