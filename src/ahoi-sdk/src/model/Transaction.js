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
import AdditionalInformation from './AdditionalInformation';





/**
* The Transaction model module.
* @module model/Transaction
* @version 2.1.0
*/
export default class Transaction {
    /**
    * Constructs a new <code>Transaction</code>.
    * @alias module:model/Transaction
    * @class
    * @param id {String} Internal ID of this transaction (generated value)
    * @param type {String} Discriminator for subtypes. At the moment only `GiroTransaction` is supported.
    */

    constructor(id, type) {
        

        
        

        this['id'] = id;this['type'] = type;

        
    }

    /**
    * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Transaction} obj Optional instance to populate.
    * @return {module:model/Transaction} The populated <code>Transaction</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Transaction();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('transactionPatternId')) {
                obj['transactionPatternId'] = ApiClient.convertToType(data['transactionPatternId'], 'String');
            }
            if (data.hasOwnProperty('additionalInformation')) {
                obj['additionalInformation'] = ApiClient.convertToType(data['additionalInformation'], [AdditionalInformation]);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * Internal ID of this transaction (generated value)
    * @member {String} id
    */
    id = undefined;
    /**
    * Identifier of the transactionPattern to which this transaction belongs
    * @member {String} transactionPatternId
    */
    transactionPatternId = undefined;
    /**
    * @member {Array.<module:model/AdditionalInformation>} additionalInformation
    */
    additionalInformation = undefined;
    /**
    * Discriminator for subtypes. At the moment only `GiroTransaction` is supported.
    * @member {String} type
    */
    type = undefined;








}

