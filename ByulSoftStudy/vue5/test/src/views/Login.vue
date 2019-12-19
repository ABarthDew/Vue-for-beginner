<template>
    <div class="login">
        <h1>This is an Login page</h1>
       <Login></Login>
    </div>
</template>

<script>
    import Login from '@/components/Login.vue'
    export default {
        name:'login',
        components:{
            Login
        }
    }
</script>