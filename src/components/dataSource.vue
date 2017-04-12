<template>
  <div id="dataSource">
    <div class="main">
      <div id="leftNav">
        <el-menu default-active="1" class="el-menu-vertical-demo leftNav">
          <el-submenu index="1">
            <template slot="title">
              <router-link to="dataSource">数据源</router-link>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="cat">CAT</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="dashboard">Dashboard</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="listPage">任务列表</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <router-link to="graphy">图表</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="board">看板</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="warnRule">告警规则</router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="content">
        <div class="firstContent">
          <h1>开始配置一个数据源任务</h1><br>
          <p>请选择监控数据来源</p>
        </div>
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
</template>
<style>
  .firstContent{
    padding:60px;
    text-align: center;
  }
  .firstContent h1{
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    font-size: 50px;
  }
  .firstContent p{
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    font-size: 30px;
  }
  .pic {
    width: 500px;
    margin: 40px 580px 100px;

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
    position: relative;
    top: 100px;
    left: 70px;
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
    width: 13%;
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
  .leftNav a:link,hover,active,visited{
    text-decoration: none;
  }

  .content {
    float: left;
    width: 87%;
  }
</style>
<script>
  export default{
    name: 'dataSource',

  }
</script>
