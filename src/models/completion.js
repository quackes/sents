import { Transaction } from './transaction';
import { ParentTaskList } from './task-list';
import { Task } from './task';
import { Role } from './role';

const CACHE = {};

export class Completion extends ParentTaskList {

  static create(properties) {
    if (!(CACHE[properties.uuid] instanceof Task)) {
      CACHE[properties.uuid] = new Completion(Role.create(properties._parent));
      properties._tasks.forEach((task) => {
        CACHE[properties.uuid].addTask(Task.create(task));
      });
    }
    CACHE[properties.uuid].uuid = properties.uuid;
    return CACHE[properties.uuid];
  }

  get transactions() {
    let transactions = {};
    this.tasks.forEach(task => {
      if (!(transactions[task.child] instanceof Transaction)) {
        transactions[task.child] = new Transaction(this.parent, task.child);
      }
      transactions[task.child].addTask(task);
    });
    return transactions;
  }
}
