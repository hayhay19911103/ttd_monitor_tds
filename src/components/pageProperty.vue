<template>
  <div class="main">
    <v-navListApi></v-navListApi>
    <div class="content">
      <div class="form-group">
        <label style="float:left;margin-top: 5px">一级类目:</label>
        <div class="tag">
          <button class="btn btn-primary dis" type="submit">Hybird</button>
          <button class="btn btn-default dis" type="submit">H5</button>
          <button class="btn btn-default dis" type="submit">Online</button>
        </div>
      </div>
      <div class="form-group ">
        <label style="float:left;margin-top: 5px">二级类目:</label>
        <div class="tag">
          <button class="btn btn-primary dis" type="submit">DOMready</button>
          <button class="btn btn-default dis" type="submit">JSError / PV</button>

        </div>
      </div>
      <div class="form-group">
        <label style="float:left;margin-top: 5px">三级类目:</label>
        <div class="tag">
          <button class="btn btn-primary dis" type="submit">不限</button>
          <button class="btn btn-default dis" type="submit">无线一组</button>
          <button class="btn btn-default dis" type="submit">无线二组</button>
          <button class="btn btn-default dis" type="submit">无线三组</button>
          <button class="btn btn-default dis" type="submit">营销网站组</button>
          <button class="btn btn-default dis" type="submit">营销活动组</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navListApi from './sidebar/navListApi.vue'
  export default {
    name: 'hello',
    components: {
      'v-navListApi': navListApi
    },
  }
</script>


<style>
</style>
