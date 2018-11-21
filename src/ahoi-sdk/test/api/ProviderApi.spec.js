import * as SwaggerJsClient from '../../src/index';
import expect from 'expect.js'
import DataFactory from '../data/DataFactory';

describe('ProviderApi', function () {

  let instance;
  // Increase the timeout, because some processes (e.g. registration) can take
  // more time than the default 2000 ms.
  this.timeout(10000);

  before('Before ProviderApi', (done) => {
    instance = new SwaggerJsClient.ProviderApi();
    DataFactory.getInstance().applyConfig(instance.apiClient);
    // Only continue as soon as the registration setup is finished.
    DataFactory.getInstance().setUpRegistration((error, data, response) => {
      expect(error).to.be(null);
      done();
    });
  });

  describe('a_getProviderTest', () => {
    it('should call getProvider successfully', (done) => {
      let bankCode = DataFactory.getInstance().getBankCode();
      let opts = {
        bankCode: bankCode,
        supported: true,
        query: null
      };
      instance.getProviders(opts, (error, data, response) => {
        expect(data).not.to.be(null);
        expect(data.length).to.be.eql(1);
        let provider = data[0];
        expect(provider).not.to.be(null);
        expect(provider).to.be.an(SwaggerJsClient.Provider);
        expect(provider).to.be.an(SwaggerJsClient.BankProvider);
        expect(provider.bankCode).to.be.eql(bankCode);
        expect(provider.supported).to.be(true);
        DataFactory.getInstance().setProviderId(provider.id);
        done();
      });
    });
  });
  describe('b_getProvidersTest', () => {
    it('should call getProviders successfully', (done) => {
      let providerId = DataFactory.getInstance().getProviderId();
      instance.getProvider(providerId, (error, data, response) => {
        expect(data).not.to.be(null);
        expect(data).to.be.an(SwaggerJsClient.BankProvider);
        expect(providerId).to.be.eql(data.id);
        expect(data.bankCode).to.be.eql(DataFactory.getInstance().getBankCode());
        done();
      });
    });
  });
});
