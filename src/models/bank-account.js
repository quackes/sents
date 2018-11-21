export class BankAccount {
  amount = 0;
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
    return this._amount;
  }
}
