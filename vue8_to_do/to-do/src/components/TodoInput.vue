<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem">
        <button @click="addTodo" @keyup="addTodo">추가</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                newTodoItem : ''
            }
        },
        methods:{
            addTodo(){
                if(this.newTodoItem !== ""){
                    var value = this.newTodoItem && this.newTodoItem.trim();
                    localStorage.setItem(value, value);
                    this.$emit('addTodo', value);
                    this.clearInput();
                }
                localStorage.setItem(this.newTodoItem, this.newTodoItem)
            },
            clearInput(){
                this.newTodoItem = '';
            }
        }
    }
</script>

<style>

</style>