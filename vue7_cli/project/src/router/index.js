import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HelloWorld from './components/HelloWorld.vue'
import test1 from './components/test.vue'

export default new Router({
    routes:[
        {path:'/hello', component:HelloWorld},
        {path:'/test', component:test1}
    ]
})