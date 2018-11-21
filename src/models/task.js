import { Child, Parent } from "./role";

export class Task {
  _open = true;
  _paid = false;
  _title = 'Aufgabe';
  _amount = 0;
  _parent = null;
  _child = null;

  constructor(title, amount, parent) {
    this.title = title;
    this.amount = amount;
    this.parent = parent;
  }

  close() {
    this._open = false;
  }

  reopen() {
    this._open = true;
  }

  get open() {
    return this._open;
  }

  get paid() {
    return this._paid;
  }

  setPaid() {
    this._paid = true;
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

  set parent(parent) {
    if (parent instanceof Parent) {
      this._parent = parent;
    } else {
      throw 'Type error!';
    }
  }
  get parent() {
    return this._parent;
  }

  set child(child) {
    if (child instanceof Child) {
      this._child = child;
    } else {
      throw 'Type error!';
    }
  }
  get child() {
    return this._child;
  }
}
