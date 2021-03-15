<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index'

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
    storage.setItem('abc',{a:1},'user');
    // storage.clear('a');
    this.axios.get('./mock/user/login.json').then((res)=>{
      this.res = res;
    });
  }
}
</script>

<style>
</style>
