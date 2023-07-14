import Vue from 'vue'
import App from './App.vue'
import myLogin from './views/MyLogin.vue'
import myJoin from './views/MyJoin.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

//const = 재할당 불가
//자바스크립트의 const(변할 수 있음) != 자바 final(불변)
/*
const foo = 'foo';
foo = 'bar';

const bar = { a: 1, b: 2 };
bar.a = 2;
console.log(bar.a);

*/

/*
let foo2 = 'foo';
foo2 = 'foo2';

let bar2 = 1;
for(let i=0;i<1;i++) {
  let bar2 = 2;
  console.log('for문 안쪽', bar2);
}
console.log('for문 바깥쪽', bar2);
*/

const rout = [
  {path: '/my-login', component: myLogin},
  {
    path: '/my-join', component: myJoin
    // , children: [
    // {path:'1', component:myJoin1},
    // {path:'2', component:myJoin2},
    // ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: rout
});

Vue.use(VueRouter); //VueRouter(라이브러리)에서 제공하는 커스텀 인스턴스가 있으므로, 그걸 쓰겠다는 것 <view-router>

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
