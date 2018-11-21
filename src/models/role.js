import { BankAccount } from './bank-account';
import { Wish } from './wish';

class Role {
  _gender = 'male';
  _firstname = '';
  _lastname = '';
  _bankAccount = null;

  constructor(gender, firstname, bankAccount) {
    this.gender = gender;
    this.firstname = firstname;
    this.lastname = '';
    this.bankAccount = bankAccount;
  }

  set gender(gender) {
    switch (gender) {
      case '':
        this._gender = 'male';
        break;
      default:
        this._gender = 'female';
    }
  }
  get gender() {
    return this._gender;
  }

  set firstname(firstname) {
    if (typeof firstname === 'string') {
      this._firstname = firstname;
    } else {
      throw 'Type error!';
    }
  }
  get firstname() {
    return this._firstname;
  }

  set lastname(lastname) {
    if (typeof lastname === 'string') {
      this._lastname = lastname;
    } else {
      throw 'Type error!';
    }
  }
  get lastname() {
    return this._lastname;
  }

  set bankAccount(bankAccount) {
    if (bankAccount instanceof BankAccount) {
      this._bankAccount = bankAccount;
    } else {
      throw 'Type error!';
    }
  }
  get bankAccount() {
    return this._bankAccount;
  }
}
export class Child extends Role {
  _ratio = 50;
  _wishes = [];

  constructor(gender, firstname, bankAccount, wishes = []) {
    super(gender, firstname, bankAccount);
    this.wishes = wishes;
  }

  set ratio(ratio) {
    if (typeof ratio === 'number') {
      this._ratio = ratio;
    } else {
      throw 'Type error!';
    }
  }
  get ratio() {
    return this._ratio;
  }
  get invRatio() {
    return 100 - this._ratio;
  }

  set wishes(wishes) {
    if (Array.isArray(wishes)) {
      this._wishes = wishes;
    } else {
      throw 'Type error!';
    }
  }
  get wishes() {
    return this._wishes;
  }
}
export class Parent extends Role {}
