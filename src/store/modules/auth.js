import * as firebase from 'firebase'
import * as types from '../mutation-types'

const state = {
  user: null,
  emailSent: false
}

const getters = {
  user (state) {
    return state.user
  },
  emailSent (state) {
    return state.emailSent
  }
}

const actions = {
  sendValidationEmail ({commit}) {
    let currentUser = firebase.auth().currentUser
    return new Promise((resolve, reject) => {
      currentUser.sendEmailVerification().then(() => {
        commit(types.SET_EMAIL_SENT, true)
        console.log('Email verification sent')
        resolve()
      }, error => {
        commit(types.SET_EMAIL_SENT, false)
        console.log(error)
        reject(error)
      })
    })
  },
  updateUserProfile ({commit}, payload) {
    let currentUser = firebase.auth().currentUser
    let userData = {
      displayName: payload.displayName
    }
    currentUser.updateProfile(userData)
  },
  signUserUp ({ commit, dispatch }, payload) {
    dispatch('setLoading', true)
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        dispatch('updateUserProfile', payload)
        console.log(user)
        dispatch('sendValidationEmail').then(() => {
          dispatch('setLoading', false)
          dispatch('setSuccess', 'Se ha enviado un correo de verificación a ' + user.email)
        }).catch(error => {
          dispatch('setLoading', false)
          dispatch('setError', error.message)
        })
      })
      .catch(error => {
        console.log(error)
        dispatch('setLoading', false)
        dispatch('setError', error.message)
      })
  },
  signUserIn ({ commit, dispatch }, payload) {
    dispatch('setLoading', true)
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
      user => {
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          emailVerified: user.emailVerified
        }
        if (user.emailVerified) {
          commit(types.SET_USER, newUser)
          dispatch('setSuccess', 'Ha iniciado sesión como ' + newUser.name)
        } else {
          dispatch('setError', 'Su correo no ha sido verificado')
        }
        dispatch('setLoading', false)
      }
      )
      .catch(
      error => {
        console.log(error)
        dispatch('setLoading', false)
        dispatch('setError', error.message)
      }
      )
  },
  signUserInGoogle ({ commit, dispatch }) {
    dispatch('setLoading', true)
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(
      user => {
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          emailVerified: user.emailVerified
        }
        commit(types.SET_USER, newUser)
        dispatch('setLoading', false)
        dispatch('setSuccess', 'Ha iniciado sesión como ' + newUser.name)
      }
      )
      .catch(
      error => {
        console.log(error)
        dispatch('setLoading', false)
        dispatch('setError', error.message)
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
          photoUrl: user.photoURL,
          emailVerified: user.emailVerified
        }
        commit(types.SET_USER, newUser)
      }
      )
      .catch(
      error => {
        console.log(error)
      }
      )
  },
  autoSignIn ({ commit }, payload) {
    commit(types.SET_USER, {
      id: payload.uid,
      name: payload.displayName,
      email: payload.email,
      photoUrl: payload.photoURL,
      emailVerified: payload.emailVerified
    })
  },
  logout ({ commit, dispatch }) {
    firebase.auth().signOut()
    commit(types.SET_USER, null)
    dispatch('setSuccess', 'Sesión finalizada')
  }
}

const mutations = {
  [types.SET_USER] (state, payload) {
    state.user = payload
  },
  [types.SET_EMAIL_SENT] (state, payload) {
    state.emailSent = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
