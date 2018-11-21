// @flow

import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import injector from 'vue-inject';
import VueRouter from 'vue-router';
import App from './App.vue'
import './pipes/currency';

Vue.config.productionTip = false;

Vue.use(injector);
Vue.use(VueRouter);
Vue.use(require('vue-currency-filter'));
Vue.use(require('vue-moment'));

const router = new VueRouter();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
