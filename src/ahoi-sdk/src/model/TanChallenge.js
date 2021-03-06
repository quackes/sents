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
import Challenge from './Challenge';





/**
* The TanChallenge model module.
* @module model/TanChallenge
* @version 2.1.0
*/
export default class TanChallenge extends Challenge {
    /**
    * Constructs a new <code>TanChallenge</code>.
    * @alias module:model/TanChallenge
    * @class
    * @extends module:model/Challenge
    * @param type {String} Only `TanChallenge` is supported.
    */

    constructor(type) {
        super(type)
    }

    /**
    * Constructs a <code>TanChallenge</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TanChallenge} obj Optional instance to populate.
    * @return {module:model/TanChallenge} The populated <code>TanChallenge</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TanChallenge();

            

            Challenge.constructFromObject(data, obj);
            

            if (data.hasOwnProperty('challengeType')) {
                obj['challengeType'] = ApiClient.convertToType(data['challengeType'], 'String');
            }
            if (data.hasOwnProperty('tanGuiUrl')) {
                obj['tanGuiUrl'] = ApiClient.convertToType(data['tanGuiUrl'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/TanChallenge.ChallengeTypeEnum} challengeType
    */
    challengeType = undefined;
    /**
    * Currently resource URI pointing to TAN UI input component.
    * @member {String} tanGuiUrl
    */
    tanGuiUrl = undefined;






    /**
    * Allowed values for the <code>challengeType</code> property.
    * @enum {String}
    * @readonly
    */
    static ChallengeTypeEnum = {
    
        /**
         * value: "UNKNOWN"
         * @const
         */
        "UNKNOWN": "UNKNOWN",
    
        /**
         * value: "ITAN"
         * @const
         */
        "ITAN": "ITAN",
    
        /**
         * value: "CHIPTAN"
         * @const
         */
        "CHIPTAN": "CHIPTAN",
    
        /**
         * value: "OPTICAL_V3"
         * @const
         */
        "OPTICAL_V3": "OPTICAL_V3",
    
        /**
         * value: "OPTICAL_V4"
         * @const
         */
        "OPTICAL_V4": "OPTICAL_V4",
    
        /**
         * value: "PHOTOTAN"
         * @const
         */
        "PHOTOTAN": "PHOTOTAN"    
    };



}


