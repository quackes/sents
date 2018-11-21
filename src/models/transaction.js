import { Child } from './role';
import { ParentTaskList } from './task-list';

export class Transaction extends ParentTaskList {
  _tan = true;
  _child = null;

  constructor(parent, child, tasks = []) {
    super(parent, tasks);
    this.child = child;
    this.ratio = child.ratio;
  }

  get sender() {
    return {
      name: `${this._parent.firstname} ${this._parent.lastname}`,
      bankAccount: `${this._parent.bankAccount}`
    };
  }

  get receiver() {
    return {
      name: `${this._child.firstname} ${this._child.lastname}`,
      bankAccount: `${this._child.bankAccount}`
    };
  }

  get amount() {
    let amount = 0;
    this.task.forEach(task => {
      amount += task.amount;
    });
    return amount;
  }
  get freeAmount() {
    return Math.round(this.amount * this.ratio);
  }

  get wishAmount() {
    return this.amount - this.freeAmount();
  }

  get purpose() {
    let list = [];
    this.task.forEach(task => {
      list.push(task.title);
    });
    return list.join(', ');
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
