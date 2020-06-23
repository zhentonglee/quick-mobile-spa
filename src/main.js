import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import * as dd from 'dingtalk-jsapi';
import 'amfe-flexible';
// import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$dd = dd;

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app');
