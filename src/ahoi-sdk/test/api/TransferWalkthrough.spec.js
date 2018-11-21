import * as SwaggerJsClient from '../../src/index';
import expect from 'expect.js'
import DataFactory from '../data/DataFactory';

describe('TransferWalkthroughTest', function () {
    let transferApi;
    let taskApi;
    // Increase the timeout, because some processes (e.g. registration) can take
    // more time than the default 2000 ms.
    this.timeout(10000);

    function pollTaskWhileStateIsInList(taskId, stateList, done) {
        taskApi.getTask(taskId, (error, task, response) => {
            expect(error).to.be(null);
            expect(task).to.be.an(SwaggerJsClient.Task);

            if (stateList.indexOf(task.state) > -1) {
                //keep polling
                pollTaskWhileStateIsInList(task.id, stateList, done);
            } else {
                //update teask object
                DataFactory.getInstance().setTask(task);
                done()
            };
        });
    };

    before('Before TransferWalkthroughTest', (done) => {
        transferApi = new SwaggerJsClient.TransferApi();
        taskApi = new SwaggerJsClient.TaskApi();
        DataFactory.getInstance().applyConfig(transferApi.apiClient);
        DataFactory.getInstance().applyConfig(taskApi.apiClient);
        DataFactory.getInstance().setUpAccount((error, data, response) => {
            expect(error).to.be(null);
            DataFactory.getInstance().setUpTanSchemes((error, data, response) => {
                expect(error).to.be(null);
                done();
            });
        });
    });

    after('After TransferWalkthroughTest', (done) => {
        DataFactory.getInstance().tearDownAccess((error, data, response) => {
            expect(error).to.be(null);
            done();
        })
    });

    describe('a_sendTransfer', function () {
        it('should call postTransfer successfully', function (done) {
            let accessId = DataFactory.getInstance().getAccessId();
            let accountId = DataFactory.getInstance().getAccountId();
            let transfer = DataFactory.getInstance().createTransfer();
            transferApi.postTransfer(accessId, accountId, transfer, (error, task, response) => {
                expect(error).to.be(null);
                expect(task).to.be.an(SwaggerJsClient.Task);
                DataFactory.getInstance().setTask(task);
                done()
            });
        });
    });

    describe('b_waitForAuthorizationPending', function () {
        it('should poll Task while Task is in state INITIAL or UNKNOWN', function (done) {
            let task = DataFactory.getInstance().getTask();
            pollTaskWhileStateIsInList(task.id, ['INITIAL', 'UNKNOWN'], done);
        });
    });

    describe('c_getChallenge', function () {
        it('should call getChallenge successfully', function (done) {
            let task = DataFactory.getInstance().getTask();
            expect(task.state).equal('AUTHORIZATION_PENDING');
            taskApi.getChallenge(task.id, (error, challenge, response) => {
                expect(error).to.be(null);
                expect(challenge).to.be.an(SwaggerJsClient.Challenge);
                DataFactory.getInstance().setChallenge(challenge);
                done()
            });
        });
    });

    describe('d_post authorization', function () {
        it (' should call postChallengeResponse successfully', function (done) {
            let task = DataFactory.getInstance().getTask();
            let challenge = DataFactory.getInstance().getChallenge();
            expect(challenge).to.be.an(SwaggerJsClient.Challenge);

            let tanResponse = DataFactory.getInstance().extractTanChallengResponse(challenge.challenge);
            expect(tanResponse.length === 6).to.be(true);
            let challengeResponse = new SwaggerJsClient.TanChallengeResponse()
            challengeResponse.response = tanResponse;

            //post authorization
            taskApi.postChallengeResponse(task.id, challengeResponse, (error, task, response) => {
                expect(error).to.be(null);
                expect(task).to.be.an(SwaggerJsClient.Task);
                done()
            });
        })

    });

    describe('e_waitForTaskDone', function () {
        it('should poll Task while Task is in state AUTHORIZATION_PENDING', function (done) {
            let task = DataFactory.getInstance().getTask();
            pollTaskWhileStateIsInList(task.id, ['AUTHORIZATION_PENDING'], done);
        });
    });


    describe('f_checkIfTaskDone', function () {
        it('Task should be DONE', function (done) {
            let task = DataFactory.getInstance().getTask();
            expect(task.state).equal('DONE');
            done()
        });
    });
});