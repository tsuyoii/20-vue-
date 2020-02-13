// 无模块化时
// var name='小明';
// var flag = true;

// function sum(num1,num2){
//   return num1+num2
// }

// if(flag){
//   console.log('我是小明');
//   console.log(sum(30,40))
// }


// 使用闭包
// (function(){
//   var name='小明';
//   var flag = true;

//   function sum(num1,num2){
//     return num1+num2
//   }

//   if(flag){
//     console.log('我是小明');
//     console.log(sum(30,40))
//   }
// }())



// 使用模块化，模块化雏形
// 接收返回值，接收导出
// var modelA = (function(){
//   // 先声明一个对象
//   var obj={};

//   var name='小明';
//   var flag = true;

//   function sum(num1,num2){
//     return num1+num2
//   }

//   if(flag){
//     console.log('我是小明');
//     console.log(sum(30,40))
//   }

//   obj.name = name;
//   obj.flag = flag;

//   // 导出,返回值需要有接收
//   return obj;
// })()



// 一些模块规范化标准；CommonJS,但这种方式需要在node环境下才能解析
  var name='小明';
  var flag = true;

  function sum(num1,num2){
    return num1+num2
  }

  if(flag){
    console.log('我是小明');
    console.log(sum(30,40))
  }

  module.exports={
    flag,name,sum
  }