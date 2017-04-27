<template>
  <div class="footer">
    <p>技术支持</p>
  </div>
</template>

<script>
    export default {
        name: 'footer',
    }
</script>


<style>
  .footer {
    position: absolute;
    bottom: 0;
    height: 80px;
    width:100%;
    background-color: #336699;
    line-height: 80px;
    overflow: hidden;
    /*clear: both;*/

  }

  .footer p {
    text-align: center;
    color: white;
    font-size:20px;
  }
</style>
