import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'
import './validators'
import './filters'
import App from 'components/App'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'jackblog-sass/dist/index.css'
import 'vue-toast/dist/vue-toast.min.css'
import './assets/styles/index.css'

sync(store, router)

new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})