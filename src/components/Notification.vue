<template>
  <div class="notification over-all" :class="type">
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
    type: {
      type: String,
      default: 'is-info'
    },
    pause: {
      type: Number,
      default: 3000
    }
  },
  methods: {
    emitClose () {
      this.$emit('close')
    }
  },
  mounted () {
    setInterval(() => {
      this.emitClose()
    }, this.pause)
  }
}
</script>

<style>
.over-all {
  position: fixed;
  z-index: 101;
  top: 0;
  right: 0;
  width: 600px;
  margin-top: 1em;
  margin-right: 0.5em;
}
</style>
