import api from '../../api'
import {
  ARTICLE_DETAIL,
  TOGGLE_LIKE
} from '../types'

const state = {
  item:{}
}
// actions
const actions = {
  getArticleDetail ({ commit },id,user){
    api.getFrontArticle(id).then(response => {
      if(response.ok){
        let isLike = false
        const article = response.data.data
        if(user){
          user.likes.map(item=>{
            if(item.toString() === article._id){
              isLike = true
            }
          })
        }
        commit(ARTICLE_DETAIL, {
          articleDetail: {...article,isLike:isLike}
        })
      }
    })
  },
  toggleLike({ commit }, id){
    api.toggleLike(id).then(response => {
      const json = response.data
      if(response.ok){
        commit(TOGGLE_LIKE, { 
          like_count: json.count,
          isLike: json.isLike 
        })
      }
    })
  }
}

const mutations = {
  [ARTICLE_DETAIL](state,action){
    state.item = {...state.item, ...action.articleDetail }
  },
  [TOGGLE_LIKE](state,action){
    state.item = {...state.item, isLike:action.isLike, like_count: action.like_count}
  }
}

export default {
  state,
  actions,
  mutations
}