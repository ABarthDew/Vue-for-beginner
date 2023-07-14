import Vue from "vue";
import Vuex from "vuex";
import modules from './modules';
//생략 전 : from './modules/index.js'
//modules 안의 index를 가리킴

Vue.use(Vuex);

export default new Vuex.Store({
  modules
});
