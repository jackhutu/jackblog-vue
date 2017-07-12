import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('components/Home/index')
const Login = () => import('components/Login/index')
const Settings = () => import('components/Settings/index')
const Article = () => import('components/Article/index')
const Apps = () => import('components/Apps/index')
const NotFound = () => import('components/NotFound')

// const Home = r => require.ensure([], () => r(require('components/Home/index')), 'home')
// const Login = r => require.ensure([], () => r(require('components/Login/index')), 'login')
// const Settings = r => require.ensure([], () => r(require('components/Settings/index')), 'settings')
// const Article = r => require.ensure([], () => r(require('components/Article/index')), 'article')
// const Apps = r => require.ensure([], () => r(require('components/Apps/index')), 'apps')
// const NotFound = r => require.ensure([], () => r(require('components/NotFound')), 'notfound')
import {isLogin} from './utils/authService'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // scrollBehavior: true,  
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/article/:aid',
      name: 'article',
      component: Article,
      meta: {
        goTop: true
      }      
    },
    {
      path: '/apps',
      name: 'apps',
      component: Apps
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.goTop)) {
    window.scroll(0, 0) 
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLogin()) {
      next({path: '/login'})
    }
  }

  next()
})
export default router