import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    message: 'hello vue.js'
  },
  getters: {
    reverseMessage(state) {
      return state.message.split('').reverse().join('');
    }
  },
  mutations: {
    // reverse(state, data) {
    //   state.message = data.split('').reverse().join(''); //---(1)
      reverse(state) {
      state.message = state.message.split('').reverse().join('');
    }
  },
  actions: {
    fetchMessage(context) {
      context.commit('reverse', '메세지!!'); //---(2) //(1),(2)의 값이 동시에 바뀌는데, action -> mutation으로 단계가 이루어지므로 둘 다 영향을 미치기 때문
      //mutations : reverse에서의 state = actions : fetchMessage의 context
      //mutations : reverse의 data = actions : fetchMessage의 "메세지!!"
    }
  }
});

new Vue({ //root 인스턴스(최상위 부모)
  render: h => h(App),
  store
}).$mount('#app')


//자바스크립트에서의 모든 함수는 생성자다, new를 통해 객체가 됨
