import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopcar = () => import('../views/shopcar/Shopcar.vue')
const Profile = () => import('../views/profile/Profile.vue')

Vue.use(Router)

const  routes = [{
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcar',
    component:Shopcar
  },
  {
    path:'/profile',
    component:Profile
  }
  ]

  const router =new Router({
    routes,
    mode:'history'
  }) 
export default router
