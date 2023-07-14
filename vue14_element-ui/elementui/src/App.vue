<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <el-row>
      <el-col :span="24" :sm="6" :md="12">
        <div class="grid-content bg-purple-dark">gggg</div>
      </el-col>
      <el-col :span="23">
        <div class="grid-content bg-purple-dark">gggg</div>
      </el-col>
      <el-col :span="22">
        <div class="grid-content bg-purple-dark">gggg</div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-dark">gggg</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-dark">gggg</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-dark">gggg</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-dark">gggg</div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
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

.bg-purple-dark {
  border: 1px solid #000;
}
</style>
