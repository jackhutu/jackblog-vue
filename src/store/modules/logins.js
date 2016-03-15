import {
	SUCCESS_GET_SNSLOGINS,
	FAILURE_GET_SNSLOGINS
} from '../mutation-types'

const state = {items:[]}

const mutations = {
	[FAILURE_GET_SNSLOGINS](state){
		state.items = []
	},
	[SUCCESS_GET_SNSLOGINS](state,data){
		state.items = data
	}
}

export default {
	state,
	mutations
}