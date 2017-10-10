<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-2">
          <user-card :name="user.name" :email="user.email" :picture="user.photoUrl"/>
        </div>
        <div class="is-column">
          <div class="control">
            <a class="button is-danger" @click="logout">Cerrar sesión</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import UserCard from '../components/UserCard'
  export default {
    components: { UserCard },
    computed: {
      user () {
        return this.$store.getters.user
      }
    },
    methods: {
      logout () {
        this.$store.dispatch('logout')
      }
    },
    watch: {
      user (value) {
        if (!value) {
          this.$router.push('/')
        }
      }
    }
  }
</script>
