import { Child } from './role';
import { Uuid } from './uuid';

const CACHE = {};

export class Wish extends Uuid {
  _open = true;
  _title = 'Wunsch';
  _amount = 0;

  constructor(title, amount) {
    super();
    this.title = title;
    this.amount = amount;
  }

  static create(properties) {
    if (!(CACHE[properties.uuid] instanceof Wish)) {
      CACHE[properties.uuid] = new Wish(properties._title, properties._amount);
    }
    CACHE[properties.uuid].uuid = properties.uuid;
    return CACHE[properties.uuid];
  }

  solved() {
    this._open = false;
  }

  get open() {
    return this._open;
  }

  set title(title) {
    if (typeof title === 'string') {
      this._title = title;
    } else {
      throw 'Type error!';
    }
  }
  get title() {
    return this._title;
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
