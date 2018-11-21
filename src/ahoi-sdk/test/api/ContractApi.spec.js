import * as SwaggerJsClient from '../../src/index';
import expect from 'expect.js'
import DataFactory from '../data/DataFactory';

describe('ContractApi', function () {

    let instance;
    // Increase the timeout, because some processes (e.g. registration) can take
    // more time than the default 2000 ms.
    this.timeout(10000);

    before('Before ContractApi', (done) => {
        instance = new SwaggerJsClient.ContractApi();
        DataFactory.getInstance().applyConfig(instance.apiClient);
        // Only continue as soon as the registration setup is finished.
        DataFactory.getInstance().setUpRegistration((error, data, response) => {
            expect(error).to.be(null);
            done();
        });
    });

    describe('a_getContractListTest', () => {
        it('should call getContractList successfully', (done) => {
          instance.getContractList((error, data, response) => {
              //contract feature is not active by default => we expect a empty list
              expect(data).not.to.be(null);
              done();
            });
        });
    });
});