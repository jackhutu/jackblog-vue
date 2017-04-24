// const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
// const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
// const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
// const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
// const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')

import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home/index'
import Login from 'components/Login/index'
import Settings from 'components/Settings/index'
import Article from 'components/Article/index'
import Apps from 'components/Apps/index'
import NotFound from 'components/NotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: true,  
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
      component: Settings
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

router.beforeEach((route, redirect, next) => {
  if (route.matched.some(record => record.meta.goTop)) {
    window.scroll(0, 0)
    next()
  } else {
    next()
  }
})
export default router