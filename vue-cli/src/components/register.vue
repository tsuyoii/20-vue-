<template>
    <div id="registerForm">
      registerForm
      <el-form :model="registerForm">
        <el-input v-model="registerForm.nickname" placeholder="请输入昵称"></el-input>
        <el-button type="primary" v-on:click="register"></el-button>
      </el-form>
    </div>
</template>

<script>
  export default {
    name: 'register',
    data(){
      return{
        registerForm:{
          nickname:''
        }
      }
    },
    methods:{
      register(){
        alert("hello!");
      }
    }
  }
</script>

<style scoped>

</style>
