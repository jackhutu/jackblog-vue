import {
	ARTICLE_LIST,
	ARTICLE_DETAIL,
	PRENEXT_ARTICLE,
	ADD_ARTICLE_LIST,
	REQUEST_ARTICLE_LIST,
	TOGGLE_LIKE,
	GET_ARTICLE_LIST_FAILURE
} from '../mutation-types'

export const articleListInitialState = {
	isFetching: false,
	isMore: true,
	items: []
}
export const articleDetailInitialState = {}
export const prenextArticleInitialState = {'next':{},'prev':{}}

export const articleListMutations = {
	[REQUEST_ARTICLE_LIST](state){
		state.articleList = {...state.articleList, isFetching: true}
	},
	[ARTICLE_LIST](state,action){
		state.articleList = {
			...state.articleList,
			isFetching:false,
			isMore: action.isMore,
			items: action.articleList
		}
	},
	[GET_ARTICLE_LIST_FAILURE](state){
		state.articleList = {
			...state.articleList,
			isFetching:false
		}
	},
	[ADD_ARTICLE_LIST](state,action){
		state.articleList = {
			...state.articleList,
			isFetching:false,
			isMore: action.isMore,
			items: state.articleList.items.concat(action.articleList)
		}
	}
}

export const articleDetailMutations = {
	[ARTICLE_DETAIL](state,action){
		state.articleDetail = {...state.articleDetail, ...action.articleDetail }
	},
	[TOGGLE_LIKE](state,action){
		state.articleDetail = {...state.articleDetail, isLike:action.isLike, like_count: action.like_count}
	}
}

export const prenextArticleMutations = {
	[PRENEXT_ARTICLE](state,action){
		state.prenextArticle = {...state.prenextArticle, ...action.prenextArticle}
	}
}