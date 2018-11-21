import * as SwaggerJsClient from '../../src/index';
import expect from 'expect.js'
import DataFactory from '../data/DataFactory';

describe('TransactionApi', function () {

  let instance;
  // Increase the timeout, because some processes (e.g. registration) can take
  // more time than the default 2000 ms.
  this.timeout(10000);

  before('Before TransactionApi', (done) => {
    instance = new SwaggerJsClient.TransactionApi();
    DataFactory.getInstance().applyConfig(instance.apiClient);
    DataFactory.getInstance().setUpAccount((error, data, response) => {
      expect(error).to.be(null);
      DataFactory.getInstance().setUpTransactionPattern((error, data, response) => {
        expect(error).to.be(null);
        done();
      });
    });
  });

  after('After TransactionApi', (done) => {
    DataFactory.getInstance().tearDownAccess((error, data, response) => {
      expect(error).to.be(null);
      done();
    })
  });

  describe('a_listTransactionsForPatternTest', () => {
    it('should call listTransactionsForPattern successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      let accountId = DataFactory.getInstance().getAccountId();
      let patternId = DataFactory.getInstance().getTransactionPatternId();
      let opts = {
        'maxAge': null,
        'limit': null,
        'offset': null,
        'from': null,
        'to': null
      };
      instance.listTransactionsForPattern(accessId, accountId, patternId, opts, (error, data, response) => {
        expect(error).to.be(null);
        expect(data).not.to.be(null);
        expect(data.length).to.be.eql(0);
        done();
      });
    });
  });
  describe('b_listTransactionsTest', () => {
    it('should call listTransactions successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      let accountId = DataFactory.getInstance().getAccountId();
      let opts = {
        'maxAge': null,
        'limit': 1,
        'offset': null,
        'from': null,
        'to': null
      };
      instance.listTransactions(accessId, accountId, opts, (error, data, response) => {
        expect(error).to.be(null);
        expect(data).not.to.be(null);
        expect(data.length).to.be.eql(1);
        let transaction = data[0];
        expect(transaction).not.to.be(null);
        expect(transaction).to.be.an(SwaggerJsClient.GiroTransaction);
        DataFactory.getInstance().setTransactionId(transaction.id);
        done();
      });
    });
  });
  describe('c_listTransactionsWithRefreshTest', () => {
    it('should call listTransactions with data refresh successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      let accountId = DataFactory.getInstance().getAccountId();
      let opts = {
        'maxAge': 0,
        'limit': 1,
        'offset': null,
        'from': null,
        'to': null
      };
      instance.listTransactions(accessId, accountId, opts, (error, data, response) => {
        expect(error).to.be(null);
        expect(data).not.to.be(null);
        expect(data.length).to.be.eql(1);
        let transaction = data[0];
        expect(transaction).not.to.be(null);
        expect(transaction).to.be.an(SwaggerJsClient.GiroTransaction);
        DataFactory.getInstance().setTransactionId(transaction.id);
        done();
      });
    });
  });
  describe('d_getTransactionTest', () => {
    it('should call getTransaction successfully', (done) => {
      let transactionId = DataFactory.getInstance().getTransactionId();
      let accessId = DataFactory.getInstance().getAccessId();
      let accountId = DataFactory.getInstance().getAccountId();
      instance.getTransaction(accessId, accountId, transactionId, (error, data, response) => {
        expect(error).to.be(null);
        expect(data).not.to.be(null);
        expect(data.id).to.be.eql(transactionId);
        expect(data).to.be.an(SwaggerJsClient.GiroTransaction);
        done();
      });
    });
  });
});

