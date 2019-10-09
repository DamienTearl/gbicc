<template>
  <el-container>
    <el-header>
      <el-row>
        <!-- logo -->
        <el-col :span="6">
          <el-row>
            <div class="logo">
              <img src="" alt="">
              logo
            </div>
          </el-row>
        </el-col>
        <!-- menu -->
        <el-col :span="12">
          <el-menu
            router
            default-active="/"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#006ab6"
            text-color="#fff">
            <el-menu-item index="/">数据应用</el-menu-item>
            <el-menu-item index="/dataAssets">数据资产</el-menu-item>
            <el-menu-item index="/metaData">元数据</el-menu-item>
            <el-menu-item index="/dataQuality">数据质量</el-menu-item>
            <el-menu-item index="/dataStandard">数据标准</el-menu-item>
          </el-menu>
        </el-col>
        <!-- userset -->
        <el-col :span="6">
          <el-row class="user-set">
            <span>设置</span>
            <span>退出</span>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-header {
  background-color: #006ab6;
  color: #fff;
  line-height: 60px;
  font-size: 14px;
}
.user-set {
  text-align: right;
}
.el-menu--horizontal>.el-menu-item.is-active {
  background-color: #004d85!important;
  color: #fff!important;
  border-bottom: 1px solid #004d85!important;
}
ul.el-menu-vertical-demo.el-menu .el-submenu__title {
  color: #0861b1!important;
  background-color: #d7eefe!important;
}
ul.el-menu-vertical-demo.el-menu .el-menu-item.is-active {
  background-color: #006ab6!important;
}
</style>
