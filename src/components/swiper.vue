<template>
  <div>
    <div class="swiper-container" style="margin-top:50px;">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in swiper"
          :key="index"
        ><img :src="item.img"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Swiper",
  data() {
    return {};
  },
  props: ["swiper"],
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      //direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      preventClicks:true,

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable:true
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      //自动轮播
      autoplay:{
        stopOnLastSlide:true
      },

      // 如果需要滚动条
      // scrollbar: {
      //   el: ".swiper-scrollbar"
      // }
    });
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
.el-carousel__container {
  height: 100%;
}

</style>
