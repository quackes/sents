import { Child, Parent } from './role';
import { BankAccount } from './bank-account';
import { Task } from './task';
import { Wish } from './wish';

export * from './bank-account';
export * from './role';
export * from './task';
export * from './transaction';

const SOHN = new Child('male', 'Maik', new BankAccount('DE00999940000000001135', 'TESTBICXXXX'), [
  new Wish('Fahrrad', 45500),
  new Wish('Snowboard', 21500)
]);
const MUTTER = new Parent('female', 'Sabrina', new BankAccount('DE00999940000000001128', 'TESTBICXXXX'));
const VATER = new Parent('male', 'David', new BankAccount('DE00999940000000001128', 'TESTBICXXXX'));

export const USERS = [
  SOHN,
  MUTTER,
  VATER
];

export const TASKS = [
  new Task('Garage aufräumen', 1500, MUTTER),
  new Task('Gassi gehen', 300, VATER).done(),
  new Task('Rasen mähen', 2000, VATER),
  new Task('Wäsche aufhängen', 300, MUTTER)
];

export const DATA = {
  users: USERS,
  tasks: TASKS
};
