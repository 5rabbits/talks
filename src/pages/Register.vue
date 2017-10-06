<template>
  <div class="section">
    <div class="container">
      <div class="box">
        <div class="field">
          <label class="label">E-mail</label>
          <div class="control">
            <input class="input" type="email" placeholder="john@server.com" v-model="user.email">
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" v-model="user.password">
          </div>
        </div>
        <div class="control">
          <a class="button is-primary" @click="register">Registrarse</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      register () {
        this.$store.dispatch('signUserUp', this.user)
      }
    }
  }
</script>
