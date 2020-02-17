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

    <!-- getters的使用 -->
    <h2>平方{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.moreAgeStu(14)}}</h2>
    <h2>年龄大于Age的人数{{$store.getters.moreAgeStuLength(14)}}</h2>
  </div>
</template>

<script>
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
      return this.$store.commit('increment')
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
