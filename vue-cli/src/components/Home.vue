<template>
  <div class="mypage">
    <div style="float: right;margin-right: 5%;height: 50px;margin-top:2%">
      <el-dropdown>
      <span class="el-dropdown-link">
       <img src="../assets/img/default.png" width="40px" style="border-radius:50px;margin:-10px"/>
       <span style="margin-left:20px;color:white">{{nickname}}</span>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user-solid">
            <span>{{nickname}}</span>
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-s-home">
            <router-link to="/Calendar">我的主页</router-link></el-dropdown-item>
          <el-dropdown-item icon="el-icon-remove">
            <router-link to="/">退出</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <el-button circle style="float: right;margin-right:65%;margin-top:1.2%;background:#4682B4;border:#4682B4"></el-button>
    <span style="
              position: absolute;
    top: 10%;
    left: 40%;
    color: white;
    font-weight: bold;
    font-size: 2em;">教学空间在线预约</span>
    <div class="leftbox">
      <el-button circle icon="el-icon-menu" @click="showMenu" style="margin-left: 10px;margin-top:1%"></el-button>
      <el-menu default-active="2"
               class="el-menu-vertical-demo"
               background-color="#005792"
               style="
    color: white;
    font-size: 30px;
    height:1000px;
    overflow: auto;
    float:left"
               @open="handleOpen" @close="handleClose" :collapse="isCollapse"
               collapse-transition="false"
      >
        <el-menu-item style="height:80px">
          <template>
            <img src="../assets/img/logo.png" style="width:45px;
    margin-top:30px;
    margin-left:-10px;"/>
            <img src="../assets/img/logo3.png" style="width:80px;
    margin-top:30px;
    margin-left:10px;" slot="title"/>
          </template>
        </el-menu-item>
        <el-menu-item index="1"  @click="menuChange('RoomView')">
          <i class="el-icon-view"></i>
          <span slot="title">教室查询</span>
        </el-menu-item>
        <el-menu-item index="2"  @click="menuChange('graphBook')">
          <i class="el-icon-date"></i>
          <span slot="title">教室预约</span>
        </el-menu-item>
        <el-menu-item index="3"  @click="menuChange('HelloWorld')">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">预约记录</span>
        </el-menu-item>
        <!-- </el-menu-item> -->
        <el-menu-item index="4"  @click="menuChange('creditRecord')">
          <i class="el-icon-document"></i>
          <span slot="title">信用记录</span>
        </el-menu-item>
        <el-menu-item index="5"  @click="menuChange('roomAdd')">
          <i class="el-icon-news"></i>
          <span slot="title">教室更新</span>
        </el-menu-item>
        <el-menu-item index="7" @click="menuChange('roomdata')">
          <i class="el-icon-set-up"></i>
          <span slot="title" style="margin-left:-8px">
              教室统计
            </span>
        </el-menu-item>
        <el-menu-item index="8" @click="menuChange('charts')">
          <i class="el-icon-data-analysis"></i>
          <span slot="title" style="margin-left:-8px">
              图表统计
            </span>
        </el-menu-item>
        <el-menu-item index="9" @click="menuChange('message')">
          <i class="el-icon-bell"></i>
          <span slot="title" style="margin-left:-8px">
              消息通告
            </span>
        </el-menu-item>
        <el-menu-item index="10"  @click="menuChange('perfectInformation')">
          <i class="el-icon-place"></i>
          <span slot="title">个人中心</span>
        </el-menu-item>
      </el-menu>
      <div class="left">
        <router-view class="left"></router-view>
      </div>
    </div>
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
