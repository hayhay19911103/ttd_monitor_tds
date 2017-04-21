<template>
  <div class="main">
    <v-navListApi></v-navListApi>
    <div class="content">
      <div class="content-top">
      <div class="form-group">
        <label class="level">一级类目:</label>
        <div class="tag">
          <div class="btn btn-primary dis" type="button" value="OpenAPI" >OpenAPI</div>
          <div class="btn btn-default dis" type="button"value="Restful">Restful</div>
        </div>
      </div>
      <div class="form-group ">
        <label class="level">二级类目:</label>
        <div class="tag">
          <div class="btn btn-primary dis" type="button"value="AVG" >AVG</div>
          <div class="btn btn-default dis" type="button"value="95line">95line</div>
          <div class="btn btn-default dis" type="button"value="Failure%">Failure%</div>
        </div>
      </div>
      <div class="form-group">
        <label class="level">三级类目:</label>
        <div class="tag">
          <div class="btn btn-primary dis" type="button" value="不限">不限</div>
          <div class="btn btn-default dis"type="button" value="无线服务组">无线服务组</div>
          <div class="btn btn-default dis" type="button" value="商品组" >商品组</div>
          <div class="btn btn-default dis"type="button"value="订单组" >订单组</div>
          <div class="btn btn-default dis" type="button"value="结算组">结算组</div>
          <div class="btn btn-default dis"type="button" value="对接组">对接组</div>
          <div class="btn btn-default dis" type="button" value="搜索组">搜索组</div>
          <div class="btn btn-default dis" type="button" value="供应商系统组" >供应商系统组</div>
        </div>
      </div>
      </div>
      <div>
        <div class="row">
          <div class="col-md-11">
            <table class="table table-bordered table-hover table-responsive "
                   style="position: relative;left: 40px;top: 20px;">
              <thead>
              <tr role="row" class="row-header">
                <th>top10</th>
                <th>业务名称</th>
                <th>接口名</th>
                <th>AVG</th>
                <th>开发组</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in pageList" >
                <td>{{item.id}}</td>
                <td>{{item.businessName}}</td>
                <td>{{item.interfaceName}}</td>
                <td>{{item.AVG}}</td>
                <td>{{item.developGroup}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div style="position: absolute;bottom: 110px;right: 110px;">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="13"
        layout="total, prev, pager, next"
        :total="dataList.length"><!--total是总的数据条数-->
      </el-pagination>
    </div>
  </div>
  </div>
</template>

<script>
  import navListApi from '../components/sidebar/navListApi.vue'
  export default {
    name: 'apiProperty',
    components:{
      'v-navListApi':navListApi
    },
    data:function () {
      return {
        currentPage:1,//当前页
        pageList:[],//每页存放的列表数据,14条
        dataList: [
          {
            "id": "1",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "2",
            "businessName": "玩乐-可选项价格日历",
            "interfaceName": "optioncalendarinfo",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "3",
            "businessName": "玩乐-下单接口(JAVA)",
            "interfaceName": "CreateOrde",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "4",
            "businessName": "门票-下单接口",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"订单组"
          },
          {
            "id": "5",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "6",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "7",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "8",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "9",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "10",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "11",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "12",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "13",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          }, {
            "id": "14",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "15",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          }, {
            "id": "16",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "17",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "18",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "19",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "20",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "21",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "22",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "23",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "24",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "25",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "26",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "27",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "28",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "29",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "30",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "31",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "32",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "33",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "34",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "35",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "36",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "37",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },
          {
            "id": "38",
            "businessName": "玩乐-下单接口(.NET)",
            "interfaceName": "createorder",
            "AVG":186,
            "developGroup":"商品组"
          },],

      }
    },
    created:function () {
      this.searchList()
      this.pageList=this.dataList.slice((this.currentPage-1)*13,this.currentPage*13-1)

    },
    methods:{
      searchList: function () {
        this.$http.get(
          '',
          {}
        ).then(response => {

        }, response => {
        });
      },
      handleCurrentChange:function (currentPage) {
        //当前页面变换
        this.currentPage=currentPage
        this.pageList=this.dataList.slice((this.currentPage-1)*13,this.currentPage*13-1)
      }
    }
  }
</script>


<style>

  .tag div{
    border-radius: 20px;
    outline:none;
  }
  .level label{
      float:left;
      margin-top: 5px;
      margin-right: 10px;
    }
  .dis {
    margin-right: 10px;
    width:107px;
  }
  .content-top{
    position: relative;
    top: 20px;
    left:40px;
  }
</style>
