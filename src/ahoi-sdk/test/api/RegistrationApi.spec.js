import * as SwaggerJsClient from '../../src/index';
import expect from 'expect.js'
import DataFactory from '../data/DataFactory';

describe('RegistrationApi', function () {

  let instance;
  // Increase the timeout, because some processes (e.g. registration) can take
  // more time than the default 2000 ms.
  this.timeout(10000);

  before('Before RegistrationApi', () => {
    instance = new SwaggerJsClient.RegistrationApi();
    DataFactory.getInstance().applyConfig(instance.apiClient);
    // Make sure that the previous installation setup is cleared.
    DataFactory.getInstance().clearInstallationId();
  });

  describe('01_getJsonWebKey', () => {
    it('should call getJsonWebKey successfully', (done) => {
      //uncomment below and update the code to test getJsonWebKey
      instance.getJsonWebKey((error, data, response) => {
        expect(error).to.be(null);
        expect(data).to.be.an(SwaggerJsClient.JwkJwkPublicKey);
        expect(data.kty).to.be('RSA');
        expect(data.alg).to.be('RSA-OAEP');
        done();
      });
    });
  });
  describe('02_getRegistrationPublicKey', () => {
    it('should call getRegistrationPublicKey successfully', (done) => {
      //uncomment below and update the code to test getRegistrationPublicKey
      instance.getRegistrationPublicKey((error, data, response) => {
        expect(error).to.be(null);
        expect(data).to.be.an(SwaggerJsClient.RegistrationPublicKey);
        expect(data.publicKey.specification).to.be('RSA_2048_SHA1');
        done();
      });
    });
  });
  describe('03_register', () => {
    it('should call register successfully', (done) => {
      //uncomment below and update the code to test register
      instance.register((error, data, response) => {
        expect(error).to.be(null);
        expect(data).to.be.an(SwaggerJsClient.RegistrationResponse);
        expect(data.installation).to.match(/[a-zA-Z0-9_-]/);
        DataFactory.getInstance().setInstallationId(data.installation);
        done();
      });
    });
  });
});
