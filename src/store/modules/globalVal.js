import {API_ROOT} from '../../config'
import {
	CHANGE_STYLE_MODE,
	GET_INDEX_IMG,
	GET_CAPTCHAURL
} from '../mutation-types'

export const globalValInitialState = {
	indexImg: '',
	styleMode: 'day-mode',
	captchaUrl: API_ROOT + 'users/getCaptcha?'
}

export const globalValMutation = {
	[CHANGE_STYLE_MODE]({globalVal}){
		globalVal.styleMode = (globalVal.styleMode === 'day-mode')?'night-mode':'day-mode'
	},
  [GET_INDEX_IMG]({globalVal}, action){
  	globalVal.indexImg = action.indexImg
  },
  [GET_CAPTCHAURL]({globalVal}){
  	globalVal.captchaUrl = API_ROOT + 'users/getCaptcha?' + Math.random()
  }
}