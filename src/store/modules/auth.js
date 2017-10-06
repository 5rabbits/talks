import * as firebase from 'firebase'

const state = {
  user: null
}

const getters = {
  user (state) {
    return state.user
  }
}

const actions = {
  signUserUp ({ commit }, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
      user => {
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
      )
      .catch(
      error => {
        console.log(error)
      }
      )
  },
  signUserIn ({ commit }, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
      user => {
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
      )
      .catch(
      error => {
        console.log(error)
      }
      )
  },
  signUserInGoogle ({ commit }) {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(
      user => {
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
      )
      .catch(
      error => {
        console.log(error)
      }
      )
  },
  signUserInFacebook ({ commit }) {
    let provider = new firebase.auth.FacebookAuthProvider()
    provider.addScope('public_profile,email')
    firebase.auth().signInWithPopup(provider)
      .then(
      user => {
        console.log(user)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
      )
      .catch(
      error => {
        console.log(error)
      }
      )
  },
  autoSignIn ({ commit }, payload) {
    commit('setUser', {
      id: payload.uid,
      name: payload.displayName,
      email: payload.email,
      photoUrl: payload.photoURL
    })
  },
  logout ({ commit }) {
    firebase.auth().signOut()
    commit('setUser', null)
  }
}

const mutations = {
  setUser (state, payload) {
    state.user = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
