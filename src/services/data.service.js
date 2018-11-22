import injector from 'vue-inject';
import Rx from 'rx-dom-ajax';
import { DATA, Completion, Role,Task } from '../models';

export class DataService {
  storageService = window.StorageService;
  data = {
    completions: [],
    users: [],
    tasks: []
  };

  map(from, to) {
    from = JSON.parse(JSON.stringify(from));
    to.completions = [];
    from.completions.forEach(completion => {
      to.completions.push(Completion.create(completion));
    });
    to.tasks = [];
    from.tasks.forEach(task => {
      to.tasks.push(Task.create(task));
    });
    to.users = [];
    from.users.forEach(user => {
      to.users.push(Role.create(user));
    });
    return to;
  }

  store(data) {
    return this.storageService.put(data);
  }

  restore(data) {
    return new Promise((resolve) => {
      StorageService.get()
      .then(data => {
        this.data = this.map(data, this.data);
      })
      .catch(() => {
        this.data = this.map(DATA, this.data);
      })
      .then(() => {
        console.log(this.data);
        resolve(this.data);
      });
    });
  }
}
injector.service('DataService', DataService);
