<template>
  <div>
    <h1>SignUp</h1>
    <v-text-field
      label="아이디"
      v-model="userId"
    ></v-text-field>
    <v-text-field
      label="비밀번호"
      type="password"
      v-model="password"
    ></v-text-field>
    <v-text-field
      label="이름"
      v-model="name"
    ></v-text-field>
    <v-text-field
      label="주소"
      v-model="address"
    ></v-text-field>
    <v-text-field
      label="이미지"
      v-model="src"
    ></v-text-field>
    <v-btn @click="signUp">회원가입</v-btn>
    <v-btn @click="signUp2">회원가입2</v-btn>
    <v-btn @click="signUp3">회원가입3</v-btn>
    <v-btn @click="signUp4">회원가입4</v-btn>
    <v-btn @click="signUp5">회원가입5</v-btn>
  </div>
</template>

<script>
import { EventBus } from '@/main.js'

import { mapMutations, mapActions } from 'vuex'

  export default {
    data() {
      return {
        userId: null,
        password: null,
        name: null,
        address: null,
        src: null
      }
    },
    methods: {
      // signUp() {
      //   let userObj = {
      //     userId: this.userId,
      //     password: this.password,
      //     name: this.name,
      //     address: this.address,
      //     src: this.src
      //   }
      //   EventBus.$emit('signUp', userObj)
      //   this.clearForm()
      // },
      // ...mapMutations(['addUsers']), //*****중복이라 잠시 주석처리
      signUp() {
        let userObj = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          address: this.address,
          src: this.src
        }
        this.addUsers(userObj); //인자로 넘겨진 userObj가 mutations의 allUsers()의 payload임
        this.clearForm();
      },
      //mapMutations를 쓰지 않고 사용하기
      signUp2(){
        let userObj = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          address: this.address,
          src: this.src
        }
        //state나 getter와는 달리 commit이라는 함수를 실행시키고 그 안에 mutation이름을 넣음
        this.$store.commit('addUsers', userObj); //emit과 동일함
        //addUsers에 userObj를 넘겨주겠다
        this.clearForm();
      },
      signUp3(){
        let userObj = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          address: this.address,
          src: this.src
        }
        this.$store.dispatch('addUsers', userObj); //actions에 있는 addUsers
        //dispatch로 actions의 addUsers를 불러오며, userObj를 인자로 함께 넘김
        this.clearForm();
      },
      signUp4(){
        let userObj = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          address: this.address,
          src: this.src
        }
        this.$store.dispatch('addUsers2', userObj);
        this.clearForm();
      },
      //mapActions 사용하기
      ...mapActions(['addUsers']), //actions의 addUsers
      signUp5(){
        let userObj = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          address: this.address,
          src: this.src
        }
        this.addUsers(userObj); //addUsers가 "이 컴포넌트 내에서" 중복됨
        this.clearForm();
      }
      ,
      clearForm() {
        this.userId = null,
        this.password = null,
        this.name = null,
        this.address = null,
        this.src = null
      }
    },
  }
</script>