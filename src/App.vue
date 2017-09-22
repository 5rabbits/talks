<template>
  <div id="app">
    <top-menu/>
    <router-view></router-view>
  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu'
export default {
  name: 'app',
  components: { TopMenu }
}
</script>

<style lang="scss">
  @import "./assets/sass/app.scss";
</style>
