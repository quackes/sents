export class BankAccount {

  iban = '';
  bic = '';
  bank = '';

  constructor(iban, bic, bank) {
    this.iban = iban;
    this.bic = bic;
    this.bank = bank;
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

  set bank(bank) {
    if (typeof bank === 'string') {
      this._bank = bank;
    } else {
      throw 'Type error!';
    }
  }
}