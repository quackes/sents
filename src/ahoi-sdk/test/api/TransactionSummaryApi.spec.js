import * as SwaggerJsClient from '../../src/index';
import expect from 'expect.js'
import DataFactory from '../data/DataFactory';

describe('TransactionSummaryApi', function () {

  let instance;
  // Increase the timeout, because some processes (e.g. registration) can take
  // more time than the default 2000 ms.
  this.timeout(10000);

  before('Before TransactionSummaryApi', (done) => {
    instance = new SwaggerJsClient.TransactionSummaryApi();
    DataFactory.getInstance().applyConfig(instance.apiClient);
    DataFactory.getInstance().setUpAccount((error, data, response) => {
      expect(error).to.be(null);
      done();
    });
  });

  after('After TransactionSummaryApi', (done) => {
    DataFactory.getInstance().tearDownAccess((error, data, response) => {
      expect(error).to.be(null);
      done();
    })
  });

  describe('listSummaryTest', () => {
    it('should call listSummary successfully', (done) => {
      let accountId = DataFactory.getInstance().getAccountId();
      let accessId = DataFactory.getInstance().getAccessId();
      let opts = {
        'limit': null,
        'offset': null,
        'from': null,
        'to': null
      };
      instance.listSummary(accessId, accountId, opts, (error, data, response) => {
        expect(error).to.be(null);
        expect(data.length).not.to.be.eql(0);
        let summary = data[0];
        expect(summary).not.to.be(null);
        expect(summary.accountId).to.be.eql(accountId);
        done();
      });
    });
  });
});

