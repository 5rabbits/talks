import * as firebase from 'firebase'
import * as types from '../mutation-types'

// initial state
const state = {
  talks: null
}

// getters
const getters = {
  talks: (state) => {
    return state.talks
  }
}

// actions
const actions = {
  fetchTalks: ({commit, dispatch}) => {
    dispatch('setLoading', true)
    firebase.database().ref('talks/').on('value', snapshot => {
      commit(types.SET_TALKS, snapshot.val())
      dispatch('setLoading', false)
    })
  },
  addTalk: ({commit, dispatch, rootState}, payload) => {
    let newTalkRef = firebase.database().ref('talks/').push()
    let newTalkKey = newTalkRef.key
    let updateData = {}
    updateData['users/' + rootState.auth.user.id + '/talks/' + newTalkKey] = true
    updateData['talks/' + newTalkKey] = payload
    firebase.database().ref().update(updateData)
  }

}

// mutations
const mutations = {
  [types.SET_TALKS]: (state, payload) => {
    state.talks = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
