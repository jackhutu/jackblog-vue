import api from '../../api'
import {
  GET_TAG_LIST_SUCCESS,
  GET_TAG_LIST_FAILURE
} from '../types'

const state = {
  items:[]
}

const actions = {
  getTagList({ commit }){
    api.getTagList().then(response => {
      if(!response.ok){
        return commit(GET_TAG_LIST_FAILURE)
      }
      commit(GET_TAG_LIST_SUCCESS, { tagList: response.data.data })
    }, response => {
      commit(GET_TAG_LIST_FAILURE)
    })
  }
}

const mutations = {
  [GET_TAG_LIST_FAILURE](state){
    state.items = []
  },
  [GET_TAG_LIST_SUCCESS](state,action){
    state.items = action.tagList
  }
}

export default {
  state,
  actions,
  mutations
}