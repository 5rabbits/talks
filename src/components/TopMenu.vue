<template>
  <nav class="navbar is-light">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/" exact>
        <img src="/static/img/5rabbits-logo@2x.png">
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
        <router-link v-if="roles.admin" class="navbar-item" to="/admin" exact>Admin</router-link>
      </div>
      <div class="navbar-end">
        <router-link v-if="!user" class="navbar-item" to="/login" exact>Login</router-link>
        <router-link v-else class="navbar-item" to="/profile" exact>{{user.name}}</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'top-menu',
  data () {
    return {
      navmenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.navmenu = !this.navmenu
    }
  },
  computed: {
    ...mapGetters(['user', 'roles'])
  }
}
</script>
