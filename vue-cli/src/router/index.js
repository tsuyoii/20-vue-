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
const profile = () => import('../components/Profile')

// 1、通过Vue.use(插件)来安装插件
Vue.use(VueRouter)

// 3、创建VueRouter对象,配置路由和组件之间的应用关系url:组件
// 一个映射对应着一个对象{}
// 注意查看meta
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
    meta:{
      title:'用户'
    },
    component:User
  },
  {
    // 注意component不能加引号
    path:'/home',
    name:'Home',
    meta:{
      title:'首页'
    },
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
    meta:{
      title:'登录'
    },
    component:() => import('../components/Login')
  },
  {
    path:'/profile',
    meta:{
      title:'档案'
    },
    component:profile
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  // routes:routes的增强写法
  routes,
  // 默认是hash(锚点‘#’模式，用html5的history模式可以让url中不含#)
  mode:'history'
})

// 全局导航守卫，除了方案一Home.vue中的created()生命周期监听组件方式，还可以直接监听路由
// 这里的router是前面new VueRouter出来的一个全局路由的实例
router.beforeEach((to,from,next) => {
  // 从from跳转到to
  // 按ctrl+单击查看beforeEach()的源码可以发现to是一个route类型
  // 而这些route就是指前面的路由与组件的配置部分，当想要在这些路由中添加一些内容时
  // 就可以在中间加上meta属性，meta代表元数据，可以传入一个对象，详情看前面
  // 当有路由的嵌套时，只访问meta是不够的，会展示undefined
  // 这时需要添加matched[],访问matched[0],因为home中还包含new,message,下标为0表示访问第一个路由的元数据，即home
  document.title = to.matched[0].meta.title
  // console.log(to)
  // console.log('++前置钩子++')
  // 必须要调用next函数才能正确展示，知道要实现下一步，否则不知道下一步该干嘛，做什么操作都不会响应
  next()
})

// 前面的beforeEach()是前置钩子，跳转前要回调此函数，而afterEach()是后置钩子(hook),
// 表示跳转完成后要进行的操作
router.afterEach((to,from) => {
  // console.log('--后置钩子--')
  // 不需要next，因为跳转完成后面不需要下一步操作了
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
