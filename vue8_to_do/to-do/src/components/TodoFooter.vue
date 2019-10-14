<template>
    <div>
        <span type="button" @click="clearTodo">[모두삭제]</span>
    </div>
</template>

<script>
    export default{
        methods:{
            clearTodo(){
                this.$emit('removeAll');
            }
        }
    }
</script>

<style>

</style>