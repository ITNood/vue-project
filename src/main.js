// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/default.css'
import 'swiper/dist/css/swiper.css'
import VueScroller from "vue-scroller";
import i18n from './i18n/i18n'

Vue.use(VueScroller);

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  el: '#app',
  render: h => h(App)
})
