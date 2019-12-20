<template>
    <div>
        <h1>child-detail</h1>
        유저 번호 : {{userId}}<br>

<!--        수정기능-->
        <v-btn @click="edit" small>수정</v-btn>
        <v-btn @click="edit2" small>수정2</v-btn>
    </div>
</template>


<script>
    export default {
        computed:{
            userId(){
                return this.$route.params.id;
            }
        },
        methods:{
            edit(){
                this.$router.push({name:'child-edit'});
            // <v-btn @click="$router.push({
            //     name:'child-detail',
            //         params:{
            //         id:userId
            //     }})">검색2</v-btn>
                //params를 넘기지 않았는데도 값이 넘어옴(name의 장점)
            },
            edit2(){
                // this.$router.push({path:`child/${this.userId}/edit`})
                //http://localhost:8081/child/child/rr/edit
                // child가 두 개씩 중복된 것을 확인할 수 있음
                this.$router.push({path:`${this.userId}/edit`}) //정상동작
                //왜 이런 현상이 일어날까? => router.js로
            }
        }
    }
</script>
