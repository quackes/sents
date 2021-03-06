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
import Amount from './Amount';





/**
* The Transfer model module.
* @module model/Transfer
* @version 2.1.0
*/
export default class Transfer {
    /**
    * Constructs a new <code>Transfer</code>.
    * @alias module:model/Transfer
    * @class
    * @param iban {String} IBAN - International Bank Account Number (defined in ISO 13616-1)
    * @param name {String} Name - Name of the creditor
    * @param amount {module:model/Amount} Amount to be transfered
    */

    constructor(iban, name, amount) {
        

        
        

        this['iban'] = iban;this['name'] = name;this['amount'] = amount;

        
    }

    /**
    * Constructs a <code>Transfer</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Transfer} obj Optional instance to populate.
    * @return {module:model/Transfer} The populated <code>Transfer</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Transfer();

            
            
            

            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
            if (data.hasOwnProperty('bic')) {
                obj['bic'] = ApiClient.convertToType(data['bic'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = Amount.constructFromObject(data['amount']);
            }
            if (data.hasOwnProperty('purpose')) {
                obj['purpose'] = ApiClient.convertToType(data['purpose'], 'String');
            }
        }
        return obj;
    }

    /**
    * IBAN - International Bank Account Number (defined in ISO 13616-1)
    * @member {String} iban
    */
    iban = undefined;
    /**
    * BIC - Business Identifier Code (defined in ISO-9362)
    * @member {String} bic
    */
    bic = undefined;
    /**
    * Name - Name of the creditor
    * @member {String} name
    */
    name = undefined;
    /**
    * Amount to be transfered
    * @member {module:model/Amount} amount
    */
    amount = undefined;
    /**
    * Purpose
    * @member {String} purpose
    */
    purpose = undefined;








}


