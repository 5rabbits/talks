<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="picture" alt="Profile image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{name}}</p>
          <p class="subtitle is-6">{{email}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      email: {
        type: String,
        default: ''
      },
      picture: {
        type: String,
        default: null
      }
    }
  }
</script>
