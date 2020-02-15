<!--  -->
<template>
<div>
  <h2>我是profile档案，个人信息</h2>
  <!-- 利用$route动态获取query参数中的详细属性-->
  <h3>{{$route.query.name}}</h3>
  <h3>{{$route.query.age}}</h3>
  <h3>{{$route.query.height}}</h3>
</div>
</template>

<script>
export default {
name:'Profile',
components: {},
data() {
  return {

}
},
created(){
  console.log('Profile created')
},
destroyed(){
  console.log('Profile destroyed')
}
}
</script>
<style>

</style>