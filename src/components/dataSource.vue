<template>
  <div id="dataSource">
    <div class="main">
      <div class="leftNav">
        <ul>
          <li>
            <router-link to="/dataSource">数据源</router-link>
            <ul>
              <li>
                <router-link to="/cat">CAT</router-link>
              </li>
              <li>
                <router-link to="/dashboard">Dashboard</router-link>
              </li>
              <li>
                <router-link to="/listPage">列表页</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/graphy">图表</router-link>
          </li>
          <li>
            <router-link to="/board">看板</router-link>
          </li>
          <li>
            <router-link to="/warnRule">告警规则</router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="title">
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
  .title p {
    text-align: center;
    font-size: 22px;
  }
  .title h1 {
    text-align: center;
    padding: 30px 0;
  }
  .pic {
    width: 500px;
    margin: 40px auto;

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
  .leftNav ul li {
    list-style: none;
    height: 150px;
    line-height: 40px;
    text-align: left;
  }
  .leftNav ul li ul li {
    height: 30px;
    text-align: left;

  }
  .leftNav a {
    display: block;
    text-decoration: none;
    color: rgba(51, 102, 153, 1);
    font-size: 20px;
    margin: 0 auto;
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
