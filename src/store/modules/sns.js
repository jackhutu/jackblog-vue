import {
	SUCCESS_GET_SNSLOGINS,
	FAILURE_GET_SNSLOGINS
} from '../mutation-types'

export const loginsInitialState = []

export const loginsMutations = {
	[FAILURE_GET_SNSLOGINS](state){
		state.logins = loginsInitialState
	},
	[SUCCESS_GET_SNSLOGINS](state,data){
		state.logins = data
	}
}