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
import ContractDetailsMap from './ContractDetailsMap';





/**
* The Contract model module.
* @module model/Contract
* @version 2.1.0
*/
export default class Contract {
    /**
    * Constructs a new <code>Contract</code>.
    * @alias module:model/Contract
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Contract</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Contract} obj Optional instance to populate.
    * @return {module:model/Contract} The populated <code>Contract</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contract();

            
            
            

            if (data.hasOwnProperty('contractorName')) {
                obj['contractorName'] = ApiClient.convertToType(data['contractorName'], 'String');
            }
            if (data.hasOwnProperty('categoryName')) {
                obj['categoryName'] = ApiClient.convertToType(data['categoryName'], 'String');
            }
            if (data.hasOwnProperty('averageAmount')) {
                obj['averageAmount'] = Amount.constructFromObject(data['averageAmount']);
            }
            if (data.hasOwnProperty('paymentInterval')) {
                obj['paymentInterval'] = ApiClient.convertToType(data['paymentInterval'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('firstKnownBookingDate')) {
                obj['firstKnownBookingDate'] = ApiClient.convertToType(data['firstKnownBookingDate'], 'String');
            }
            if (data.hasOwnProperty('lastKnownBookingDate')) {
                obj['lastKnownBookingDate'] = ApiClient.convertToType(data['lastKnownBookingDate'], 'String');
            }
            if (data.hasOwnProperty('estimatedNextBookingDate')) {
                obj['estimatedNextBookingDate'] = ApiClient.convertToType(data['estimatedNextBookingDate'], 'String');
            }
            if (data.hasOwnProperty('estimatedNextAmount')) {
                obj['estimatedNextAmount'] = Amount.constructFromObject(data['estimatedNextAmount']);
            }
            if (data.hasOwnProperty('contractDetails')) {
                obj['contractDetails'] = ContractDetailsMap.constructFromObject(data['contractDetails']);
            }
        }
        return obj;
    }

    /**
    * Name of the contractor
    * @member {String} contractorName
    */
    contractorName = undefined;
    /**
    * Name of assigned category
    * @member {String} categoryName
    */
    categoryName = undefined;
    /**
    * Detected amount of the transaction
    * @member {module:model/Amount} averageAmount
    */
    averageAmount = undefined;
    /**
    * Interval in which a transaction is repeated
    * @member {module:model/Contract.PaymentIntervalEnum} paymentInterval
    */
    paymentInterval = undefined;
    /**
    * Type of the contract
    * @member {module:model/Contract.TypeEnum} type
    */
    type = undefined;
    /**
    * First booking date detected
    * @member {String} firstKnownBookingDate
    */
    firstKnownBookingDate = undefined;
    /**
    * Last recent booking date detected
    * @member {String} lastKnownBookingDate
    */
    lastKnownBookingDate = undefined;
    /**
    * Estimated next booking date in the future
    * @member {String} estimatedNextBookingDate
    */
    estimatedNextBookingDate = undefined;
    /**
    * Estimated amount of the next booking
    * @member {module:model/Amount} estimatedNextAmount
    */
    estimatedNextAmount = undefined;
    /**
    * Some more details of a contract
    * @member {module:model/ContractDetailsMap} contractDetails
    */
    contractDetails = undefined;






    /**
    * Allowed values for the <code>paymentInterval</code> property.
    * @enum {String}
    * @readonly
    */
    static PaymentIntervalEnum = {
    
        /**
         * value: "WEEKLY"
         * @const
         */
        "WEEKLY": "WEEKLY",
    
        /**
         * value: "BIWEEKLY"
         * @const
         */
        "BIWEEKLY": "BIWEEKLY",
    
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
         * value: "SEMIANNUAL"
         * @const
         */
        "SEMIANNUAL": "SEMIANNUAL",
    
        /**
         * value: "ANNUAL"
         * @const
         */
        "ANNUAL": "ANNUAL",
    
        /**
         * value: "BIENNIAL"
         * @const
         */
        "BIENNIAL": "BIENNIAL"    
    };

    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
    
        /**
         * value: "SUBSCRIPTION"
         * @const
         */
        "SUBSCRIPTION": "SUBSCRIPTION",
    
        /**
         * value: "RENT"
         * @const
         */
        "RENT": "RENT",
    
        /**
         * value: "RENT_REVENUES"
         * @const
         */
        "RENT_REVENUES": "RENT_REVENUES",
    
        /**
         * value: "SALARY"
         * @const
         */
        "SALARY": "SALARY",
    
        /**
         * value: "SALARY_SIDE_JOB"
         * @const
         */
        "SALARY_SIDE_JOB": "SALARY_SIDE_JOB",
    
        /**
         * value: "PRIVATE_PENSION"
         * @const
         */
        "PRIVATE_PENSION": "PRIVATE_PENSION",
    
        /**
         * value: "PENSION"
         * @const
         */
        "PENSION": "PENSION",
    
        /**
         * value: "RIESTER_RETIREMENT_PLAN_PAYMENTS"
         * @const
         */
        "RIESTER_RETIREMENT_PLAN_PAYMENTS": "RIESTER_RETIREMENT_PLAN_PAYMENTS",
    
        /**
         * value: "RIESTER_RETIREMENT_PLAN_PAYOUTS"
         * @const
         */
        "RIESTER_RETIREMENT_PLAN_PAYOUTS": "RIESTER_RETIREMENT_PLAN_PAYOUTS"    
    };



}

