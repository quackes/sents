import injector from 'vue-inject';

import axios from 'axios'

import {config} from './ahoi-config'

let httpClient =  axios.create({
    baseURL: 'https://banking-sandbox.starfinanz.de',
    timeout: 5000,
    headers: {
        //'X-Auth-Token': 'f2b6637ddf355a476918940289c0be016a4fe99e3b69c83d',
        'Content-Type': 'application/json'
    }
})


class AhoiService{
    init: function(){

        let apiCredentials = btoa(`${config.clientId}:${config.clientSecret}`);
        httpClient.post('/auth/v1/oauth/token?grant_type=client_credentials', null, {
            headers:{
                'Authorization': `Basic ${apiCredentials}`
            }
        });

    }
}
injector.service('ahoiService', AhoiService);
