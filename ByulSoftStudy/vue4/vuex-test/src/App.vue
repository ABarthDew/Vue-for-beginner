<template>
  <div id="app">
    Parent counter : {{getCounter}}<br>
    Parent counter : {{getMsg}}<br>
    <button @click="addCounter">+</button>
    <button @click="redCounter">-</button>

    <child :msg="counter"></child>
  </div>
</template>

<script>
import Child from './components/Child.vue'

import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
    'child':Child
  },
  methods:{
    // addCounter:function(){
    //   // this.$store.state.counter++;
    //   this.$store.commit('addCounter', 10);
    // },
    redCounter:function(){
      this.$store.state.counter--;
    },
    ...mapMutations({
      addCounter:'addCounter'
    }),
    addCounter(){
      this.$store.dispatch('delayFewMinutes');
    }
  },
  computed: {
    ...mapGetters([
            'getCounter',
            'getMsg'
    ])
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
