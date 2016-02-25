import { authInitialState, authMutations } from './modules/auth'
import { globalValInitialState, globalValMutation } from './modules/globalVal'
import { loginsInitialState, loginsMutations } from './modules/sns'
import { tagsInitialState, tagsMutations } from './modules/tag'
import { optionsInitialState, optionsMutations } from './modules/options'
import { commentListInitialState, commentListMutations } from './modules/comment'
import { appsInitialState, appsMutations } from './modules/apps'
import { 
	articleListInitialState, 
	articleDetailInitialState,
	prenextArticleInitialState,
	articleListMutations,
	articleDetailMutations,
	prenextArticleMutations
} from './modules/article'

export const state = {
	auth: authInitialState,
	globalVal: globalValInitialState,
  logins: loginsInitialState,
  tagList: tagsInitialState,
  options: optionsInitialState,
  articleList: articleListInitialState,
  articleDetail: articleDetailInitialState,
  prenextArticle: prenextArticleInitialState,
  commentList: commentListInitialState,
  apps: appsInitialState
}

export const mutations = [ 
	authMutations, 
	globalValMutation, 
	loginsMutations, 
	tagsMutations, 
	optionsMutations ,
	articleListMutations,
	articleDetailMutations,
	prenextArticleMutations,
	commentListMutations,
	appsMutations
]
