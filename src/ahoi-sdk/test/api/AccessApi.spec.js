import * as SwaggerJsClient from '../../src/index';
import expect from 'expect.js'
import DataFactory from '../data/DataFactory';

describe('AccessApi', function () {

  function assertAccessEquals(expected, response) {
    expect(expected).not.to.be(null);
    expect(response).not.to.be(null);
    expect(response.id).not.to.be(null);
    expect(response).to.be.an(SwaggerJsClient.BankAccess);
    expect(response.providerId).to.be.eql(expected.providerId);
    expect(response.accessFields).to.be(undefined);
  }

  let instance;
  // Increase the timeout, because some processes (e.g. registration) can take
  // more time than the default 2000 ms.
  this.timeout(10000);

  before('Before AccessApi', (done) => {
    instance = new SwaggerJsClient.AccessApi();
    DataFactory.getInstance().applyConfig(instance.apiClient);
    DataFactory.getInstance().setUpProvider((error, data, response) => {
      expect(error).to.be(null);
      done();
    });
  });

  describe('a01_postAccessTest_failure', () => {
    it('should fail calling postAccess', (done) => {
      let access = DataFactory.getInstance().createAccess();
      access.accessFields.PIN = 'failed!';
      instance.postAccess(access, (error, data, response) => {
        // TODO: Check exception message?
        expect(error).not.to.be(null);
        done();
      });
    });
  });
  describe('a02_postAccessTest_success', () => {
    it('should call postAccess successfully', (done) => {
      let access = DataFactory.getInstance().createAccess();
      instance.postAccess(access, (error, data, response) => {
        assertAccessEquals(access, data);
        DataFactory.getInstance().setAccessId(data.id);
        done();
      });
    });
  });
  describe('b_putAccessTest', () => {
    it('should call putAccess successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      let access = DataFactory.getInstance().createAccess();
      access.id = accessId;
      instance.putAccess(accessId, access, (error, data, response) => {
        assertAccessEquals(access, data);
        done();
      });
    });
  });
  describe('c_getAccessTest', () => {
    it('should call getAccess successfully', (done) => {
      let accessId = DataFactory.getInstance().getAccessId();
      instance.getAccess(accessId, (error, data, response) => {
        let access = DataFactory.getInstance().createAccess();
        assertAccessEquals(access, data);
        done();
      });
    });
  });
  describe('d_getAccessesTest', () => {
    it('should call getAccesses successfully', (done) => {
      instance.getAccesses((error, data, response) => {
        expect(data).not.to.be(null);
        expect(data.length).to.be.eql(1);
        let access = DataFactory.getInstance().createAccess();
        assertAccessEquals(access, data[0]);
        done();
      });
    });
  });
  describe('e_deleteAccessTest', () => {
    it('should call deleteAccess successfully', function (done) {
      let accessId = DataFactory.getInstance().getAccessId();
      instance.deleteAccess(accessId, (error, data, response) => {
        expect(response.status).to.be.eql(204);
        DataFactory.getInstance().clearInstallationId();
        done();
      });
    });
  });
});

