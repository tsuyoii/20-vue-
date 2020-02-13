// 无模块化时，由于xiaohong1.js中的flag与xiaomin1.js中的flag都是全局变量且同名，且index.html中是先引入的xiaomin1.js
// 因此这里flag是xiaohong1.js中的flag,不会打印“小明2”
// if(flag){
//   console.log('小明2')
// }


// 使用闭包
// 但这种方式无法复用，需要重新定义
// (function(){
//   var flag=true;
//   if(flag){
//     console.log('小明闭包')
//   }
// }())


// 模块化导入复用，模块化雏形
// (function(){
//   // 导入模块
//   var flag = modelA.flag

//   var flag=true;
//   if(flag){
//     console.log('小明闭包')
//   }
// })()


// CommonJS模块化的导入
var aaa = require('./xiaomin1.js')
var flag = aaa.flag
// 等价于
let {flag} = require('./xiaomin1.js')
if(flag){
  console.log('小明2')
}