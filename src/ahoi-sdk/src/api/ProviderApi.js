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
import Provider from '../model/Provider';

/**
* Provider service.
* @module api/ProviderApi
* @version 2.1.0
*/
export default class ProviderApi {

    /**
    * Constructs a new ProviderApi. 
    * @alias module:api/ProviderApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getProvider operation.
     * @callback module:api/ProviderApi~getProviderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Provider} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider
     * Retrieve a single provider identified by **providerId**.
     * @param {String} providerId The **providerId** to retrieve
     * @param {module:api/ProviderApi~getProviderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Provider}
     */
    getProvider(providerId, callback) {
      let postBody = null;

      // verify the required parameter 'providerId' is set
      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling getProvider");
      }


      let pathParams = {
        'providerId': providerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Provider;

      return this.apiClient.callApi(
        '/providers/{providerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviders operation.
     * @callback module:api/ProviderApi~getProvidersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Provider>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List bank providers
     * Retrieve a list of bank providers. A provider-**id** is necessary to create an _access_. To retrieve the necessary access fields, you need to query the specific &#x60;provider/{providerId}&#x60;. For performance reasons they are kept separate. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.bankCode Optional — if length &#x3D; 8, the response will also contain data describing             the fields required for account setup
     * @param {Boolean} opts.supported Optional — response should only contain providers supported for account             setup via this API
     * @param {String} opts.query Optional — search parameters for BankCode, BIC, Location, Name. Will be ignored             if the bankCode query parameter is set.
     * @param {module:api/ProviderApi~getProvidersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Provider>}
     */
    getProviders(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'bankCode': opts['bankCode'],
        'supported': opts['supported'],
        'query': opts['query']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Provider];

      return this.apiClient.callApi(
        '/providers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}