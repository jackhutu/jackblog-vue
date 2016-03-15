import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	USERINFO_SUCCESS,
	USERINFO_FAILURE,
	LOGOUT_USER,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FAILURE
} from '../mutation-types'
import { saveCookie,getCookie,signOut } from '../../utils/authService'

const state = {
	token: getCookie('token') || null,
	user: null,
	errMsg: null
}

const mutations = {
	[LOGIN_SUCCESS](state , action){
		state.errMsg = null, 
		state.token = action.token
	},
	[LOGIN_FAILURE](state, action){
		state.errMsg = action.errMsg
	},
	[USERINFO_SUCCESS](state,action){
		state.errMsg = null
		state.user = action.user
	},
	[USERINFO_FAILURE](state,action){
		state.errMsg = null
		state.user = null
	},
	[LOGOUT_USER](state,action){
		state.token = getCookie('token') || null
		state.user = null
		state.token = null
	},
	[UPDATE_USER_FAILURE](state,action){
		state.errMsg = action.errMsg
	},
	[UPDATE_USER_SUCCESS](state,action){
		state.user = action.user
		state.errMsg = null
	}
}

export default {
	state,
	mutations
}