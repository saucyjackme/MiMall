<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product' + item.id">
              <img v-bind:src="item.img" alt="" />
            </a>
          </swiper-slide>
          <!-- swiper操作控件 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
//index.js会嵌套在home.vue的router-view中
import ServiceBar from "../components/ServiceBar";
//结构引入子组件
import { swiper, swiperSlide } from "vue-awesome-swiper";
//引入css
import "swiper/dist/css/swiper.css";

export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
    ServiceBar,
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "42",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "42",
          img: "/imgs/slider/slide-5.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "../assets/scss/mixin.scss";

.index {
  .swiper-box {
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>