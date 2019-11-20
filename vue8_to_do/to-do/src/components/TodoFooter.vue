<template>
  <button @click="deleteAll">footer - clearAll</button>
</template>


<script>
export default {
  methods:{
    deleteAll:function(){
      this.$emit('del');
    }
  }
}
</script>

<style scoped>

</style>