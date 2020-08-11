import Vue from 'vue'
import Vuex, {createLogger} from 'vuex'
import userData from './userdata'
import {VuexPersistence} from "vuex-persist";
import settings from "./settings";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  modules: {
    userData,
    settings
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  strict: debug,
  plugins: debug ? [createLogger(), vuexLocal.plugin] : [vuexLocal.plugin]
})
