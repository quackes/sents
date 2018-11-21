import { Transaction } from './transaction';
import { ParentTaskList } from './task-list';

export class Completion extends ParentTaskList {
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
