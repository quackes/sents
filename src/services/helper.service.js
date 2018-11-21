import { Child, Task } from '../models';
import { Completion } from '../models/completion';

export function getFreeAmount(completions, child) {
  let amount = 0;
  if (Array.isArray(completions) && child instanceof Child) {
    completions.forEach(completion => {
      if (completion instanceof Completion) {
        completion.tasks.forEach(task => {
          if (task instanceof Task && task.child === child && task.done) {
            amount += task.amount;
          }
        });
      }
    });
  }
  return amount;
}
