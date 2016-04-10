export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: require('./components/Home/index.vue')
    },
    '/login': {
      name: 'login',
      component: require('./components/Login/index.vue')
    },
    '/settings': {
      name: 'settings',
      component: require('./components/Settings/index.vue')
    },
    '/article/:aid':{
      name: 'article',
      component: require('./components/Article/index.vue')
    },
    '/apps': {
      name: 'apps',
      component: require('./components/Apps/index.vue')
    },
    '*': {
      component: require('./components/NotFound.vue')
    }
  })
  // router.beforeEach((transition)=>{
  //   transition.next()
  // })
}