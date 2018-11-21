import { Child, Parent } from './role';
import { BankAccount } from './bank-account';
import { Task } from './task';
import { Wish } from './wish';
import { Completion } from './completion';


export * from './bank-account';
export * from './role';
export * from './task';
export * from './transaction';

const SOHN = new Child('male', 'Maik', new BankAccount('DE00999940000000001135', 'TESTBICXXXX'), [
  new Wish('Fahrrad', 45500),
  new Wish('Snowboard', 21500)
]);
console.log(SOHN);
SOHN.ratio = 25;
const MUTTER = new Parent('female', 'Sabrina', new BankAccount('DE00999940000000001128', 'TESTBICXXXX'));
const VATER = new Parent('male', 'David', new BankAccount('DE00999940000000001128', 'TESTBICXXXX'));

export const USERS = [SOHN, MUTTER, VATER];

let taskDone = new Task('Gassi gehen', 300, MUTTER);
taskDone.child = SOHN;
taskDone.done();
let taskDone2 = new Task('Einkaufen', 1000, MUTTER);
// taskDone2.child = SOHN;
// taskDone2.done();

export const TASKS = [
  new Task('Garage aufräumen', 1500, MUTTER),
  taskDone,
  taskDone2,
  new Task('Rasen mähen', 2000, VATER),
  new Task('Wäsche aufhängen', 300, MUTTER)
];

let completion = new Completion(MUTTER, [taskDone, taskDone2]);

export const COMPLETIONS = [completion];

export const DATA = {
  completions: COMPLETIONS,
  users: USERS,
  tasks: TASKS
};

// console.log(JSON.stringify(DATA));
