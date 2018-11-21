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
import Task from './Task';





/**
* The TransferTask model module.
* @module model/TransferTask
* @version 2.1.0
*/
export default class TransferTask  extends Task {
    /**
    * Constructs a new <code>TransferTask</code>.
    * @alias module:model/TransferTask
    * @class
    * @extends module:model/Task
    * @param type {String} Discriminator for subtypes. At the moment only `TransferTask` is supported.
    */

    constructor(type) {
        

        super(type);

    }

    /**
    * Constructs a <code>TransferTask</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TransferTask} obj Optional instance to populate.
    * @return {module:model/TransferTask} The populated <code>TransferTask</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransferTask();

            

            Task.constructFromObject(data, obj);
            

        }
        return obj;
    }









}

