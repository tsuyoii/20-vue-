<!-- 手机导航栏 -->
<template>
  <div id="tab-bar">
    <!-- 一般一个项目只有一个tabbar导航条，所以可以直接用id作一个标识 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() { 
    return {

    }
  }
 }
</script>

<style>
@import '../../assets/css/base.css';

/* 可以改为引用@import
也可以直接在main.js中使用require('./assets/css/base.css')
body{
  padding:0px;
  margin:0px;
} */
#tab-bar{
  /* 水平展示，flex布局 */
  display:flex;
  background-color:rgb(244, 243, 245);
  /* 一般用f6,且bgc加回车可以简写background-color */
  /* background-color: #f6f6f6; */

  /* position:fixed能够固定布局，设置left,bottem等属性 */
  position:fixed;
  /* 设置left,right属性可以保证占据屏幕整个宽度 */
  left:0;
  right:0;
  bottom:0;


  /* 设置阴影 */
  /* 参数：x方向向右偏移量，y向下偏移量，模糊程度，颜色（最后的.15表示0.15的透明度） */
  box-shadow:0 -1px 5px rgba(100,100,100,.15) 
}

</style>