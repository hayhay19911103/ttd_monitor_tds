<template>
  <div id="cat">
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
        <form class="form">
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
              <label for="startTime">开始时间</label>
              <input type="email" class="form-control input-sm" id="startTime" placeholder="默认从当前时间开始">
            </div>
          </div>

          <div class="row form-inline distance">
            <div class="form-group col-md-12">
              <label for="appId">APP &nbsp;&nbsp; ID</label>
              <input type="text" class="form-control input-sm" id="appId" placeholder="100000445" v-model="appId"
                     @keyup.enter="showType">
            </div>
          </div>

          <div class="row form-inline distance col-md-12">
            <label style="position:absolute;top: 20px;">TAG:</label>
            <div class="checkbox " style="margin-top: 20px;margin-left: 50px">
              <label>
                <input type="checkbox"> Total
              </label>
              <label>
                <input type="checkbox"> Failure
              </label>
              <label>
                <input type="checkbox"> Failure%
              </label>
              <label>
                <input type="checkbox"> Min(ms)
              </label>
              <label>
                <input type="checkbox"> Max(ms)
              </label><br>
              <label>
                <input type="checkbox"> Avg(ms)
              </label>
              <label>
                <input type="checkbox"> 95Line(ms)
              </label>
              <label>
                <input type="checkbox"> 99.9Line(ms)
              </label>
              <label>
                <input type="checkbox"> Std(ms)
              </label>
              <label>
                <input type="checkbox"> QPS
              </label>
              <label>
                <input type="checkbox"> Percent%
              </label>
            </div>
          </div>
          <div class="row form-inline distance col-md-12 " v-if="visible">
            <div style="border: 1px solid grey;width:80% ;float:left;padding-bottom: 10px">
              <label style="position: absolute; margin-top: 10px">Type:</label>
              <div v-for="type in typeList" class="checkbox " style="margin-top: 10px;margin-left: 50px">
                <label><input type="checkbox"> {{type.id}}</label>
              </div>
            </div>
            <div>
              <button type="button" class="btn btn-primary btn-sm " style="margin-left: 20px;margin-top: 80px">确认
              </button>
            </div>
          </div>
          <div class="foot">
            <button type="button" class="btn btn-primary btn-sm ">保存</button>
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
    width: 210px;
    height: 20px;
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
        appId: "",
        typeList: {},
        visible:false
      }
    },
    methods: {
      showType: function () {
        this.$http({
          url: "http://10.8.85.36:8090/Cat_Api_Test/servlet/LoadCatJson",
          methods: "get",
          data: this.appId,
        }).then(response => {
          this.typeList = response.body.report.machines.All.types;
          this.visible=true
        }, response => {
          // error callback
        });
      }
    }

  }
</script>
