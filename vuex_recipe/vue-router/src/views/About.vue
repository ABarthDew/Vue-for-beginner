<template>
  <div>
    This is About Page
    클릭1
    <!--    <router-link v-bind:to="">-->
    <router-link :to="{name:'home'}">
      클릭2
    </router-link>
    <!--    개발자모드로 요소검사를 해 보면 [클릭2]에는 링크가 생긴 것을 확인할 수 있음-->
  </div>
</template>