import * as types from '../mutation-types'

// initial state
const state = {
  message: {
    className: '',
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
  setError: ({commit}, payload) => {
    let message = {
      className: 'is-danger',
      text: payload
    }
    commit(types.SET_MESSAGE, message)
  },
  setSuccess: ({commit}, payload) => {
    let message = {
      className: 'is-success',
      text: payload
    }
    commit(types.SET_MESSAGE, message)
  },
  setWarning: ({commit}, payload) => {
    let message = {
      className: 'is-warning',
      text: payload
    }
    commit(types.SET_MESSAGE, message)
  },
  setInfo: ({commit}, payload) => {
    let message = {
      className: 'is-info',
      text: payload
    }
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
  [types.SET_MESSAGE]: (state, payload) => {
    state.message = payload
    state.showMessage = true
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
