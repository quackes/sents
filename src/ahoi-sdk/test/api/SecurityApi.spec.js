import * as SwaggerJsClient from '../../src/index';
import expect from 'expect.js'
import DataFactory from '../data/DataFactory';

describe('SecurityApi', function () {
    let securityId;
    let instance;
    // Increase the timeout, because some processes (e.g. registration) can take
    // more time than the default 2000 ms.
    this.timeout(10000);

    before('Before SecurityApi', (done) => {
        instance = new SwaggerJsClient.SecurityApi();
        DataFactory.getInstance().applyConfig(instance.apiClient);
        DataFactory.getInstance().setUpAccount((error, data, response) => {
            expect(error).to.be(null);
            DataFactory.getInstance().setUpTransactionPattern((error, data, response) => {
                expect(error).to.be(null);
                done();
            });
        });
    });

    after('After SecurityApi', (done) => {
        DataFactory.getInstance().tearDownAccess((error, data, response) => {
            expect(error).to.be(null);
            done();
        })
    });

    describe('a_listSecuritiesTest', () => {
        it('should call listSecurities successfully', function (done) {
            let accessId = DataFactory.getInstance().getAccessId();
            let portfolioId = DataFactory.getInstance().getPortfolioId();
            instance.listSecurities(accessId, portfolioId, null, (error, data, response) => {
                    expect(error).to.be(null);
                expect(data).not.to.be(null);
                let security = data[0];
                expect(security).not.to.be(null);
                expect(security).to.be.an(SwaggerJsClient.Security);
                securityId = security.id;
                done();
            })
        });
    });

    describe('b_getSecurityTest', () => {
        it('should call getSecurity successfully', function(done) {
            let accessId = DataFactory.getInstance().getAccessId();
            let portfolioId = DataFactory.getInstance().getPortfolioId();
            instance.getSecurity(accessId, portfolioId, securityId, (error, data, response) => {
                expect(error).to.be(null);
                expect(data).not.to.be(null);
                expect(data).to.be.an(SwaggerJsClient.Security);
                done();
            })
        });
    });
});