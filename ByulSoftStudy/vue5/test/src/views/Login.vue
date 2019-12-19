<template>
    <div class="login">
        <h1>This is an Login page</h1>
       <LoginPage></LoginPage>
    </div>
</template>

<script>
    import LoginPage from '@/components/LoginPage.vue'
    export default {
        name:'login',
        components:{
            LoginPage
        }
    }
</script>