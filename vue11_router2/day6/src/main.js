import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MyJoin from './router/MyJoin.vue'
import MyLogin from './router/MyLogin.vue'
import MyHome from './router/MyHome.vue'

const routes = [
  {path: '/join', component: MyJoin},
  {path: '/login', component: MyLogin},
  {path: '/home', component: MyHome}
];

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
