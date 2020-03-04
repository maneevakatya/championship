import Vue from 'vue'
import App from './App.vue'
import router from './router';
const Stat = require('./system/statistics')
Vue.config.productionTip = false

Stat.Init();

new Vue({
  router,
  render: h => h(App)
}).$mount('.main')
