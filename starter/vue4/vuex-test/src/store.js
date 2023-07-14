import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    getCounter: function (state) {
      return state.counter;
    },
    getMsg: function (state) {
      return state.counter * 2;
    },
  },
  mutations: {
    addCounter: function (state) {
      return state.counter++;
    }
  },
  actions: {
    addCounter: function (context) {
      return context.commit('addCounter');
    },
    // getServerDate:function(context){
    //     return axios.get("sample.json").then(function(){
    //         console.log(1);
    //     });
    // },
    delayFewMinutes: function (context) {
      return setTimeout(function () {
        context.commit('addCounter');
      }, 1000);
    },
    asyncIncrement: function (context, payload) {
      return setTimeout(function () {
        context.commit('addCounter', payload.by);
      }, payload.duration);
    },
    asyncDecrement: function (context, payload) {
      return setTimeout(function () {
        context.commit('addCounter', payload.by);
        console.log(payload.by);
      }, payload.duration);
    }
  }
});