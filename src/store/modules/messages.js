import * as types from '../mutation-types'

// initial state
const state = {
  message: {
    type: '',
    text: ''
  },
  showMessage: false
}

// getters
const getters = {
  getMessage: state => {
    return state.message
  },
  getShowMessage: state => {
    return state.showMessage
  }
}

// actions
const actions = {
  setMessage: ({commit}, message) => {
    commit(types.SET_MESSAGE, message)
  },
  showMessage: ({commit}) => {
    commit(types.SHOW_MESSAGE)
  },
  hideMessage: ({commit}) => {
    commit(types.HIDE_MESSAGE)
  }
}

// mutations
const mutations = {
  [types.SET_MESSAGE]: (state, message) => {
    state.message = message
  },
  [types.SHOW_MESSAGE]: state => {
    state.showMessage = true
  },
  [types.HIDE_MESSAGE]: state => {
    state.showMessage = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
