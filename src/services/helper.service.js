import { Child, Task, TASKS } from '../models';
import { Completion } from '../models/completion';

export function getClosedTasks() {
  let tasks = [];
  // TODO
  return TASKS;
}
export function numberOfOpenTasks() {
  let counter = 0;
  TASKS.forEach((task) => {
    if (task instanceof Task && task.child === null) {
      counter +=1;
    }
  });
  return counter;
}

export function getOpenAmount() {
  let amount = 0;
  TASKS.forEach((task) => {
    if (task instanceof Task && task.child === null) {
      amount += task.amount;
    }
  });
  return amount;
}

export function getFreeAmount(completions, child) {
  let amount = 0;
  if (Array.isArray(completions) && child instanceof Child) {
    completions.forEach(completion => {
      if (completion instanceof Completion) {
        let transactions = completion.transactions;
        for(let property in transactions) {
          if (transactions.hasOwnProperty(property) && transactions[property].isPaid()) {
            transactions[property].tasks.forEach(task => {
              if (task instanceof Task && task.child === child && task.isDone()) {
                amount += task.amount * transactions[property].ratio / 100;
              }
            });
          }
        }
      }
    });
  }
  return amount;
}

export function getWishAmount(completions, child) {
  let amount = 0;
  if (Array.isArray(completions) && child instanceof Child) {
    completions.forEach(completion => {
      if (completion instanceof Completion) {
        let transactions = completion.transactions;
        for(let property in transactions) {
          if (transactions.hasOwnProperty(property) && transactions[property].isPaid()) {
            transactions[property].tasks.forEach(task => {
              if (task instanceof Task && task.child === child && task.isDone()) {
                amount += task.amount * (100 - transactions[property].ratio) / 100;
              }
            });
          }
        }
      }
    });
  }
  return amount;
}

export function getFullAmount(completions, child) {
  return getFreeAmount(completions, child) + getWishAmount(completions, child);
}