import {
	COMMENT_LIST,
	FAILURE_ADD_COMMENT,
	SUCCESS_ADD_COMMENT,
	FAILURE_ADD_REPLY,
	SUCCESS_ADD_REPLY,
	GET_COMMENT_LIST_FAILURE
} from '../mutation-types'

const state = {
	isFetching: false,
	errMsg: null,
	items: []
}

const mutations = {
	[COMMENT_LIST](state,action){
		state.errMsg = null
		state.items = action.commentList
	},
	[SUCCESS_ADD_COMMENT](state,action){
		state.items.push(action.comment)
		state.errMsg = null
	},
	[SUCCESS_ADD_REPLY](state,action){
		state.errMsg = null
		state.items = state.items.map(item=>{
				if(item._id === action.cid){
					item.replys = action.replys
				}
				return item
			})
	},
	[FAILURE_ADD_COMMENT](state,action){
		state.errMsg = action.errMsg
	},
	[FAILURE_ADD_REPLY](state,action){
		state.errMsg = action.errMsg
	},
	[GET_COMMENT_LIST_FAILURE](state){
		state.isFetching = false
		state.errMsg = null
		state.items = []
	}
}

export default {
	state,
	mutations
}