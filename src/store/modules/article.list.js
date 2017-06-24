import api from '../../api'
import {
  ARTICLE_LIST,
  ADD_ARTICLE_LIST,
  REQUEST_ARTICLE_LIST,
  GET_ARTICLE_LIST_FAILURE
} from '../types'

const state = {
  isFetching: false,
  isMore: true,
  items: []
}

const actions = {
  getArticleList({ commit }, {options, isAdd=false}){
    commit(REQUEST_ARTICLE_LIST)
    api.getFrontArticleList(options).then(response => {
      if(!response.ok){
        return commit(GET_ARTICLE_LIST_FAILURE)
      }
      const json = response.data
      const isMore = !(json.data.length < options.itemsPerPage)
      isAdd
        ? commit(ADD_ARTICLE_LIST,{
          articleList: json.data,
          isMore:isMore
        })
        : commit(ARTICLE_LIST,{
          articleList: json.data,
          isMore:isMore
        })
    }, response => {
      commit(GET_ARTICLE_LIST_FAILURE)
    })
  }
}

const mutations = {
  [REQUEST_ARTICLE_LIST](state){
    state.isFetching = true
  },
  [ARTICLE_LIST](state,action){
    state.isFetching = false
    state.isMore = action.isMore
    state.items = action.articleList
  },
  [GET_ARTICLE_LIST_FAILURE](state){
    state.isFetching = false
  },
  [ADD_ARTICLE_LIST](state,action){
    state.isFetching = false
    state.isMore = action.isMore
    state.items = [...state.items, ...action.articleList]
  }
}

export default {
  state,
  actions,
  mutations
}