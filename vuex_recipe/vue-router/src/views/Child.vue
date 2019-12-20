<template>
    <div>
        <h1>children</h1>
        *하위경로
        http://localhost:8081/home/service/service2 (경로를 깊게 들어가는 것을 "하위경로"라고 함)
        {path: name: component:...} 이렇게 따로 라우터를 만들 수도 있지만,
        {path:...안에 children이라는 속성을 이용해 하위 경로를 만들 수도 있음}

        *따로 만드는 것과 하위경로에 만드는 것의 차이를 잘 숙지할 것

        <br>
        <br>
        <p>유저를 검색해 주세요</p>
        <v-text-field v-model="userId" label="유저 번호를 입력하세요"></v-text-field>
        <v-btn @click="$router.push({path:`child/${userId}`})">검색</v-btn>
<!--        input에 값을 입력하면 주소창에 child/(입력값)이 되고, <router-view>부분이 화면에 드러남-->
        <v-btn @click="$router.push({
            name:'child-detail',
            params:{
                id:userId //child-detail라는 페이지로 이동을 시키되, id라는 파라미터와 함께 이동시키겠다
        }})">검색2</v-btn>
<!--        name으로 경로를 지정할 수도 있음 : name은 상대경로나 절대경로를 따지지 않기 때문에 편리함-->

        <hr>

<!--        /child안에 하위 경로가 온다면, 이 안에서만 동작할 수 있도록 세팅-->
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                userId: null
            }
        },
        created(){
            console.log("created");
            //실제로 라우터가 child 컴포넌트 안에 들어갔다 나오는지 확인하기
            /*
            beforCreated (router.js의 console.log("beforCreated");)
            created
            * */
            //라우터 가드는 라우터가 실행되서 컴포넌트가 생성되기 전에 동작한다는 것을 알 수 있음
        },
        beforeRouteEnter(to, from, next){ //함수로 바로 선언하는 방법
            console.log("before Enter2");
            next();
        },
        beforeRouteLeave(to, from, next){ //라우터가 이 페이지를 떠나기 직전에 동작
            console.log("before Leave")
            next()
        },
        destroyed() { // beforeRouteLeave와 비슷
            console.log("destroyed") //beforeRouteLeave와 비교
            //페이지가 없어질 때 동작
        }
        /*이 순서로 동작
        before Leave
        destroyed
        before Enter2
        created
        * */
    }
</script>
