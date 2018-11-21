/**
 * 
 * [AHOI cookbook](/ahoi/docs/cookbook/index.html)  [Data Privacy](/sandboxmanager/#/privacy)  [Terms of Service](/sandboxmanager/#/terms)  [Imprint](https://sparkassen-hub.com/impressum/)  &copy; 2016&dash;2017 Starfinanz - Ein Unternehmen der Finanz Informatik
 *
 * OpenAPI spec version: 2.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Transfer from '../model/Transfer';
import TransferTask from '../model/TransferTask';

/**
* Transfer service.
* @module api/TransferApi
* @version 2.1.0
*/
export default class TransferApi {

    /**
    * Constructs a new TransferApi. 
    * @alias module:api/TransferApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the postTransfer operation.
     * @callback module:api/TransferApi~postTransferCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferTask} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new transfer
     * The transfer represents a money  transfer from the account identified by its id to another bank account.  **Please note:** Exception from the norm. This POST request will not return  the two header fields X-Id and Location. Also, the returned JSON document  does not represent the transfer entity, but a temporary placeholder.  The transfer is processed asynchronous and needs a message URL zu be configured  to report back the tan challenge and when it is finished.
     * @param {String} accessId 
     * @param {String} accountId The **id** for the account.
     * @param {module:model/Transfer} transfer transfer to create
     * @param {module:api/TransferApi~postTransferCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransferTask}
     */
    postTransfer(accessId, accountId, transfer, callback) {
      let postBody = transfer;

      // verify the required parameter 'accessId' is set
      if (accessId === undefined || accessId === null) {
        throw new Error("Missing the required parameter 'accessId' when calling postTransfer");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling postTransfer");
      }

      // verify the required parameter 'transfer' is set
      if (transfer === undefined || transfer === null) {
        throw new Error("Missing the required parameter 'transfer' when calling postTransfer");
      }


      let pathParams = {
        'accessId': accessId,
        'accountId': accountId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TransferTask;

      return this.apiClient.callApi(
        '/accesses/{accessId}/accounts/{accountId}/transfers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
