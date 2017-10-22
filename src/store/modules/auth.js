import * as firebase from 'firebase'
import * as types from '../mutation-types'

const state = {
  user: null,
  emailSent: false,
  roles: {
    admin: false,
    contributor: false
  }
}

const getters = {
  user (state) {
    return state.user
  },
  emailSent (state) {
    return state.emailSent
  },
  roles (state) {
    return state.roles
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
    if (!payload.name) {
      console.error('Payload incorrecto')
      console.log(payload)
      return
    }
    let currentUser = firebase.auth().currentUser
    let userData = {
      displayName: payload.name
    }
    currentUser.updateProfile(userData)
  },
  signUserUp ({ commit, dispatch }, payload) {
    if (!payload.email || !payload.password || !payload.name) {
      console.error('Payload incorrecto')
      console.log(payload)
      return
    }
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
          dispatch('setUser', newUser)
          dispatch('setSuccess', 'Ha iniciado sesión')
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
        dispatch('setUser', newUser)
        dispatch('setLoading', false)
        dispatch('setSuccess', 'Ha iniciado sesión')
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
  autoSignIn ({ commit, dispatch }, payload) {
    const user = {
      id: payload.uid,
      name: payload.displayName,
      email: payload.email,
      photoUrl: payload.photoURL,
      emailVerified: payload.emailVerified
    }
    dispatch('setUser', user)
  },
  logout ({ commit, dispatch }) {
    firebase.auth().signOut()
    commit(types.SET_USER, null)
    dispatch('setSuccess', 'Sesión finalizada')
  },
  setUser ({commit, dispatch}, payload) {
    commit(types.SET_USER, payload)
    dispatch('setRoles')
  },
  setRoles ({commit}) {
    let roles = {
      admin: false,
      contributor: false
    }
    let currentUser = firebase.auth().currentUser
    firebase.database().ref('contributors/' + currentUser.uid).once('value').then(snapshot => {
      roles.contributor = snapshot.val() || false
      return roles
    }).then(roles => {
      firebase.database().ref('admins/' + currentUser.uid).once('value').then(snapshot => {
        roles.admin = snapshot.val() || false
        commit(types.SET_ROLES, roles)
      })
    })
  }
}

const mutations = {
  [types.SET_USER] (state, payload) {
    state.user = payload
  },
  [types.SET_EMAIL_SENT] (state, payload) {
    state.emailSent = payload
  },
  [types.SET_ROLES] (state, payload) {
    state.roles = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
