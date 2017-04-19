<template>
  <div id="dashboard">
    <div class="main">
      <v-navList></v-navList>
      <div class="content">
        <form class="form" style="position:relative;top: 20px; left: 40px;">
          <div class="row form-inline distance">
            <div class="form-group col-md-3">
              <label for="taskName">任务名称</label>
              <input type="text" class="form-control input-sm" id="taskName" placeholder="简单的说明一下" v-model="taskName">
            </div>
            <div class="form-group col-md-3">
              <label>间隔时间</label>
              <select class=" input-sm" v-model="timeInterval">
                <option value="1*60" selected>1分钟</option>
                <option value="10*60">10分钟</option>
                <option value="60*60">1小时</option>
                <option value="24*60*60 ">1天</option>
                <option value="24*60*7*60">1周</option>
              </select>
            </div>

          </div>
          <div class="row form-inline distance">
            <div class="form-group col-md-3 ">
              <label>环境</label>
              <select class=" input-sm" v-model="environment">
                <option value="PROD">PROD</option>
                <option value="FWS">FWS</option>
                <option value="UAT">UAT</option>
                <option value="LPT">LPT</option>
              </select>
            </div>
            <div class="form-group col-md-3 ">
              <label>聚合方式</label>
              <select class=" input-sm" v-model="gatherMethod">
                <option value="SUM">SUM</option>
                <option value="AVG">AVG</option>
                <option value="COUNT">COUNT</option>
                <option value="MAX">MAX</option>
                <option value="MIN">MIN</option>
              </select>
            </div>
          </div>
          <!--联想功能-->
          <div class="row distance">
            <div class="form-group col-md-3">
              <label for="metricName">Metric Name：</label>
              <input type="text" class="form-control input-sm" id="metricName" placeholder="简单的说明一下" v-model="metricName">
              <!--<select class=" input-sm" v-model="metricName">-->
                <!--<option >fx.ubt.pv.count &nbsp;页面pv</option>-->
                <!--<option>fx.ubt.mobile.pv.count&nbsp;页面pv</option>-->
                <!--<option>fx.ubt.jserror.count&nbsp;页面jserror</option>-->
                <!--<option>fx.ubt.perf.domready&nbsp;页面domready</option>-->
                <!--<option>js.lizard.ajaxready&nbsp;页面ajaxready</option>-->
                <!--<option>thingstodo.framework.servicestack.latency&nbsp;接口性能</option>-->
                <!--<option>thingstodo.framework.servicestack.count&nbsp;访问量</option>-->
              <!--</select>-->
            </div>
          </div>


          <label for="tag">Tag</label>
          <div class="row form-inline">
            <div class="form-group col-md-9">
              <input type="text" class="form-control input-sm col-md-6" style="width: 810px" id="tag"
                     placeholder="appid=1000000444" v-model="tag">
            </div>
          </div>
          <div class="row distance">
            <div class="form-group col-md-6">
              <label for="groupby">Group By：</label>
              <input type="text" class="form-control input-sm" id="groupby" placeholder="appid;name" v-model="groupBy">
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
import navList from './sidebar/navList.vue'
  export default{
    name: 'dashboard',
    components:{
      'v-navList':navList
    },
    data:function () {
      return {
        taskName:"",
        timeInterval:"1*60",
        environment:"PROD",
        gatherMethod:"SUM",
        metricName:"",
        tag:"",//输入的tag
        groupBy:""//输入的group by
      }
    }
  }
</script>
