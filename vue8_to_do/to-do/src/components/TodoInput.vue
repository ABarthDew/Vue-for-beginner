<template>
  <div>-input-<br>
    <input type="text" v-model="newTodoItem"/>
    <button @click="addTodo">추가</button>
  </div>
</template>


<script>


// import { test } from 'App.vue' (원래 형태)

export default {
  data:function(){
    return{
      newTodoItem:''
    }
  },
  methods:{
    addTodo:function(){
      if(this.newTodoItem !== ''){
        var value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('go', value);
        console.log(this.newTodoItem); //eslint 에선 막혀있음
                /* package.json에 추가
                "eslintConfig": {
                  "rules": {
                    "no-console": "off"
                  }
                }
                (https://stackoverflow.com/questions/34215526/eslint-how-to-disable-unexpected-console-statement-in-node-js)
                */
        this.clearInput();
      }
    },
    clearInput:function(){
      this.newTodoItem='';

/*
      new Promise(function(resolve, reject){ //자체가 비동기
        //1번 함수
        // 성공
        resolve('success');
        //실패 시 : reject 가 실행됨
      }).then(function(result){
        result =  //'success'
      }).catch(function(){

      });
      this.a =1;
*/ 
// (비슷한 축약형 문법 : await, async)

    }
  }
}
</script>

<style scoped>

</style>