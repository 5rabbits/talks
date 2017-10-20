<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="control">
            <a class="button is-danger" @click="logout">Cerrar sesión</a>
          </div>
        </div>

       </div>
      <div class="columns">
        <div class="column is-4">
          <UserCard :name="user.name" :email="user.email" :picture="user.photoUrl"/>
        </div>
        <div class="column">
          <h3 class="title">Nueva charla</h3>
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Título" v-model="talk.title">
            </div>
          </div>
          <MarkdownEditor v-model="talk.content" />
          <div class="control">
            <a class="button is-primary" @click="newTalk">Guardar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MarkdownEditor from '../components/MarkdownEditor'
  import UserCard from '../components/UserCard'
  export default {
    components: { MarkdownEditor, UserCard },
    data () {
      return {
        talk: {
          title: '',
          content: ''
        }
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      talks () {
        return this.$store.getters.talks
      }
    },
    methods: {
      logout () {
        this.$store.dispatch('logout')
      },
      newTalk () {
        this.$store.dispatch('addTalk', this.talk)
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
