<template>
  <article class="box content">
    <h1 class="title">{{title}}</h1> <small>({{date}})</small>
    <div v-html="content"></div>
  </article>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      date: {
        type: String,
        default: ''
      }
    }
  }
</script>
