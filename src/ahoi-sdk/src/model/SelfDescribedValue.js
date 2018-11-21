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
* The SelfDescribedValue model module.
* @module model/SelfDescribedValue
* @version 2.1.0
*/
export default class SelfDescribedValue {
    /**
    * Constructs a new <code>SelfDescribedValue</code>.
    * @alias module:model/SelfDescribedValue
    * @class
    * @param value {String} api.dto.model.com-starfinanz-ahoi-dto-v2-SelfDescribedValueDto.properties.value.description
    * @param specification {String} api.dto.model.com-starfinanz-ahoi-dto-v2-SelfDescribedValueDto.properties.specification.description
    */

    constructor(value, specification) {
        

        
        

        this['value'] = value;this['specification'] = specification;

        
    }

    /**
    * Constructs a <code>SelfDescribedValue</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SelfDescribedValue} obj Optional instance to populate.
    * @return {module:model/SelfDescribedValue} The populated <code>SelfDescribedValue</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SelfDescribedValue();

            
            
            

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('specification')) {
                obj['specification'] = ApiClient.convertToType(data['specification'], 'String');
            }
        }
        return obj;
    }

    /**
    * api.dto.model.com-starfinanz-ahoi-dto-v2-SelfDescribedValueDto.properties.value.description
    * @member {String} value
    */
    value = undefined;
    /**
    * api.dto.model.com-starfinanz-ahoi-dto-v2-SelfDescribedValueDto.properties.specification.description
    * @member {String} specification
    */
    specification = undefined;








}


