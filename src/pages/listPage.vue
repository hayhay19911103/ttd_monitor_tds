<template>
  <div id="listPage">
    <div class="main">
      <v-navList></v-navList>
      <div class="content">
        <div class="row">
          <div class="col-md-11">
            <table class="table table-bordered table-hover table-responsive "
                   style="position: relative;left: 40px;top: 20px;">
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
              <tr v-for="(item,index) in pageList" >
                <td>{{item.taskName}}</td>
                <td>{{item.dataSource}}</td>
                <td>{{item.establishTime}}</td>
                <td>
                  <div type="button" class="btn btn-primary btn-xs " style="background-color: #5cb85c;border: none"
                       v-if="item.isPlay" >OK
                  </div>
                  <div type="button" class="btn btn-primary btn-xs " style="background-color: #d9534f;border: none"
                       v-if="!item.isPlay" >NO
                  </div>
                </td>
                <td>
                  <a><span   class="glyphicon" :class="{'glyphicon-play':item.isPlay,'glyphicon-pause':!item.isPlay}" @click="playOrPauseJob(index)"></span></a>
                  <router-link :to="item.dataSource"><span  class="glyphicon glyphicon-pencil" style="margin-left: 10px;"></span></router-link>
                  <a><span  class="glyphicon glyphicon-remove" style="margin-left: 10px;" @click="delJob"></span></a>
                </td>
              </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
      <div style="position: absolute;bottom: 110px;right: 110px;">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="15"
          layout="total, prev, pager, next"
          :total="dataList.length"><!--total是总的数据条数-->
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<style>
  table tr th {
    text-align: center;
  }

  table tr td {
    text-align: center;
  }
</style>
<script>
  import navList from '../components/sidebar/navList.vue'
  export default{
    name: 'listPage',
    components: {
      'v-navList': navList,
    },
    data: function () {
      return {
        isPlay: true,
        currentPage:1,//当前页
        pageList:[],//每页存放的列表数据,15条
        dataList: [
          {
            "taskName": "地面-搜索无结果率",
            "dataSource": "Dashboard",
            "establishTime": "03-13 15:05",
            "isPlay":true,
          },
          {
            "taskName": "h5核心页面Restful",
            "dataSource": "Dashboard",
            "establishTime": "03-10 10:20",
            "isPlay":false,

          },
          {
            "taskName": "门票产品预订API",
            "dataSource": "CAT",
            "establishTime": "02-28 18:01",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":false,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":false,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "CAT",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },{
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true, },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },{
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":false,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":false,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":false,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":false,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":true,
          },
          {
            "taskName": "所有接口周AVG",
            "dataSource": "Dashboard",
            "establishTime": "04-01 11:00",
            "isPlay":false,
          },],
      }
    },
    created:function () {
      this.searchList()
      this.pageList=this.dataList.slice((this.currentPage-1)*15,this.currentPage*15-1)

    },
    methods: {
      searchList: function () {
        this.$http.get(
          '',
          {}
        ).then(response => {

        }, response => {
        });
      },
      playOrPauseJob: function (index) {
        this.$http.get(
          '',
          {}
        ).then(response => {
            this.dataList[index].isPlay=!this.dataList[index].isPlay
        }, response => {
        });
      },
      delJob: function () {
        confirm("确定删除本条数据吗？", function () {
          //发请求删除数据
          this.$http.get(
            '',
            {}
          ).then(response => {
          }, response => {
          });

        })
      },
      handleCurrentChange:function (currentPage) {
        //当前页面变换
        this.currentPage=currentPage
        this.pageList=this.dataList.slice((this.currentPage-1)*15,this.currentPage*15-1)
      }
    }
  }
</script>
