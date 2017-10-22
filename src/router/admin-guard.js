import store from '../store'

export default (to, from, next) => {
  let admin = store.getters.roles.admin
  if (admin) {
    next()
  } else {
    next('/login')
  }
}
