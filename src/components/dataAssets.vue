<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        background-color="#fff"
        text-color="#5e5e5e"
        active-text-color="#fff">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>需求管理</span>
          </template>
            <el-menu-item index="1-1">需求流程管理</el-menu-item>
            <el-menu-item index="1-2">需求设计管理</el-menu-item>
            <el-menu-item index="1-3">需求开发及上线管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>功能接口管理</span>
          </template>
            <el-menu-item index="2-1">数据接口定义管理</el-menu-item>
            <el-menu-item index="2-2">BL工具数据接口自动化分析</el-menu-item>
            <el-menu-item index="2-3">数据接口数据映射补录</el-menu-item>
            <el-menu-item index="2-4">数据质量检验自动化配置</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>数据服务管理</span>
          </template>
            <el-menu-item index="3-1">数据服务需求流程管理</el-menu-item>
            <el-menu-item index="3-2">数据服务清单管理</el-menu-item>
            <el-menu-item index="3-3">数据服务监控管理</el-menu-item>
            <el-menu-item index="3-4">自助式数据服务</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>数据标准数据查询</span>
          </template>
            <el-menu-item index="4-1">数据模型、数据标准集成</el-menu-item>
            <el-menu-item index="4-2">数据查询引擎开发</el-menu-item>
            <el-menu-item index="4-3">数据接口数据映射补录</el-menu-item>
            <el-menu-item index="4-4">权限管理集成</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>Main2</el-main>
  </el-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
