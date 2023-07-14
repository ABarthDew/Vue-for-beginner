import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

store.dispatch('auth/login', {
  id: 'admin1',
  pw: 'qwer1234'
});
//'auth/login'의 의미 : auth.store.js 내 actions의 login메서드를 가리킴

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
