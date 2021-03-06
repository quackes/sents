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
import JwkJwkPublicKey from '../model/JwkJwkPublicKey';
import RegistrationPublicKey from '../model/RegistrationPublicKey';
import RegistrationResponse from '../model/RegistrationResponse';
import SessionSecurityHelper from '../encryption/SessionSecurityHelper';

/**
 * Registration service.
 * @module api/RegistrationApi
 * @version 2.1.0
 */
export default class RegistrationApi {

  /**
   * Constructs a new RegistrationApi.
   * @alias module:api/RegistrationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    this.sessionSecurityHelper = new SessionSecurityHelper(this);
  }


  /**
   * Callback function to receive the result of the getJsonWebKey operation.
   * @callback module:api/RegistrationApi~getJsonWebKeyCallback
   * @param {String} error Error message, if any.
   * @param {module:model/JwkJwkPublicKey} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Request API jwk public key
   * A valid API public key will be returned in JWK format to be used to encrypt registration data
   * @param {module:api/RegistrationApi~getJsonWebKeyCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/JwkJwkPublicKey}
   */
  getJsonWebKey(callback) {
    let postBody = null;


    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['oauth2'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = JwkJwkPublicKey;

    return this.apiClient.callApi(
      '/registration/jwk', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the getRegistrationPublicKey operation.
   * @callback module:api/RegistrationApi~getRegistrationPublicKeyCallback
   * @param {String} error Error message, if any.
   * @param {module:model/RegistrationPublicKey} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Request API public key
   * A valid API public key will be returned to be used to encrypt registration data
   * @param {module:api/RegistrationApi~getRegistrationPublicKeyCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/RegistrationPublicKey}
   */
  getRegistrationPublicKey(callback) {
    let postBody = null;


    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['oauth2'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = RegistrationPublicKey;

    return this.apiClient.callApi(
      '/registration/keys', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the register operation.
   * @callback module:api/RegistrationApi~registerCallback
   * @param {String} error Error message, if any.
   * @param {module:model/RegistrationResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Client registration
   * Registers an authenticated and authorized specific client
   * @param {module:api/RegistrationApi~registerCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/RegistrationResponse}
   */
  register(callback) {
    let _this = this;

    let postBody = null;


    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['oauth2'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = RegistrationResponse;



    this.sessionSecurityHelper.applySessionSecurity(headerParams, () => {
      _this.apiClient.callApi(
        '/registration', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, (error, data, response) => {
          if(error) {
            callback(error, data, response);
          } else {
            let decryptedInstallationId = this.sessionSecurityHelper.decryptWithSessionKey(data.installation);
            data.installation = decryptedInstallationId;
            callback(error, data, response);
          }
        }
      )
    });
  }


}
