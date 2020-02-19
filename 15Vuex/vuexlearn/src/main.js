import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import { request } from './network/request'

Vue.config.productionTip = false

// 挂载后相当于添加了语句Vue.prototype.$store = store,以后就可以全局使用$store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})


  //axios的基本使用 



// 在任何地方都可以引用
// 传入一些你要进行的相关网络请求，相关的一些配置即可引用
// 由于可能需要传入很多的一些相关配置，因此，config应该是一个对象
// axios(config)
// 需要有一个服务器作为url为我们返回数据
// httpbin.org,该网站可以为我们做很多请求的模拟，可以做为一个模拟封装，模拟测试的网站
// axios可以使用promise,可以直接使用.then()方法，它会在内部自动调用promise.resolve


// 最简单的一种写法:
// 默认情况下，如果只传一个url的话，默认执行get请求，用method可以指定请求类型
// axios({
//   url:'http://httpbin.org/',
//   method:'get'
// }).then(res => {
//   // res这里是result的一个简称
//   console.log(res)
// })

// // 写法二
// axios.get()
// axios.post()

// // 写法三:专门针对get请求的参数拼接
// // 有时候，如果不想把参数直接拼接在url后面，还可以通过params参数来传递参数
// axios({
//   url:'http://httpbin.org/',
//   method:'get',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   // res这里是result的一个简称
//   console.log(res)
// })



// // axios的并发请求
// // 类似promise
// // axios.all([axios(),axios()]).then(resultes => {})
// axios.all([
//   axios({
//     url:''
//   }),
//   axios({
//     url:''
//   })]).then(results => {
//     console.log(results)
//     console.log(results[0])
//     console.log(results[1])
//   })

//   // 如果要分开使用的话，可以通过axios.spread将数组[res1,res2]展开为res1,res2
//   // 这里的res1<=>(等价于)results[0],res2<=>(等价于)results[1]
//   axios.all([
//     axios({
//       url:''
//     }),
//     axios({
//       url:''
//     })
//   ]).then(axios.spread((res1,res2) => {
//     console.log(res1)
//     console.log(res2)
//   }))
//   // 等价于 ]).then(axios.spread([res1,res2] => {,这里可以理解为相当于对results数组的解构




//   // axios的全局配置
//   axios.defaults.baseURL = 'http://httpbin.org/'


//   // 创建axios实例instance，由于可能某些url不是用的全局配置中的baseURL,这时，可以创建多个axios实例，
//   // 相当于封装成模块
// const instance1 = axios.create({
//   baseURL:'http://123.207.32.33:8081',
//   timeout:5000
// })

// instance1({
//   url:'/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// instance1({
//   url:'/home/data',
//   params:{
//     type:'roll',
//     page:3
//   }
// }).then(res => {
//   console.log(res)
// })
// // 当有另外几个网页对不同的服务器请求时，可以再创建实例
// const instance2 = axios.create({})






// 5、request模块的封装
// 前面步骤查看network/request.js写法一
// import {request} from './network/request'

// request({
//   // url:'/home/multidata'
//   url:''
// },
// // 作为request模块函数的success参数
// res => {
//   console.log(res)
// },
// // 作为request模块函数的failure参数
// err => {
//   console.log(err)
// })







// 写法二
// request({
//   baseConfig:{

//   },
//   success(res){

//   },
//   failure(err){

//   }
// })




// // 对应的写法三
// request({
//   url:''
// }).then(res => {

// }).catch(err => {

// })





// 对应的写法四
request({
  url:''
}).then(res => {

}).catch(err => {
  
})