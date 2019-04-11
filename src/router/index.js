import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => {
        return import('../ivews/login')
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: () => {
        return import('../ivews/home')
      },
      meta: {
        requireAuth: true//判断是否需要登录
      }
    },

    {
      path: '/me',
      name: 'Me',
      component: () => {
        return import('../ivews/me')
      }
    },

    {
      path: '/market',
      name: 'Market',
      component: () => {
        return import('../ivews/market')
      }
    },
    {
      path: '/news',
      name: 'News',
      component: () => {
        return import('../ivews/news')
      }
    },
    {
      path: '/details',
      name: 'Details',
      component: () => {
        return import('../ivews/details')
      }
    },
    {
      path: '/container',
      name: 'Container',
      component: () => {
        return import('../ivews/container')
      }
    },
    {
      path: '/personalSet',
      name: 'PersonalSet',
      component: () => {
        return import('../ivews/personalSet')
      }
    },
    {
      path: '/test',
      name: 'Test',
      component: () => {
        return import('../ivews/test')
      }
    },
    {
      path: '/lang',
      name: 'Lang',
      component: () => {
        return import('../ivews/lang')
      }
    },
    {
      path: '/switch',
      name: 'Switch',
      component: () => {
        return import('../ivews/switch')
      }
    },
    {
      path: '/timePicker',
      name: 'TimePicker',
      component: () => {
        return import('../ivews/timePicker')
      }
    },
    {
      path: '/messageBox',
      name: 'MessageBox',
      component: () => {
        return import('../ivews/messageBox')
      }
    },
    {
      path: '/scroller',
      name: 'Scroller',
      component: () => {
        return import('../ivews/scroller')
      }
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: () => {
        return import('../ivews/tabs')
      }
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: () => {
        return import('../ivews/dialog')
      }
    },
    {
      path: '/timeLine',
      name: 'TimeLine',
      component: () => {
        return import('../ivews/timeLine')
      }
    },
    {
      path: '/navMenu',
      name: 'NavMenu',
      component: () => {
        return import('../ivews/navMenu')
      }
    }
  ]
})


