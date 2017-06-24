import api from '../../api'
import {
  SUCCESS_GET_SNSLOGINS,
  FAILURE_GET_SNSLOGINS
} from '../types'

const state = {items:[]}

export const getSnsLogins = ({ commit }) => {

}
const actions = {
  getSnsLogins({ commit }){
    api.getSnsLogins().then(response => {
      if(!response.ok){
        return commit(FAILURE_GET_SNSLOGINS)
      }
      commit(SUCCESS_GET_SNSLOGINS, response.data.data)
    }, response => {
      commit(FAILURE_GET_SNSLOGINS)
    })
  }
}


const mutations = {
  [FAILURE_GET_SNSLOGINS](state){
    state.items = []
  },
  [SUCCESS_GET_SNSLOGINS](state,data){
    state.items = data
  }
}

export default {
  state,
  actions,
  mutations
}