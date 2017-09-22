<template>
  <div class="section">
    <div class="container">
      <div class="box">
        <h1>Login</h1>
        <div class="field">
          <a class="button is-primary" @click="fireUp">Show message</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['setMessage', 'showMessage']),
    fireUp () {
      let message = 'Este es un mensaje de prueba'
      this.setMessage({type: 'is-success', text: message})
      this.showMessage()
    }
  }
}
</script>

