<!--  -->
<template>
  <div class="tabbar-item" @click="tabbarItemClick">
    <!-- 由于插槽最终是要被替换的，所以一般在外面包一个div，直接对div进行控制 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- <div :class="{active:isActive}"><slot name="item-text"></slot></div> -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() { 
    return {
      // isActive:false
    }
  },
  computed:{
    isActive(){
      //  indexOf()方法可返回某个指定的字符串值在字符串中首次出现的位置。
      // 取到path与当前活跃的path比较，如果未找到就===-1,返回false,相反返回true
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    tabbarItemClick(){
        // this.isActive = !this.isActive
        this.$router.push(this.path)
    }
  }
 }
</script>

<style>
.tabbar-item{
  /* flex:1px可以使flex布局均等分 */
  flex:1px;
  /* text-align让文字居中展示 */
  text-align:center;
  /* 一般tabbar的高度都是49 */
  height:49px;
  font-size:14px;
}
.tabbar-item img{
  width:24px;
  height:24px;
  margin-top:3px;
  vertical-align: middle;
  margin-bottom: 3px;
}
/*为了能动态赋予样式，需要封装 
.active{
  color:yellow;
} */
</style>