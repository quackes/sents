import * as SwaggerJsClient from '../../src/index';
import expect from 'expect.js'
import DataFactory from '../data/DataFactory';

describe('AccountApi', function() {

  function assertBankAccount(account) {
    expect(account).not.to.be(null);
    expect(account.type).to.be.eql("BankAccount");
    expect(account).to.be.an(SwaggerJsClient.BankAccount);
    expect(account.id).not.to.be(null);
    expect(account.number).not.to.be(null);
    expect(account.bankCodeNumber).not.to.be(null);
    expect(account.bic).not.to.be(null);
    expect(account.iban).not.to.be(null);
    expect(account.currency).not.to.be(null);
    expect(account.balance).not.to.be(null);
  }

  let instance;
  // Increase the timeout, because some processes (e.g. registration) can take
  // more time than the default 2000 ms.
  this.timeout(10000);

  before('Before AccountApi', (done) => {
    instance = new SwaggerJsClient.AccountApi();
    DataFactory.getInstance().applyConfig(instance.apiClient);
    DataFactory.getInstance().setUpAccess((error, data, response) => {
      expect(error).to.be(null);
      done();
    });
  });

  after('After AccountApi', (done) => {
    DataFactory.getInstance().tearDownAccess((error, data, response) => {
      expect(error).to.be(null);
      done();
    })
  });

  describe('a_getAccessAccountsTest', () => {
    it('should call getAccounts with accessId successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      instance.getAccounts(accessId, (error, data, response) => {
        expect(error).to.be(null);
        expect(data).not.to.be(null);
        expect(data.length).to.be.eql(3);
        done();
      })
    });
  });
  describe('b_getAccountsTest', () => {
    it('should call getAccount successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      instance.getAccounts(accessId, (error, data, response) => {
        expect(error).to.be(null);
        expect(data).not.to.be(null);
        expect(data.length).to.be.eql(3);

        let account = data[0];
        assertBankAccount(account);
        DataFactory.getInstance().setAccountId(account.id);

        account = data[1];
        assertBankAccount(account);
        DataFactory.getInstance().setTransferToAccount(account);

        account = data[2];
        assertBankAccount(account);
        DataFactory.getInstance().setPortfolioId(account.id);

        done();
      })
    });
  });
  describe('c_getAccountTest', () => {
    it('should call getAccount successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      let accountId = DataFactory.getInstance().getAccountId();
      instance.getAccount(accessId, accountId, (error, data, response) => {
        expect(error).to.be(null);
        assertBankAccount(data);
        done();
      })
    });
  });
  describe('d_updateAccountTest', () => {
    it('should call updateAccount successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      let accountId = DataFactory.getInstance().getAccountId();
      let name = "Test Account Name";
      instance.updateAccount(accessId, accountId, name, (error, data, response) => {
        expect(error).to.be(null);
        assertBankAccount(data);
        expect(data.userDefinedName).to.be.eql(name);
        done();
      })
    });
  });
  describe('f_deleteAccountTest', () => {
    it('should call deleteAccount successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      let accountId = DataFactory.getInstance().getAccountId();
      instance.deleteAccount(accessId, accountId, (error, data, response) => {
        expect(error).to.be(null);
        instance.getAccounts(accessId, (error, data, response) => {
          expect(data).not.to.be(null);
          expect(data.length).to.be.eql(2);
          let account = data[0];
          assertBankAccount(account);
          expect(account.id).not.to.be.eql(accountId);
          done();
        });
      })
    });
  });
});

