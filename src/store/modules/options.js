import {
	CHANGE_OPTIONS
} from '../mutation-types'

export const optionsInitialState = {currentPage: 1, itemsPerPage: 10,sortName:'publish_time',tagId: ''}

export const optionsMutations = {
	[CHANGE_OPTIONS](state, action) {
	 	state.options = {...state.options, ...action.options}
	}
}