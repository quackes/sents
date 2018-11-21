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
import Access from '../model/Access';
import TanMedia from '../model/TanMedia';
import TanScheme from '../model/TanScheme';

/**
* TANSchemes service.
* @module api/TANSchemesApi
* @version 2.1.0
*/
export default class TANSchemesApi {

    /**
    * Constructs a new TANSchemesApi. 
    * @alias module:api/TANSchemesApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCurrentTanMedia operation.
     * @callback module:api/TANSchemesApi~getCurrentTanMediaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TanMedia} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current TAN media.
     * Returns the currently selected TAN media for the access.
     * @param {String} accessId The **accessId** for which to retrieve the current TAN media.
     * @param {module:api/TANSchemesApi~getCurrentTanMediaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TanMedia}
     */
    getCurrentTanMedia(accessId, callback) {
      let postBody = null;

      // verify the required parameter 'accessId' is set
      if (accessId === undefined || accessId === null) {
        throw new Error("Missing the required parameter 'accessId' when calling getCurrentTanMedia");
      }


      let pathParams = {
        'accessId': accessId
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
      let returnType = TanMedia;

      return this.apiClient.callApi(
        '/accesses/{accessId}/currenttanmedia', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCurrentTanScheme operation.
     * @callback module:api/TANSchemesApi~getCurrentTanSchemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TanScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current TAN scheme.
     * Returns the currently selected TAN scheme for the access.
     * @param {String} accessId The **accessId** for which to retrieve the current TAN scheme.
     * @param {module:api/TANSchemesApi~getCurrentTanSchemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TanScheme}
     */
    getCurrentTanScheme(accessId, callback) {
      let postBody = null;

      // verify the required parameter 'accessId' is set
      if (accessId === undefined || accessId === null) {
        throw new Error("Missing the required parameter 'accessId' when calling getCurrentTanScheme");
      }


      let pathParams = {
        'accessId': accessId
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
      let returnType = TanScheme;

      return this.apiClient.callApi(
        '/accesses/{accessId}/currenttanscheme', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTanSchemes operation.
     * @callback module:api/TANSchemesApi~getTanSchemesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TanScheme>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List TAN schemes for access
     * Retrieves all available TAN schemes for access.
     * @param {String} accessId The **id** for the access for which to retrieve the TAN list
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxAge Optional - defines maximum age (in seconds) of cached account data provided by the bank.      A \&quot;maxAge\&quot; of 3600 will not trigger an update of TAN schemes, when last refresh has been      done 2000 seconds ago.
     * @param {module:api/TANSchemesApi~getTanSchemesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TanScheme>}
     */
    getTanSchemes(accessId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'accessId' is set
      if (accessId === undefined || accessId === null) {
        throw new Error("Missing the required parameter 'accessId' when calling getTanSchemes");
      }


      let pathParams = {
        'accessId': accessId
      };
      let queryParams = {
        'max-age': opts['maxAge']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TanScheme];

      return this.apiClient.callApi(
        '/accesses/{accessId}/tanschemes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putCurrentTanMedia operation.
     * @callback module:api/TANSchemesApi~putCurrentTanMediaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Access} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update current TAN media.
     * Update the access with a new currentTanMedia.
     * @param {String} accessId The **accessId** for which to set the current TAN media.
     * @param {String} tanMediaId The **id** for the TAN media that should be set as the new currentTanMedia.
     * @param {module:api/TANSchemesApi~putCurrentTanMediaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Access}
     */
    putCurrentTanMedia(accessId, tanMediaId, callback) {
      let postBody = null;

      // verify the required parameter 'accessId' is set
      if (accessId === undefined || accessId === null) {
        throw new Error("Missing the required parameter 'accessId' when calling putCurrentTanMedia");
      }

      // verify the required parameter 'tanMediaId' is set
      if (tanMediaId === undefined || tanMediaId === null) {
        throw new Error("Missing the required parameter 'tanMediaId' when calling putCurrentTanMedia");
      }


      let pathParams = {
        'accessId': accessId,
        'tanMediaId': tanMediaId
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
      let returnType = Access;

      return this.apiClient.callApi(
        '/accesses/{accessId}/currenttanmedia/{tanMediaId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putCurrentTanScheme operation.
     * @callback module:api/TANSchemesApi~putCurrentTanSchemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Access} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update current TAN scheme.
     * Update the access with a new currentTanScheme.
     * @param {String} accessId The **accessId** for which to set the current TAN scheme.
     * @param {String} tanSchemeId The **id** for the TAN scheme that should be set as the new currentTanScheme.
     * @param {module:api/TANSchemesApi~putCurrentTanSchemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Access}
     */
    putCurrentTanScheme(accessId, tanSchemeId, callback) {
      let postBody = null;

      // verify the required parameter 'accessId' is set
      if (accessId === undefined || accessId === null) {
        throw new Error("Missing the required parameter 'accessId' when calling putCurrentTanScheme");
      }

      // verify the required parameter 'tanSchemeId' is set
      if (tanSchemeId === undefined || tanSchemeId === null) {
        throw new Error("Missing the required parameter 'tanSchemeId' when calling putCurrentTanScheme");
      }


      let pathParams = {
        'accessId': accessId,
        'tanSchemeId': tanSchemeId
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
      let returnType = Access;

      return this.apiClient.callApi(
        '/accesses/{accessId}/currenttanscheme/{tanSchemeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}