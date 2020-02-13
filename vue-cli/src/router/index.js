//配置页面路由
import Vue from 'vue'
import Router from 'vue-router'

//导入组件
import Home from '@/components/Home'
import Login from'@/components/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Home',
      component: Home
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ]
})
