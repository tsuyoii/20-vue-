// 无模块化
// var name='小红';
// var flag=false;
// if(flag){
// console.log('我是小红')
// }

// 使用闭包匿名函数
// (function(){
//   var name='小红';
//   var flag=false;
//   if(flag){
//     console.log('我是小红')
//   }
// })()



// 模块化雏形,可以在前面加上分号;用来分割其他文件或其他模块
// ;
// var modelB = (function(){
//   // 不同文件只需规定不同模块名即可，内部名字可以相同
//   var obj = {}

//   var name='小红';
//   var flag=false;
//   if(flag){
//     console.log('我是小红')
//   }

//   obj.name=name;
//   obj.flag=flag;
//   return obj
// }())


// CommonJS模块化
var name='小红';
var flag=false;
if(flag){
console.log('我是小红')
}
module.exports={
  flag,name
}