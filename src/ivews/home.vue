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
      this.$axios({
        method:'post',
        url:'http://www.newos.com/getGoods',
        headers:{
          'token':window.localStorage.getItem('token')
        }
      }).then(res => {})
        .catch(err => {}); 
       //.post("getGoods")
      //  this.$axios.post('getGoods').then(res=>{
      //    console.log(res)
      //  }).catch(err=>{

      //  })
        
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
