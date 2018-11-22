import { Child, Parent, Role } from './role';
import { BankAccount } from './bank-account';
import { Task } from './task';
import { Wish } from './wish';
import { Completion } from './completion';

export * from './bank-account';
export * from './completion';
export * from './role';
export * from './task';
export * from './transaction';

const BANK_BIC = 'TESTBICXXXX';

const BANK_ACCOUNT_CHILD = new BankAccount('DE00999940000000001135', BANK_BIC);
const BANK_ACCOUNT_PARENT = new BankAccount('DE00999940000000001128', BANK_BIC);

const SOHN = new Child('Carli', BANK_ACCOUNT_CHILD, [new Wish('Fahrrad', 45500), new Wish('Snowboard', 21500)]);
SOHN.ratio = 25;
const MUTTER = new Parent('Sabrina', BANK_ACCOUNT_PARENT);
const VATER = new Parent('David', BANK_ACCOUNT_PARENT);

export const USERS = [SOHN, MUTTER, VATER];

function doneTask(task) {
  if (task instanceof Task) {
    task.child = SOHN;
    task.done();
  }
}
function doneTasks(tasks) {
  if (Array.isArray(tasks)) {
    tasks.forEach(task => {
      doneTask(task);
    });
  }
}

export const DONE_TASKS = [new Task('Gassi gehen', 300, MUTTER), new Task('Einkaufen gehen', 1000, MUTTER)];
doneTasks(DONE_TASKS);

export const TASKS = [
  new Task('Garage aufräumen', 1500, MUTTER),
  new Task('Rasen mähen', 2000, VATER),
  new Task('Wäsche aufhängen', 300, MUTTER)
].concat(DONE_TASKS);

let completion = new Completion(MUTTER, DONE_TASKS);

export const COMPLETIONS = [completion];

export const DATA = {
  completions: COMPLETIONS,
  users: USERS,
  tasks: TASKS
};

// let data = JSON.parse(JSON.stringify(DATA));
// data.completions.forEach(completion => {
//   console.log(Completion.create(completion));
// });
// data.tasks.forEach(task => {
//   console.log(Task.create(task));
// });
// data.users.forEach(user => {
//   console.log(Role.create(user));
// });

// StorageService.put(DATA).then(() => {
//   StorageService.get().then(data => {
//     DATA.completions = [];
//     data.completions.forEach(completion => {
//       DATA.completions.push(Completion.create(completion));
//     });
    
//     DATA.tasks = [];
//     data.tasks.forEach(task => {
//       DATA.tasks.push(Task.create(task));
//     });
    
//     DATA.users = [];
//     data.users.forEach(user => {
//       DATA.users.push(Role.create(user));
//     });

//     console.log(DATA);
//   });
// });
