<template>
  <div id="leftNav">
    <el-menu default-active="1" class="el-menu-vertical-demo leftNav" v-bind:style="{ height: screenHeight +'px'}">
      <el-menu-item index="1">
        <router-link to="apiProperty">接口性能大盘</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="pageProperty">页面性能大盘</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="">玩乐日报</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'navList',
    data: function () {
      return {
        screenHeight:$(window).height()-160
      }
    }
  }
</script>


<style>
  .leftNav {
    background: #e4e4e4;
    width: 13%;
    height: 780px;
    float: left;
  }

  .leftNav a {
    display: block;
    text-decoration: none;
    color: rgba(51, 102, 153, 1);
    font-size: 20px;
    margin: 0 auto;
  }

  .leftNav a:link {
    text-decoration: none;
  }
</style>
