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
export function request(config){
  // 1、创建axios的实例
  const instance = axios.create({
    baseURL:'httpbin.org',
    timeout:5000
  })

  // 发送真正的网络请求
  // 查看axios.create()的源码，发现返回值instance本身就是一个promise.
  return instance(config)
}