import * as SwaggerJsClient from '../../src/index';
import expect from 'expect.js'
import DataFactory from '../data/DataFactory';

describe('TransactionPatternApi', function ()  {

  function assertTransactionEquals(expected, actual) {
    expect(actual).not.to.be(null);
    expect(expected).not.to.be(null);
    expect(actual.id).not.to.be(null);
    expect(actual.accountNumber).to.be.eql(expected.accountNumber);
    expect(expected.amount).not.to.be(null);
    expect(actual.amount).not.to.be(null);
    expect(actual.amount.currency).to.be.eql(expected.amount.currency);
    expect(actual.amount.value).to.be.eql(expected.amount.value);
    expect(actual.bankCode).to.be.eql(expected.bankCode);
    expect(actual.cycle).to.be.eql(expected.cycle);
    expect(actual.day).to.be.eql(expected.day);
    expect(actual.kind).to.be.eql(expected.kind);
    expect(actual.origin).to.be.eql(expected.origin);
    expect(actual.relatedAccountOwner).to.be.eql(expected.relatedAccountOwner);
    expect(actual.state).to.be.eql(expected.state);
  }

  let instance;
  // Increase the timeout, because some processes (e.g. registration) can take
  // more time than the default 2000 ms.
  this.timeout(10000);

  before('Before TransactionPatternApi', (done) => {
    instance = new SwaggerJsClient.TransactionPatternApi();
    DataFactory.getInstance().applyConfig(instance.apiClient);
    DataFactory.getInstance().setUpAccount((error, data, response) => {
      expect(error).to.be(null);
      done();
    });
  });

  after('After TransactionPatternApi', (done) => {
    DataFactory.getInstance().tearDownAccess((error, data, response) => {
      expect(error).to.be(null);
      done();
    })
  });

  describe('a_postTransactionPatternTest', () =>  {
    it('should call postTransactionPattern successfully', (done) =>  {
      let accessId = DataFactory.getInstance().getAccessId();
      let accountId = DataFactory.getInstance().getAccountId();
      let transactionPattern = DataFactory.getInstance().createTransactionPattern();
      instance.postTransactionPattern(accessId, accountId, transactionPattern, (error, data, response) => {
        expect(error).to.be(null);
        assertTransactionEquals(transactionPattern, data);
        DataFactory.getInstance().setTransactionPatternId(data.id);
        done();
      });
    });
  });
  describe('b_listTransactionPatternsTest', () =>  {
    it('should call listTransactionPatterns successfully', (done) =>  {
      let accessId = DataFactory.getInstance().getAccessId();
      let accountId = DataFactory.getInstance().getAccountId();
      instance.listTransactionPatterns(accessId, accountId, (error, data, response) => {
        expect(error).to.be(null);
        expect(data).not.to.be(null);
        expect(data.length).not.to.be.eql(0);
        let pattern = data[0];
        expect(pattern).not.to.be(null);
        done();
      });
    });
  });
  describe('c_getTransactionPatternTest', () =>  {
    it('should call getTransactionPattern successfully', (done) =>  {
      let patternId = DataFactory.getInstance().getTransactionPatternId();
      let accessId = DataFactory.getInstance().getAccessId();
      let accountId = DataFactory.getInstance().getAccountId();
      instance.getTransactionPattern(accessId, accountId, patternId, (error, data, response) => {
        expect(error).to.be(null);
        expect(data).not.to.be(null);
        expect(data.id).to.be.eql(patternId);
        let transactionPattern = DataFactory.getInstance().createTransactionPattern();
        assertTransactionEquals(transactionPattern, data);
        done();
      });
    });
  });
  describe('d_activateTransactionPatternTest', () =>  {
    it('should call activateTransactionPattern successfully', (done) =>  {
      let patternId = DataFactory.getInstance().getTransactionPatternId();
      let accessId = DataFactory.getInstance().getAccessId();
      let accountId = DataFactory.getInstance().getAccountId();
      let activated = false;
      instance.activateTransactionPattern(accessId, accountId, patternId, activated.toString(), (error, data, response) => {
        expect(error).to.be(null);
        let transactionPattern = DataFactory.getInstance().createTransactionPattern();
        transactionPattern.state = SwaggerJsClient.TransactionPattern.StateEnum.INACTIVE;
        assertTransactionEquals(transactionPattern, data);
        done();
      });
    });
  });
  describe('e_deleteTransactionPatternTest', () =>  {
    it('should call deleteTransactionPattern successfully', (done) =>  {
      let patternId = DataFactory.getInstance().getTransactionPatternId();
      let accessId = DataFactory.getInstance().getAccessId();
      let accountId = DataFactory.getInstance().getAccountId();
      instance.deleteTransactionPattern(accessId, accountId, patternId, (error, data, response) => {
        expect(error).to.be(null);
        done();
      });
    });
  });
});

