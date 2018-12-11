// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/default.css'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)

// let token = window.localStorage.getItem('token')
// axios.defaults.headers.common['Token'] = token
axios.defaults.baseURL = 'http://www.newos.com/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 5000
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
