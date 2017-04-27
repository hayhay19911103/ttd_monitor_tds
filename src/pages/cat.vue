<template>
  <div id="cat">
    <div class="main">
      <!--左侧导航栏-->
      <v-navList></v-navList>
      <!--内容区域-->
      <div class="content">
        <form class="form" style="position:relative;top: 20px; left: 40px;">
          <div class="row form-inline distance">
            <div class="form-group col-md-3">
              <label for="taskName">任务名称</label>
              <input type="text" class="form-control input-sm" id="taskName" placeholder="简单的说明一下" v-model="taskName">
              <label v-if='tips.taskNameTip' class="validate" style="color: red;font-size: 8px">*不能为空</label>
            </div>
            <!--<div class="form-group col-md-3">-->
            <!--<label>开始时间</label>-->
            <!--<el-date-picker-->
            <!--v-model="startTime"-->
            <!--type="datetime"-->
            <!--placeholder="选择日期"-->
            <!--size="small"-->
            <!--:picker-options="pickerOptions0">-->
            <!--</el-date-picker>-->
            <!--</div>-->
            <div class="form-group col-md-3">
              <label>间隔时间</label>
              <select class=" input-sm" v-model="timeInterval">
                <option value="1" selected>1分钟</option>
                <option value="10">10分钟</option>
                <option value="60">1小时</option>
                <option value="1440 ">1天</option>
                <option value="10080">1周</option>
              </select>
            </div>
          </div>
          <div class="row form-inline distance">
            <div class="form-group col-md-12">
              <label for="appId">APP &nbsp;&nbsp; ID</label>
              <input type="text" class="form-control input-sm" id="appId" placeholder="100000445" v-model="appId"
                     @blur="showType">
              <div class="search-select">
                <ul>
                  <li v-for="(item,index) in searchList" :key="item.label">
                    {{item.label}}
                  </li>
                </ul>
              </div>
              <label v-if='tips.appIdTip' class="validate" style="color: red;font-size: 8px">*不能为空</label>
            </div>
          </div>
          <!--TAG区域-->
          <div class="row form-inline distance col-md-12">
            <label style="position:absolute;top: 20px;">TAG:</label>
            <div class="checkbox" style="margin-top: 20px;margin-left: 50px">
              <input type="checkbox" id="Total" value="Total" v-model="checkedTags">
              <label for="Total">Total</label>
              <input type="checkbox" id="Failure" value="Failure" v-model="checkedTags">
              <label for="Failure">Failure</label>
              <input type="checkbox" id="Failure%" value="Failure%" v-model="checkedTags">
              <label for="Failure%">Failure%</label>
              <input type="checkbox" id="Min(ms)" value="Min(ms)" v-model="checkedTags">
              <label for="Min(ms)">Min(ms) </label>
              <input type="checkbox" id="Max(ms)" value="Max(ms)" v-model="checkedTags">
              <label for="Max(ms)">Max(ms)</label><br>
              <input type="checkbox" id="Avg(ms)" value="Avg(ms)" v-model="checkedTags">
              <label for="Avg(ms)">Avg(ms)</label>
              <input type="checkbox" id="95Line(ms)" value="95Line(ms)" v-model="checkedTags"><label for="95Line(ms)">95Line(ms)</label>
              <input type="checkbox" id="99.9Line(ms)" value="99.9Line(ms)" v-model="checkedTags">
              <label for="99.9Line(ms)">99.9Line(ms)</label>
              <input type="checkbox" id="Std(ms)" value="Std(ms)" v-model="checkedTags">
              <label for="Std(ms)">Std(ms)</label>
              <input type="checkbox" id="QPS" value="QPS" v-model="checkedTags"><label for="QPS">QPS</label>
            </div>
            <label v-if='tips.checkedTagsTip' class="validate" style="color: red;font-size: 8px">*不能为空</label>
          </div>



          <!--Type区域-->
          <div class="row form-inline distance col-md-12" v-if="visible">
            <div style="border: 1px solid ;width: 85%;float: left;">
              <label style="position:absolute;top: 0px;">Type:</label>
              <div class="checkbox" style="margin-top: 0px;margin-left: 50px">
                <div v-for="(type,index) in typeList" v-if="type!='System'&&type!='all'" style="float: left">
                  <input type="checkbox" :id="type" :value="type" v-model="checkedTypes">
                  <label :for="type">{{type}}</label>
                </div>
              </div>
            </div>

            <label v-if='tips.checkedTypesTip' class="validate" style="color: red;font-size: 8px">*不能为空</label>
            <button type="button" class="btn btn-primary btn-sm " @click="showName"
                    style="margin-left: 20px;margin-top: 20px;">确定
            </button>
          </div>

          <!--tab表格区-->
          <div class="tab" role="tabpanel" v-if="showTab">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs " role="tablist" id="docTabs">
              <li role="presentation" v-for="(item,index) in tabsData" :class="index==0?'active':''">
                <a :href="'#'+index" :aria-controls="item.type" role="tab" data-toggle="tab">{{item.type}} </a>
              </li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content">
              <div role="tabpanel" v-for="(item,index) in tabsData" class="tab-pane fade in"
                   :class=" index==0?'active':'' " :id="index">
                <div class="content_list">
                  <div class="row">
                    <div class="col-sm-12">
                      <table class="table table-bordered table-hover">
                        <thead>
                        <tr role="row" class="row-header">
                          <th><input type="checkbox"></th>
                          <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(typeValueItem,row) in item.typeValue">
                          <td><input type="checkbox" :id="index+'_'+row" :value="item.type+'@@'+typeValueItem"
                                     v-model="checkedNames"></td>
                          <td><label :for="index+'_'+row">{{typeValueItem}}</label></td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <label v-if='tips.checkedNamesTip' class="validate" style="color: red;font-size: 8px">*不能为空</label>

          </div>
          <div class="foot">
            <button type="button" class="btn btn-primary btn-sm " data-toggle="modal" @click="submit">保存</button>
            <button type="button" class="btn btn-primary btn-sm ">取消</button>
          </div>
        </form>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title" id="myModalLabel">提示信息</h4>
            </div>
            <div class="modal-body" style="text-align: center; height: 150px;">
              <h3>保存成功，你可以继续：</h3>
              <div @click="goList"><h4>去列表页查看</h4></div>
              <div @click="continueAdd"><h4>继续添加数据源</h4></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .checkbox label {
    display: inline-block;
    width: 180px;
    height: 25px;
    margin-right: 10px;
  }

  .content_list {
    height: 200px;
    width: 80%;
    overflow-x: hidden;

  }

  .foot {
    text-align: center;
  }

  .foot button {
    margin-top: 70px;
    margin-right: 80px;
    margin-left: 40px;
  }

</style>
<script>
  import navList from '../components/sidebar/navList.vue'
  export default{
    name: 'cat',
    components: {
      'v-navList': navList,
    },
    data: function () {
      return {
        taskName: "",
        timeInterval: "1",
        startTime: "",
        appId: "",

        jobId: "",//修改的时候需要加上
        checkedTags: [],//选中的tag
        checkedTypes: [],//选中的type
        checkedNames: [],//选中的name
        typeList: [],//接收返回的type
        tabsData: [],//接收返回的name,变量
        selectedList: [],//选中的type对应name
        tips:{
          taskNameTip: false,//验证用
          checkedTagsTip: false,
          appIdTip: false,
          checkedTypesTip: false,
          checkedNamesTip:false
        },
        visible: false,
        showTab: false,
        selectedData: [],//联想功能的数据


        currentView: "",
        testCode: "",
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7 - 7 * 24 * 60 * 60 * 1000;
          }
        },
      }
    },

    // 观察和响应 Vue 实例上的数据变动，用来判断字段否为空
    watch: {
      taskName: function (val) {
        val.length == 0 ? this.tips.taskNameTip = true : this.tips.taskNameTip = false
      },
      appId: function (val) {
        val.length == 0 ? this.tips.appIdTip = true : this.tips.appIdTip = false
      },
      checkedTags: function (val) {
        val.length == 0 ? this.tips.checkedTagsTip = true : this.tips.checkedTagsTip = false
      },
      checkedTypes: function (val) {
        val.length == 0 ? this.tips.checkedTypesTip = true : this.tips.checkedTypesTip = false
      },
      checkedNames: function (val) {
        val.length == 0 ? this.tips.checkedNamesTip = true : this.tips.checkedNamesTip = false
      },
    },
    methods: {
      showType: function () {
        var me = this
        $.ajax({
          type: "get",
          url: "http://10.8.85.36:8090/CatAPI/GetCatType",
          data: {
            appid: me.appId
          },
          dataType: "jsonp",
          success: function (data) {
            me.typeList = data[0].typeValue
            debugger
            me.visible = true
          }
        });
      },
      showName: function () {
        var me = this
        $.ajax({
          type: "get",
          url: "http://10.8.85.36:8090/CatAPI/GetCatType",
          data: {
            appid: me.appId,
            checkedTypes: me.checkedTypes
          },
          traditional: true,
          dataType: "jsonp",
          success: function (data) {
//              debugger
            me.tabsData = data
            me.showTab = true
//            $("#docTabs a:first").tab('show')
          }
        })
      },
      submit: function () {
        var me = this
        if (me.taskName.length === 0) {
          me.tips.taskNameTip = true;
        }
        if (me.appId.length === 0) {
          me.tips.appIdTip = true;
        }
        if (me.checkedTags.length === 0) {
          me.tips.checkedTagsTip = true;
        }
        if (me.checkedTypes.length === 0) {
          me.tips.checkedTypesTip = true;
        }
        if (me.checkedNames.length === 0) {
          me.tips.checkedNamesTip = true;
        }
        if (me.taskName.length !== 0 && me.appId.length !== 0 && me.checkedTags.length !== 0 && me.checkedTypes.length !== 0&&me.checkedNames.length !== 0) {
          //当判断元素不为空时，提交请求
          $.ajax({
            type: "get",
            url: "http://10.8.85.36:8090/CatAPI/GetCatType",//todo
            data: {
              taskName: me.taskName,
              timeInterval: me.timeInterval,
              appid: me.appId,
              checkedTags: me.checkedTags,
              checkedNames: me.checkedNames,
//            checkedTypes: me.checkedTypes,
            },
            traditional: true,
            dataType: "jsonp",
            success: function (data) {
              debugger
            }
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

