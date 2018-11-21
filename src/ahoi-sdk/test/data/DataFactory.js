import * as SwaggerJsClient from '../../src/index';
import * as config from './config.json';
import CryptoUtils from "../../src/encryption/CryptoUtils";

let instance = null;

export default class DataFactory {

  constructor() {

    if (!instance) {
      this.apiClient = null;
      this.installationId = null;
      this.providerId = null;
      this.accessId = null;
      this.portfolioId = null;
      this.transferToAccount = null;
      this.tanScheme = null;
      this.tanMedia = null;
      this.transactionpatternId = null;
      this.transactionId = null;
      this.challenge = null;
      this.task = null;
    }
    return instance;
  }

  static getInstance() {
    if (!instance) {
      instance = new DataFactory();
    }
    return instance;
  }

  applyConfig(apiClient) {
    apiClient.basePath = config.ahoi.url;
    apiClient.setOAuthCredentials(config.oauth.url, config.oauth.clientId, config.oauth.clientSecret, config.oauth.appSecretKey, config.oauth.appSecretIv);
    this.apiClient = apiClient;
  }

  setInstallationId(installationId) {
    this.installationId = installationId;
    this.apiClient.oAuthClient.setInstallationId(installationId);
  }

  clearInstallationId() {
    this.installationId = null;
    this.apiClient.oAuthClient.setInstallationId(null);
  }

  setProviderId(providerId) {
    this.providerId = providerId;
  }

  getProviderId() {
    return this.providerId;
  }

  setAccessId(accessId) {
    this.accessId = accessId;
  }

  getAccessId() {
    return this.accessId;
  }

  getPortfolioId() {
      return this.portfolioId;
  }

  setPortfolioId(portfolioId) {
      this.portfolioId = portfolioId;
  }

    setAccountId(accountId) {
    this.accountId = accountId;
  }

  getAccountId() {
    return this.accountId;
  }

  setTransferToAccount(account) {
    this.transferToAccount = account;
  }

  getTransferToAccount() {
    return this.transferToAccount;
  }

  setTanScheme(tanScheme) {
    this.tanScheme = tanScheme;
  }

  getTanScheme() {
    return this.tanScheme;
  }

  setTanMedia(tanMedia) {
    this.tanMedia = tanMedia;
  }

  getTanMedia() {
    return this.tanMedia;
  }

  setTransactionPatternId(transactionPatternId) {
    this.transactionpatternId = transactionPatternId;
  }

  getTransactionPatternId() {
    return this.transactionpatternId;
  }

  setTransactionId(transactionId) {
    this.transactionId = transactionId;
  }

  getTransactionId() {
    return this.transactionId;
  }

  setChallenge(challenge) {
    this.challenge = challenge;
  }

  getChallenge() {
    return this.challenge;
  }

  getBankCode() {
    return config.ahoi.access.bankCode;
  }

  getOAuthData() {
    return config.oauth;
  }

    getTask() {
        return this.task;
    }

    setTask(task) {
        this.task = task;
    }

    createAccess() {
    let username = config.ahoi.access.userName;
    let pin = config.ahoi.access.pin;

    let access = new SwaggerJsClient.BankAccess();
    access.providerId = this.getProviderId();

    let accessFieldMap = new SwaggerJsClient.AccessFieldsMap();
    accessFieldMap.USERNAME = username;
    accessFieldMap.PIN = pin;
    accessFieldMap.CUSTOMERNUMBER = null;
    access.accessFields = accessFieldMap;

    return access;
  }

  createTransactionPattern() {
    let state = SwaggerJsClient.TransactionPattern.StateEnum.ACTIVE;
    let cycle = SwaggerJsClient.TransactionPattern.CycleEnum.ANNUALLY;
    let day = 1;
    let relatedAccountOwner = 'Stan S. Stanman';
    let amount = new SwaggerJsClient.Amount(123456, 'EUR');
    let accountNumber = '1234567890';
    let bankCode = this.getBankCode();
    let pattern = new SwaggerJsClient.TransactionPattern(state, cycle, day, relatedAccountOwner, amount, accountNumber, bankCode);

    pattern.origin = SwaggerJsClient.TransactionPattern.OriginEnum.MANUAL;
    pattern.kind = 'Test';
    return pattern;
  }

  createTransfer() {
    let amount = new SwaggerJsClient.Amount(Math.round(Math.random()*100000), 'EUR');
    let iban = this.transferToAccount.iban;
    let name = this.transferToAccount.name;
    let tanMediaId = this.tanMedia.tanMediaId;
    let tanSchemeId = this.tanScheme.schemeId;

    let transfer = new SwaggerJsClient.Transfer(iban, name, amount, tanMediaId, tanSchemeId);
    transfer.bic = this.transferToAccount.bic;
    transfer.purpose = CryptoUtils.guid();

    return transfer;
  }

    extractTanChallengResponse(challenge) {
     let start = challenge.indexOf("***")+3;
     return challenge.substring(start, start+6);
  }

  setUpRegistration(callback) {
    if (this.installationId === null) {
      let registrationApi = new SwaggerJsClient.RegistrationApi();
      registrationApi.register((error, data, response) => {
        if (error) callback(error, null, null);
        DataFactory.getInstance().setInstallationId(data.installation);
        callback(error, data, response);
      });
    } else {
      callback(null, null, null);
    }
  }

  setUpProvider(callback) {
    this.setUpRegistration((error, data, response) => {
      if (error) callback(error, null, null);
      let providerApi = new SwaggerJsClient.ProviderApi();
      //required to get provider id
      let bankCode = DataFactory.getInstance().getBankCode();
      let opts = {
        bankCode: bankCode,
        supported: true,
        query: null
      };
      providerApi.getProviders(opts, (error, data, response) => {
        if (error) callback(error, null, null);
        let provider = data[0];
        DataFactory.getInstance().setProviderId(provider.id);
        callback(error, data, response);
      });
    });
  }

  setUpAccess(callback) {
    this.setUpProvider((error, data, response) => {
      if (error) callback(error, null, null);
      let accessApi = new SwaggerJsClient.AccessApi();
      let access = DataFactory.getInstance().createAccess();
      accessApi.postAccess(access, (error, data, response) => {
        if (error) callback(error, null, null);
        DataFactory.getInstance().setAccessId(data.id);
        callback(error, data, response)
      });
    });
  }

  tearDownAccess(callback) {
    let accessApi = new SwaggerJsClient.AccessApi();
    let accessId = DataFactory.getInstance().getAccessId();
    accessApi.deleteAccess(accessId, (error, data, response) => {
      if (error) callback(error, null, null);
      DataFactory.getInstance().clearInstallationId();
      callback(error, data, response);
    });
  }

  setUpAccount(callback) {
    this.setUpAccess((error, data, response) => {
      if (error) callback(error, null, null);
      let accessId = DataFactory.getInstance().getAccessId();
      let accountApi = new SwaggerJsClient.AccountApi();
      accountApi.getAccounts(accessId, (error, data, response) => {
        if (error) callback(error, null, null);
        let account = data[0];
        DataFactory.getInstance().setAccountId(account.id);
        account = data[1];
        DataFactory.getInstance().setTransferToAccount(account);
        account = data[2];
        DataFactory.getInstance().setPortfolioId(account.id)
        callback(error, data, response);
      })
    })
  }

  setUpTransactionPattern(callback) {
    let accessId = DataFactory.getInstance().getAccessId();
    let accountId = DataFactory.getInstance().getAccountId();
    let transactionPattern = DataFactory.getInstance().createTransactionPattern();
    let transactionPatternApi = new SwaggerJsClient.TransactionPatternApi();
    transactionPatternApi.postTransactionPattern(accessId, accountId, transactionPattern, (error, data, response) => {
      if (error) callback(error, null, null);
      DataFactory.getInstance().setTransactionPatternId(data.id);
      callback(error, data, response);
    });
  }

  setUpTanSchemes(callback) {
    let accessId = DataFactory.getInstance().getAccessId();
    let tanSchemesApi = new SwaggerJsClient.TANSchemesApi();
    tanSchemesApi.getCurrentTanScheme(accessId, (error, data, response) => {
      if (error) callback(error, null, null);
      DataFactory.getInstance().setTanScheme(data);
      DataFactory.getInstance().setTanMedia(data.tanMediaList[0]);
      callback(error, data, response);
    });
  }
}