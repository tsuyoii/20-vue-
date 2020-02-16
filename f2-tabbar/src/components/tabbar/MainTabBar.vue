<!--  -->
<template>
  <div>
    <tabbar>
      <!--                      动态传入样式 -->
      <tabbar-item path="/home" activeColor="green">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category" activeColor="green">
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/shopcar" activeColor="green">
        <img slot="item-icon" src="../../assets/img/tabbar/shop_car.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/shop_car_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile" activeColor="green">
        <img slot="item-icon" src="../../assets/img/tabbar/my.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/my_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from 'components/tabbar/TabBar'
import tabbarItem from '@/components/tabbar/TabBarItem'
export default {
  name: '',
  data() { 
    return {

    }
  },
  components:{
    tabbar,
    tabbarItem
  }
 }
</script>

<style>

</style>