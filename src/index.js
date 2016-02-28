import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import configRouter from './routes'
import filters from './utils/filters'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'jackblog-sass/dist/index.css'
import 'vue-toastr/dist/vue-toastr.css'

Vue.use(VueRouter)
Vue.use(VueValidator)
Vue.config.warnExpressionErrors = false
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

configRouter(router)

router.start(Vue.extend(App), '#root')
window.router = router