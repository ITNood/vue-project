<template>
  <div>
    <headDiv :title="titleMsg"></headDiv>
    <swiper :swiper="itemMsg"></swiper>
    <el-main>
      <el-row :gutter="20">
        <el-col
          :span="12"
          v-for="(item,index) in lists"
          :key="index"
        >
          <img :src="item.imageURL">
          <h5>{{item.message}}</h5>
          <p>{{item.price}}</p>
        </el-col>
      </el-row>
    </el-main>
    <bottom></bottom>

  </div>
</template>

<script>
import api from '../API/index.js'
import headDiv from "../components/head";
import Bottom from "../components/bottom";
import Swiper from "../components/swiper";
export default {
  data() {
    return {
      titleMsg: "欢迎来到首页",
      active: 1,
      itemMsg: [
        { img: require("../assets/banner.jpg") },
        { img: require("../assets/banner2.jpg") },
        { img: require("../assets/banner3.jpg") }
      ],
      lists: []
    };
  },
  methods: {
    getgoods() {
      api.minicart.template.choices('getGoods').then(response=>{

      }).catch(error=>{

      })
        
    }
  },
  components: {
    headDiv,
    Bottom,
    Swiper
  },
  mounted() {
    this.getgoods();
  }
};
</script>

<style scoped>
</style>
