import injector from 'vue-inject';
import '../services/ahoi/ahoi-service';
import { Uuid } from './uuid';

const CACHE = {};

export class BankAccount extends Uuid {
  _iban = '';
  _bic = '';

  constructor(iban, bic) {
    super();
    this.iban = iban;
    this.bic = bic;
  }

  static create(properties) {
    if (!(CACHE[properties.uuid] instanceof BankAccount)) {
      CACHE[properties.uuid] = new BankAccount(properties._iban, properties._bic);
    }
    CACHE[properties.uuid].uuid = properties.uuid;
    return CACHE[properties.uuid];
  }

  set iban(iban) {
    if (typeof iban === 'string') {
      this._iban = iban;
    } else {
      throw 'Type error!';
    }
  }
  get iban() {
    return this._iban;
  }

  set bic(bic) {
    if (typeof bic === 'string') {
      this._bic = bic;
    } else {
      throw 'Type error!';
    }
  }
  get bic() {
    return this._bic;
  }
}
