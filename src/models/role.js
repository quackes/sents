import { BankAccount } from './bank-account';
import { Wish } from './wish';
import { Uuid } from './uuid';

const CACHE = {};

export class Role extends Uuid {
  _firstname = '';
  _bankAccount = null;

  constructor(firstname, bankAccount) {
    super();
    this.firstname = firstname;
    this.bankAccount = bankAccount;
  }

  static create(properties) {
    if (!(CACHE[properties.uuid] instanceof Role)) {
      let bankAccount = BankAccount.create(properties._bankAccount);
      if (properties.hasOwnProperty('_wishes')) {
        CACHE[properties.uuid] = new Child(properties._firstname, bankAccount);
        properties._wishes.forEach((wish) => {
          CACHE[properties.uuid].addWish(Wish.create(wish));
        });
      } else {
        CACHE[properties.uuid] = new Parent(properties._firstname, bankAccount);
      }
    }
    CACHE[properties.uuid].uuid = properties.uuid;
    return CACHE[properties.uuid];
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
  _ratio = 25;
  _wishes = [];

  constructor(firstname, bankAccount, wishes = []) {
    super(firstname, bankAccount);
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
  addWish(wish) {
    if (wish instanceof Wish) {
      this._wishes.push(wish);
    } else {
      throw 'Type error!';
    }
  }
}
export class Parent extends Role {}
