<template>
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

</template>

<script>
  export default {
    name: 'hello',
    ready:{

    }
  }
</script>


<style>
  .leftNav {
    background: #e4e4e4;
    width: 13%;
    height: 800px;
    float: left;
  }

  .leftNav ul li {
    list-style: none;
    height: 150px;
    text-align: center;
    line-height: 40px;
  }

  .leftNav ul li ul li {
    display: block;
    height: 30px;
  }
  .leftNav a {
    display: block;
    text-decoration: none;
    color: rgba(51, 102, 153, 1);
    font-size: 20px;
    margin: 0 auto;
  }
</style>
