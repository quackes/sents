import {RegistrationApi, SessionSecurityHelper} from '../../src/index';
import expect from 'expect.js'
import DataFactory from '../data/DataFactory';

describe('SessionSecurityHelper', function () {

  let registrationApi;
  let sessionSecurityHelper;

  beforeEach(() => {
    registrationApi = new RegistrationApi();
    DataFactory.getInstance().applyConfig(registrationApi.apiClient);
    sessionSecurityHelper = new SessionSecurityHelper(registrationApi);
  });


  describe('SessionSecurityHelper', () => {
    describe('fetchPublicKey', () => {
      it('should call fetchPublicKey successfully', (done) => {
        sessionSecurityHelper.fetchPublicKey((data) => {
          expect(data).not.to.be(null);
          expect(data.keyId).to.match(/[a-zA-Z0-9_-]{36}/);
          done();
        });
      });
    });
  });

  describe('SessionSecurityHelper', () => {
    describe('createSessionSecurityHeader', () => {
      it('should call createSessionSecurityHeader successfully', (done) => {
        let headerParams = {};
        sessionSecurityHelper.applySessionSecurity(headerParams, () => {
          expect(headerParams).not.to.be(null);
          expect(Object.keys(headerParams).length).to.be(1);
          done();
        });
      });
    });
  });
});
