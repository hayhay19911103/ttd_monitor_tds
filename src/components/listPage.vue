<template>
  <div id="listPage">
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
            <div class="row form-inline distance" >
              <div class="form-group col-md-3" style="width: 20%">
                <label for="taskId">任务ID</label>
                <input type="text" class="form-control input-sm" id="taskId" placeholder="">
              </div>
              <div class="form-group col-md-3" style="width: 20%">
                <label for="taskName">任务名称</label>
                <input type="text" class="form-control input-sm" id="taskName" placeholder="">
              </div>
              <div class="form-group col-md-3" style="width: 20%">
                <label>数据来源</label>
                <select class=" input-sm">
                  <option selected>CAT</option>
                  <option>Dashboard</option>
                  <option>UBT</option>
                </select>
              </div>
              <div class="form-group col-md-3" style="width: 20%" >
                <label for="establisher">创建者</label>
                <input type="text" class="form-control input-sm" id="establisher" placeholder="">
              </div>
              <div class="from-group" style="position: absolute;right: 200px">
                <button type="button" class="btn btn-primary btn-sm ">查询</button>
              </div>
            </div>
          </form>

          <table class="table table-bordered table-hover table-responsive " style="position:relative;left: 40px; top: 80px;right: 40px;">
            <thead>
            <tr role="row" class="row-header">
              <th>任务ID</th>
              <th>任务名称</th>
              <th>数据来源</th>
              <th>创建者</th>
              <th>创建时间</th>
              <th>是否启用</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <!--<tr  v-for="item in dataList">-->
            <tr>
              <td>001</td>
              <td>地面-搜索无结果率</td>
              <td>Dashboard</td>
              <td>张三</td>
              <td>03-13 15:05</td>
              <td>
                <button type="button" class="btn btn-primary btn-sm " style="background-color: #5cb85c;border: none">
                  OK
                </button>
                <button type="button" class="btn btn-primary btn-sm " style="background-color: #d9534f;border: none">
                  NO
                </button>
              </td>
              <td>
            <tr>
              <a><span class="glyphicon glyphicon-play"></span></a>
              <a><span  class="glyphicon glyphicon-pause" style="display: none;"></span></a>
              <router-link to="cat"><span class="glyphicon glyphicon-pencil" style="margin-left: 20px"></span>
              </router-link>
            </tr>
            </td>
            </tr>
            <tr>
              <td>002</td>
              <td>h5核心页面Restful</td>
              <td>Dashboard</td>
              <td>李四</td>
              <td>03-10 10:20</td>
              <td>
                <button type="button" class="btn btn-primary btn-sm " style="background-color: #5cb85c;border: none">
                  OK
                </button>
                <button type="button" class="btn btn-primary btn-sm " style="background-color: #d9534f;border: none">
                  NO
                </button>
              </td>
              <td>
            <tr>
              <a><span  class="glyphicon glyphicon-play"></span></a>
              <a><span class="glyphicon glyphicon-pause" style="display: none;"></span></a>
              <router-link to="cat"><span class="glyphicon glyphicon-pencil" style="margin-left: 20px"></span>
              </router-link>
            </tr>
            </td>
            </tr>
            <tr>
              <td>003</td>
              <td>h5核心页面Restful</td>
              <td>Dashboard</td>
              <td>李四</td>
              <td>03-10 10:20</td>
              <td>
                <button type="button" class="btn btn-primary btn-sm " style="background-color: #5cb85c;border: none">
                  OK
                </button>
                <button type="button" class="btn btn-primary btn-sm " style="background-color: #d9534f;border: none">
                  NO
                </button>
              </td>
              <td>
            <tr>
              <a><span  class="glyphicon glyphicon-play" style="display: none;"></span></a>
              <a><span  class="glyphicon glyphicon-pause"></span></a>
              <router-link to="cat"><span class="glyphicon glyphicon-pencil" style="margin-left: 20px"></span>
              </router-link>
            </tr>
            </td>
            </tr>
            <tr>
              <td>002</td>
              <td>h5核心页面Restful</td>
              <td>Dashboard</td>
              <td>李四</td>
              <td>03-10 10:20</td>
              <td>
                <button type="button" class="btn btn-primary btn-sm " style="background-color: #5cb85c;border: none">
                  OK
                </button>
                <button type="button" class="btn btn-primary btn-sm " style="background-color: #d9534f;border: none">
                  NO
                </button>
              </td>
              <td>
            <tr>
              <a><span  class="glyphicon glyphicon-play" style="display: none;"></span></a>
              <a><span class="glyphicon glyphicon-pause"></span></a>
              <router-link to="cat"><span class="glyphicon glyphicon-pencil" style="margin-left: 20px"></span>
              </router-link>
            </tr>
            </td>
            </tr>
            <tr>
              <td>002</td>
              <td>h5核心页面Restful</td>
              <td>Dashboard</td>
              <td>李四</td>
              <td>03-10 10:20</td>
              <td>
                <button type="button" class="btn btn-primary btn-sm " style="background-color: #5cb85c;border: none">
                  OK
                </button>
                <button type="button" class="btn btn-primary btn-sm " style="background-color: #d9534f;border: none">
                  NO
                </button>
              </td>
              <td>
            <tr>
              <a><span  class="glyphicon glyphicon-play"></span></a>
              <a><span  class="glyphicon glyphicon-pause" style="display: none;"></span></a>
              <router-link to="cat"><span class="glyphicon glyphicon-pencil" style="margin-left: 20px"></span>
              </router-link>
            </tr>
            </td>
            </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>

  export default{
    name: 'listPage',
  }
</script>
