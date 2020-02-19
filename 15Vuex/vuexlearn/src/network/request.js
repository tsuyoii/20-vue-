// 导入
import axios from 'axios'

// 由于要封装多个实例，就不用export default了，default只能导出一个实例，因此这里使用function
// export function request(config,success,failure){
//   // 1、创建axios实例
//   const instance = axios.create({
//     baseURL:'httpbin.org',
//     timeout:5000
//   })
//   //2、发送真正的网络请求 
//   instance(config)
//   .then(res => {
//     console.log(res)
//     // 通过前面设置的success和failure函数将结果回调出去
//     success(res)
//   })
//   .catch(err => {
//     failure(err)
//   })


//   // 3、使用，看main.js中request模块的封装
// }
















// 写法二
// export function request(config){
//   // 1、创建axios实例
//   const instance = axios.create({
//     baseURL:'httpbin.org',
//     timeout:5000
//   })
//   //2、发送真正的网络请求 
//   instance(config.baseConfig)
//   .then(res => {
//     console.log(res)
//     // 通过前面设置的success和failure函数将结果回调出去
//     config.success(res)
//   })
//   .catch(err => {
//     config.failure(err)
//   })


//   // 3、使用，看main.js中request模块的封装写法二
// }

















// 写法三
// export function request(config){
//   return new Promise((resolve,reject) => {
//     // 1、创建axios实例
//     const instance = axios.create({
//       baseURL:'httpbin.org',
//       timeout:5000
//     })

//     // 发送真正的网络请求
//     instance(config)
//     .then(res => {
//       resolve(res)
//     })
//     .catch(err =>{
//       reject(err)
//     })
//   })
// }










// 写法四
// export function request(config){
//   // 1、创建axios的实例
//   const instance = axios.create({
//     baseURL:'httpbin.org',
//     timeout:5000
//   })

//   // 发送真正的网络请求
//   // 查看axios.create()的源码，发现返回值instance本身就是一个promise.
//   return instance(config)
// }






// 添加了拦截器
export function request(config){
  // 1、创建axios的实例
  const instance = axios.create({
    baseURL:'http://httpbin.org/',
    // timeout:5000
  })

  // 2、axios的拦截器设置
  // 如果是全局的拦截，可以直接用axios.interceptors《==拦截器的意思，
  // 但这里只是一个实例的拦截，所以只用instance.interceptors
  // 拦截请求instance.interceptors.request.use()
  // 拦截响应instance.interceptors.response.use()
  // 其中，use()传入的两个参数均为函数，config表示请求成功时的拦截，
  // 注意不是拦截成功，而是请求/响应成功时返回的拦截信息去向

          // 2.1请求拦截的作用
    instance.interceptors.request.use(config =>{
      console.log(config)
            //1、比如config中的一些信息不符合服务器的要求，这时可以通过拦截器来查看并更改调试
            
            //2、比如每次发送网络请求时，都希望在界面中显示一个请求的图标，如网页加载中的那个循环转着的小圈

            //3、某些网络请求（比如登录(须携带token)），必须携带一些特殊的信息，可以通过请求拦截查看是否携带了
      // 使用后一定记得返回config，否则拿不到信息会报错
            return config
    },err => {
      console.log(err)
    })


          // 2.2、响应拦截
          // ,响应拦截也有响应成功和响应失败两种情况这里传入的参数是result，因为服务器已经响应过了，所以拿到的是个结果
    instance.interceptors.response.use(res => {
      console.log(res)
      // 这里可以只返回res.data
      return res
    },err => {
      console.log(err)
    })


  // 3、发送真正的网络请求
  // 查看axios.create()的源码，发现返回值instance本身就是一个promise.
  return instance(config)
}