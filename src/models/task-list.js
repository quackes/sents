import { Task } from './task';
import { Parent } from './role';

export class ParentTaskList {
  
  _parent = null;
  _tasks = [];

  constructor(parent, tasks = []) {
    this.parent = parent;
    this.tasks = tasks;
  }

  set parent(parent) {
    if (parent instanceof Parent) {
      this._parent = parent;
    } else {
      throw 'Type error!';
    }
  }
  get parent() {
    return this._parent;
  }

  set tasks(tasks) {
    this.setTask(tasks);
  }
  get tasks() {
    return this._tasks;
  }
  setTask(tasks) {
    if (Array.isArray(tasks)) {
      tasks.forEach(task => {
        this.addTask(task);
      });
    } else {
      throw 'Type error!';
    }
  }
  addTask(task) {
    if (task instanceof Task && task.parent === this.parent && task.open === false && task.paid === false) {
      this._tasks.push(task);
    }
  }
}
