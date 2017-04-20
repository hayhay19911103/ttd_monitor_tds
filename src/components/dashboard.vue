<template>
  <div id="dashboard">
    <div class="main">
      <v-navList></v-navList>
      <div class="content">
        <form class="form" style="position:relative;top: 20px; left: 40px;">
          <div class="row form-inline distance">
            <div class="form-group col-md-3">
              <label for="taskName">任务名称</label>
              <input type="text" class="form-control input-sm" id="taskName" placeholder="简单的说明一下"
                     v-model="info.taskName">
              <label v-if='taskNameTip' class="validate" style="color: red;font-size: 8px">*不能为空</label>
            </div>
            <div class="form-group col-md-3">
              <label>间隔时间</label>
              <select class=" input-sm" v-model="info.timeInterval">
                <option value="1" selected>1分钟</option>
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
              <select class=" input-sm" v-model="info.environment">
                <option value="PROD">PROD</option>
                <option value="FWS">FWS</option>
                <option value="UAT">UAT</option>
                <option value="LPT">LPT</option>
              </select>
            </div>
            <div class="form-group col-md-3 ">
              <label>聚合方式</label>
              <select class=" input-sm" v-model="info.gatherMethod">
                <option value="SUM">SUM</option>
                <option value="AVG">AVG</option>
                <option value="COUNT">COUNT</option>
                <option value="MAX">MAX</option>
                <option value="MIN">MIN</option>
              </select>
            </div>
          </div>
          <!--联想功能-->
          <label for="metricName">Metric Name：</label>
          <div class="row form-inline">
            <div class="form-group col-md-9">
              <input type="text" class="form-control input-sm" id="metricName" placeholder="" v-model="info.metricName"
                     list="metricNameList" style="width: 500px;">
              <datalist class=" input-sm" id="metricNameList">
                <option value="fx.ubt.pv.count页面pv">fx.ubt.pv.count页面pv</option>
                <option value="fx.ubt.mobile.pv.count页面pv">fx.ubt.mobile.pv.count页面pv</option>
                <option value="fx.ubt.jserror.count页面jserror">fx.ubt.jserror.count页面jserror</option>
                <option value="fx.ubt.perf.domready页面domready">fx.ubt.perf.domready页面domready</option>
                <option value="js.lizard.ajaxready页面ajaxready">js.lizard.ajaxready页面ajaxready</option>
                <option value="thingstodo.framework.servicestack.latency接口性能">
                  thingstodo.framework.servicestack.latency接口性能
                </option>
                <option value="thingstodo.framework.servicestack.count访问量">thingstodo.framework.servicestack.count访问量
                </option>
              </datalist>
              <label v-if='metricNameTip' class="validate" style="color: red;font-size: 8px;">*不能为空</label>
            </div>
          </div>


          <label for="tag">Tag</label>
          <div class="row form-inline">
            <div class="form-group col-md-9">
              <input type="text" class="form-control input-sm col-md-6" style="width: 500px" id="tag"
                     placeholder="appid=1000000444" v-model="info.tag">
              <label v-if='tagTip' class="validate" style="color: red;font-size: 8px">*不能为空</label>
            </div>
          </div>

          <label for="groupBy">Group By：</label>
          <div class="row form-inline">
            <div class="form-group col-md-9">
              <input type="text" class="form-control input-sm" id="groupBy" placeholder="appid;name"
                     v-model="info.groupBy" style="width: 500px;">
              <label v-if='groupByTip' class="validate" style="color: red;font-size: 8px">*不能为空</label>
            </div>
          </div>
          <div class="footDashboard" style=" margin-top:80px;">
            <button type="button" class="btn btn-primary btn-sm " @click="submit">保存</button>
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
    components: {
      'v-navList': navList
    },
    data: function () {
      return {
        info: {
          taskName: "",
          timeInterval: "1",
          environment: "PROD",
          gatherMethod: "SUM",
          metricName: "",
          tag: "",//输入的tag
          groupBy: "",//输入的group by
        },
        taskNameTip: false,
        tagTip: false,
        metricNameTip: false,
        groupByTip: false,
      }
    },
    watch: {
      taskName: function (val) {
        val.length == 0 ? this.taskNameTip = true : this.taskNameTip = false
      },
      tag: function (val) {
        val.length == 0 ? this.tagTip = true : this.tagTip = false
      },
      metricName: function (val) {
        val.length == 0 ? this.metricNameTip = true : this.metricNameTip = false
      },
      groupBy: function (val) {
        val.length == 0 ? this.groupByTip = true : this.groupByTip = false
      },
    },
    methods: {
      submit: function () {
        if (this.info.taskName.length === 0) {
          this.taskNameTip = true;
        }
        if (this.info.metricName.length === 0) {
          this.metricNameTip = true;
        }
        if (this.info.groupBy.length === 0) {
          this.groupByTip = true;
        }
        if (this.info.tag.length === 0) {
          this.tagTip = true;
        }

        $.ajax({
          type: "post",
          url: "http://10.32.212.22:8080/Dashboard_API/servlet/SaveDashboard",
          data: this.info,
          success: function (data) {
            debugger
            this.nameList = data
          }
        })

      }

    }


  }
</script>
