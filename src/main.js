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
// let AUTH_TOKEN = (function () {
//   return localStorage.getItem("token");
// })();
// override axios's default accept
// axios.defaults.baseURL = 'http://www.newos.com/'
// let token = window.localStorage.getItem('token')
// axios.defaults.headers.common['Token'] = token
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 5000
Vue.prototype.$axios = axios


// var instance = axios.create({
//   method:'POST',//请求方式
//   baseURL: 'http://www.newos.com/',//请求地址
//   timeout: 5000,//请求时间
//   responseType:'json',//服务器响应的数据类型
//   headers: { 'Token': window.localStorage.getItem('token') },//将被发送的自定义请求头
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
