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

export const authInitialState = {
	token: getCookie('token') || null,
	user: null,
	errMsg:null
}

export const authMutations = {
	[LOGIN_SUCCESS](state , action){
		state.auth = {...state.auth, errMsg: null, token: action.token}
	},
	[LOGIN_FAILURE](state, action){
		state.auth = {...state.auth, errMsg: action.errMsg}
	},
	[USERINFO_SUCCESS](state,action){
		state.auth = {...state.auth, errMsg: null, user: action.user}
	},
	[USERINFO_FAILURE](state,action){
		state.auth = {...state.auth, errMsg: null, user: null}
	},
	[LOGOUT_USER](state,action){
		state.auth = {...authInitialState, token: null}
	},
	[UPDATE_USER_FAILURE](state,action){
		state.auth = {...state.auth, errMsg: action.errMsg}
	},
	[UPDATE_USER_SUCCESS](state,action){
		state.auth = {...state.auth, user:action.user,errMsg:null}
	}
}