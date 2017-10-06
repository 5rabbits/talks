import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Random from '../pages/Random'
import Register from '../pages/Register'

Vue.use(Router)

const options = {
  linkActiveClass: 'is-active',
  mode: 'history'
}

export default new Router({
  ...options,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/random',
      name: 'Random',
      component: Random,
      beforeEnter: AuthGuard
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
