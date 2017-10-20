<template>
  <div id="app">
    <loading v-if="loading"/>
    <transition name="slide-fade">
      <div v-if="getShowMessage">
        <notification
        :message="getMessage.text"
        :className="getMessage.className"
        @close="hideMessage"
        />
      </div>
    </transition>
    <top-menu/>
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import Notification from './components/Notification'
import TopMenu from './components/TopMenu'
import Loading from './components/Loading'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    Notification,
    TopMenu,
    Loading
  },
  mounted () {
    this.$Progress.finish()
  },
  created () {
    this.$store.dispatch('fetchTalks')
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  },
  computed: {
    ...mapGetters(['getShowMessage', 'getMessage', 'loading'])
  },
  methods: {
    ...mapActions(['hideMessage'])
  }
}
</script>

<style lang="scss">
@import "./assets/sass/app.scss";
</style>
