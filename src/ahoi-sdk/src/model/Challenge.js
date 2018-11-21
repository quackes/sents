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
* The Challenge model module.
* @module model/Challenge
* @version 2.1.0
*/
export default class Challenge {
    /**
    * Constructs a new <code>Challenge</code>.
    * @alias module:model/Challenge
    * @class
    * @param type {String} Only `TanChallenge` is supported.
    */

    constructor(type) {
        

        
        

        this['type'] = type;

        
    }

    /**
    * Constructs a <code>Challenge</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Challenge} obj Optional instance to populate.
    * @return {module:model/Challenge} The populated <code>Challenge</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Challenge();

            
            
            

            if (data.hasOwnProperty('challenge')) {
                obj['challenge'] = ApiClient.convertToType(data['challenge'], 'String');
            }
            if (data.hasOwnProperty('additionalInformation')) {
                obj['additionalInformation'] = ApiClient.convertToType(data['additionalInformation'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * Text of the challenge.
    * @member {String} challenge
    */
    challenge = undefined;
    /**
    * Additional information for authorization purposes e.g. IBAN, BIC, amount of transfer transaction.
    * @member {String} additionalInformation
    */
    additionalInformation = undefined;
    /**
    * Only `TanChallengeDto` is supported.
    * @member {String} type
    */
    type = undefined;








}

