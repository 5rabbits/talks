<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <div class="box">
            <h1 class="title">Registrarse</h1>
            <div class="field">
              <div class="control has-icons-left">
                <input class="input" type="text" placeholder="John Doe" v-model="user.name">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input class="input" type="email" placeholder="john@server.com" v-model="user.email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input class="input" type="password" v-model="user.password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="control">
              <a class="button is-primary" @click="register">Registrarse</a>
            </div>
          </div>
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
        name: '',
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
