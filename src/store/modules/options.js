import {
	CHANGE_OPTIONS
} from '../types'

const state = {item: {currentPage: 1, itemsPerPage: 10,sortName:'publish_time',tagId: ''}}

const mutations = {
  [CHANGE_OPTIONS](state, action) {
    state.item = {...state.item, ...action.options}
  }
}

export default {
  state,
  mutations
}