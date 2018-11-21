import {OAuthClient, CryptoUtils} from '../../src/index';
import expect from 'expect.js'
import DataFactory from '../data/DataFactory';

describe('OAuthClient', function() {

  function assertToken(token) {
    let tokens = token.split('.');
    let header = JSON.parse(CryptoUtils.decodeFromUrlSafeBase64(tokens[0]));
    let payload = JSON.parse(CryptoUtils.decodeFromUrlSafeBase64(tokens[1]));

    expect(header.alg).to.be.eql('HS256');
    expect(header.typ).to.be.eql('JWT');

    expect(payload.client_id).to.be.eql(oAuthData.clientId);
    expect(payload.scope.length).to.be.greaterThan(0);
  }

  let instance = null;
  let oAuthData;

  before(() => {
    oAuthData = DataFactory.getInstance().getOAuthData();
    instance = new OAuthClient(oAuthData.url);
    instance.setClientCredentials(oAuthData.clientId, oAuthData.clientSecret);
    instance.setAppSecret(oAuthData.appSecretKey, oAuthData.appSecretIv);
  });

  describe('OAuthClient', () => {
    describe('getAccessToken Anon', () => {
      it('should call getAccessToken successfully', (done) => {
        instance.getAccessToken((accessToken) => {
          expect(accessToken).not.to.be(null);
          assertToken(accessToken);
          done();
        });
      });
    });
  });

  describe('OAuthClient', () => {
    describe('getAccessToken', () => {
      it('should call getAccessToken with installationId successfully', (done) => {
        instance.setInstallationId(oAuthData.installationId);
        instance.getAccessToken((accessToken) => {
          expect(accessToken).not.to.be(null);
          assertToken(accessToken);
          done();
        });
      });
    });
  });
});


