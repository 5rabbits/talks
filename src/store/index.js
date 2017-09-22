import Vue from 'vue'
import Vuex from 'vuex'
import messages from './modules/messages'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    messages
  },
  strict: debug
})
