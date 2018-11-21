import * as SwaggerJsClient from '../../src/index';
import expect from 'expect.js'
import DataFactory from '../data/DataFactory';

describe('TANSchemesApi', function () {

  let instance;
  // Increase the timeout, because some processes (e.g. registration) can take
  // more time than the default 2000 ms.
  this.timeout(10000);

  before('Before TANSchemesApi', (done) => {
    instance = new SwaggerJsClient.TANSchemesApi();
    DataFactory.getInstance().applyConfig(instance.apiClient);
    DataFactory.getInstance().setUpAccess((error, data, response) => {
      expect(error).to.be(null);
      done();
    });
  });

  after('Before TANSchemesApi', (done) => {
    DataFactory.getInstance().tearDownAccess((error, data, response) => {
      expect(error).to.be(null);
      done();
    })
  });

  describe('a_getTanSchemesTest', () => {
    it('should call getTanSchemes successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      let maxAge = null;
      instance.getTanSchemes(accessId, maxAge, (error, data, response) => {
        expect(error).to.be(null);
        expect(data).not.to.be(null);
        expect(data.length).not.to.be.eql(0);
        let scheme = data[0];
        expect(scheme).not.to.be(null);
        done();
      });
    });
  });
  describe('b_getCurrentTanSchemeTest', () => {
    it('should call getCurrentTanScheme successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      instance.getCurrentTanScheme(accessId, (error, data, response) => {
        expect(error).to.be(null);
        expect(data).not.to.be(null);
        expect(data.name).not.to.be(null);
        expect(data.schemeId).not.to.be(null);
        expect(data.tanMediaList).not.to.be(null);
        expect(data.tanMediaList.length).not.to.be.eql(0);
        DataFactory.getInstance().setTanScheme(data);
        DataFactory.getInstance().setTanMedia(data.tanMediaList[0]);
        done();
      });
    });
  });
  describe('c_putCurrentTanSchemeTest', () => {
    it('should call putCurrentTanScheme successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      let tanScheme = DataFactory.getInstance().getTanScheme();
      let tanSchemeId = tanScheme.schemeId;
      instance.putCurrentTanScheme(accessId, tanSchemeId, (error, data, response) => {
        expect(error).to.be(null);
        expect(data).not.to.be(null);

        instance.getCurrentTanScheme(accessId, (error, data, response) => {
          expect(error).to.be(null);
          expect(data).not.to.be(null);
          expect(data.name).to.be.eql(tanScheme.name);
          expect(data.schemeId).to.be.eql(tanScheme.schemeId);
          done();
        });
      });
    });
  });
  describe('d_getCurrentTanMediaTest', () => {
    it('should call getCurrentTanMedia successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      instance.getCurrentTanMedia(accessId, (error, data, response) => {
        expect(error).to.be(null);
        expect(data).not.to.be(null);
        expect(data.tanMediaId).not.to.be(null);
        expect(data.tanMediaId).not.to.be.eql(0);
        expect(data.name).not.to.be(null);
        done();
      });
    });
  });
  describe('e_putCurrentTanMediaTest', () => {
    it('should call putCurrentTanMedia successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      let tanMedia = DataFactory.getInstance().getTanMedia();
      let tanMediaId = tanMedia.tanMediaId;
      expect(tanMediaId).not.to.be.eql(0);
      instance.putCurrentTanMedia(accessId, tanMediaId, (error, data, response) => {
        expect(error).to.be(null);
        expect(data).not.to.be(null);

        instance.getCurrentTanMedia(accessId, (error, data, response) => {
          expect(error).to.be(null);
          expect(data).not.to.be(null);
          expect(data.description).to.be.eql(tanMedia.description);
          expect(data.name).to.be.eql(tanMedia.name);
          expect(data.tanMediaId).to.be.eql(tanMedia.tanMediaId);
          done();
        });
      });
    });
  });
});

