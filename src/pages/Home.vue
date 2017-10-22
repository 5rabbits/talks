<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="box">
            <h1 class="title">Welcome</h1>
          </div>
        </div>
      </div>
      <div class="columns" v-for="(talk, key) in talks" :key="key">
        <div class="column is-10 is-offset-1">
          <talk :title="talk.title" :content="markdown(talk.content)" :date="fromNow(talk.created_at)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as moment from 'moment'
import marked from 'marked'
import Talk from '../components/Talk'
export default {
  components: { Talk },
  computed: {
    talks () {
      return this.$store.getters.talks
    }
  },
  methods: {
    markdown (text) {
      return marked(text)
    },
    fromNow (value) {
      return moment(value).fromNow()
    }
  }
}
</script>
