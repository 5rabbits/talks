import Vue from 'vue'
import Router from 'vue-router'
import AdminGuard from './admin-guard'
import AuthGuard from './auth-guard'
import Admin from '../pages/Admin'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
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
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter: AdminGuard
    }
  ]
})
