<template>
  <div>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
// import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'
import ServiceBar from '../components/ServiceBar'
  export default {
    name:'order',
    components:{
      // OrderHeader,
      NavFooter,
      ServiceBar
    },
    data() {
      return {
        title: '',
        tip: ''
      }
    }
  }
</script>
