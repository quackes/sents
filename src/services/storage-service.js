import injector from 'vue-inject';
import axios from "axios";
import {webSocket} from "rxjs/webSocket";
import {map, publishReplay, refCount, tap} from "rxjs/operators";
import {ReplaySubject} from "rxjs";

export class StorageService {

    urlPart = 'backend-team-vds2.symbioticon.opentry.me/storage';
    resource = 'http://' + this.urlPart
    resourceWs = 'ws://' + this.urlPart

    constructor(){
        this.httpClient = injector.get('HttpService')
    }

    get(){
        return axios.get(this.resource)
            .then(res => res.data)
    }

    put(value) {
        return axios.put(this.resource, value)
    }

    watch() {
        if(!this.session){
            this.session = new ReplaySubject(1)

                //.pipe(publishReplay(),refCount(1));
             webSocket(this.resourceWs)
                 .subscribe((data) => {
                     this.session.next(data);
                 })

            this.get().then(data => {
                this.session.next(data)
            });
        }
        return this.session;

    }
}

injector.service('StorageService', StorageService);
window.StorageService = new StorageService()