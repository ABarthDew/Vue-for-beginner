<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>

        <v-list-tile :to="{name:'home'}">
          <v-list-tile-action>
            <i class="fas fa-home"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name:'about'}">
          <v-list-tile-action>
            <i class="fas fa-user"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

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
