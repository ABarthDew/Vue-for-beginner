<template>
  <div>
    <h1> users </h1>
    <p>this.$route.params로 받아 온 값 : {{ userId }}</p>
    <p>{{ $route.params.name }}</p>
    <p>그룹 : {{ $route.query.group }}</p>
    <p>카테고리 : {{ $route.query.category }}</p>
    <p>이름 : {{ $route.query.name }}</p>
    <p>주소 : {{ $route.query.address }}</p>
    <!--        http://localhost:8081/users/4321?name=member&address=trial-->
    <!--        ㄴ이런 식으로 고쳐서 값을 전달할 수 있음-->
    <!--            ㄴ하지만 query는 params처럼 값을 숨겨서 전달할 수 없기 때문에 주의-->
  </div>
</template>


<script>
export default {
  computed: {
    userId() {
      return this.$route.params
      //this.$route와 this.$router는 다름
      //주소창에 /users/(값) 에 아무런 값을 적어도 화면에 나타남
      // { "id": "3" } 라고 화면에 뜨는데, id는 router.js의 path에 선언한 것, 뒤에 값은 주소창에서 받은 인자

    }
  },
  created() {
    //router와 routes의 차이
    console.log('router', this.$router);
    console.log('route', this.$route);
    //this.$router : router.js에 선언해준 설정, 속성, 객체 등을 의미
    //route는 기본적으로 오브젝트 : 개발자가 지정해 준 params, query, 현재 주소의 path가 어딘지 등을 의미

    /*출력결과
    router
    VueRouter {app: Vue, apps: Array(1), options: {…}, beforeHooks: Array(0), resolveHooks: Array(0), …}
    currentRoute: (...)
    app: Vue {_uid: 3, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
    apps: [Vue]
    options: {mode: "history", base: "/", routes: Array(4)}
    beforeHooks: []
    resolveHooks: []
    afterHooks: []
    matcher: {match: ƒ, addRoutes: ƒ}
    fallback: false
    mode: "history"
    history: HTML5History {router: VueRouter, base: "", current: {…}, pending: null, ready: true, …}
    __proto__: Object
    Users.vue?face:31 route
    {name: "users", meta: {…}, path: "/users/4321", hash: "", query: {…}, …}
    name: "users"
    meta: {}
    path: "/users/4321"
    hash: ""
    query: {group: "member", category: "trial"}
    params: {id: "4321"}
    fullPath: "/users/4321?group=member&category=trial"
    matched: [{…}]
    __proto__: Object
    * */
  }
}
</script>
