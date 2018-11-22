// @flow
import "@babel/polyfill";
import { DATA } from "./models";
import Vue from "vue";
import "./plugins/vuetify";
import injector from "vue-inject";
import VueRouter from "vue-router";
import "./pipes/currency";
import "./pipes/percent";
import "./services/ahoi/ahoi-service";
import "./services/data.service";
import VueRx from "vue-rx";

import App from "./App.vue";
import Welcome from "./components/pages/Welcome.vue";
import Login from "./components/pages/Login.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import Wish from "./components/pages/Wish.vue";
import WishComplete from "./components/pages/WishComplete.vue";
import Celebrate from "./components/pages/Celebrate.vue";
import Earn from "./components/pages/Earn.vue";
import NewTask from "./components/pages/NewTask.vue";
import CashUp from "./components/pages/CashUp.vue";
import Settings from "./components/pages/Settings.vue";

Vue.config.productionTip = false;

Vue.use(VueRx);
Vue.use(injector);
Vue.use(VueRouter);

Vue.use(require("vue-currency-filter"));
Vue.use(require("vue-moment"));

const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: "/", component: Welcome },
    { path: "/login", component: Login },
    { path: "/dashboard", component: Dashboard },
    { path: "/wish", component: Wish },
    { path: "/wish-complete", component: WishComplete },
    { path: "/celebrate", component: Celebrate },
    { path: "/earn", component: Earn },
    { path: "/new-task", component: NewTask },
    { path: "/cash-up", component: CashUp },
    { path: "/settings", component: Settings }
  ]
});

window.router = router;

Promise.all([window.ahoi.init(), window.StorageService.put(DATA)])
  .then(responses => {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  })
  .catch(() => {
    console.warn("Application does not run.");
  });
