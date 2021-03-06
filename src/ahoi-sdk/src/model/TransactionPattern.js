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
* The TransactionPattern model module.
* @module model/TransactionPattern
* @version 2.1.0
*/
export default class TransactionPattern {
    /**
    * Constructs a new <code>TransactionPattern</code>.
    * @alias module:model/TransactionPattern
    * @class
    * @param state {module:model/TransactionPattern.StateEnum} State of this pattern  can be `ACTIVE` (default) or `INACTIVE` (user has disabled it)
    * @param cycle {module:model/TransactionPattern.CycleEnum} Frequency of occurrence for this pattern
    * @param day {Number} Day in the cycle this pattern occurs
    * @param relatedAccountOwner {String} Name of owner of related account (debtor or creditor)
    * @param amount {module:model/Amount} Amount value
    * @param accountNumber {String} Account number or IBAN of related account (debtor or creditor)
    * @param bankCode {String} Bank code number or BIC of related account (debtor or creditor)
    */

    constructor(state, cycle, day, relatedAccountOwner, amount, accountNumber, bankCode) {
        

        
        

        this['state'] = state;this['cycle'] = cycle;this['day'] = day;this['relatedAccountOwner'] = relatedAccountOwner;this['amount'] = amount;this['accountNumber'] = accountNumber;this['bankCode'] = bankCode;

        
    }

    /**
    * Constructs a <code>TransactionPattern</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TransactionPattern} obj Optional instance to populate.
    * @return {module:model/TransactionPattern} The populated <code>TransactionPattern</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionPattern();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('cycle')) {
                obj['cycle'] = ApiClient.convertToType(data['cycle'], 'String');
            }
            if (data.hasOwnProperty('origin')) {
                obj['origin'] = ApiClient.convertToType(data['origin'], 'String');
            }
            if (data.hasOwnProperty('day')) {
                obj['day'] = ApiClient.convertToType(data['day'], 'Number');
            }
            if (data.hasOwnProperty('relatedAccountOwner')) {
                obj['relatedAccountOwner'] = ApiClient.convertToType(data['relatedAccountOwner'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = Amount.constructFromObject(data['amount']);
            }
            if (data.hasOwnProperty('accountNumber')) {
                obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'String');
            }
            if (data.hasOwnProperty('bankCode')) {
                obj['bankCode'] = ApiClient.convertToType(data['bankCode'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
        }
        return obj;
    }

    /**
    * Internal ID of this transactionPattern (generated value)
    * @member {String} id
    */
    id = undefined;
    /**
    * State of this pattern  can be `ACTIVE` (default) or `INACTIVE` (user has disabled it)
    * @member {module:model/TransactionPattern.StateEnum} state
    */
    state = undefined;
    /**
    * Frequency of occurrence for this pattern
    * @member {module:model/TransactionPattern.CycleEnum} cycle
    */
    cycle = undefined;
    /**
    * Origin of creation can be `FINDER` (automatically found) or `MANUAL` (created by user). Cannot be set with creation or update.
    * @member {module:model/TransactionPattern.OriginEnum} origin
    */
    origin = undefined;
    /**
    * Day in the cycle this pattern occurs
    * @member {Number} day
    */
    day = undefined;
    /**
    * Name of owner of related account (debtor or creditor)
    * @member {String} relatedAccountOwner
    */
    relatedAccountOwner = undefined;
    /**
    * Amount value
    * @member {module:model/Amount} amount
    */
    amount = undefined;
    /**
    * Account number or IBAN of related account (debtor or creditor)
    * @member {String} accountNumber
    */
    accountNumber = undefined;
    /**
    * Bank code number or BIC of related account (debtor or creditor)
    * @member {String} bankCode
    */
    bankCode = undefined;
    /**
    * Kind of transaction (e.g., \"Lastschrift\" or \"Dauerauftrag\")
    * @member {String} kind
    */
    kind = undefined;






    /**
    * Allowed values for the <code>state</code> property.
    * @enum {String}
    * @readonly
    */
    static StateEnum = {
    
        /**
         * value: "INACTIVE"
         * @const
         */
        "INACTIVE": "INACTIVE",
    
        /**
         * value: "ACTIVE"
         * @const
         */
        "ACTIVE": "ACTIVE"    
    };

    /**
    * Allowed values for the <code>cycle</code> property.
    * @enum {String}
    * @readonly
    */
    static CycleEnum = {
    
        /**
         * value: "MONTHLY"
         * @const
         */
        "MONTHLY": "MONTHLY",
    
        /**
         * value: "QUARTERLY"
         * @const
         */
        "QUARTERLY": "QUARTERLY",
    
        /**
         * value: "SEMI_ANNUALLY"
         * @const
         */
        "SEMI_ANNUALLY": "SEMI_ANNUALLY",
    
        /**
         * value: "ANNUALLY"
         * @const
         */
        "ANNUALLY": "ANNUALLY"    
    };

    /**
    * Allowed values for the <code>origin</code> property.
    * @enum {String}
    * @readonly
    */
    static OriginEnum = {
    
        /**
         * value: "FINDER"
         * @const
         */
        "FINDER": "FINDER",
    
        /**
         * value: "MANUAL"
         * @const
         */
        "MANUAL": "MANUAL"    
    };



}


