import { Child } from "./role";

export class Wish {
  _open = true;
  _title = 'Wunsch';
  _amount = 0;

  constructor( title, amount) {
    this.title = title;
    this.amount = amount;
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