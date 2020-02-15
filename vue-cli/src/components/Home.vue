<template>
  <div class="mypage">
    <h2>我是首页</h2>
    <router-link to="/home/new">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data(){
      return{
        path:'/home/new'
      }
    },
    // 组件被创建出来时调用
    // 在各组件，如Home.vue,  Login.vue, 
    //  User.vue,  Profile.vue中都加上此函数即可实现，
    // 但这样做当组件很多时一个一个改特别麻烦，接下来看方案二
    // 方案二见router/index.js中的全局导航守卫
    created(){
      console.log('created')
      document.title = '首页'
    },
    // // 组件创建完成后，当前面template中的dom元素被挂载到组件上时
    // mounted(){
    //   console.log('mounted')
    // },
    // // 当页面发生更新时，例如数据双向绑定时更新数据，
    // 只要界面发生一次刷新，就会到这里来调用updated
    // updated(){
    //   console.log('updated')
    // }
    destroyed(){
      console.log('destroyed')
    },
    // 直接这样写不会调用，activated和deactivated函数的使用都以keep-alive的使用为前提
    // 当处于该页面，即该页面激活状态时
    activated(){
      console.log('activated')
      this.$router.push(this.path)
    },
    // 当离开该页面时,处于不活跃状态
    // deactivated(){
      // console.log('deactivated')
      // 报错，暂时不知原因
      // this.path = this.$router.path
    // },
    // 组件内导航守卫，用这种方法来保存离开页面前的路由
    beforeRouteLeave(to,from,next){
      console.log(this.$route.path)
      this.path = this.$route.path
      next()
    }
  }
</script>
<style scoped>
  .mypage{
    height:300px;
    background:#c3d1e0;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .toleft{
    margin-left: 5px;
    color:white;
  }
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }

  .mypage /deep/ .el-col-12 {
    width: 20%;
    position:fixed;
    height:104%;
  }
  .mypage /deep/ .el-menu {
    border-right: 0px;
  }
  .mypage /deep/ .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover
  {
    background-color: rgba(250,250,250,0.3)
  }
  .left {
    background:transparent;
    width:85%;
    height: 90%;
    position: absolute;
    top: 16%;
    left: 5%;
    border-radius: 6px;
  }
  .leftbox /deep/ .el-menu-item-group{
    background:#2a3854;
  ;
  }
  .leftbox /deep/ .el-menu-item {
    font-size: 16px;
    color: white;
    padding: 0 20px;
    cursor: pointer;
    -webkit-transition: border-color .3s,background-color .3s,color .3s;
    transition: border-color .3s,background-color .3s,color .3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;}
  .leftbox /deep/ .el-submenu__title{
    font-size: 16px;
    color:white;
    padding: 0 20px;
    cursor: pointer;
    -webkit-transition: border-color .3s,background-color .3s,color .3s;
    transition: border-color .3s,background-color .3s,color .3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .mypage /deep/ .el-badge__content{background-color: #F56C6C;
    border-radius: 10px;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    position: absolute;
    top: 0px;}
  .leftbox /deep/ .el-submenu__title i {
    color: white;
  }
  .leftbox /deep/ .el-menu-item i {
    color:white;
  }
  .leftbox /deep/ .el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 80%;
    background:#2a3854;
    font-size: 14px
  }
  .leftbox /deep/ .el-menu-item-group__title {
    padding: 7px 0 7px 20px;
    line-height: normal;
    font-size: 12px;
    color: #909399;
    background:#2a3854;

  }
  .leftbox /deep/ .el-menu-item:focus,.el-menu-item:hover {
    outline: 0;
    background-color: rgba(255,255,255,0.3);
  }
  .leftbox /deep/ .el-submenu__title:hover {
    background-color: rgba(255,255,255,0.3);
  }
  .item:focus,.item:hover{
    background-color: rgba(255,255,255,0.3);
  }
  .mypage /deep/ .el-menu.el-menu--horizontal {
    border:none;
  }
  .mypage /deep/ .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #2a3854;
    color: #303133;
  }
  .item {
    margin-top: 10px;
    margin-right: 40px;
    color: white;
  }
  .icon {
    width: 20px;
    height: 20px;
    vertical-align: -0.3em;
    fill:blue;
    overflow: hidden;
    margin-left: 0px;
  }
  </style>
