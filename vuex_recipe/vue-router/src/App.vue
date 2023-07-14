<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <!--        라우터에 주소 밀어넣기-->
        <!--        name은 router.js내의 컴포넌트 name-->
        <v-list-tile @click="$router.push({name:'home'})">
          <!-- 객체 형태로 선언 <v-list-tile @click="$router.push({path:'/'})">-->
          <!--  값만 선언 <v-list-tile @click="$router.push('/')">-->
          <!--  라우터 링크 <v-list-tile router :to="{name:'home'}" exact>-->

          <!-- 라우터를 통해 값을 넘길 수 있으므로, 객체 형태로 선언하는 게 더 유익-->
          <!-- <v-list-tile @click="$router.push({path:'/', query:{}, params:{}})">-->
          <v-list-tile-action>
            <i class="fas fa-home"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!--        메뉴시작-->
        <!--        <v-list-tile @click="$router.push({name:'about'})">-->
        <v-list-tile router :to="{name:'about'}" exact>
          <!-- exact : /about에 /가 포함되는 것으로 인식하므로, 정확한 비교를 위해 추가하는 속성값-->
          <!--      (active 활성화되는 문제)-->
          <v-list-tile-action>
            <i class="fas fa-user"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!--        메뉴 끝-->

        <!--        //*메뉴 추가-->
        <!--        <v-list-tile :to="{name:'users'}">-->
        <!--        //*값 넘기기 : params 객체에 값을 넣어서 전달하는 방법(2)-->
        <v-list-tile router :to="{
          name:'users',
          params:{
            id: 4321, // : /users 메뉴를 클릭하면 4321이란 값을 받음
            name: 'hoza'  // : /users 메뉴를 클릭하면 이 값도 확인할 수 있음
          },
          query:{ // 주소창에서 ?id=..이런 식으로 ?로 값을 전달하는 방법
            group:'member',
            category:'trial'
            //http://localhost:8081/users/4321?group=member&category=trial
            //이런 식으로 주소가 나타나는 것을 확인할 수 있음
          }
        }">
          <v-list-tile-action>
            <i class="fas fa-user"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile router :to="{
          name:'child'
        }">
          <v-list-tile-action>
            <i class="fas fa-user"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Child</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>

      <!-- router-view : 라우터가 주소를 찾아 컴포넌트를 뿌려주기 위한 장소를 선언-->
      <router-view></router-view>

    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>
