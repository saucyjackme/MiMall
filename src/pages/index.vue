<template>
  <div class="index">
    <service-bar></service-bar>
  </div>
</template>
<script>
//index.js会嵌套在home.vue的router-view中
import ServiceBar from "../components/ServiceBar";

export default {
  name: "index",
  components: {
    ServiceBar,
  },
};
</script>
