import injector from 'vue-inject';
import axios from "axios";
import {webSocket} from "rxjs/webSocket";
import {map, publishReplay, refCount, tap} from "rxjs/operators";

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
            this.session =  webSocket(this.resourceWs)
                .pipe(publishReplay(),refCount(1))
        }
        return this.session;

    }
}

injector.service('StorageService', StorageService);
window.StorageService = new StorageService()