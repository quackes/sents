import { Transaction } from './transaction';
import { ParentTaskList } from './task-list';

export class Completion extends ParentTaskList {
  get transactions() {
    let transactions = {};
    this.tasks.forEach(task => {
      if (!(transactions[task.child] instanceof Transaction)) {
        transactions[task.child] = new Transaction(this.parent, task.child);
      }
      transactions[task.child].addTask(task);
      transactions[task.child].paid();
    });
    return transactions;
  }
}
