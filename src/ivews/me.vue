<template>
  <div>
    <headDiv :title="titleMsg"></headDiv>
    <el-main>
      <div id="personal">
        <img :src="imageURL">
        <h4>{{name}}</h4>
        <p><span>个人简介：</span>{{message}}</p>
      </div>

      <div id="link-list">
        <router-link
          v-for="(item,index) in lists"
          :key="index"
          :to="item.URL"
        >
        <span :class="item.Class_list" class="icon iconfont"></span>
          {{item.text}}
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </div>
      <div style="padding:0 15px;">
        <el-button
          type="success"
          id="out"
          @click="out"
        >退出账号</el-button>
      </div>
    </el-main>
    <bottom></bottom>
  </div>
</template>

<script>
import headDiv from "../components/head";
import Bottom from "../components/bottom";
import api from "../API/index.js";
export default {
  data() {
    return {
      titleMsg: "个人中心",
      imageURL: require("../assets/list1.png"),
      name: "",
      message: "我是一只小小鸟！",
      lists: [
        { text: "个性设置", URL: "/personalSet",Class_list:'icon-my'},
        { text: "账户管理", URL: "/userManage" ,Class_list:'icon-qianbao'},
        { text: "地址管理", URL: "/addressManage",Class_list:'icon-addressfill' },
        { text: "关于APP", URL: "/about",Class_list:'icon-about' },
        { text: "订单管理", URL: "/order",Class_list:'icon-dingdanguanli' }
      ]
    };
  },
  components: {
    headDiv,
    Bottom
  },
  methods: {
    out() {
      let that = this;
      api.minicart.template.choices('loginOut').then(reponse=>{
        window.localStorage.removeItem('token')
        let token=localStorage.getItem('token')
        if(!token){
          that.$router.push('/')
        }
      }).catch(error=>{
        console.log(error)
        alert('退出失败，请重试！')
      })
    },
    //获取用户信息
    getUser() {
      let that = this;
        api.minicart.template.choices('getUser').then(response=>{
          console.log(response)
         that.name=response.res.username
        })
    }
  },
  mounted() {
    this.getUser();
  }
};
</script>

<style scoped>
@import '../assets/iconfont/iconfont.css';
.el-main {
  padding: 0;
}
</style>
