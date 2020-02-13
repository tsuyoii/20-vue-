// ES6模块导出
  var name='小明';
  var flag = true;

  function sum(num1,num2){
    return num1+num2
  }

  if(flag){
    console.log('我是小明');
    console.log(sum(30,40))
  }
  // 1、导出方式一
  export{
    name,flag,sum
  }

  // 2、导出方式三还可以导入属性
  export const age = 18

  // 3、导出方式四、可以导出类、函数等
  export function mul(num1,num2){
    return num1*num2
  }
  export class Person{
    run(){
      console.log('在奔跑');
    }
  }
  // 也可以先写好再统一导出
