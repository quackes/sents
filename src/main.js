// @flow

import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import injector from 'vue-inject';
import App from './App.vue'
import './pipes/currency';

Vue.config.productionTip = false;

Vue.use(injector);
Vue.use(require('vue-currency-filter'));
Vue.use(require('vue-moment'));

new Vue({
  render: h => h(App),
}).$mount('#app');
