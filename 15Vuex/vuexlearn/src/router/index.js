import Vue from 'vue'
import Router from 'vue-router'
import HelloVuex from '@/components/HelloVuex'

const Helloaxios =() => import('@/components/Helloaxios')

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloVuex',
      component: HelloVuex
    },
    {
      path:'/helloaxios',
      component:Helloaxios
    }
  ]
})
