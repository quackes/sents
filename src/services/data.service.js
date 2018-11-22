import injector from 'vue-inject';
import { DATA, Completion, Role,Task } from '../models';
import {map} from "rxjs/operators";

export class DataService {
  storageService = window.StorageService;
  data = {
    completions: [],
    users: [],
    tasks: []
  };


  map(from) {

    let to = this.data;

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

  store() {
    console.log(this.data);
    return this.storageService.put(this.data);
  }

  dataObs() {
    if(!this._dataObs){

        this._dataObs= this.storageService.watch()
            .pipe(
                map(data =>{
                    return this.map( data, this.data)
                }));
    }
    return this._dataObs
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
