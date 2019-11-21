import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Hello from '../components/HelloWorld'
import VueCom from '../components/VueCom'

export default new Router({
    routes:[
        {path:'/hello', component:Hello},
        {path:'/VueCom', component:VueCom}
    ]
})
