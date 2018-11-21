// @flow

import injector from 'vue-inject';
import Rx from 'rx-dom-ajax';

export class HttpService {
  apiRestPath = '/api/rest/1.0/';

  request(method, resource, payload = {}) {
    return new Promise((resolve, reject) => {
      Rx.DOM.ajax({
        body: payload,
        method: method,
        responseType: 'json',
        url: `${this.apiRestPath}${resource}`
      }).subscribe(
        (response) => {
          resolve(response.response);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  get(resource) {
    return this.request('GET', resource);
  }

  post(resource, payload) {
    return this.request('POST', resource, payload);
  }

  put(resource, payload) {
    return this.request('put', resource, payload);
  }
}
injector.service('HttpService', HttpService);
