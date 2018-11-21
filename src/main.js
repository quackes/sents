// @flow

import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import injector from 'vue-inject';
import VueRouter from 'vue-router';
import App from './App.vue'
import './pipes/currency';
import Dashboard from './components/pages/Dashboard.vue';

Vue.config.productionTip = false;

Vue.use(injector);
Vue.use(VueRouter);
Vue.use(require('vue-currency-filter'));
Vue.use(require('vue-moment'));

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Dashboard }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
