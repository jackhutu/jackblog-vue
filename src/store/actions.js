import api from '../api'
import * as types from './types'
import { saveCookie,signOut } from '../utils/authService'
import img from '../assets/images/shanghai.jpg'

export const showMsg = ({commit}, content,type='error') => {
  commit(types.SHOW_MSG, {content:content,type:type})
}

export const hideMsg = ({commit}) => {
  commit(types.HIDE_MSG)
}

export const changeStyleMode = ({commit}) => {
  commit(types.CHANGE_STYLE_MODE)
}

export const getCaptchaUrl = ({commit}) => {
  commit(types.GET_CAPTCHAURL)
}

export const getIndexImage = ({commit}) => {
  api.getIndexImage().then(response => {
    if(!response.ok){
      return commit(types.GET_INDEX_IMG, {indexImg: img})
    }
    commit(types.GET_INDEX_IMG, {indexImg: response.data.img})
  }, response => {
    commit(types.GET_INDEX_IMG, {indexImg: img})
  })
}

export const logout = ({commit, router}) => {
  signOut()
  commit(types.LOGOUT_USER)
  window.location.pathname = '/'
}

export const getSnsLogins = ({ commit }) => {
  api.getSnsLogins().then(response => {
    if(!response.ok){
      return commit(types.FAILURE_GET_SNSLOGINS)
    }
    commit(types.SUCCESS_GET_SNSLOGINS, response.data.data)
  }, response => {
    commit(types.FAILURE_GET_SNSLOGINS)
  })
}

export const localLogin = (store, userInfo) => {
  api.localLogin(userInfo).then(response => {
    if(!response.ok){
      getCaptchaUrl(store)
      return showMsg(store,response.data.error_msg || '登录失败')
    }
    const token = response.data.token
    saveCookie('token',token)
    getUserInfo(store)
    store.commit(types.LOGIN_SUCCESS, {token: token })
    showMsg(store,'登录成功,欢迎光临!','success')
    store.router.push({path:'/'})
  }, response => {
    getCaptchaUrl(store)
    showMsg(store,response.data.error_msg || '登录失败')
  })
}
export const getUserInfo = ({ commit }) => {
  api.getMe().then(response => {
    if(!response.ok){
      return commit(types.USERINFO_FAILURE)
    }
    commit(types.USERINFO_SUCCESS, { user: response.data })
  }, response => {
    commit(types.USERINFO_FAILURE)
  })
}

export const updateUser = (store,userInfo) => {
  api.mdUser(userInfo).then(response => {
    if(!response.ok){
      return showMsg(store,'更新用户资料失败!')
    }
    store.commit(types.UPDATE_USER_SUCCESS, { user: response.data.data })
    showMsg(store,'更新资料成功!','success')
  }, response => {
    showMsg(store,'更新用户资料失败!')
  })
}

export const getTagList = ({ commit }) => {
  api.getTagList().then(response => {
    if(!response.ok){
      return commit(types.GET_TAG_LIST_FAILURE)
    }
    commit(types.GET_TAG_LIST_SUCCESS, { tagList: response.data.data })
  }, response => {
    commit(types.GET_TAG_LIST_FAILURE)
  })
}

//更改options
export const changeOptions = ({ commit },options) => {
  commit(types.CHANGE_OPTIONS, { options: options })
}
//getArticleList
export const getArticleList = ({ commit }, options, isAdd) => {
  commit(types.REQUEST_ARTICLE_LIST)
  api.getFrontArticleList(options).then(response => {
    if(!response.ok){
      return commit(types.GET_ARTICLE_LIST_FAILURE)
    }
    const json = response.data
    const isMore = !(json.data.length < options.itemsPerPage)
    isAdd
      ? commit(types.ADD_ARTICLE_LIST,{
        articleList: json.data,
        isMore:isMore
      })
      : commit(types.ARTICLE_LIST,{
        articleList: json.data,
        isMore:isMore
      })
  }, response => {
    commit(types.GET_ARTICLE_LIST_FAILURE)
  })
}


export const getArticleDetail = ({ commit }, id, user) => {
  api.getFrontArticle(id).then(response => {
    if(response.ok){
      let isLike = false
      let article = response.data.data
      if(user){
        user.likes.map(item=>{
          if(item.toString() === article._id){
            isLike = true
          }
        })
      }
      commit(types.ARTICLE_DETAIL, {
        articleDetail: {...article,isLike:isLike}
      })
    }
  })
}
//getPrenext
export const getPrenext = ({ commit,state }, id) => {
  api.getPrenext(id,state.options.item).then(response => {
    if(response.ok){
      commit(types.PRENEXT_ARTICLE, { prenextArticle: response.data.data })
    }
  })
}

//toggleLike
export const toggleLike = ({ commit }, id) => {
  api.toggleLike(id).then(response => {
    const json = response.data
    if(response.ok){
      commit(types.TOGGLE_LIKE, { 
        like_count: json.count,
        isLike: json.isLike 
      })
    }
  })
}


export const getCommentList = ({ commit },id) => {
  api.getFrontCommentList(id).then(response => {
    if(!response.ok){
      return commit(types.GET_COMMENT_LIST_FAILURE)
    }
    commit(types.COMMENT_LIST, { commentList: response.data.data })
  }, response => {
    commit(types.GET_COMMENT_LIST_FAILURE)
  })
}

//addComment
export const addComment = (store,data) => {
  api.addNewComment(data).then(response => {
    if(!response.ok){
      return showMsg(store,response.data.error_msg || '添加评论失败!')
    }
    showMsg(store,'添加评论成功!','success')
    store.commit(types.SUCCESS_ADD_COMMENT, { comment: response.data.data })
  }, response => {
    showMsg(store,response.data.error_msg || '添加评论失败!')
  })
}

export const addReply = (store,cid,data) => {
  api.addNewReply(cid,data).then(response => {
    if(!response.ok){
      return showMsg(store,response.data.error_msg || '添加回复失败!')
    }
    showMsg(store,'添加回复成功!','success')
    store.commit(types.SUCCESS_ADD_REPLY, { cid:cid,replys: response.data.data })
  }, response => {
    showMsg(store,response.data.error_msg || '添加回复失败!')
  })
}

//getApps
export const getApps = ({ commit }) => {
  api.getApps().then(response => {
    if(!response.ok){
      return commit(types.FAILURE_GET_APPS)
    }
    commit(types.SUCCESS_GET_APPS, { apps: response.data.data })
  }, response => {
    commit(types.FAILURE_GET_APPS)
  })
}