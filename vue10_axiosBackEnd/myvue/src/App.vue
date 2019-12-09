<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" /><br>
    <input type="text" v-model="msg">
    <button @click="onClick">button</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from 'axios';
// import { axios } from 'axios';

// export const axios = function(){
// };

export default {
  name: "app",
  data:function(){
    return{
      msg : ''
    }
  },
  methods:{
    onClick() {
      // backtick(`)
      // axios.get(`http://localhost:7001/test/test/${this.msg}`)
      axios.get(`/api/test/${this.msg}`)
        //CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
        //브라우저에서 동일한 주소가 아니면 차단함(호출 자체는 문제없음)
        //실서버에 올릴 때는 상대적으로 문제가 없음(프론트엔드-정적리소스는 웹서버에 올리고 백엔드는 웹서버와 연동된 was서버에 올리게 됨)
        //was는 프론트엔드(static ...)를 올리는 데 성능 떨어지므로 웹서버에 먼저 프론트를 띄우고 안쪽에 was를 또 띄움
        //웹서버가 뜨면 포트를 점유함 //was도 포트를 점유 -> 실제로 포트가 나누어지지는 않는데, 어떻게 하나로 보이게 서비스하느냐?
        //처음에 웹서버로 접속하고, 웹서버에서 static요소를 담당 / jsp, api가 request되면 웹서버에서 was호출->was에 넘겨서 response를 받음

        //웹팩, dev server / 백엔드 서버는 포트가 맞지 않음 = 실제 서비스에서는 주소가 같음
        //로컬에서 테스트 할때는 포트가 나뉘므로 오류남
        // -> proxy 설정

//axios 인터셉터
  //  request / response를 가로챔 
  //1)공통으로 작업해야 할 때 ex)request header 설정(요청 시 contents가 어떻게 설정되어 있는지)
  //권한이 없을 때 나오는 에러코드(401)
  
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        console.log(response.data.msg);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
      // const axios = require('axios').default;
    },
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
