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
export default {
  data() {
    return {
      titleMsg: "消息",
      news: [
        {
          imgURL: "",
          title: "",
          date: "",
          details: "",
          id: ""
        }
      ],
      newMsg: ""
    };
  },
  methods: {
    getNews() {
      let that = this;
      this.$axios({
        method: "post",
        url: "http://www.newos.com/getMessage",
        headers: {
          token: window.localStorage.getItem("token")
        }
      })
        .then(res => {
          // console.log(res);
          if (res.data.res.length == 0) {
            this.newMsg = "暂无消息";
          } else {
            that.news = res.data.res;
          }
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.getNews();
  },
  components: {
    headDiv,
    Bottom
  }
};
</script>

<style scoped>
</style>
