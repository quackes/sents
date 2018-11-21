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


import ApiClient from '../ApiClient';





/**
* The Amount model module.
* @module model/Amount
* @version 2.1.0
*/
export default class Amount {
    /**
    * Constructs a new <code>Amount</code>.
    * @alias module:model/Amount
    * @class
    * @param value {Number} Amount value (in smallest unit; e.g., euro cents)
    * @param currency {String} Amount currency (ISO-4217; e.g., \"EUR\")
    */

    constructor(value, currency) {
        

        
        

        this['value'] = value;this['currency'] = currency;

        
    }

    /**
    * Constructs a <code>Amount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Amount} obj Optional instance to populate.
    * @return {module:model/Amount} The populated <code>Amount</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Amount();

            
            
            

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }

    /**
    * Amount value (in smallest unit; e.g., euro cents)
    * @member {Number} value
    */
    value = undefined;
    /**
    * Amount currency (ISO-4217; e.g., \"EUR\")
    * @member {String} currency
    */
    currency = undefined;








}

