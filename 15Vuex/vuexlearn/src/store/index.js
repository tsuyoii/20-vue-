import Vue from 'vue'
import Vuex from 'vuex'

// 1、安装插件
Vue.use(Vuex)

// 2、创建对象
// 注意store要小写
const store = new Vuex.Store({
  state:{
    // 状态
    counter:0,
    students:[
      {id:110,name:'one',age:15},
      {id:111,name:'two',age:20},
      {id:112,name:'three',age:10},
      {id:113,name:'four',age:32},
    ]
  },
  mutations:{
    // 方法，默认会传入state
    // mutation可以更改值，但getters一般只是计算并返回值
    // increment称为事件类型，后面的(state){}是回调函数
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    // // 传入一个参数
    // incrementCount(state,count){
    //   state.counter += count
    // },

        // 传入一个参数的type写法
        // 这里因为从type提交封装，传入参数是一整个对象，不适宜使用其中的参数，如果传入的对象中还有其他变量？
        // 不可能将其做另一个参数传，因此，这里一般用playload（负载）做对象参数，调用其中的变量
        incrementCount(state,playload){
          state.counter += playload.counts
        },

    // 传入对象作为参数
    addStu(state,stu){
      state.students.push(stu)
    }
  },
  actions:{
    // 异步请求
  },
  getters:{
    // 类似于单个组件中的计算属性,可以想象成计算器，计算器一般是对一些数据进行处理，计算后返回
    // 1、数据进行计算,同样默认传入参数state
    powerCounter(state){
      // 使用时：$store.getters.powerCounter
      return state.counter *state.counter
    },
    // 2、传参用法：查找students数组中年龄大于age的对象
    // 使用时：$store.getters.moreAgeStu(参数Age:例如13)
    moreAgeStu(state){
      return function(Age){
        return state.students.filter(s => s.age>Age)
      }
    },
    more14Stu(state){
      return state.students.filter(s => s.age>14)
    },
    // 3、还可根据需要添加一个参数getters
    
    moreAgeStuLength(state,getters){
      // 使用时：$store.getters.more14StuLength
      // return getters.more14Stu.length
      // 使用时：$store.getters.moreAgeStuLength(14)
      return Age =>{
        return getters.moreAgeStu(Age).length
      }
    }

    // 使用过程均可查看HelloVuex.vue
  },
  modules:{

  }
})

// 3、导出store独享
export default store
// 4、main.js中挂载store