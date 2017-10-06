<template>
  <div id="app">
    <transition name="slide-fade">
      <div v-if="getShowMessage">
        <notification
        :message="getMessage.text"
        :className="getMessage.className"
        :pause="2000"
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
import Notification from '@/components/Notification'
import TopMenu from '@/components/TopMenu'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: { Notification, TopMenu },
  mounted () {
    this.$Progress.finish()
  },
  created () {
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
    ...mapGetters(['getShowMessage', 'getMessage'])
  },
  methods: {
    ...mapActions(['hideMessage'])
  }
}
</script>

<style lang="scss">
@import "./assets/sass/app.scss";
</style>
