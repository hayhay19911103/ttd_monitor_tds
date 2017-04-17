<template>
  <div id="cat">
    <div class="main">
      <!--左侧导航栏-->
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
      <!--内容区域-->
      <div class="content">
        <form class="form"  style="position:relative;top: 20px; left: 40px;" >
          <div class="row form-inline distance">
            <div class="form-group col-md-3">
              <label for="taskName">任务名称</label>
              <input type="text" class="form-control input-sm" id="taskName" placeholder="简单的说明一下" v-model="taskName" v-validate:taskName="['required']">
            </div>
            <div class="form-group col-md-3">
              <label>开始时间</label>
              <el-date-picker
                v-model="startTime"
                type="datetime"
                placeholder="选择日期"
                size="small"
                :picker-options="pickerOptions0">
              </el-date-picker>
            </div>
            <div class="form-group col-md-3">
              <label>间隔时间</label>
              <select class=" input-sm" v-model="timeInterval">
                <option value="1*60">1分钟</option>
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
          </div>
          <!--Type区域-->
          <div class="row form-inline distance col-md-12 " v-if="visible">
            <div style="border: 1px solid grey;width: 80%;float: left;">
              <label style="position:absolute;top: 0px;">Type:</label>
              <div class="checkbox"  style="margin-top: 0px;margin-left: 50px">
              <template v-for="type in typeList">
                <input type="checkbox" :id="type.id" :value="type.id" v-model="checkedTypes"> <label :for="type.id">{{type.id}}</label>
              </template>
              </div>
            </div>
            <button type="button" class="btn btn-primary btn-sm " @click="showName" style="margin-left: 20px;margin-top: 20px;">确定</button>
          </div>
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
  export default{
    name: 'cat',
    data: function () {
      return {
        taskName: "",
        timeInterval: "",
        startTime: "",
        appId: "",
        checkedTags: [],//选中的tag
        checkedTypes: [],//选中的type
        typeList: {},//接收返回的type
        nameList:{},
        visible: false,
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7 - 7 * 24 * 60 * 60 * 1000;
          }
        },
      }
    },
    methods: {
      showType: function () {
        this.$http({
          url: "http://10.8.85.36:8090/Cat_Api_Test/servlet/LoadCatJson",
          methods: "get",
          data: {appId: this.appId},
        }).then(response => {
          this.typeList = response.body.report.machines.All.types;
          this.visible = true
        }, response => {
          this.visible = false;
        });
      },
      showName: function () {
        this.$http({
          url: "http://10.8.85.36:8090/Cat_Api_Test/servlet/LoadCatJson",
          methods: "get",
          data: {
            appId: this.appId,
            checkedTypes: this.checkedTypes
          }
        }).then(response => {
          debugger
          this.typeList = response.body.report.machines.All.types;
        }, response => {
          debugger
          // error callback
        });
      },
      submit: function () {
        this.$http({
          url: "http://10.8.85.36:8090/Cat_Api_Test/servlet/CatJobServlet",
          methods: "get",
          data: {
            appId: this.appId,
            checkedTypes: this.checkedTypes
          }
        }).then(response => {
          debugger
          this.typeList = response.body.report.machines.All.types;
        }, response => {
          // error callback
        });
      }
    }

  }
</script>
