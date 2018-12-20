import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: ()=> {
        return import('../ivews/login')
      }
    },
  
    {
      path: '/home',
      name: 'Home',
      component: ()=>{
        return import('../ivews/home')
      },
      meta: {
        requireAuth:true//判断是否需要登录
      }
    },

    {
      path: '/me',
      name: 'Me',
      component: ()=> {
        return import('../ivews/me')
      }
    },
    
    {
      path: '/market',
      name: 'Market',
      component: ()=>{
        return import('../ivews/market')
      }
    },
    {
      path: '/news',
      name: 'News',
      component: ()=> {
        return import('../ivews/news')
      }
    },
    {
      path: '/details',
      name: 'Details',
      component: ()=> {
        return import ('../ivews/details')
      }
    },
    {
      path: '/container',
      name: 'Container',
      component: ()=>{
        return import ('../ivews/container')
      }
    },
    {
      path: '/personalSet',
      name: 'PersonalSet',
      component:()=> {
        return import('../ivews/personalSet')
      }
    }
   
  ]
})


