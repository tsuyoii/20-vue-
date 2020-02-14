<!-- 根据动态路由获取对应信息 -->
<template>
<div class='user_dynamicid'>
  <h2>我是用户页面</h2>
  <!-- 为了能根据页面url后面获取的动态路由对应取到界面内容的信息
  需要用到$route.params.xxx方法获取信息，详见computed计算属性中的内容 -->
  <p>{{userId}}</p>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'User',
components: {},
data() {
//这里存放数据
  return {
  }
},
computed:{
  userId(){
    // 注意1、$route不是$router,$router是index.js中的new VueRouter的实例的router,是包含了
    //        所有路由的，而$route表示的只是目前激活状态的路由，即目前是处在哪个界面，哪个路
    //        由就是处于激活的状态,用this.$route即可访问
    //     2、params是parameters（参数）的简写
    //     3、user_id是对应着router/index.js中配置动态路由与组件时起的名字
    return this.$route.params.user_id;
  }
}
}
</script>
<style>
.user_dynamicid{
  color:yellowgreen;
}
</style>