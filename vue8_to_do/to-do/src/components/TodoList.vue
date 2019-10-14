<template>
    <section>
        <ul>
            <li v-for="(todoItem, index) in propsdata">
                {{todoItem}}
                <span type="button" @click="removeTodo(todoItem, index)">[삭제]</span>
            </li>
        </ul>
    </section>
</template>

<script>
    export default{
        props:['propsdata'],
        methods:{
            removeTodo(todoItem, index){
                localStorage.removeItem(todoItem);
                this.todoItems.splice(index,1);
            }
        }
    }
</script>

<style>

</style>