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
* The Category model module.
* @module model/Category
* @version 2.1.0
*/
export default class Category extends AdditionalInformation {
    /**
    * Constructs a new <code>Category</code>.
    * @alias module:model/Category
    * @class
    * @extends module:model/AdditionalInformation
    * @param id {String}
    * @param type {String} Discriminator for subtypes. At the moment only `Category` and `Contractor` are supported.
    * @param name {String} Category name
    * @param origin {String} Origin name
    */

    constructor(id, type, name, origin) {
        

        super(id, type);
        

        this['name'] = name;this['origin'] = origin;

        
    }

    /**
    * Constructs a <code>Category</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Category} obj Optional instance to populate.
    * @return {module:model/Category} The populated <code>Category</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Category();

            

            AdditionalInformation.constructFromObject(data, obj);
            

            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('originId')) {
                obj['originId'] = ApiClient.convertToType(data['originId'], 'String');
            }
            if (data.hasOwnProperty('origin')) {
                obj['origin'] = ApiClient.convertToType(data['origin'], 'String');
            }
        }
        return obj;
    }

    /**
    * Parent category id in UUID form
    * @member {String} parent
    */
    parent = undefined;
    /**
    * Category name
    * @member {String} name
    */
    name = undefined;
    /**
    * Origin id i.e. the id within the origin id service
    * @member {String} originId
    */
    originId = undefined;
    /**
    * Origin name
    * @member {String} origin
    */
    origin = undefined;








}

