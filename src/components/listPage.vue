<template>
  <div id="listPage">
    <div class="main">
      <v-navList></v-navList>
      <div class="content">
        <div class="row">
          <div class="col-md-11">
            <table class="table table-bordered table-hover table-responsive " style="position: relative;left: 40px;top: 40px;">
              <caption style="text-align: left;font-size: 30px">任务列表页</caption>
              <thead>
              <tr role="row" class="row-header">
                <th>任务名称</th>
                <th>数据来源</th>
                <th>创建时间</th>
                <th>是否启用</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <!--<tr  v-for="item in dataList">-->
              <tr>
                <td>地面-搜索无结果率</td>
                <td>Dashboard</td>
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
                <a><span class="glyphicon glyphicon-pause" style="display: none;"></span></a>
                <router-link to="cat"><span class="glyphicon glyphicon-pencil" style="margin-left: 20px"></span>
                </router-link>
              </tr>
              </td>
              </tr>
              <tr>
                <td>h5核心页面Restful</td>
                <td>Dashboard</td>
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
                <a><span class="glyphicon glyphicon-play"></span></a>
                <a><span class="glyphicon glyphicon-pause" style="display: none;"></span></a>
                <router-link to="cat"><span class="glyphicon glyphicon-pencil" style="margin-left: 20px"></span>
                </router-link>
              </tr>
              </td>
              </tr>
              <tr>
                <td>h5核心页面Restful</td>
                <td>Dashboard</td>
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
                <a><span class="glyphicon glyphicon-play" style="display: none;"></span></a>
                <a><span class="glyphicon glyphicon-pause"></span></a>
                <router-link to="cat"><span class="glyphicon glyphicon-pencil" style="margin-left: 20px"></span>
                </router-link>
              </tr>
              </td>
              </tr>
              <tr>
                <td>h5核心页面Restful</td>
                <td>Dashboard</td>
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
                <a><span class="glyphicon glyphicon-play" style="display: none;"></span></a>
                <a><span class="glyphicon glyphicon-pause"></span></a>
                <router-link to="cat"><span class="glyphicon glyphicon-pencil" style="margin-left: 20px"></span>
                </router-link>
              </tr>
              </td>
              </tr>
              <tr>
                <td>h5核心页面Restful</td>
                <td>Dashboard</td>
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
                <a><span class="glyphicon glyphicon-play"></span></a>
                <a><span class="glyphicon glyphicon-pause" style="display: none;"></span></a>
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
    </div>
  </div>
</template>
<style>

</style>
<script>
  import navList from './sidebar/navList.vue'
  export default{
    name: 'listPage',
    components: {
      'v-navList': navList,
    },
  }
</script>
