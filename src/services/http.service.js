import injector from 'vue-inject';
import Rx from 'rx-dom-ajax';

export class HttpService {

  request( method, url, payload, headers): Promise {
    return new Promise((resolve, reject) => {
      Rx.DOM.ajax({
        body: payload,
        method: method,
        responseType: 'json',
        url: `${url}`,
        headers: headers
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

  get(url, headers){
    return this.request('GET', url, headers);
  }

  post(url, payload, headers) {
    return this.request('POST', url, payload, headers);
  }

  put(url, payload, headers) {
    return this.request('put', url, payload, headers);
  }
}
injector.service('HttpService', HttpService);
