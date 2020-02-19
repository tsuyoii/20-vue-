<template>
  <div class="hello">
    <h2>HelloVuex中的counter</h2>
    <!-- state使用 -->
    <h1>{{$store.state.counter}}</h1>


    <!-- mutations使用 -->
    <button @click="add">+</button>
    <button @click="sub">-</button>
          <!-- 传入一个数字作为参数 -->
    <button @click="addCount(5)">+5</button>
          <!-- 传入对象作为参数 -->
    <button @click="addStu()">添加学生</button>

    <!-- actions的使用 -->
    <h2><button @click="updateinfo">修改信息</button></h2>

    <!-- getters的使用 -->
    <h2>平方{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.moreAgeStu(14)}}</h2>
    <h2>年龄大于Age的人数{{$store.getters.moreAgeStuLength(14)}}</h2>

    <!-- modules的使用:虽然state中没有a,但可以通过modules使用,另外，modules中的mutations的方法
    也是靠methods中的this.$store.commit（）提交的，所以模块中的mutations事件类型名称最好
    不要和stores中的mutations中事件类型名称相同 -->
    <p> {{$store.state.a.name}} </p>
  </div>
</template>

<script>
import {
  INCREMENT
} from '../store/mutation_type.js'
export default {
  name: 'HelloVuex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    add(){
      // mutation更新用commit
      // return this.$store.commit('increment')

      // 使用类型常量
      return this.$store.commit(INCREMENT)
    },
    sub(){
      return this.$store.commit('decrement')
    },
    // 更新mutation时传入参数,这个参数称为playload负载
    addCount(counts){
      // mutation更新用commit
      // return this.$store.commit('incrementCount',counts)
      // 这里的counts传入的是一个数


      // 还有另一种提交方式，type方式
      return this.$store.commit({
        type:'incrementCount',  //type:事件类型
        counts:counts           //这里传参数过去时传的是一整个数组
      })
    },
    addStu(){
      const studentobj = {id:114,name:'five',age:55}
      return this.$store.commit('addStu',studentobj)
    },
    updateinfo(){
      // this.$store.dispatch('aUpdateInfo','我是payload')
      // this.$store.dispatch('aUpdateInfo',{
      //   message :'我是携带的信息',
      //   success:() => {
      //     console.log('里面已经完成了')
      //   }
      // })


      // 写法二
          this.$store
          .dispatch('aUpdateInfo','我是携带的信息')
          .then(res => {
            console.log(res)
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
