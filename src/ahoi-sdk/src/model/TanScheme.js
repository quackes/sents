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
import TanMedia from './TanMedia';





/**
* The TanScheme model module.
* @module model/TanScheme
* @version 2.1.0
*/
export default class TanScheme {
    /**
    * Constructs a new <code>TanScheme</code>.
    * @alias module:model/TanScheme
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TanScheme</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TanScheme} obj Optional instance to populate.
    * @return {module:model/TanScheme} The populated <code>TanScheme</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TanScheme();

            
            
            

            if (data.hasOwnProperty('schemeId')) {
                obj['schemeId'] = ApiClient.convertToType(data['schemeId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('tanMediaList')) {
                obj['tanMediaList'] = ApiClient.convertToType(data['tanMediaList'], [TanMedia]);
            }
        }
        return obj;
    }

    /**
    * Internal ID of this TAN scheme (generated value)
    * @member {String} schemeId
    */
    schemeId = undefined;
    /**
    * Name of the used TAN scheme
    * @member {String} name
    */
    name = undefined;
    /**
    * List of available TAN media for this scheme
    * @member {Array.<module:model/TanMedia>} tanMediaList
    */
    tanMediaList = undefined;








}


