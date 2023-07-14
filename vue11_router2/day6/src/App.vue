<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"><br>
    <a href="#" @click.prevent="goFirst">처음으로</a> |
    <a href="#" @click.prevent="goHome">home</a> |
    <router-link to="/join">join</router-link>
    |
    <router-link to="/login">login</router-link>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-view></router-view>
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
    goHome: function () {
      this.$router.push("/home");
    },
    goFirst: function () {
      this.$router.push("/");
    }
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

.color {
  color: #dae1e7
}
</style>
