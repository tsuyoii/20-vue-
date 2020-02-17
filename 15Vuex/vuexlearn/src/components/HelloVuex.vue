<template>
  <div class="hello">
    <h2>HelloVuex中的counter</h2>
    <h1>{{$store.state.counter}}</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>
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
      return this.$store.commit('increment')
    },
    sub(){
      return this.$store.commit('decrement')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
