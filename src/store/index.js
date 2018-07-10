import Vue from 'vue'
import Vuex from 'vuex'

import exmple from './modules/exmple'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    exmple
  }
})

export default store
