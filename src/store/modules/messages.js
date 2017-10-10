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
  setError: ({commit, dispatch}, payload) => {
    let message = {
      className: 'is-danger',
      text: payload
    }
    dispatch('setMessage', message)
  },
  setSuccess: ({commit, dispatch}, payload) => {
    let message = {
      className: 'is-success',
      text: payload
    }
    dispatch('setMessage', message)
  },
  setWarning: ({commit, dispatch}, payload) => {
    let message = {
      className: 'is-warning',
      text: payload
    }
    dispatch('setMessage', message)
  },
  setInfo: ({commit, dispatch}, payload) => {
    let message = {
      className: 'is-info',
      text: payload
    }
    dispatch('setMessage', message)
  },
  showMessage: ({commit}) => {
    commit(types.SHOW_MESSAGE)
  },
  hideMessage: ({commit}) => {
    commit(types.HIDE_MESSAGE)
  },
  setMessage: ({commit, dispatch}, payload) => {
    commit(types.SET_MESSAGE, payload)
    dispatch('showMessage')
    setTimeout(() => {
      dispatch('hideMessage')
    }, 4000)
  }
}

// mutations
const mutations = {
  [types.SET_MESSAGE]: (state, payload) => {
    state.message = payload
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
