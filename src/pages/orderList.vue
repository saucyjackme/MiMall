<template>
  <div>
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请认真填写收货地址</span>
      </template>
    </order-header>
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader'

  export default {
    name:'order-list',
    components:{
      OrderHeader
    }
  }
</script>
