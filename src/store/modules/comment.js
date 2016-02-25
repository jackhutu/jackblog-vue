import {
	COMMENT_LIST,
	FAILURE_ADD_COMMENT,
	SUCCESS_ADD_COMMENT,
	FAILURE_ADD_REPLY,
	SUCCESS_ADD_REPLY,
	GET_COMMENT_LIST_FAILURE
} from '../mutation-types'

export const commentListInitialState = {
	isFetching: false,
	errMsg: null,
	items: []
}

export const commentListMutations = {
	[COMMENT_LIST](state,action){
		state.commentList = {
			...state.commentList,
			errMsg:null,
			items: action.commentList
		}
	},
	[SUCCESS_ADD_COMMENT](state,action){
		state.commentList.items.push(action.comment)
		state.commentList.errMsg = null
	},
	[SUCCESS_ADD_REPLY](state,action){
		state.commentList = {
			...state.commentList,
			errMsg: null,
			items: state.commentList.items.map(item=>{
				if(item._id === action.cid){
					item.replys = action.replys
				}
				return item
			})
		}
	},
	[FAILURE_ADD_COMMENT](state,action){
		state.commentList = {...state.commentList ,errMsg:action.errMsg}
	},
	[FAILURE_ADD_REPLY](state,action){
		state.commentList = {...state.commentList ,errMsg:action.errMsg}
	},
	[GET_COMMENT_LIST_FAILURE](state){
		state.commentList = commentListInitialState
	}
}