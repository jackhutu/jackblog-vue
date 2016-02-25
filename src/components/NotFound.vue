<template>
  <p class="not">404,找不到文件</p>
  <a v-link="{ path: '/' }">a 页</a>
  <a v-link="{ path: 'b' }">b 页</a>
</template>
<script>
export default {
  data: function(){
    return {

    }
  }
}
</script>
<style>
.not{
  text-align: center;
  font-size: 32px;
  margin-top: 18%;
}
</style>