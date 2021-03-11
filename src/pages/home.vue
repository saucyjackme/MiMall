<template>
  <div>
    home
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
//导入组件并加载
  import NavHeader from '../components/NavHeader'
  import NavFooter from '../components/NavFooter'

  export default {
    name:'nav-home',
    components:{
      NavHeader,
      NavFooter
    }
  }
</script>
