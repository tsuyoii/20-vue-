<template>
  <div class="hello">
    <div><p> {{result}} </p></div>
  </div>
</template>

<script>
  // 直接在这里引用axios
import axios from 'axios'
export default {
  name: 'Helloaxios',
  data () {
    return {
      result:''
    }
  },
  created(){
    axios({
      url:'http://httpbin.org/'
    }).then(res => {
      // console.log(res)
      this.result = res
    })
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
