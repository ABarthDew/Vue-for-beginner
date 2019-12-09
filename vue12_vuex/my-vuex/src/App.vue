<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{ $store.state.message }}
    <button type="button" @click="getMessage">getMessage</button><br />
    <button type="button" @click="reverseMsg">reverseMsg</button><br />
    {{ $store.getters.reverseMessage }}
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld
    },
    methods: {
      reverseMsg() {
        this.$store.commit('reverse');
      },
      getMessage() {
        this.$store.dispatch('fetchMessage');
      }
    }
  }
  //mutation : 동기로 움직이고 이것만이 state를 변경할 수 있음(항상 동일한 상태를 바라봐야 함)



  // action -> mutation -> state 과정으로 실행
  // action은 비동기 : mutation을 거쳐서 state의 값을 변경함
  // mutation은 동기 : state의 값을 바꾸는 데 여러 개의 작업이 동시에 이뤄지면(비동기) 값이 의도와 다르게 바뀔 수 있으므로 한 단계가 끝난 뒤 또다른 단계가 시작될 수 있도록 제한
  // store 는 일종의 저장소 : 전역에 있는 저장소 개념이라고 생각하면 됨. 해당 표현식으로 state 에 접근해 data를 참조할 수 있음(데이터 변경은 mutation으로만 가능)

  //helper : 또다른 표현식이라고 생각하면 됨



  //부모 -> 자식(단방향)
  //emit : event를 발생시킴
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
