import * as types from '../mutation-types'

const state = {
  loading: false
}

const getters = {
  loading (state) {
    return state.loading
  }
}

const actions = {
  setLoading ({ commit }, payload) {
    commit(types.SET_LOADING, payload)
  }
}

const mutations = {
  [types.SET_LOADING]: (state, payload) => {
    state.loading = payload
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
