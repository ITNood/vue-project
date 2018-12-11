<template>
  <div>
    <headDiv :title="titleMsg"></headDiv>
    <el-main class="martop">
      <router-link
        :span="24"
        v-for="(item,index) in news"
        :key="index"
        class="news-list"
        to="/newsDetails"
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
      ]
    };
  },
  methods: {
    getNews() {
      let that = this;
      this.$axios
        .post("getMessage")
        .then(res => {
          console.log(res);
          if (res.data.res) {
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
.news-list {
  border-bottom: 1px solid #dbdbdb;
  display: block;
  padding: 8px 0;
  position: relative;
  height: 60px;
}
.news-list > img {
  position: absolute;
  top: 8px;
  left: 0;
  width: 60px;
  height: 60px;
}
.newContent {
  padding-left: 70px;
  text-align: left;
  color: #2c3e50;
  line-height: 1.5rem;
}
.newContent > h3 > span {
  float: right;
}
.newContent > p {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
