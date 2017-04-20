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
              <label v-if='taskNameTip' class="validate" style="color: red;font-size: 8px">*不能为空</label>
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
                <option value="1*60" selected>1分钟</option>
                <option value="10*60">10分钟</option>
                <option value="60*60">1小时</option>
                <option value="24*60*60 ">1天</option>
                <option value="24*60*7*60">1周</option>
              </select>
            </div>
          </div>
          <div class="row form-inline distance">
            <div class="form-group col-md-12">
              <label for="appId">APP &nbsp;&nbsp; ID</label>
              <input type="text" class="form-control input-sm" id="appId" placeholder="100000445" v-model="appId"
                     @keyup.enter="showType">
              <div class="search-select">
                <ul>
                  <li v-for="(item,index) in searchList" :key="item.label">
                    {{item.label}}
                  </li>
                </ul>
              </div>
              <label v-if='appIdTip' class="validate" style="color: red;font-size: 8px">*不能为空</label>
            </div>
          </div>
          <!--TAG区域-->
          <div class="row form-inline distance col-md-12">
            <label style="position:absolute;top: 20px;">TAG:</label>
            <div class="checkbox" style="margin-top: 20px;margin-left: 50px">
              <input type="checkbox" id="Total" value="Total" v-model="checkedTags"> <label for="Total">Total</label>
              <input type="checkbox" id="Failure" value="Failure" v-model="checkedTags"> <label for="Failure">
              Failure</label>
              <input type="checkbox" id="Failure%" value="Failure%" v-model="checkedTags"> <label for="Failure%">Failure%</label>
              <input type="checkbox" id="Min(ms)" value="Min(ms)" v-model="checkedTags"> <label
              for="Min(ms)">Min(ms) </label>
              <input type="checkbox" id="Max(ms)" value="Max(ms)" v-model="checkedTags"><label
              for="Max(ms)">Max(ms)</label><br>
              <input type="checkbox" id="Avg(ms)" value="Avg(ms)" v-model="checkedTags"><label
              for="Avg(ms)">Avg(ms)</label>
              <input type="checkbox" id="95Line(ms)" value="95Line(ms)" v-model="checkedTags"><label for="95Line(ms)">95Line(ms)</label>
              <input type="checkbox" id="99.9Line(ms)" value="99.9Line(ms)" v-model="checkedTags"><label
              for="99.9Line(ms)">99.9Line(ms)</label>
              <input type="checkbox" id="Std(ms)" value="Std(ms)" v-model="checkedTags"><label
              for="Std(ms)">Std(ms)</label>
              <input type="checkbox" id="QPS" value="QPS" v-model="checkedTags"><label for="QPS">QPS</label>
              <input type="checkbox" id="Percent%" value="Percent%" v-model="checkedTags"><label
              for="Percent%">Percent%</label>
            </div>
            <label v-if='checkedTagsTip' class="validate" style="color: red;font-size: 8px">*不能为空</label>
          </div>

          <!--Type区域-->
          <div class="row form-inline distance col-md-12 " v-if="visible">
            <div style="border: 1px solid grey;width: 80%;float: left;">
              <label style="position:absolute;top: 0px;">Type:</label>
              <div class="checkbox" style="margin-top: 0px;margin-left: 50px">
                <template v-for="type in typeList" v-if="type.id!=System||type.id!=all">
                  <input type="checkbox" :id="type.id" :value="type.id" v-model="checkedTypes">
                  <label :for="type.id">{{type.id}}</label>
                </template>
              </div>
            </div>
            <label v-if='checkedTagsTip' class="validate" style="color: red;font-size: 8px">*不能为空</label>
            <button type="button" class="btn btn-primary btn-sm " @click="showName"
                    style="margin-left: 20px;margin-top: 20px;">确定
            </button>
          </div>
          <!--tab表格区-->


          <!--foot-->
          <div class="foot">
            <button type="button" class="btn btn-primary btn-sm " @click="submit">保存</button>
            <button type="button" class="btn btn-primary btn-sm ">取消</button>
          </div>
        </form>
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

  .foot {
    text-align: center;
  }

  .foot button {
    margin-top: 200px;
    margin-right: 80px;
    margin-left: 40px;
  }

</style>
<script>
  import navList from './sidebar/navList.vue'
  export default{
    name: 'cat',
    components: {
      'v-navList': navList,

    },
    data: function () {
      return {
        taskName: "",
        timeInterval: "1*60",
        startTime: "",
        appId: "",
        jobId: "",//修改的时候需要加上
        checkedTags: [],//选中的tag
        checkedTypes: [],//选中的type
        typeList: {},//接收返回的type
        nameList: {},
        checkedNames: "",//选中的name
        visible: false,
        searchList: [],//联想功能的数据

        taskNameTip: false,
        checkedTagsTip: false,
        appIdTip: false,
        checkedTypesTip: false,
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
        val.length == 0 ? this.taskNameTip = true : this.taskNameTip = false
      },
      appId: function (val) {
        val.length == 0 ? this.appIdTip = true : this.appIdTip = false
      },
      checkedTags: function (val) {
        val.length == 0 ? this.checkedTagsTip = true : this.checkedTagsTip = false
      },
      checkedTypes: function (val) {
        val.length == 0 ? this.checkedTypesTip = true : this.checkedTypesTip = false
      },
    },
    methods: {
      showType: function () {
        this.$http.get(
          'http://10.8.85.36:8090/Cat_Api_Test/servlet/LoadCatJson',
          {appId: this.appId}
          ).then(response => {
          this.typeList = response.body.report.machines.All.types;
          this.visible = true
        }, response => {
          this.visible = false;
        });
      },
      showName: function () {

      },
      submit: function () {
        if (this.taskName.length === 0) {
          this.taskNameTip = true;
        }
        if (this.appId.length === 0) {
          this.appIdTip = true;
        }
        if (this.checkedTags.length === 0) {
          this.checkedTagsTip = true;
        }
        if (this.checkedTypes.length === 0) {
          this.checkedTypesTip = true;
        }
        //当判断元素不为空时，提交请求

      }


    }

  }
</script>
