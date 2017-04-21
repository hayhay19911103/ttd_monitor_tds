<template>
  <div class="main">
    <v-navListApi></v-navListApi>
    <div class="content">
      <div class="content-top">
        <div class="form-group">
          <label class="level">一级类目:</label>
          <div class="tag">
            <div class="btn btn-primary dis" type="button">Hybird</div>
            <div class="btn btn-default dis" type="button">H5</div>
            <div class="btn btn-default dis" type="button">Online</div>
          </div>
        </div>
        <div class="form-group ">
          <label class="level">二级类目:</label>
          <div class="tag">
            <div class="btn btn-primary dis" type="button">DOMready</div>
            <div class="btn btn-default dis" type="button">JSError / PV</div>

          </div>
        </div>
        <div class="form-group">
          <label class="level">三级类目:</label>
          <div class="tag">
            <div class="btn btn-primary dis" type="button">不限</div>
            <div class="btn btn-default dis" type="button">无线一组</div>
            <div class="btn btn-default dis" type="button">无线二组</div>
            <div class="btn btn-default dis" type="button">无线三组</div>
            <div class="btn btn-default dis" type="button">营销网站组</div>
            <div class="btn btn-default dis" type="button">营销活动组</div>
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
                <th>渠道名称</th>
                <th>页面名称</th>
                <th>Page ID</th>
                <th>PV</th>
                <th>JSError</th>
                <th>JSError/PV</th>
                <th>开发组</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in pageList">
                <td>{{item.id}}</td>
                <td>{{item.channelName}}</td>
                <td>{{item.pageName}}</td>
                <td>{{item.pageId}}</td>
                <td>{{item.pv}}</td>
                <td>{{item.JSError}}</td>
                <td>{{item.JSError/PV}}</td>
                <td>{{item.developGroup}}</td>
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
    name: 'pageProperty',
    components: {
      'v-navListApi': navListApi
    },
    data: function () {
      return {
        currentPage: 1,//当前页
        pageList: [],//每页存放的列表数据,14条
        dataList: [
          {
            "id": "1",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "developGroup": "商品组"
          },
          {
            "id": "2",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"

          },
          {
            "id": "3",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "4",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"

          },
          {
            "id": "5",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "6",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "7",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "8",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "9",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "10",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "11",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "12",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "13",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "14",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "15",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "16",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "17",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "18",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "19",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "20",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "21",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "22",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "23",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "24",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "25",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "26",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "27",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "28",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "29",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },
          {
            "id": "30",
            "channelName": "门票_Hybrid",
            "pageName": "订单填写-现付",
            "pageId": 186,
            "pv": "24324",
            "JSError": "122",
            "JSError/PV": "0.22%",
            "开发组": "商品组",
            "developGroup": "商品组"
          },],
      }
    },
    created: function () {
      this.searchList()
      this.pageList = this.dataList.slice((this.currentPage - 1) * 13, this.currentPage * 13 - 1)

    },
    methods: {
      searchList: function () {

      },
      handleCurrentChange: function (currentPage) {
        //当前页面变换
        this.currentPage = currentPage
        this.pageList = this.dataList.slice((this.currentPage - 1) * 13, this.currentPage * 13 - 1)
      }
    }
  }
</script>


<style>
</style>
