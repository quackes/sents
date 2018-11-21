import * as SwaggerJsClient from './index'
import Contract from "./model/Contract";

export default class JsonSubTypeHelper {

  static INHERITANCE_OBJECTS = ['BankAccess', 'BankAccount', 'BankProvider', 'GiroTransaction',
    'Category', 'Contractor', 'TanChallenge', 'TanChallengeResponse'];

  constructor() {

  }

  static resolveType(className, defaultValue) {
    let result = SwaggerJsClient[className];
    if (result !== undefined && result !== null) {
      return result;
    } else {
      return defaultValue;
    }
  }

  static getInheritedType(bodyParam) {
    let inheritedType = null;
    JsonSubTypeHelper.INHERITANCE_OBJECTS.some((bpName) => {
      let type = JsonSubTypeHelper.resolveType(bpName, Object);
      if(bodyParam instanceof type){
        inheritedType = bpName;
        return true;
      }
      return false;
    });
    return inheritedType;
  }
}