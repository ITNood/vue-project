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
        { text: "个性设置", URL: "/personalSet" },
        { text: "账户管理", URL: "/userManage" },
        { text: "地址管理", URL: "/addressManage" },
        { text: "地址管理", URL: "/addressManage" },
        { text: "地址管理", URL: "/addressManage" }
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
      this.$axios({
        method: "post",
        url: "http://www.newos.com/loginOut",
        headers: {
          'token': window.localStorage.getItem("token")
        }
      })
        .then(res => {
          //console.log(res);
          window.localStorage.removeItem("token");
          let token = localStorage.getItem("token");
          if (!token) {
            that.$router.push("/");
          } else {
          }
        })
        .catch(err => {
          console.log(err);
          alert("退出失败，请重试！");
        });
    },
    //获取用户信息
    getUser() {
      let that = this;
      this.$axios({
        method:'post',
        url:'http://www.newos.com/getUser',
        headers:{
          'token':window.localStorage.getItem('token')
        }
      }).then(res => {
          // console.log(res);
          // that.imageURL = res.data.res.avatar;
          that.name = res.data.res.username;
        })
        .catch(err => {});
        
    }
  },
  mounted() {
    this.getUser();
  }
};
</script>

<style scoped>
.el-main {
  padding: 0;
}
</style>
