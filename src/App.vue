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
    this.axios.get('/user/login').then((res)=>{
      this.res = res;
    });
    this.getUser();
    this.getCartCount();
  },
  methods:{
    //拉取用户信息
    getUser() {
      this.axios.get('/user').then((res)=>{
        //to do 保存到vuex中
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    //获取购物车数量
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res)=>{
        //to do 保存到vuex中
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>
<style lang="scss">

@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';


</style>
