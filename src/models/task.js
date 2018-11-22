import { Child, Parent, Role } from './role';
import { Uuid } from './uuid';

const CACHE = {};

export class Task extends Uuid {
  _done = false;
  _paid = false;
  _title = 'Aufgabe';
  _amount = 0;
  _parent = null;
  _child = null;
  _icon = require('../assets/icon-dog.png');

  constructor(title, amount, parent) {
    super();
    this.title = title;
    this.amount = amount;
    this.parent = parent;
  }

  static create(properties) {
    if (!(CACHE[properties.uuid] instanceof Task)) {
      CACHE[properties.uuid] = new Task(properties._title, properties._amount, Role.create(properties._parent));
      CACHE[properties.uuid]._done = properties._done;
      CACHE[properties.uuid]._paid = properties._paid;
      if (properties._child !== null) {
        CACHE[properties.uuid]._child = Role.create(properties._child);
      }
      CACHE[properties.uuid]._icon = properties._icon;
    }
    CACHE[properties.uuid].uuid = properties.uuid;
    return CACHE[properties.uuid];
  }

  get icon() {
    return this._icon;
  }

  done() {
    this._done = true;
  }

  isDone() {
    return this._done === true;
  }

  undo() {
    this._done = false;
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
