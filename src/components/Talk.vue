<template>
  <article class="card">
    <header class="card-header">
      <h1 class="title">{{title}}</h1>
    </header>
    <div class="content" v-html="content"></div>
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
      }
    }
  }
</script>
