<template>
  <div id="app">

    <button-tab>
      <!-- slot 영역 -->
      <h1>First Header</h1>
    </button-tab>
    <button-tab>
      <!-- slot 영역 -->
      <h1>Second Header</h1>
    </button-tab>
    <button-tab>
      <!-- slot 영역 -->
      <h1>Third Header</h1>
    </button-tab>

    <br>
    <hr>
    ------------------------------------------------------------
    <br>

    <button-tab2>
      <!-- slot 영역 -->
      <h1 slot="header">First Header</h1>
      <div slot="content" class="content">Tab Contents #1</div>
    </button-tab2>
    <button-tab2>
      <!-- slot 영역 -->
      <h1 slot="header">Second Header</h1>
      <div slot="content" class="content">Tab Contents #2</div>
    </button-tab2>
    <button-tab2>
      <!-- slot 영역 -->
      <h1 slot="header">Third Header</h1>
      <div slot="content" class="content">Tab Contents #3</div>
    </button-tab2>

    <br>
    <hr>
    ------------------------------------------------------------
    <br>

    <button-tab2>
      <!-- slot 영역 -->
      <template slot="header">
        <h1>First Header</h1>
      </template>
      <template slot="content">
        <div class="content">Tab Contents #1</div>
      </template>
    </button-tab2>

  </div>
</template>

<script>
import ButtonTab from './components/ButtonTab.vue'
import ButtonTab2 from './components/ButtonTab2.vue'

export default {
  name: 'app',
  components: {
    ButtonTab,
    ButtonTab2
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
