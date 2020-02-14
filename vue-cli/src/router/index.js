// 配置路由相关信息
import VueRouter from 'vue-router'
// 2、用到了Vue所以导入Vue
import Vue from 'vue'
// ..表示上一级目录，即router所在目录
// import Home from '../components/Home'
// import Login from '../components/Login'
import User from '../components/User'

// 懒加载写法,注意，一个懒加载打包后会对应一个js文件
const Home = () => import('../components/Home')
const HomeNew = () => import('../components/HomeNew')
const HomeMessage = () => import('../components/HomeMessage')

// 1、通过Vue.use(插件)来安装插件
Vue.use(VueRouter)

// 3、创建VueRouter对象,配置路由和组件之间的应用关系url:组件
// 一个映射对应着一个对象{}
const routes = [
  {
    // “/”可写可不写
    path:'/',
    // 重定向，当路径为/时，立刻重定向到/home
    redirect:'/home'
  },
  {
    // 动态路由加 /: 加随便一个名称
    path:'/user/:user_id',
    name:'User',
    component:User
  },
  {
    // 注意component不能加引号
    path:'/home',
    name:'Home',
    component:Home,
    // 嵌套路由，后续步骤见Home.vue组件
    // 注意这里不能加/，因为编译时会自动添加的
    children:[
      {
        path:'',
        redirect:'new'
      },
      {
        path:'new',
        component:HomeNew
      },
      {
        path:'message',
        component:HomeMessage
      }
    ]
  },
  {
    // 懒加载写法，需要时才导入
    path:'/login',
    name:'Login',
    component:() => import('../components/Login')
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  // routes:routes的增强写法
  routes,
  // 默认是hash(锚点‘#’模式，用html5的history模式可以让url中不含#)
  mode:'history'
})

// 4、将router对象导出传入到Vue实例
export default router

// 5、在main.js中引入import router from "./router/index.js"
// 由于在router文件夹下只有一个index.js文件，脚手架会自动寻找内部文件，所以这里可以省略/index.js
// 将引入的router挂载到Vue实例中
// 即main.js文件中的
// new Vue({
//   el:'#app',
//   router:router,//可用增强写法
//   template:'<App/>',
//   components:{App}
// })


// 6、vue-router使用步骤
    // 6.1创建路由组件
    // 6.2配置路由映射：组件和路径映射关系
    // 6.3通过<router-link>和<router-view>使用路由,应写在App.vue中，因为只有App.vue
    // 在main.js中挂载，其他组件应通过App.vue与main.js产生联系







// 重写一次
// //配置页面路由
// import Vue from 'vue'
// import Router from 'vue-router'

// //导入组件
// import Home from '@/components/Home'
// import Login from'@/components/Login'


// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/index',
//       name: 'Home',
//       component: Home
//     },
//     {
//       path:'/login',
//       name:'Login',
//       component:Login
//     }
//   ]
// })
