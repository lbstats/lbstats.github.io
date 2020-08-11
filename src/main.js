import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { Datetime } from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

Vue.component('datetime', Datetime);

Vue.config.productionTip = false;
Vue.prototype.zip = window.zip;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
