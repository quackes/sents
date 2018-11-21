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

  set bic(bic) {
    if (typeof bic === 'string') {
      this._bic= bic;
    } else {
      throw 'Type error!';
    }
  }
}