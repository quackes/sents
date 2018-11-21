// @flow

import injector from 'vue-inject';
import Rx from 'rx-dom-ajax';
import { Observable } from 'rx';

export class HttpService {
  apiRestPath: string = '/api/rest/1.0/';

  request(method: string, resource: string, payload: Object = {}): Observable {
    return new Promise((resolve: Function, reject: Function) => {
      Rx.DOM.ajax({
        body: payload,
        method: method,
        responseType: 'json',
        url: `${this.apiRestPath}${resource}`
      }).subscribe(
        (response: Object) => {
          resolve(response.response);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  get(resource: string): Observable {
    return this.request('GET', resource);
  }

  post(resource: string, payload: Object): Observable {
    return this.request('POST', resource, payload);
  }

  put(resource: string, payload: Object): Observable {
    return this.request('put', resource, payload);
  }
}
injector.service('HttpService', HttpService);
