import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import { state,mutations } from './mutations'
import middlewares from './middlewares'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
Vue.config.debug = debug


export default new Vuex.Store({
  state,
  actions,
  mutations,
  strict: debug,
  middlewares
})
