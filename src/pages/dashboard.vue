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
                <option value="10">10分钟</option>
                <option value="60">1小时</option>
                <option value="1440">1天</option>
                <option value="10080">1周</option>
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
                <option value="fx.ubt.pv.count"></option>
                <option value="fx.ubt.mobile.pv.count"></option>
                <option value="fx.ubt.jserror.count"></option>
                <option value="fx.ubt.perf.domready"></option>
                <option value="js.lizard.ajaxready"></option>
                <option value="thingstodo.framework.servicestack.latency">
                </option>
                <option value="thingstodo.framework.servicestack.count">
                </option>
              </datalist>
              <label v-if='metricNameTip' class="validate" style="color: red;font-size: 8px;">*不能为空</label>
            </div>
          </div>
          <label for="tag">Tag</label>
          <div class="row form-inline">
            <div class="form-group col-md-9">
              <input type="text" class="form-control input-sm col-md-6" style="width: 500px" id="tag"
                     placeholder="appid=1000000444" v-model.trim="info.tag">
              <label style="color: gray;font-size: 8px;margin-left: 10px">注意区分大小写</label>
              <!--<label v-if='tagTip' class="validate" style="color: red;font-size: 8px">*不能为空</label>-->
            </div>
          </div>
          <label for="groupBy">Group By：</label>
          <div class="row form-inline">
            <div class="form-group col-md-9">
              <input type="text" class="form-control input-sm" id="groupBy" placeholder="appid;name"
                     v-model.trim="info.groupBy" style="width: 500px;">
              <label style="color: gray;font-size: 8px;margin-left: 10px">注意区分大小写</label>
              <label v-if='groupByTip' class="validate" style="color: red;font-size: 8px">*不能为空</label>
            </div>
          </div>
          <div class="footDashboard" style=" margin-top:80px;">
            <button type="button" class="btn btn-primary btn-sm " data-toggle="modal" @click="submit">保存</button>
            <button type="button" class="btn btn-primary btn-sm ">取消</button>
          </div>
        </form>
      </div>
      <el-dialog title="提示" v-model="dialogVisible" size="tiny"  style="text-align: center;">
        <h3>保存成功，你可以继续：</h3>
        <div @click="goList"><h4><a>去列表页查看</a></h4></div>
        <div @click="continueAdd"><h4><a>继续添加数据源</a></h4></div>
      </el-dialog>
    </div>
  </div>
</template>
<style>
  #dashboard{
    overflow: hidden;
  }
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
  import navList from '../components/sidebar/navList.vue';
  export default{
    name: 'dashboard',
    components: {
      'v-navList': navList,

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
        dialogVisible:false,
        taskNameTip: false,
//        tagTip: false,
        metricNameTip: false,
        groupByTip: false,
        testCode: ""//验证失败成功的代码
//        showDialog:false
      }
    },
    watch: {
      taskName: function (val) {
        val.length == 0 ? this.taskNameTip = true : this.taskNameTip = false
      },
//      tag: function (val) {
//        val.length == 0 ? this.tagTip = true : this.tagTip = false
//      },
      metricName: function (val) {
        val.length == 0 ? this.metricNameTip = true : this.metricNameTip = false
      },
      groupBy: function (val) {
        val.length == 0 ? this.groupByTip = true : this.groupByTip = false
      },
    },
    methods: {
      submit: function () {
        var me = this
        if (me.info.taskName.length === 0) {
          me.taskNameTip = true;
        }
        if (me.info.metricName.length === 0) {
          me.metricNameTip = true;
        }
        if (me.info.groupBy.length === 0) {
          me.groupByTip = true;
        }
//        if (me.info.tag.length === 0) {
//          me.tagTip = true;
//        }
        if (me.info.groupBy.length !== 0 && me.info.metricName.length !== 0 && me.info.taskName.length !== 0) {
          $.ajax({
            type: "post",
            url: "http://10.8.85.36:8090/DashboardAPI/servlet/SaveDashboard",
            data: me.info,
            dataType: "jsonp",
            success: function (data) {
//              debugger;
              me.testCode = data.message.code
              if (me.testCode == 0) {
                  me.dialogVisible=true
              } else {
                me.$alert('信息填写有误，保存失败', '提示', {
                  confirmButtonText: '确定',
                  callback: action => {
                    me.$message({
                      type: 'info',
//                      message: `action: ${ action }`
                    });
                  }
                });
              }
            },
          })
        }
      },
      goList: function () {
        $("#myModal").modal('hide')
        app.$router.push("listPage")
      },
      continueAdd: function () {
        $("#myModal").modal('hide')
        app.$router.push("dataSource")
      }

    }


  }
</script>
