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
    name: 'Home'
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
