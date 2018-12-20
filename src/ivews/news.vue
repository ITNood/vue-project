<template>
  <div>
    <headDiv :title="titleMsg"></headDiv>
    <el-main class="martop">
      <router-link
        :span="24"
        v-for="(item,index) in news"
        :key="index"
        class="news-list"
        :to="{path:'/details',query:{id:item.id}}"
      >
        <img :src="item.imgURL">
        <el-input
          :val="item.id"
          style="display:none"
        />
        <div class="newContent">
          <h3>{{item.title}}<span>{{item.date}}</span></h3>
          <p>{{item.details}}</p>
        </div>
      </router-link>
      <div id="message">{{newMsg}}</div>
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
      titleMsg: "消息",
      news: [],
      newMsg: ""
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews() {
      let that = this;
      api.minicart.template.choices("getMessage").then(response => {
        console.log(response);
        if (response.res.length == 0) {
          that.newMsg = "暂无消息";
        } else {
          that.news = response.res;
        }
      });
    }
  },
  components: {
    headDiv,
    Bottom
  }
};
</script>

<style scoped>
</style>
