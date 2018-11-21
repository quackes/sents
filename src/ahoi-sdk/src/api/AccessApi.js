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
import SessionSecurityHelper from "../encryption/SessionSecurityHelper";
import RegistrationApi from "./RegistrationApi";

/**
* Access service.
* @module api/AccessApi
* @version 2.1.0
*/
export default class AccessApi {

    /**
    * Constructs a new AccessApi. 
    * @alias module:api/AccessApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    this.sessionSecurityHelper = new SessionSecurityHelper(new RegistrationApi());
    }


    /**
     * Callback function to receive the result of the deleteAccess operation.
     * @callback module:api/AccessApi~deleteAccessCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete access
     * Delete access with **accessId** and all related accounts.
     * @param {String} accessId The **id** for the access to delete
     * @param {module:api/AccessApi~deleteAccessCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteAccess(accessId, callback) {
      let postBody = null;

      // verify the required parameter 'accessId' is set
      if (accessId === undefined || accessId === null) {
        throw new Error("Missing the required parameter 'accessId' when calling deleteAccess");
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
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/accesses/{accessId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccess operation.
     * @callback module:api/AccessApi~getAccessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Access} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get access
     * Retrieve the access with **accessId**. The retrieved object does not contain sensitive information such as the PIN.
     * @param {String} accessId The **id** for the access to retrieve.
     * @param {module:api/AccessApi~getAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Access}
     */
    getAccess(accessId, callback) {
      let postBody = null;

      // verify the required parameter 'accessId' is set
      if (accessId === undefined || accessId === null) {
        throw new Error("Missing the required parameter 'accessId' when calling getAccess");
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
      let returnType = Access;

      return this.apiClient.callApi(
        '/accesses/{accessId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccesses operation.
     * @callback module:api/AccessApi~getAccessesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Access>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List accesses
     * Returns all registered accesses for the authenticated user. Confidential information like the PIN will not be returned.
     * @param {module:api/AccessApi~getAccessesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Access>}
     */
    getAccesses(callback) {
      let postBody = null;


      let pathParams = {
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
      let returnType = [Access];

      return this.apiClient.callApi(
        '/accesses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postAccess operation.
     * @callback module:api/AccessApi~postAccessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Access} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new access
     * Create a new access and setup all associated accounts and transactions. This will also trigger the creation of monthly transaction summaries, the analysis of all accounts for recurring transactions, and the calculation of the balance forecast.   If the credentials were invalid, the validation state is set accordingly.    It is possible to have multiple accesses for one user.
     * @param {module:model/Access} accessDto A valid BankAccess object containing the required             **accessFields** as indicated by the provider object and the             **providerId**.
     * @param {module:api/AccessApi~postAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Access}
     */
    postAccess(accessDto, callback) {
      let _this = this;
      let postBody = accessDto;

      // verify the required parameter 'accessDto' is set
      if (accessDto === undefined || accessDto === null) {
        throw new Error("Missing the required parameter 'accessDto' when calling postAccess");
      }


      let pathParams = {
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

    this.sessionSecurityHelper.applySessionSecurity(headerParams, () => {
      _this.encryptData(accessDto.accessFields);
      _this.apiClient.callApi(
        '/accesses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      )
    });
    }

    /**
     * Callback function to receive the result of the putAccess operation.
     * @callback module:api/AccessApi~putAccessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Access} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update access
     * Update the access credentials in **accessFields**. If the access does not exist, the **accessId** does not match the **id** in **accessDto** or the **providerId** is not the same, the status code 404 is returned. If another access with the same login  data already exists, the status code 409 is returned.  The updated access is validated by setting up an account. The status code 200 does not imply that the credentials are correct. To check this the client should obtain access.
     * @param {String} accessId The **id** for the access to update.
     * @param {module:model/Access} accessDto The Access object that contains the changed credentials in             **accessFields**. Other fields cannot be edited.
     * @param {module:api/AccessApi~putAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Access}
     */
    putAccess(accessId, accessDto, callback) {
      let _this = this;
      let postBody = accessDto;

      // verify the required parameter 'accessId' is set
      if (accessId === undefined || accessId === null) {
        throw new Error("Missing the required parameter 'accessId' when calling putAccess");
      }

      // verify the required parameter 'accessDto' is set
      if (accessDto === undefined || accessDto === null) {
        throw new Error("Missing the required parameter 'accessDto' when calling putAccess");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Access;

    this.sessionSecurityHelper.applySessionSecurity(headerParams, () => {
      _this.encryptData(accessDto.accessFields);
      _this.apiClient.callApi(
        '/accesses/{accessId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      )
    });
  }

  encryptData(accessFields) {
    try {
      if (accessFields.CUSTOMERNUMBER !== null) {
        accessFields.CUSTOMERNUMBER = this.sessionSecurityHelper.encryptWithSessionKey(accessFields.CUSTOMERNUMBER);
      } else {
        delete accessFields.CUSTOMERNUMBER;
      }
      if (accessFields.PIN !== null) {
        accessFields.PIN = (this.sessionSecurityHelper.encryptWithSessionKey(accessFields.PIN));
      }
      if (accessFields.USERNAME !== null) {
        accessFields.USERNAME = (this.sessionSecurityHelper.encryptWithSessionKey(accessFields.USERNAME));
      }
    } catch (err) {
      throw err;
    }
    }


}
