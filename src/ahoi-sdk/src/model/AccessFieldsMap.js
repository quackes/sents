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
* The AccessFieldsMap model module.
* @module model/AccessFieldsMap
* @version 2.1.0
*/
export default class AccessFieldsMap {
    /**
    * Constructs a new <code>AccessFieldsMap</code>.
    * @alias module:model/AccessFieldsMap
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>AccessFieldsMap</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AccessFieldsMap} obj Optional instance to populate.
    * @return {module:model/AccessFieldsMap} The populated <code>AccessFieldsMap</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccessFieldsMap();

            
            
            

            if (data.hasOwnProperty('USERNAME')) {
                obj['USERNAME'] = ApiClient.convertToType(data['USERNAME'], 'String');
            }
            if (data.hasOwnProperty('CUSTOMERNUMBER')) {
                obj['CUSTOMERNUMBER'] = ApiClient.convertToType(data['CUSTOMERNUMBER'], 'String');
            }
            if (data.hasOwnProperty('PIN')) {
                obj['PIN'] = ApiClient.convertToType(data['PIN'], 'String');
            }
        }
        return obj;
    }

    /**
    * Should be filled with the username if the Provider object signals this as mandatory.
    * @member {String} USERNAME
    */
    USERNAME = undefined;
    /**
    * Should be filled with the customer number if the Provider object signals this as mandatory.
    * @member {String} CUSTOMERNUMBER
    */
    CUSTOMERNUMBER = undefined;
    /**
    * Should be filled with the PIN if the Provider object signals this as mandatory.
    * @member {String} PIN
    */
    PIN = undefined;








}


