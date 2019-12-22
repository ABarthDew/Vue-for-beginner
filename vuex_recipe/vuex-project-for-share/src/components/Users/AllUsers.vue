<template>
  <div>
    <h1>All Users</h1>
    <h1>모든 유저의 수 : {{$store.state.allUsers.length}}</h1>
    <h1>모든 유저의 수 : {{$store.getters.allUsersCount}}</h1>
<!--    {{$store.getters.allUsersCount()}} 라고 쓰면 에러남-->
    <h1>모든 유저의 수 : {{$store.getters.allUsersCount2}}</h1>
    <h2>서울 사는 사람들의 수 : {{$store.getters.countOfSeoul}}</h2>
    <h2>서울 사는 사람들의 비율 : {{$store.getters.percentOfSeoul}}</h2>
<!--    단점! : $store.getters를 계속 쓰기 불편함 : mapGetters로 해결-->
    <hr>
<!--    mapGetters로 사용1-->
    <h1>모든 유저의 수 : {{allUsersCount}}</h1>
    <h2>서울 사는 사람들의 수 : {{countOfSeoul}}</h2>
    <h2>서울 사는 사람들의 비율 : {{percentOfSeoul}}</h2>
    <hr>
    <!--    mapGetters로 사용2-->
    <h1>모든 유저의 수 : {{count}}</h1>
    <h2>서울 사는 사람들의 수 : {{seouls}}</h2>
    <h2>서울 사는 사람들의 비율 : {{percent}}</h2>
    <hr>
    <!--    mapstate로 사용-->
    <li
            v-for="(user, index) in allUsers"
            :key="index"
            avatar
    >{{user}}</li>
    <v-list two-line>
      <v-list-tile 
        v-for="(user, index) in $store.state.allUsers"
        :key="index"
        avatar
      >
        <v-list-tile-avatar color="grey lighten-3">
          <img :src="user.src">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="user.name"></v-list-tile-title>
          <v-list-tile-sub-title>id:#{{index}} / {{user.address}} 거주</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </div>
</template>

<script>
import { EventBus } from '@/main.js'

import { mapState, mapGetters } from 'vuex'
//mapGetters는 vuex에서 미리 설정해 놓은 값이기 때문에 vuex에서 불러옴
// => 아래 선언 후 사용할 수 있음

  export default {
    data() {
      return {
        // allUsers:[
        //   {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
        //   {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://goo.gl/Ksk9B9'},
        //   {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://goo.gl/x7SpCD'}
        // ]
        // = store.js의 state로 옮김
      }
    },
    mounted() {
      EventBus.$on('signUp', users => {
        // this.allUsers.push(users)
        this.$store.state.allUsers.push(users);
      })
    },
    computed:{ //mapGetters는 computed에 선언해 줌
      //방법 1)
      ...mapGetters([
        'allUsersCount', 'countOfSeoul', 'percentOfSeoul'
      ]),
      //방법 2)
      ...mapGetters({
        count:'allUsersCount',
        seouls:'countOfSeoul',
        percent:'percentOfSeoul'
      }),
      //state도 가능
      ...mapState(['allUsers'])
    }
  }
</script>
