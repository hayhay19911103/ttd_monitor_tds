<template>
  <div id="dataSource">
    <div class="main">
      <v-navList></v-navList>
      <div class="content">
        <div class="firstContent">
          <h1>开始配置一个数据源任务</h1><br>
          <p>请选择监控数据来源</p>
        </div>
        <div class="col-md-12">
          <div class="pic">
            <div class="left">
              <router-link to="/CAT"><span>CAT</span></router-link>
            </div>
            <div class="right">
              <router-link to="/Dashboard"><span>Dashboard</span></router-link>
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



  .content {
    float: left;
    width: 87%;
    height:100%
  }
</style>
<script>
  import navList from './sidebar/navList.vue'
  export default{
    name: 'dataSource',
    components:{
      'v-navList':navList,
    },
    methods: {

    }
  }
</script>
