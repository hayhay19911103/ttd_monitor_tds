<template>
  <div id="listPage">
    <div class="main">
      <v-navList></v-navList>
      <div class="content">
        <div class="row">
          <div class="col-md-11">
            <table class="table table-bordered table-hover table-responsive "
                   style="position: relative;left: 40px;top: 40px;">
              <caption style="text-align: left;font-size: 30px">任务列表页</caption>
              <thead >
              <tr role="row" class="row-header" >
                <th>任务名称</th>
                <th>数据来源</th>
                <th>创建时间</th>
                <th>是否启用</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr  v-for="item in dataList">
                <td>{{item.taskName}}</td>
                <td>{{item.dataSource}}</td>
                <td>{{item.establishTime}}</td>
                <td>
                  <button type="button" class="btn btn-primary btn-sm " style="background-color: #5cb85c;border: none" v-if="isPlay">OK
                  </button>
                  <button type="button" class="btn btn-primary btn-sm " style="background-color: #d9534f;border: none" v-if="isPause">NO
                  </button>
                </td>
                <td style="text-align: center;">
                      <a ><span class="glyphicon" :class="{'glyphicon-play':isPlay,'glyphicon-pause':isPause}"@click="playOrPauseJob" ></span></a>
                      <router-link :to="item.dataSource"><span class="glyphicon glyphicon-pencil" style="margin-left: 10px;"></span></router-link>
                      <a><span class="glyphicon glyphicon-remove"  style="margin-left: 10px;" @click="delJob"></span></a>
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
    data:function () {
      return {
        isPlay:true,
        isPause:false,
        dataList:[{
          "taskName":"地面-搜索无结果率",
          "dataSource":"Dashboard",
          "establishTime":"03-13 15:05"
        },
          {
            "taskName":"h5核心页面Restful",
            "dataSource":"Dashboard",
            "establishTime":"03-10 10:20"
          },
          {
            "taskName":"门票产品预订API",
            "dataSource":"CAT",
            "establishTime":"02-28 18:01"
          },
          {
            "taskName":"所有接口周AVG",
            "dataSource":"Dashboard",
            "establishTime":"04-01 11:00"
          }],

      }
    },

    methods:{
      searchList:function () {
        this.$http.get(
          '',
          {}
        ).then(response => {

        }, response => {
        });
      },
      playOrPauseJob:function () {
        this.$http.get(
          '',
          {}
        ).then(response => {
          this.isPlay=!this.isPlay
          this.isPause=!this.isPause
        }, response => {
        });
      },
      delJob:function () {
        confirm("确定删除本条数据吗？",function () {
          //发请求删除数据
          this.$http.get(
            '',
            {}
          ).then(response => {
          }, response => {
          });

        })
      }
    }
  }
</script>
