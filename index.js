import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import btable from '../components/btable'
import count from '../components/count'
import textarea from '../components/textarea'
import fatchdata from '../components/fatchdata'

Vue.use(Router)
    const routes=[{
            path:'/',
            name:"HelloWorld",
            component:HelloWorld
        },
        {
            path:'/btable',
            name:"btable",
            component:btable
        },
        {
            path:'/count',
            name:"count",
            component:count
        },
        {
            path:'/textarea',
            name:"textarea",
            component:textarea
        },
        {
            path:'/fatchdata',
            name:"fatchdata",
            component:fatchdata
        }]
    let router=new Router({routes})
    export default router
