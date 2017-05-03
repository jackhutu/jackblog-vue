import api from '../../api'
import { PRENEXT_ARTICLE } from '../types'

const state = {
  next:{},
  prev:{}
}

const actions = {
  getPrenext({ commit,rootState }, id){
    return api.getPrenext(id,rootState.options.item).then(response => {
      if(response.ok){
        commit(PRENEXT_ARTICLE, { prenextArticle: response.data.data })
      }
    })
  }
}

const mutations = {
  [PRENEXT_ARTICLE](state,action){
    state.prev = action.prenextArticle.prev || {}
    state.next = action.prenextArticle.next || {}
  }
}

export default {
  state,
  actions,
  mutations
}