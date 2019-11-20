<template>
  <div>-list-<br>
    <li v-for="(todoItem, idx) in propsdata" :key="todoItem">{{todoItem}}
      <button @click="removeTodo(todoItem, idx)">[x]</button>
    </li>
  </div>
</template>


<script>
export default {
  data:function(){
    return{

    }
  },
  props:['propsdata'],
  methods:{
    removeTodo:function(todoItem, idx){
      this.$emit('rmv', todoItem, idx);
    }
  }
}
</script>

<style scoped>

</style>