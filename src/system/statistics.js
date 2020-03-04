import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueYandexMetrika from 'vue-yandex-metrika'
import router from '../router';
import data from '../../data'



const isProd = process.env.VUE_APP_ANALYTICS === 'production'
function Init() {

  const YM_ID = +data.statistics.YM_ID || 12345678;
  const GA_ID = data.statistics.GA_ID || 'UA-00000000-00';

  if ((isProd && GA_ID != "UA-00000000-00") || !isProd) {
    Vue.use(VueAnalytics, {
      id: GA_ID,
      router,
      commands: {
        click(category, action, label) {
          this.$ga.event(category, action, label)
        }
      },
      debug: {
        enabled: !isProd,
        sendHitTask: isProd
      },

    })
  }
  if ((isProd && YM_ID != 12345678) || !isProd) {
    Vue.use(VueYandexMetrika, {
      id: YM_ID,
      router: router,
      env: isProd? 'production' : 'development',
      debug: !isProd,
      scriptSrc: 'https://mc.yandex.ru/metrika/tag.js',
      options: {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      }
    })
  }
  /*eslint-disable */
  if (!isProd) console.log("YM_ID: " + YM_ID)
  /*eslint-enable */
}



var on_load_mixin = {
  mounted() {
    if (data.statistics.PAGE_LOAD_EVENT) {
      let v = this;
      window.addEventListener("load", function () {
        v.$ga.event("internal", "load", "page_loaded");
      });
    }
  }
}
export { Init, on_load_mixin };
