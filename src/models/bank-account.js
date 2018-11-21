
import injector from 'vue-inject';
import '../services/ahoi/ahoi-service';

let ahoiService = injector.get('ahoiService');
console.log(ahoiService);

export class BankAccount {
  iban = '';
  bic = '';

  constructor(iban, bic) {
    this.iban = iban;
    this.bic = bic;
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

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw 'Type error!';
    }
  }
  get amount() {
    return ahoiService.saldo(this.iban);
  }
}
