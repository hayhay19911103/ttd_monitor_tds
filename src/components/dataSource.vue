<template>
  <div id="dataSource">
    <div class="main">
      <div id="leftNav">
        <el-menu default-active="1" class="el-menu-vertical-demo leftNav" @open="handleOpen" @close="handleClose" router>
          <el-submenu index="dataSource">
            <template slot="title">数据源</template>
            <el-menu-item-group title="">
              <el-menu-item index="cat">CAT</el-menu-item>
              <el-menu-item index="dashboard">Dashboard</el-menu-item>
              <el-menu-item index="listPage">任务列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="graphy">图表</el-menu-item>
          <el-menu-item index="board">看板</el-menu-item>
          <el-menu-item index="warnRule">告警规则</el-menu-item>

        </el-menu>
      </div>
      <div class="content">
        <div class="firstContent">
          <h1>开始配置一个数据源任务</h1><br>
          <p>请选择监控数据来源</p>
        </div>
        <div class="col-md-12">
          <div class="pic">
            <div class="left">
              <router-link to="/cat"><span>CAT</span></router-link>
            </div>
            <div class="right">
              <router-link to="/dashboard"><span>Dashboard</span></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .firstContent {
    padding: 60px;
    text-align: center;
  }

  .firstContent h1 {
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    font-size: 50px;
  }

  .firstContent p {
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    font-size: 30px;
  }

  .pic {
    width: 500px;
    margin: 0 auto;
    text-align: center;

  }

  .pic .left {
    background-color: rgba(255, 204, 102, 1);
    width: 250px;
    height: 250px;
    float: left;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    font-size: 36px;
  }

  .pic span {
    line-height: 250px;
  }

  .pic .right {
    background-color: #96cdfb;
    width: 250px;
    height: 250px;
    float: left;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    font-size: 28px;
  }

  .leftNav {
    background: #e4e4e4;
    width: 130px;
    height: 730px;
    float: left;
  }

  .leftNav a {
    display: block;
    text-decoration: none;
    color: rgba(51, 102, 153, 1);
    font-size: 20px;
    margin: 0 auto;
  }

  .leftNav a:link {
    text-decoration: none;
  }

  .content {
    float: left;
    width: 87%;
    height: 100%;
  }
</style>
<script>
  export default{
    name: 'dataSource',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
