<template>
  <div class="notification over-all" :class="className">
    <button class="delete" @click="emitClose"></button>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'notification',
  props: {
    message: {
      type: String,
      default: 'This is a message'
    },
    className: {
      type: String,
      default: 'is-info'
    }
  },
  methods: {
    emitClose () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.over-all {
  position:fixed;
  z-index: 101;
  top: 0;
  right: 0;
  width: 20em;
  margin-top: 1em;
  margin-right: 0.5em;
}
</style>
