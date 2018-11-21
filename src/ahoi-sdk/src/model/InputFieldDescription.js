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
* The InputFieldDescription model module.
* @module model/InputFieldDescription
* @version 2.1.0
*/
export default class InputFieldDescription {
    /**
    * Constructs a new <code>InputFieldDescription</code>.
    * @alias module:model/InputFieldDescription
    * @class
    * @param id {module:model/InputFieldDescription.IdEnum} Internal id for this field description
    * @param label {String} Label for this field description (e.g. 'PIN', 'Login name', 'Customer No.')
    * @param masked {Boolean} Flag that indicates whether the given field value must be masked when entered on client side, respectively encrypted when persisted  on server side
    * @param format {module:model/InputFieldDescription.FormatEnum} Format of field value  Can be DEFINITELYNUMERIC (Format is definitely numeric), DEFINITELYALPHANUMERIC (Format is definitely alphanumeric),  PROBABLYALPHANUMERIC (Format is probably alphanumeric; numeric is unlikely but possible), PROBABLYNUMERIC (Format is probably  numeric; alphanumeric is unlikely but possible) or UNSPECIFIED (Default. No hint available)
    */

    constructor(id, label, masked, format) {
        

        
        

        this['id'] = id;this['label'] = label;this['masked'] = masked;this['format'] = format;

        
    }

    /**
    * Constructs a <code>InputFieldDescription</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InputFieldDescription} obj Optional instance to populate.
    * @return {module:model/InputFieldDescription} The populated <code>InputFieldDescription</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InputFieldDescription();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('masked')) {
                obj['masked'] = ApiClient.convertToType(data['masked'], 'Boolean');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('lengthMin')) {
                obj['lengthMin'] = ApiClient.convertToType(data['lengthMin'], 'Number');
            }
            if (data.hasOwnProperty('lengthMax')) {
                obj['lengthMax'] = ApiClient.convertToType(data['lengthMax'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Internal id for this field description
    * @member {module:model/InputFieldDescription.IdEnum} id
    */
    id = undefined;
    /**
    * Label for this field description (e.g. 'PIN', 'Login name', 'Customer No.')
    * @member {String} label
    */
    label = undefined;
    /**
    * Flag that indicates whether the given field value must be masked when entered on client side, respectively encrypted when persisted  on server side
    * @member {Boolean} masked
    */
    masked = undefined;
    /**
    * Format of field value  Can be DEFINITELYNUMERIC (Format is definitely numeric), DEFINITELYALPHANUMERIC (Format is definitely alphanumeric),  PROBABLYALPHANUMERIC (Format is probably alphanumeric; numeric is unlikely but possible), PROBABLYNUMERIC (Format is probably  numeric; alphanumeric is unlikely but possible) or UNSPECIFIED (Default. No hint available)
    * @member {module:model/InputFieldDescription.FormatEnum} format
    */
    format = undefined;
    /**
    * Minimum length of field value (0 = no limit)
    * @member {Number} lengthMin
    */
    lengthMin = undefined;
    /**
    * Maximum length of field value (0 = no limit)
    * @member {Number} lengthMax
    */
    lengthMax = undefined;






    /**
    * Allowed values for the <code>id</code> property.
    * @enum {String}
    * @readonly
    */
    static IdEnum = {
    
        /**
         * value: "USERNAME"
         * @const
         */
        "USERNAME": "USERNAME",
    
        /**
         * value: "CUSTOMERNUMBER"
         * @const
         */
        "CUSTOMERNUMBER": "CUSTOMERNUMBER",
    
        /**
         * value: "PIN"
         * @const
         */
        "PIN": "PIN",
    
        /**
         * value: "TAN"
         * @const
         */
        "TAN": "TAN"    
    };

    /**
    * Allowed values for the <code>format</code> property.
    * @enum {String}
    * @readonly
    */
    static FormatEnum = {
    
        /**
         * value: "UNSPECIFIED"
         * @const
         */
        "UNSPECIFIED": "UNSPECIFIED",
    
        /**
         * value: "PROBABLYNUMERIC"
         * @const
         */
        "PROBABLYNUMERIC": "PROBABLYNUMERIC",
    
        /**
         * value: "DEFINITELYNUMERIC"
         * @const
         */
        "DEFINITELYNUMERIC": "DEFINITELYNUMERIC",
    
        /**
         * value: "PROBABLYALPHANUMERIC"
         * @const
         */
        "PROBABLYALPHANUMERIC": "PROBABLYALPHANUMERIC",
    
        /**
         * value: "DEFINITELYALPHANUMERIC"
         * @const
         */
        "DEFINITELYALPHANUMERIC": "DEFINITELYALPHANUMERIC"    
    };



}


