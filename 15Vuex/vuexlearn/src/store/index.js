import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutation_type'

// 1、安装插件
Vue.use(Vuex)

// 创建modules
const moduleB = {
  state:{},
  getters:{},
  mutations:{},
  // 等等
}

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
    ],
    info:{
      name:'naruto'
    }
  },
  mutations:{
    // 方法，默认会传入state
    // mutation可以更改值，但getters一般只是计算并返回值
    // increment称为事件类型，后面的(state){}是回调函数
    // increment(state){
    //   state.counter++
    // },

    // 类型常量
    // import { INCREMENT } from './mutation_type'
    [INCREMENT](state){
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
    },
    updateInfo(state){
      state.info.name='itachi'
    }
  },
  actions:{
    // 异步请求,只要是有异步操作的，必须在actions中多这样一群代码
    // context上下文，是actions中的默认参数
    // actions中commit  mutations中的事件类型
    // 在使用时，vue组件中的methods中要通过this.$store.dispatch('aUpdateInfo')
    aUpdateInfo(context,payload){
      // setTimeout(() => {
      //   context.commit('updateInfo',payload)
      //   console.log(payload.message)
      //   payload.success()
      // })


      // 写法二、
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)
          resolve('参数')
        })
      })


    }
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
    // 模块
    // 有时为了能够将某些模块单独抽离出来，可以在modules中写多个模块
    a:{
      state:{
        name:'peien'
      },
      getters:{},
      mutations:{},
      actions:{}
      // 等等
    },
    b:moduleB

    // modules的使用
    // {{$store.state.a.name}}
    // getters的使用基本相同，但还可以添加一个参数rootState，表示根的状态，即store的state
    // actions的使用，传入的参数context是上下文的意思，所以在模块中的context.commit,提交的是模块中的东西
    // 如果想拿到根里的东西时，可以通过root来拿，例如context.rootGetters,rootStates等
  }
})

// 3、导出store独享
export default store
// 4、main.js中挂载store