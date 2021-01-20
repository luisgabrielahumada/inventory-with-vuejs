import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuex from 'vuex'

import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false;
import {routes} from "./router/index";
const router = new VueRouter({
    mode:'history',
    routes
});
new Vue({
  render: h => h(App),
    router,
}).$mount('#app');
