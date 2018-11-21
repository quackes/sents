import * as SwaggerJsClient from '../../src/index';
import expect from 'expect.js'
import DataFactory from '../data/DataFactory';

describe('ForecastApi', function () {

  function assertForecast(expectedAccountId, actualForecast) {
    expect(actualForecast).not.to.be(null);
    expect(actualForecast.accountId).to.be.eql(expectedAccountId);
    expect(actualForecast.forecastBalance).not.to.be(null);
    expect(actualForecast.forecastBalance.date).not.to.be(null);
    expect(actualForecast.forecastBalance.amount).not.to.be(null);
    expect(actualForecast.forecastBalance.amount.currency).not.to.be(null);
    expect(actualForecast.forecastBalance.amount.value).not.to.be(null);
  }

  let instance;
  // Increase the timeout, because some processes (e.g. registration) can take
  // more time than the default 2000 ms.
  this.timeout(10000);

  before('Before ForecastApi', (done) => {
    instance = new SwaggerJsClient.ForecastApi();
    DataFactory.getInstance().applyConfig(instance.apiClient);
    DataFactory.getInstance().setUpAccount((error, data, response) => {
      expect(error).to.be(null);
      done();
    });
  });

  after('After ForecastApi', (done) => {
    DataFactory.getInstance().tearDownAccess((error, data, response) => {
      expect(error).to.be(null);
      done();
    })
  });

  describe('getForecast', () => {
    it('should call getForecast successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      let accountId = DataFactory.getInstance().getAccountId();
      instance.getForecast(accessId, accountId, (error, data, response) => {
        expect(error).to.be(null);
        assertForecast(accountId, data);
        done();
      })
    });
  });
  describe('getForecastTransactions', () => {
    it('should call getForecastTransactions successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      let accountId = DataFactory.getInstance().getAccountId();
      instance.getForecastTransactions(accessId, accountId, (error, data, response) => {
        expect(error).to.be(null);
        assertForecast(accountId, data);
        expect(data.transactions).not.to.be(null);
        done();
      })
    });
  });
});
