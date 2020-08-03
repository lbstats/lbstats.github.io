import Vue from 'vue'
import Vuex, {createLogger} from 'vuex'
import userData from './userdata'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    userData
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
