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
import Account from './Account';
import Balance from './Balance';





/**
* The BankAccount model module.
* @module model/BankAccount
* @version 2.1.0
*/
export default class BankAccount extends Account {
    /**
    * Constructs a new <code>BankAccount</code>.
    * @alias module:model/BankAccount
    * @class
    * @extends module:model/Account
    * @param id {String} Internal ID of this account (generated value)
    * @param name {String} Account name returned by bank provider (e.g., \"Giro Account\")
    * @param owner {String} Account owner returned by bank provider (e.g., \"Max Mustermann\")
    * @param providerId {String} Identifier of the provider to which this account belongs
    * @param kind {module:model/Account.KindEnum} An account kind is a classification of its structure and its possibilities.   This is typically defined by the bank provider.
    * @param automaticRefreshInterval {Number} Interval that indicates the freguency of which the account is updated.   This interval is read-only and is determined by the server depending on created notifications and last use of the API. The range is between every hour, daily and monthly.
    * @param type {String} Discriminator for subtypes. At the moment only `BankAccount` is supported.
    * @param _number {String} Account number (national)
    * @param bankCodeNumber {String} Bank code number (BLZ, national, 8 digits)
    * @param bic {String} Business Identifier Code (BIC; ISO 9362)
    * @param iban {String} International Bank Account Number (IBAN; ISO 13616-1)
    * @param currency {String} Account currency (ISO 4217) (e.g., \"EUR\")
    * @param balance {module:model/Balance} Current balance. This value is set whenever the account is refreshed.
    */

    constructor(id, name, owner, providerId, kind, automaticRefreshInterval, type, _number, bankCodeNumber, bic, iban, currency, balance) {
        

        super(id, name, owner, providerId, kind, automaticRefreshInterval, type);
        

        this['number'] = _number;this['bankCodeNumber'] = bankCodeNumber;this['bic'] = bic;this['iban'] = iban;this['currency'] = currency;this['balance'] = balance;

        
    }

    /**
    * Constructs a <code>BankAccount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BankAccount} obj Optional instance to populate.
    * @return {module:model/BankAccount} The populated <code>BankAccount</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BankAccount();

            

            Account.constructFromObject(data, obj);
            

            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('bankCodeNumber')) {
                obj['bankCodeNumber'] = ApiClient.convertToType(data['bankCodeNumber'], 'String');
            }
            if (data.hasOwnProperty('bic')) {
                obj['bic'] = ApiClient.convertToType(data['bic'], 'String');
            }
            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = Balance.constructFromObject(data['balance']);
            }
        }
        return obj;
    }

    /**
    * Account number (national)
    * @member {String} number
    */
    number = undefined;
    /**
    * Bank code number (BLZ, national, 8 digits)
    * @member {String} bankCodeNumber
    */
    bankCodeNumber = undefined;
    /**
    * Business Identifier Code (BIC; ISO 9362)
    * @member {String} bic
    */
    bic = undefined;
    /**
    * International Bank Account Number (IBAN; ISO 13616-1)
    * @member {String} iban
    */
    iban = undefined;
    /**
    * Account currency (ISO 4217) (e.g., \"EUR\")
    * @member {String} currency
    */
    currency = undefined;
    /**
    * Current balance. This value is set whenever the account is refreshed.
    * @member {module:model/Balance} balance
    */
    balance = undefined;








}


