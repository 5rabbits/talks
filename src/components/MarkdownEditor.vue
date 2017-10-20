<template>
  <div class="field">
    <div class="control">
      <div class="buttons has-addons">
        <span class="button" :class="{'is-success': isEdit}" @click="toggleEditor">Editar</span>
        <span class="button" :class="{'is-success': isPreview}" @click="toggleEditor">Ver</span>
      </div>
    </div>
    <div :class="{control: isEdit}">
      <textarea
      v-show="isEdit"
      class="textarea"
      placeholder="Markdown allowed here!"
      :value="value"
      @input="inputParse($event.target.value)"
      ></textarea>
      <div class="box content" v-if="isPreview" v-html="output"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      isEdit: true,
      isPreview: false
    }
  },
  methods: {
    inputParse (value) {
      this.$emit('input', value)
    },
    toggleEditor () {
      this.isEdit = !this.isEdit
      this.isPreview = !this.isPreview
    }
  },
  computed: {
    output () {
      return marked(this.value)
    }
  }
}
</script>
