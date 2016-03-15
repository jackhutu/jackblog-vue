import {
	GET_TAG_LIST_SUCCESS,
	GET_TAG_LIST_FAILURE
} from '../mutation-types'

const state = {
	items:[]
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
	mutations
}