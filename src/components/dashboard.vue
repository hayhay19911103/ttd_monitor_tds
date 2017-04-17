<template>
  <div id="dashboard">
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
        <form class="form" style="position:relative;top: 20px; left: 40px;">
          <div class="row form-inline distance">
            <div class="form-group col-md-3">
              <label for="taskName">任务名称</label>
              <input type="text" class="form-control input-sm" id="taskName" placeholder="简单的说明一下">
            </div>
            <div class="form-group col-md-3">
              <label>间隔时间</label>
              <select class=" input-sm">
                <option selected>1分钟</option>
                <option>5分钟</option>
                <option>10分钟</option>
                <option>20分钟</option>
                <option>1小时</option>
                <option>1天</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <label >开始时间</label>
              <el-date-picker
                v-model="startTime"
                type="date"
                placeholder="选择日期"
                size="small">
              </el-date-picker>            </div>
          </div>
          <div class="row form-inline distance">
            <div class="form-group col-md-3 ">
              <label>环境</label>
              <select class=" input-sm">
                <option selected>PROD</option>
                <option>FWS</option>
                <option>UAT</option>
                <option>LPT</option>
              </select>
            </div>
            <div class="form-group col-md-3 ">
              <label>聚合方式</label>
              <select class=" input-sm">
                <option selected>SUM</option>
                <option>AVG</option>
                <option>COUNT</option>
                <option>MAX</option>
                <option>MIN</option>
              </select>
            </div>
          </div>
          <div class="row distance">
            <div class="form-group col-md-3">
              <label>Metric Name：</label>
              <select class=" input-sm">
                <option selected>fx.ubt.pv.count &nbsp;页面pv</option>
                <option>fx.ubt.mobile.pv.count&nbsp;页面pv</option>
                <option>fx.ubt.jserror.count&nbsp;页面jserror</option>
                <option>fx.ubt.perf.domready&nbsp;页面domready</option>
                <option>js.lizard.ajaxready&nbsp;页面ajaxready</option>
                <option>thingstodo.framework.servicestack.latency&nbsp;接口性能</option>
                <option>thingstodo.framework.servicestack.count&nbsp;访问量</option>
              </select>
            </div>
          </div>


          <label for="tag">Tag</label>
          <div class="row form-inline">
            <div class="form-group col-md-9">
              <input type="text" class="form-control input-sm col-md-6" style="width: 810px" id="tag"
                     placeholder="appid=1000000444">
              <button type="button" class="btn btn-primary btn-sm " style="margin-left: 60px">测试</button>

            </div>
          </div>
          <div class="row distance">
            <div class="form-group col-md-6">
              <label for="groupby">Group By：</label>
              <input type="text" class="form-control input-sm" id="groupby" placeholder="appid;name">
            </div>
          </div>
          <div class="footDashboard" style=" margin-top:80px;">
            <button type="button" class="btn btn-primary btn-sm ">保存</button>
            <button type="button" class="btn btn-primary btn-sm ">取消</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
  .distance {
    margin-top: 10px;
  }

  .footDashboard {
    text-align: center;
  }

  .footDashboard button {
    margin-top: 80px;
    margin-right: 80px;
    margin-left: 40px;
  }

</style>
<script>

  export default{
    name: 'dashboard',
    data:function () {
      return {
        startTime:""

      }
    }
  }
</script>
