// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import store from './store'
import VueProgressBar from 'vue-progressbar'

const options = {
  color: '#3385ff',
  failedColor: '#ff4d4d',
  thickness: '5px'
}

Vue.use(VueProgressBar, options)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    // Initialize Firebase
    let config = {
      apiKey: 'AIzaSyDWUrCUomb5cKFqmYp7V4omDXbz0aFSceU',
      authDomain: 'rabbits-talks.firebaseapp.com',
      databaseURL: 'https://rabbits-talks.firebaseio.com',
      projectId: 'rabbits-talks',
      storageBucket: 'rabbits-talks.appspot.com',
      messagingSenderId: '367905842741'
    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})
