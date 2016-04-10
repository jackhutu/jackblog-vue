import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'
import apps from './modules/apps'
import articleList from './modules/article.list'
import prenextArticle from './modules/article.prenext'
import articleDetail from './modules/article.detail'
import auth from './modules/auth'
import commentList from './modules/comment.list'
import globalVal from './modules/global.val'
import options from './modules/options'
import logins from './modules/logins'
import tagList from './modules/tag.list'
import showmsg from './modules/showmsg'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
  modules: {
    apps,
    articleList,
    prenextArticle,
    articleDetail,
    auth,
    commentList,
    globalVal,
    options,
    logins,
    tagList,
    showmsg
  },
  strict: debug,
  middlewares
})
