<template>
  <div id="home">
    <div class="mainbody">
      <div>
        <div class="title">
          <p>TDS &nbsp;&nbsp;PLATFORM </p>
          <P>玩乐研发支持平台</P>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="mainPanel">
            <div class="col-md-3 col-sm-6">
              <div class="panel">
                <img src="../assets/u35.png">
                <h2 style="color: #9d9d9d">监控平台</h2>
                <a style="color: #9d9d9d">我的看板</a>
                <a style="color: #9d9d9d">黄金流程</a><br>
                <a style="color: #9d9d9d">异常TOP 10</a>
                <a style="color: #9d9d9d">订单监控</a><br>
                <a style="color: #9d9d9d">服务器监控</a>
                <a style="color: #9d9d9d">Hermes监控</a><br>
                <a style="color: #9d9d9d">DB监控</a>
                <a style="color: #9d9d9d">Redis监控</a>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="panel">
                <img src="../assets/u63.png">
                <h2 style="color: #9d9d9d">测试平台</h2>
                <a style="color: #9d9d9d">代码扫描</a>
                <a style="color: #9d9d9d">测试设备</a><br>
                <a style="color: #9d9d9d">自动化测试</a>
                <a style="color: #9d9d9d">性能测试</a><br>
                <a style="color: #9d9d9d">测试小工具</a>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="panel">
                <img src="../assets/u41.png">
                <h2>工具平台</h2>
                <router-link to="dataSource">数据源</router-link>
                <a style="color: #9d9d9d">图表</a><br>
                <a style="color: #9d9d9d">看板</a>
                <a style="color: #9d9d9d">告警规则</a>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="panel">
                <img src="../assets/u47.png">
                <h2>报表平台</h2>
                <a style="color: #9d9d9d;width: 100%;">接口性能大盘</a><br>
                <a style="color: #9d9d9d;width: 100%;">页面性能大盘</a>
                <a style="color: #9d9d9d;width: 100%;">玩乐日报</a>
                <!--<router-link to="apiProperty" style="width: 100%;" >接口性能大盘</router-link>-->
                <!--<router-link to="pageProperty" style="width: 100%;">页面性能大盘</router-link>-->
                <!--<router-link to="pageProperty" style="width: 100%;">玩乐日报</router-link>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
  .mainbody {
    background-image: url("../assets/home.png");
    background-repeat: no-repeat;
    width: 100%;
    height: 800px;
    background-size: 100%,100%
  }

  .panel {
    height: 330px;
    background-color: white;
    /*width:260px;*/
    padding-top: 20px;
    text-align: center;
  }

  .panel a {
    display: inline-block;
    width: 50%;
    height: 20px;
    float: left;
    margin-top: 20px;
    font-size: 16px;
    color: #000;
  }

  .panel a:hover {
    text-decoration: none;
  }

  .title {
    color: white;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 120px;
  }

  .title p {
    font-size: 36px;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
  }
</style>
<script>
  console.log(222);
  export default {
    name: 'home',
  }
</script>
