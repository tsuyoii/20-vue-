//设置反向代理
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import BaiduMap from 'vue-baidu-map'

Vue.use(ElementUI)
//设置反向代理，前端请求默认发送到http://localhost:8081/api
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8081/api'

//全局注册，之后可以在其他组件中通过this.$axios发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
// runtime+compiler方式创建
// 内部流程：template--(解析)--->ast(abstractor syntax tree抽象语法树)--(编译)-->render--->virtual dom--->真实dom(即UI)
// components注册组件App,通过template:'<App/>'挂载而template中的代码分离提取到App.vue中
// 通过vue-loder加载，通过vue-template-compiler编译，可将id为app的div替换为template中的内容
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })



  // runtime only方式(性能更高，代码量更少)
  const cpn = {
    template:`
      <div>{{message}}</div>
    `,
    data(){
      return{
        message:'我是组件'
      }
    }
  }


  new Vue({
    el: '#app',
    render:h=>h(App)

  // render函数完整写法
      // render:function(creatElement){
        // 1、普通用法
        // return creatElement('标签',{标签的属性},['元素里的内容'])
        // return creatElement('h2',{class:'box'},['Hello啊',creatElement('button',['按钮'])])
      
        //2、传入组件对象 
        // return creatElement(cpn)
        // App.vue也是一个组件，不过是分离了出去而已
        // return creatElement(App)
        // 即等效于
        // 前面的render:h=>h(App)
      // }
  })