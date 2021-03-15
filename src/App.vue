<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      res:{}
    }
  },
  mounted() {
    // storage.setItem('a',1);
    // storage.setItem('user',{a:1});
    // storage.setItem('abc',{a:1},'user');
    // storage.clear('a');
    //#1 mock数据第一种方法：本地加载静态json文件的形式
    // this.axios.get('./mock/user/login.json').then((res)=>{
    //   this.res = res;
    // });
    //#2 通过easymock平台实现模拟数据

  }
}
</script>

<style>
</style>
