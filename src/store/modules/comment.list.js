import api from '../../api'
import {showMsg} from '../actions'
import {
  COMMENT_LIST,
  SUCCESS_ADD_COMMENT,
  SUCCESS_ADD_REPLY,
  GET_COMMENT_LIST_FAILURE
} from '../types'

const state = {
  isFetching: false,
  items: []
}

const actions = {
  getCommentList({ commit },id){
    api.getFrontCommentList(id).then(response => {
      if(!response.ok){
        return commit(GET_COMMENT_LIST_FAILURE)
      }
      commit(COMMENT_LIST, { commentList: response.data.data })
    }, response => {
      commit(GET_COMMENT_LIST_FAILURE)
    })
  },
  addComment(store,data){
    api.addNewComment(data).then(response => {
      if(!response.ok){
        return showMsg(store,response.data.error_msg || '添加评论失败!')
      }
      showMsg(store,'添加评论成功!','success')
      store.commit(SUCCESS_ADD_COMMENT, { comment: response.data.data })
    }, response => {
      showMsg(store,response.data.error_msg || '添加评论失败!')
    })
  },
  addReply(store,{cid,data}){
    api.addNewReply(cid,data).then(response => {
      if(!response.ok){
        return showMsg(store,response.data.error_msg || '添加回复失败!')
      }
      showMsg(store,'添加回复成功!','success')
      store.commit(SUCCESS_ADD_REPLY, { cid:cid,replys: response.data.data })
    }, response => {
      showMsg(store,response.data.error_msg || '添加回复失败!')
    })
  }
}


const mutations = {
  [COMMENT_LIST](state,action){
    state.items = action.commentList
  },
  [SUCCESS_ADD_COMMENT](state,action){
    state.items.push(action.comment)
  },
  [SUCCESS_ADD_REPLY](state,action){
    state.items = state.items.map(item=>{
      if(item._id === action.cid){
        item.replys = action.replys
      }
      return item
    })
  },
  [GET_COMMENT_LIST_FAILURE](state){
    state.isFetching = false
    state.items = []
  }
}

export default {
  state,
  actions,
  mutations
}