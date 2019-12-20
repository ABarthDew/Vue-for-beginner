import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

//*새 컴포넌트 생성
const Users = () => import('./views/Users.vue');

const Child = () => import('./views/Child.vue');
const ChildDetail = () => import('./views/Child-detail.vue');
const ChildEdit = () => import('./views/Child-edit.vue');

export default new Router({
  mode: 'history',
  //*라우터의 기본 모드는 해쉬모드임. 해쉬태그 뒤쪽에 있는 것을 주소로 인식.
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      //*users 추가
      path: '/users/:id', //파라미터 전달 : 주소창에 값을 넣어 전달하는 방법(1)
      //사용자 화면에서 /users라고 하면 아무것도 안 뜨다가, /users/123와 같이 인자를 전달하면 정상작동함
      // => /users/(어떤 값을 넣어줘야 동작)

      //path: '/users' 로만 남겨놓아도, app.vue의
      //     <v-list-tile router :to="{
      // name:'users',
      //     params:{
      //   id: 4321, // : /users 메뉴를 클릭하면 4321이란 값을 받음
      //       name: 'hoza'  // : /users 메뉴를 클릭하면 이 값도 확인할 수 있음
      // }
      // }">
      // 때문에 4321, hoza라는 값이 화면에 확인됨
      name:'users',
      component: Users
    },
    {
      path:'/child',
      name:'child',
      //*router guard
      // beforeEnter:(to, from, next) => {
      //   //라우터가 불러와지기 전에 이 함수가 실행된 후, 라우터 실행
      //   console.log('to', to, 'from', from); //여기까지 적고 난 후, child 메뉴로 들어가면 아무런 화면이 뜨지 않는 것을 확인할 수 있음
      //   /*출력결과
      //     to
      //     {name: "child", meta: {…}, path: "/child", hash: "", query: {…}, …}
      //     name: "child"
      //     meta: {}
      //     path: "/child"
      //     hash: ""
      //     query: {}
      //     params: {}
      //     fullPath: "/child"
      //     matched: [{…}]
      //     __proto__: Object
      //      from
      //     {name: "users", meta: {…}, path: "/users/4321", hash: "", query: {…}, …}
      //     name: "users"
      //     meta: {}
      //     path: "/users/4321"
      //     hash: ""
      //     query: {group: "member", category: "trial"}
      //     params: {id: "4321"}
      //     fullPath: "/users/4321?group=member&category=trial"
      //     matched: [{…}]
      //     __proto__: Object
      //   * */
      //   //해당 라우터의 정보가 출력됨
      //
      //   //to, from = 라우터가 어디에서 어디로 가고 있는지 정보를 담고 있음
      //   //next = 실제로 라우터가 어디로 이동하게 될지를 결정
      //   console.log("beforCreated");
      //   next(); //이 단계에서 child 메뉴가 정상적으로 나타남
      //   //*정리 : 정해져 있는 속성을 라우터 객체 안에 선언해줌으로써 동작하게 됨. 이 특별한 속성들은 to, from next 순서대로 인자를 받음
      //
      //   // beforeEnter를 통해 라우터 접근을 거부하고 싶다면, 다른 라우터 주소를 입력하면 됨
      //   // next("/"); //child를 누르면 home으로 감
      //
      //   /*
      //   예) 로그인 분기문 만들 때 이런식으로 사용할 수 있음
      //   if(isUserLogin === true){
      //     next();
      //   }else{
      //     next('about');
      //   }
      //   * */
      // },
      component:Child,
      children:[ //하위경로 : 배열 안에 객체를 만듬
        {
          path:':id', //하위경로므로 이렇게만 써도 됨
          name:'child-detail',
          component:ChildDetail
          //http://localhost:8081/child/99 와 같이 /child 뒤에 값을 넣으면 child-detail이 보임
        },
        {
          path:':id/edit', //http://localhost:8081/child/asdfdsf/edit
          name:'child-edit',
          component:ChildEdit
        }
      ]
    },
      //Redirection
      //라우트를 만들어 놓지 않은 곳으로 유저가 들어왔을 때
    {
      path:'/redirect-me', //이 주소로 왔을 때
      // redirect: '/users' //이 곳으로 사용자를 보내라(path가 들어가면 됨)
      redirect : {name:'users'}
      //결과: 주소창을 통해 /redirect-me로 진입하면 users로 보내짐
    },
    //사용자가 아무 주소를 쳤을 때 빈공간이 안 보이게끔 예외처리를 하는 법
    {
      path:'/*', //*를 붙여주는 의미 = 이곳에 선언된 모든 path들 중 하나도 걸리지 않는다면 무조건 여기로 redirect
      redirect:{name:'home'}
    }
  ]
})

//***edit2에 path가 중복되는 이유
//child -> input에 번호 입력 -> 검색버튼을 눌렀을 때 : path: '/child'단계
//하지만 children 내의 하위 경로에선 거기서부터 시작이므로 상위경로를 입력하지 않아도 됨
// => user-detail이 하위 경로이므로 여기서 path를 쓸 때는 this.$router.push({path:`${this.userId}/edit`})와 같이 하위경로부터 시작
// => child.vue에서 경로를 쓸 때는 하위경로 앞에 본인경로를 씀 <v-btn @click="$router.push({path:`child/${userId}`})">검색</v-btn>
