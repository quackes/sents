// @flow
import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import injector from 'vue-inject';
import VueRouter from 'vue-router';
import App from './App.vue';
import './pipes/currency';
import './pipes/percent';
import './services/ahoi/ahoi-service';
import Welcome from "./components/pages/Welcome.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import Wish from "./components/pages/Wish.vue";
import Earn from "./components/pages/Earn.vue";
import Settings from "./components/pages/Settings.vue";
import { DATA } from './models';
import VueRx from 'vue-rx';


Vue.config.productionTip = false;

Vue.use(VueRx);
Vue.use(injector);
Vue.use(VueRouter);
Vue.use(require('vue-currency-filter'));
Vue.use(require('vue-moment'));

const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: "/", component: Welcome },
    { path: "/dashboard", component: Dashboard },
    { path: "/wish", component: Wish },
    { path: "/earn", component: Earn },
    { path: "/settings", component: Settings }
  ]
});

window.ahoi
  .init()
  .then(() => {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  })
  .catch(() => {});
