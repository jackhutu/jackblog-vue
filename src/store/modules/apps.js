import {
	SUCCESS_GET_APPS,
	FAILURE_GET_APPS
} from '../mutation-types'

export const appsInitialState = []

export const appsMutations = {
  [FAILURE_GET_APPS]({apps}){
  	apps = appsInitialState
  },
  [SUCCESS_GET_APPS](state,action){
  	state.apps = action.apps
  }
}