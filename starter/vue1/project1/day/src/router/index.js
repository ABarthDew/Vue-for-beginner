import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld'
import VueCom from '../components/VueCom'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/hello', component: Hello},
    {path: '/VueCom', component: VueCom}
  ]
})
