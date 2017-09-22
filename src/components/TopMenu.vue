<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/" exact>
        5rabbits
      </router-link>
      <div class="navbar-burger burger" @click="toggleMenu" :class="{'is-active': navmenu}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" :class="{'is-active': navmenu}">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/random" exact>Random!</router-link>
      </div>
      <div class="navbar-end">
        <router-link class="navbar-item" to="/login" exact>Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navmenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.navmenu = !this.navmenu
    }
  }
}
</script>
