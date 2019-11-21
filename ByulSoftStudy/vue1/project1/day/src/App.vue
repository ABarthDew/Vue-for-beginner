<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

<!--    router-->
    <p>
      <router-link to="/hello">Go Hello</router-link><br>
      <router-link to="/VueCom">Go VueCom</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

//컴포넌트 (단일하게 돌아갈 수 있는 것, 독립적으로 돌아갈 수 있는 것들) .=. 모듈(구현 단위)

export default { //=new Vue
  name: 'app',
  components: {
    HelloWorld
  }
}
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
