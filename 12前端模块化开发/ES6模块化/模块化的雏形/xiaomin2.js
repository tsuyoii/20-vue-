// ES6导入
// 1、导入方式一
import {flag,sum} from "./xiaomin1.js";
if(flag){
  console.log('小明2');
}
// 2、导入方式二
// 这种对应的export default,只能有一种属性或方法，导入时可以由导入者自己设置名字，不用按照原来的名字
import hflag from "./xiaohong1.js";
if(hflag){
  console.log('export default');
}
// 3、导入方式三
import age from "./xiaomin1.js";
console.log('直接导出export定义的变量'+age);

// 4、导入方式四
import {mul, Person} from "./xiaomin1.js";
console.log(mul(100,32));
const cclass = new Person();
cclass.run();

// 5、统一全部导入，
import * as aaa from "./xiaomin1.js";
console.log('全部导入'+aaa.age);