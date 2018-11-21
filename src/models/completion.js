import { Transaction } from './transaction';
import { ParentTaskList } from './task-list';

export class Completion extends ParentTaskList {
  constructor(parent, tasks = []) {
    super(parent, tasks);
  }

  get transactions() {
    let transactions = {};
    this.task.forEach(task => {
      let transaction = transactions[task.child];
      if (!(transaction instanceof Transaction)) {
        transaction = new Transaction(parent, task.child);
      }
      transaction.addTask(task);
    });
    return transactions;
  }
}
