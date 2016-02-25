import {
	GET_TAG_LIST_SUCCESS,
	GET_TAG_LIST_FAILURE
} from '../mutation-types'

export const tagsInitialState = []

export const tagsMutations = {
	[GET_TAG_LIST_FAILURE](state){
		state.tagList = tagsInitialState
	},
	[GET_TAG_LIST_SUCCESS](state,action){
		state.tagList = action.tagList
	}
}