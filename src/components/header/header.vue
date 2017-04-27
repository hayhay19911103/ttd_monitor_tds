<template>
  <div class="top">
  <ul>
    <li>vlh凌桦<span class="glyphicon glyphicon-cog" style="margin-left: 5px;font-size: 16px"></span></li>
    <li class="" data-toggle="dropdown" >平台<span class="caret"></span>
      <select class="dropdown-menu">
        <option><a href="#">监控平台</a></option>
        <option><a href="#">测试平台</a></option>
        <option><a href="#">工具平台</a></option>
        <option><a href="#">报表平台 </a></option>
      </select>
    </li>
    <li><router-link to="home" >主页</router-link>
    </li>
  </ul>
  <span style="font-family:'Meiryo Negreta cursiva', 'Meiryo Normal', 'Meiryo';
      font-weight:700;font-style:italic;font-size: 26px">TDS</span>
  &nbsp;
  <span style="font-family:'Arial Normal', 'Arial';
      font-weight:400;font-style:normal;font-size:20px;">平台</span>
</div>

</template>

<script>
    export default {
        name: 'header',
    }
</script>


<style>
  .top {
    height: 80px;
    text-align: left;
    background-color: #336699;
    line-height: 80px;
    color: white;
    padding-left: 20px;
    overflow: hidden;
  }

  .top ul li {
    text-decoration: none;
    list-style: none;
    float: right;
    margin-left: 20px;
    margin-right: 15px;
    font-size:20px;
  }
  .top ul li a{
    color: white;
  }
  .top ul li a:link,hover,visited,active{
    text-decoration: none;
  }
</style>
