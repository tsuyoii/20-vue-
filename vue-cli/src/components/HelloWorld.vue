<template>
  <body id="paper">
    <el-form :model="loginForm" :rules="rules" class="login-container" label-position="left" label-width="0px" v-loading="loading">
      <h3 class="login-title">系统登陆</h3>
      <el-form-item prop="username">
        <el-input type="text" :model="loginForm.username" auto-complete="off" placeholder="账号/邮箱/手机号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox class="login-remember" :model="checked" label-position="left"><span style="color:#505458">记住密码</span></el-checkbox>
      <el-form-item style="width:100%">
        <el-button type="primary" style="width:40%;background:#505458;border:none" v-on:click="login">登陆</el-button>
        <router-link to="register"><el-button type="primary" style="width:40%;background:#505458;border:none">注册</el-button></router-link>
      </el-form-item>
    </el-form>
  </body>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      rules:{
        username:[{required:true,message:'用户名不能为空',trigger:'blur'}],
        password:[{required:true,message:'密码不能为空',trigger:'blur'}]
      },
      checked:false,
      loginForm: {
        username:'',
        password:''
      },
      loading:false
    }
  },
  methods:{
    login(){
      var _this=this
      this.$axios
        .post('/login',{
          username:this.loginForm.username,
          password:this.loginForm.password
        })
        .then(successResponse=>{
          if(successResponse.data.code===200){
            this.$alert("登陆成功")
          }else
            this.$alert(successResponse.data.message,'提示',{
              confirmButtonText:'确定'
            })
        })
        .catch(failResponse=>{})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #paper{
    background:url("../assets/img/bg_login.jpg");
    height:100%;
    width:100%;
    background-size:cover;
    position:fixed;
  }
  body{
    margin:-5px 0px
  }
  login-container{
    border-radius:15px;
    background-clip:padding-box;
    margin:90px auto;
    width:350px;
    padding:35px 35px 15px 35px;
    background: #fff;
    border:1px solid #eaeaea;
    box-shadow:0 0 25px #cac6c6
  }
  login-title{
    margin:0 auto 40px auto;
    text-align:center;
    color:#505458;
  }
  login-remember{
    margin:0px 0px 35px 0px;
    text-align:left;
  }
  el-checkbox{
    background:#505458;
  }
</style>
