import Vue from 'vue'
import App from './App.vue'
import router from './router';
const Stat = require('./system/statistics')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Stat.Init();

new Vue({
  router,
  render: h => h(App)
}).$mount('.main')
