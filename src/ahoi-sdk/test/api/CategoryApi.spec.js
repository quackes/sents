import * as SwaggerJsClient from '../../src/index';
import expect from 'expect.js'
import DataFactory from '../data/DataFactory';

describe('CategoryApi', function () {

    let instance;
    // Increase the timeout, because some processes (e.g. registration) can take
    // more time than the default 2000 ms.
    this.timeout(10000);

    before('Before CategoryApi', (done) => {
        instance = new SwaggerJsClient.CategoryApi();
        DataFactory.getInstance().applyConfig(instance.apiClient);
        // Only continue as soon as the registration setup is finished.
        DataFactory.getInstance().setUpRegistration((error, data, response) => {
            expect(error).to.be(null);
            done();
        });
    });
    describe('a_getCategoriesTest', () => {
        it('should call getCategories successfully', (done) => {
            instance.getCategories("FINLYTICS", (error, data, response) => {
                expect(data).not.to.be(null);
                let category = data[0];
                expect(category).not.to.be(null);
                expect(category).to.be.an(SwaggerJsClient.Category);
                done();
            });
        });
    });
});