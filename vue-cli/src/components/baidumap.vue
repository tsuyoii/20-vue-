<!--
<template>

</template>

<script>
  export default {
    name: 'baidumap'
  }
</script>

<style scoped>

</style>
-->

<template>
  <div id="mapPage">
    <P class="commomLoading" style="display:none"></P>
    <div class="mapbox" id="mapbox">
      <baidu-map id="map" :zoom="map.zoom" :center="{lng: map.center.lng, lat: map.center.lat}" @ready="handler" :scroll-wheel-zoom="true">
        <!--比例尺控件-->
        <bm-scale anchor="BMAP_ANCHOR_TOP_LEFT"></bm-scale>
        <!-- 定位控件 ,无效-->
        <bm-geolocation anchor="BMAP_ANCHOR_TOP_LEFT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <!--缩放控件-->
        <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT" ></bm-navigation>
        <!-- 搜索城市 -->
        <bm-city-list anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-city-list>
        <!--集中器聚合动态添加的点坐标-->
        <bm-marker-clusterer :averageCenter="true" :maxZoom="16">
          <bm-marker v-for="Cmarker of Cmarkers" :key="Cmarker.id" :position="{lng: Cmarker.longitude, lat: Cmarker.latitude}" @click="lookDetail(Cmarker)">
            <bm-label :content="Cmarker.name" title="Hover me" :labelStyle="{color: 'red', fontSize : '14px'}" :offset="{width: -25, height: -25}"/>
            <bm-context-menu>
              <bm-context-menu-item :callback="getPosition" text="获取坐标"></bm-context-menu-item>
            </bm-context-menu>
          </bm-marker>
        </bm-marker-clusterer>
        <bm-info-window :width="550" :height="270" :position="{lng: infoWindow.info.longitude, lat: infoWindow.info.latitude}" title="集中器信息" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
          <div class="infoTitle">
            <P class="infoHeader">设备信息栏:</P>
            <el-row>
              <el-col :span="10"><div class="info-content">名称：{{infoWindow.info.name}}</div></el-col>
              <el-col :span="6"><div class="info-content">类型：{{infoWindow.info.terminalType}}</div></el-col>
              <el-col :span="6"><div class="info-content">经度：{{infoWindow.info.longitude}}</div></el-col>
            </el-row>
            <el-row style="margin-top:6px">
              <el-col :span="8"><div class="info-content">纬度：{{infoWindow.info.latitude}}</div></el-col>
            </el-row>
            <P class="infoHeader">设备操作栏:</P>
            <el-col :span="6"><el-button :plain="true" type="info" size="mini" :disabled="readIsDisabled" @click="handleDataUpload(infoWindow.info.id, infoWindow.info.comid)">读取时间</el-button></el-col>
          </div>
        </bm-info-window>
        <!--灯具聚合动态添加的点坐标-->
        <bm-marker-clusterer :averageCenter="true" :maxZoom="16">
          <bm-marker v-for="Lampmarker of Lampmarkers" :key="Lampmarker.latitude" :position="{lng: Lampmarker.longitude, lat: Lampmarker.latitude}" @click="lookLampDetail(Lampmarker)">
            <bm-label :content="Lampmarker.name" title="Hover me" :labelStyle="{color: 'red', fontSize : '14px'}" :offset="{width: -25, height: -25}"/>
            <bm-context-menu>
              <bm-context-menu-item :callback="getPosition" text="获取坐标"></bm-context-menu-item>
            </bm-context-menu>
          </bm-marker>
        </bm-marker-clusterer>
      </baidu-map>
      <!-- 弹出层部分 -->
      <!-- 读取时间表弹出层 -->
      <el-dialog title="时间表信息" :append-to-body="true" :visible.sync="timeTableVisible" :close-on-click-modal="false">
        <template v-for="(item, index) in timeTableInfo">
          <el-row type="flex" :gutter="80" :key="index">
            <el-col class="commonstyle">
              <span>{{item.left}}</span>
            </el-col>
            <el-col class="commonstyle">
              <span>{{item.right}}</span>
            </el-col>
          </el-row>
        </template>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="timeTableVisible=false" type="primary">退出</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import controllerIcon from './asset/controle.png'
  import lampicon from './asset/roadLamp.png'
  import locationIcon from './asset/location.png'
  import Qs from 'qs'
  // 百度地图
  import BmScale from 'vue-baidu-map/components/controls/Scale'
  import BmGeolocation from 'vue-baidu-map/components/controls/Geolocation'
  import BmNavigation from 'vue-baidu-map/components/controls/Navigation'
  import BmMarkerClusterer from 'vue-baidu-map/components/extra/MarkerClusterer'
  import BmMarker from 'vue-baidu-map/components/overlays/Marker'
  import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow'
  import {
    getCMarked,
    getLampMarked,
    doSend,
    doSend2
  } from './apis/index.js'
  export default {
    components: {
      BmScale,
      BmGeolocation,
      BmNavigation,
      BmMarkerClusterer,
      BmMarker,
      BmInfoWindow
    },
    data() {
      return {
        locationIcon1: locationIcon,
        map: {
          center: { lng: 108.93, lat: 34.27 }, // '西安市',
          zoom: 12
        },
        markers: [], // 灯具已标注数组
        Cmarkers: [], // 集中器地图标注数组
        infoWindow: { // 集中器信息窗口
          show: false,
          info: {
            latitude: '',
            longitude: '',
            id: ''
          }
        },
        controllerIcon: controllerIcon, // 集中器图标
        // 灯具信息窗口
        lampicon: lampicon, // 灯具图标
        Lampmarkers: [], // 已标注的灯具数组
        LampinfoWindow: { // 灯具信息窗口
          show: false,
          info: {
            comid: '',
            groupID: -1,
            id: -1,
            ismark: true,
            latitude: '',
            longitude: '',
            name: '',
            tcomid: ''
          }
        },
        // 集中器读取时钟
        readIsDisabled: false, // 读取是否禁用
        readAllTime1: Object, // 读取定时器
        readTimeNum: 0, // 读取定时器计数
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      /** 加载地图及标注设备部分 */
      // 地图初始化
      handler({ BMap, map }) {
        console.log(BMap, map)
        // this.map.center.lng = 118.802422
        // this.map.center.lat = 32.065631
        // this.map.zoom = 12;
        // this.map.width= document.getElementById("container").clientWidth-330+'px'
        // this.map.height=document.body.clientHeight -160+'px'
        this.getCMarked()
        this.getLampMarke()
        this.getCoverMarke()
        this.getSmokeMarke()
        this.getDisMarke()
      },
      // 获取已经标注集中器经纬度数组
      getCMarked() {
        getCMarked().then(res => {
          if (res.rows.length > 0 || res.rows !== undefined) {
            var cArr = []
            for (var i = 0; i < res.rows.length; i++) {
              if (res.rows[i].ismark) {
                cArr.push(res.rows[i])
              }
            }
            console.log('集中器数据', cArr)
            this.Cmarkers = cArr
          } else {
            this.$message({
              message: '获取数据失败',
              type: 'error'
            })
          }
        })
      },
      // 获取已经标注灯具经纬度数组
      getLampMarke() {
        getLampMarked().then(res => {
          if (res.rows.length > 0 || res.rows !== undefined) {
            var LampArr = []
            for (var i = 0; i < res.rows.length; i++) {
              if (res.rows[i].ismark) {
                LampArr.push(res.rows[i])
              }
            }
            this.Lampmarkers = LampArr
          } else {
            this.$message({
              message: '获取数据失败',
              type: 'error'
            })
          }
        })
      },
      // 查看集中器详情
      lookDetail(data, target) {
        console.log('data', data)
        this.infoWindow.show = true
        this.infoWindow.info = data
        this.activeName = '集中器信息'
        var that = this
        // 为弹窗口标题添加title
        this.$nextTick(() => {
          var win = document.querySelector('.BMap_bubble_title')
          win.title = that.activeName
        })
        // if (target === 'left') { // 点击的是左侧列表项，则不需要滚动
        //   this.map.center = { lng: data.lng, lat: data.lat }
        //   this.map.zoom = 15
        //   return
        // }
        // // 滚动到指定元素位置
        // this.$nextTick(() => {
        //   var obj = document.querySelector('.active')
        //   var scrollTop = obj.offsetTop
        //   this.$refs.box.scrollTop = scrollTop - 180
        // })
      },
      // 打开信息窗口
      infoWindowClose(e) {
        this.infoWindow.show = false
      },
      // 关闭集中器信息窗口
      infoWindowOpen(e) {
        this.infoWindow.show = true
      },
      // 查看灯具详情
      lookLampDetail(data) {
        this.LampinfoWindow.show = true
        this.LampinfoWindow.info = data
        console.log('灯具详情', this.LampinfoWindow)
      },
      // 打开灯具信息窗口
      LampinfoWindowClose(e) {
        this.LampinfoWindow.show = false
      },
      // 关闭灯具信息窗口
      LampinfoWindowOpen(e) {
        this.LampinfoWindow.show = true
      },
      /** 设备操作部分 */
      // 点击集中器读取时钟
      handleDataUpload(id, comid) {
        this.$confirm('确认读取吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.readIsDisabled = false
            var operation = 'readtime'
            this.readGetCommandid(id, comid, operation)
          })
          .catch(() => { })
      },
      // 集中器读取时钟获取commandid
      readGetCommandid(id, comid, operation) {
        var para = {
          operation: operation,
          id: id,
          comid: comid
        }
        var that = this
        var params = Qs.stringify(para)
        doSend(params).then(res => {
          // 若token过期
          if (res.code !== -10) {
            if (res.commandid !== '') {
              // 开启定时器，过了2*20=40秒后关闭定时器，读取超时
              this.readAllTime1 = setInterval(function() {
                that.readTimeNum++ // 定时器计数
                that.readAllSend(res.commandid)
              }, 2000)
            } else {
              this.$message({
                message: '读取失败',
                type: 'info'
              })
            }
          } else {
            clearInterval(this.readAllTime1)
          }
        })
      },
      // 集中器读取时钟获取返回状态
      readAllSend(commandid) {
        var para = {
          commandid: commandid
        }
        var params = Qs.stringify(para)
        doSend2(params).then(res => {
          // 如果token过期
          if (res.code !== -10) {
            if (this.readTimeNum > 20) {
              clearInterval(this.readAllTime1)
              this.readTimeNum = 0
              this.readIsDisabled = false
              this.$message({
                showClose: true,
                message: '读取超时！',
                type: 'info'
              })
            } else {
              if (res.code === 1) {
                // 清除定时器，计数器归零，按钮可点击
                clearInterval(this.readAllTime1)
                this.readTimeNum = 0
                this.readIsDisabled = false
                this.$message({
                  showClose: true,
                  message: res.mesg,
                  type: 'info'
                })
              }
            }
          } else {
            clearInterval(this.readAllTime1)
          }
        })
      },

      /** 右键操作部分 */
      getPosition(e) {
        alert(`${e.point.lng} / ${e.point.lat}`)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #mapbox {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  #map {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: "微软雅黑";
    position: absolute;
  }
  // 交采信息详情
  .commonstyle {
    margin-bottom: 8px;
  }
  .infoTitle{
    margin-top:0;
    border-top:1px solid #eeeeee;
    .infoHeader{
      font-size: 14px;
      color:#666;
      border-bottom:1px solid #eeeeee;
    }
    .info-content{
      font-size: 14px;
      color:#666;
    }
  }

</style>
