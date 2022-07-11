import Vue from 'vue'
import Vuex from 'vuex'
// vuex-persist插件
import VuePersistence from 'vuex-persist'
// 存到本地存储
const vuexLocal = new VuePersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
