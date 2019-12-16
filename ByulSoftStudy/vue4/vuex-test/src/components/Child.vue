<template>
    <div>
        child Counter: {{childCounter}}<br>
        <button @click="addCounter">+</button>
        <button @click="redCounter">-</button>
    </div>
</template>

<script>
    export default{
        methods:{
            addCounter:function(){
                this.$store.state.counter++;
            },
            redCounter:function(){
                this.$store.state.counter--;
            }
        },
        computed:{
            childCounter(){
                return this.$store.getters.getCounter;
            }
        }
    }
</script>