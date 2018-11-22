import { Child } from './role';
import { ParentTaskList } from './task-list';

export class Transaction extends ParentTaskList {
  _tan = true;
  _child = null;
  _ratio = 100;
  _paid = false;

  constructor(parent, child, tasks = []) {
    super(parent, tasks);
    this.child = child;
  }

  get sender() {
    return {
      name: `${this._parent.firstname} ${this._parent.lastname}`,
      bankAccount: `${this._parent.bankAccount}`
    };
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

  paid() {
    this._paid = true;
  }
  isPaid() {
    return this._paid === true;
  }

  get receiver() {
    return {
      name: `${this._child.firstname} ${this._child.lastname}`,
      bankAccount: `${this._child.bankAccount}`
    };
  }

  get amount() {
    let amount = 0;
    this.tasks.forEach(task => {
      amount += task.amount;
    });
    return amount;
  }
  get freeAmount() {
    return Math.round(this.amount * (this.ratio / 100 ));
  }

  get wishAmount() {
    return this.amount - this.freeAmount();
  }

  get purpose() {
    let list = [];
    this.tasks.forEach(task => {
      list.push(task.title);
    });
    return list.join(', ');
  }

  set child(child) {
    if (child instanceof Child) {
      this._child = child;
      this.ratio = child.ratio;
    } else {
      throw 'Type error!';
    }
  }
  get child() {
    return this._child;
  }
}
