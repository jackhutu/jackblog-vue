import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'
import filters from './utils/filters'
import 'font-awesome/css/font-awesome.css'
import './assets/styles/index.scss'
import 'vue-toastr/dist/vue-toastr.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueValidator)
Vue.config.warnExpressionErrors = false
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

router.map({
  '/login': {
    name: 'login',
    component: require('./components/Login/index.vue')
  },
  '/settings': {
    name: 'settings',
    component: require('./components/Settings/index.vue')
  },
  '/': {
    name: 'home',
    component: require('./components/Home/index.vue')
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

router.beforeEach((transition)=>{
  console.log(transition.to.path);
  transition.next()
})

router.start(Vue.extend(App), '#root')
window.router = router