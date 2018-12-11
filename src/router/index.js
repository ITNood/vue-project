import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: function () {
        return import('../ivews/login')
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: function () {
        return import('../ivews/home')
      },
      meta: {
        requireAuth:true//判断是否需要登录
      }
    },
    {
      path: '/me',
      name: 'Me',
      component: function () {
        return import('../ivews/me')
      }
    }
  ]
})


