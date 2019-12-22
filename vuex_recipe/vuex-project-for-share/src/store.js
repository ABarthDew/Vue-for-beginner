import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //vue instance의 데이터
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://goo.gl/Ksk9B9'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://goo.gl/x7SpCD'}
    ]
  },
  getters:{ //component에서 중복된 코드를 반복호출하게 될 때 씀
    // AllUsers.vue, Home.vue 에 "<h1>모든 유저의 수 : {{$store.state.allUsers.length}}</h1>"라는 코드를 넣었다고 생각해보자
    //반복된 코드를 줄이고, 간단한 계산식을 캐싱할 수 있는 것(computed와 비슷)

      //store파일 내에서 state, mutation등에서 데이터를 사용하려면 그 사실을 알려줘야 함
      // = 내가 어떤 값을 가져와서 쓸 것이다 라는 것을 명시
      //다른 컴포넌트에서 데이터를 쓰려면 this.로 불러오던 것과는 다름(=computed와 다른 점)

      //state에 있는 allUsers를 쓸 것이기 때문에 명시해줌
    allUsersCount: function(state){
      return state.allUsers.length; //모든 유저의 길이
    },
    //arrow function version
    allUsersCount2 : state => {
      return state.allUsers.length;
    },
    countOfSeoul: state => {
      let count = 0;
      state.allUsers.forEach(user => { //user:allUsers의 객체 하나
        if(user.address === 'Seoul'){
          count ++;
        }
      });
      return count;
    },
    percentOfSeoul: (state, getters) => {
      //allUsersCount(), countOfSeoul()이 필요하므로 getters도 인자로 받음
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100);
    }
  },
  mutations: { //state값을 변화시킴
    addUsers: (state, payload) => {
      //state: state값을 변화시키므로 state값을 인자로 가짐
      //payload: addUsers가 실행되었을 때, 발생되는 값을 받을 수 있는 곳
      state.allUsers.push(payload);
      // => SignUp.vue
    }
  },
  //mutations의 문제 : 모든 기능이 '동기'로만 동작함
  //mutations을 동작시키는 비지니스 로직을 actions에 넣음
  actions: {
    addUsers: (context, payload) => { //actions는 context를 인자로 받음
      context.commit('addUsers', payload) //mutations의 'addUsers'를 commit
    },
    //mutations의 addUsers를 commit하는 메서드
    // 이름을 같아도 상관없음 / mutations와 actions는 객체와 불러오는 곳이 다르기 때문)
      //다른 방법
    addUsers2 : ({ commit }, payload) => { //commit을 쓸 거라는 것을 알려줌(간단하게 쓰기 위해 commit을 객체 형태로 불러옴)
      // ({ commit }) = function({commit}) 와 동일한 표현
      commit('addUsers', payload); //context 생략 가능
    },
    //mutation이 state를 변화시킨다면, actions는 mutations를 실행시키기 이전 비지니스 로직을 담당
    addUsers3:function(context, payload){
      //.......비지니스로직
      context.commit('addUsers',payload);
    }
  }
})


//정리
//state : component 의 데이터 역할
//getters : component 의 computed 역할(state를 사용할 때, 사용한다고 알려줘야 함)