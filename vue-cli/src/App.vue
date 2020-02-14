<template>
  <div id="app">
<!-- 一、<router-link>是一个vue-router中内置的组件，它会被渲染成一个<a>标签 -->

    <router-link to="/home">首页</router-link>
    <router-link to="/login">登录</router-link>
    <!-- <router-link>除了
        1、to属性跳转链接，还有tag属性表示标签，及需要渲染成什么组件，
          如：tag="button"则渲染成按钮，tag="li"则渲染成<li>元素 -->
          <router-link to="/home" tag="button">首页tag</router-link>
          <router-link to="/login" tag="button">登录tag</router-link> 
    <!--2、replace属性，不需要跟任何东西，表示使用replaceState方法，不
          能通过返回箭头回到上一个页面，只有点击了才能进入  -->
          <router-link to="/home" tag="li" replace>首页replace</router-link>
          <router-link to="/login" tag="li" replace>登录replace</router-link>
    <!--3、active-class属性：可以更改router-link渲染的控件激活时的class名称
          
          3.1根据控制台发现，点击首页时，其处于激活状态，有一个class属性
          router-link-active可用于实现点击某个控件，该控件就变红等
          见<style>部分
          
          3.2router-link-active名字太长，可以用active-class属性进行更改
          如：改为‘active’,更改后就可以直接用active作为类名直接控制样式
          
          3.3为了方便，还可以直接在router文件夹下的index.js文件中的const router = new VueRouter
          中添加属性linkActiveClass:'active',和<style>中的类选择器名称改为.active
          其他地方都不需更改-->
          <router-link to="/home" tag="button" active-class="active">首页active1</router-link>
          <router-link to="/login" tag="button" active-class="active">登录active1</router-link>

<!-- 二、路由代码跳转
      有时候，页面的跳转可能需要执行对应的javascript代码，这时，就可以使用第二种跳转方式了 -->
          <button @click="btnHome">首页$router</button>
          <button @click="btnLogin">登录$router</button>

<!-- 三、 <router-view>标签会根据当前的路径，动态渲染出不同的组件。
      网页的其他内容，如顶部标题，导航，或底部的一些版权信息等会和<router-view>处于同一个等级
      在路由切换时，切换的是<router-view>挂载的组件，其他内容不会发生改变 -->

<!-- 四、动态路由
      有时某个页面的路径path不是确定的，例如要进入某用户的个人界面，url请求的后面要跟上个人的用户ID
      这时就需要使用动态路由
      1、普通路由：
      首先要实现一个到/user的路由，需要新建一个User.vue组件，在router/index.js中配置组件
      与路由的映射关系，在App.vue中添加router-link
      2、开始实现动态路由：
      index.js中要配置动态路由，应在原路由后面添加 /:user_id(具体看index.js文件)
      接下来要实现在后面拼接的东西，通过App.vue中的router-link的跳转链接来实现，其实router-link中
      的跳转链接是什么，网页url对应的就是什么，index.js中的只是根据url来寻找相应的组件而已，
      如：
      <router-link to="/user/zhangsan">用户</router-link>
      为了将data中的数据动态绑定给属性，使用v-bind:  (v-model是双向绑定，既绑定还监听)-->
      <!-- 引号表示真实不变的字符串，后面+连接一个动态改变的变量 -->
      <router-link :to="'/user/'+user_id">用户</router-link>
   <router-view/>
  </div>
</template>

<script>
  // import register from './components/register'
export default {
  name: 'App',
  // components:{register},
  data(){
    return{
      user_id:'lisi'
    }
  },
  methods:{
    btnHome(){
      this.$router.push('/home')
      // this.$router.replace('/home')
    },
    btnLogin(){
      this.$router.push('login')
      // this.$router.replace('/login')
    }
  }
}
</script>

<style>
#app{
  font-family:'Avenir',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:center;
  color:#2c3e50;
  margin-top:60px;
}

/*由于active-class属性已经更改了样式名为active所以需要变类名
 .router-link-active{
  color:tomato;
} */
 .active{
  color:tomato;
} 
</style>
