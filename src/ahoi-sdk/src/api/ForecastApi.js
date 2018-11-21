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
import Forecast from '../model/Forecast';
import ForecastTransaction from '../model/ForecastTransaction';

/**
* Forecast service.
* @module api/ForecastApi
* @version 2.1.0
*/
export default class ForecastApi {

    /**
    * Constructs a new ForecastApi. 
    * @alias module:api/ForecastApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getForecast operation.
     * @callback module:api/ForecastApi~getForecastCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Forecast} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get balance forecast
     * The current month is determined by the latest refresh.
     * @param {String} accessId The **accessId** for which to retrieve forecasts
     * @param {String} accountId The **accountId** for which to retrieve forecasts
     * @param {module:api/ForecastApi~getForecastCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Forecast}
     */
    getForecast(accessId, accountId, callback) {
      let postBody = null;

      // verify the required parameter 'accessId' is set
      if (accessId === undefined || accessId === null) {
        throw new Error("Missing the required parameter 'accessId' when calling getForecast");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getForecast");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Forecast;

      return this.apiClient.callApi(
        '/accesses/{accessId}/accounts/{accountId}/forecast', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getForecastTransactions operation.
     * @callback module:api/ForecastApi~getForecastTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ForecastTransaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve balance forecast for the end of the current month.
     * The current  month is determined by latest refresh of transactions. The request  also retrieves the transactions expected to be applied until the  end of the current month.
     * @param {String} accessId The **accessId** for the forecast.
     * @param {String} accountId The **id** for the account.
     * @param {module:api/ForecastApi~getForecastTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ForecastTransaction}
     */
    getForecastTransactions(accessId, accountId, callback) {
      let postBody = null;

      // verify the required parameter 'accessId' is set
      if (accessId === undefined || accessId === null) {
        throw new Error("Missing the required parameter 'accessId' when calling getForecastTransactions");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getForecastTransactions");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ForecastTransaction;

      return this.apiClient.callApi(
        '/accesses/{accessId}/accounts/{accountId}/forecast/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}