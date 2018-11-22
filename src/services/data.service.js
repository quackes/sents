import injector from 'vue-inject';
import Rx from 'rx-dom-ajax';

export class DataService {
  storageService = window.StorageService;

  restore(data) {
    
    return {};
  }
}
injector.service('DataService', DataService);
