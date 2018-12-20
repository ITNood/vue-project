<template>
  <div>
    <headDiv :title="titleMsg"></headDiv>

    <scroller
      :on-infinite="infinite"
      :noDataText="noDataText"
      style="top:50px;bottom:50px;padding:10px 0;"
    >
      <el-col
        :span="24"
        class="lists"
        v-for="(list,index) in lists"
        :key="index"
      >
        <router-link :to="{path:'/details',query:{id:list.id}}">
          <img :src="list.imgURL">
          <div class="listContent">
            <el-row :gutter="20">
              <el-col :span="12">
                <h3>{{list.username}}</h3>
                <p>{{list.date}}</p>
              </el-col>
              <el-col :span="12">
                <h3>购入金额</h3>
                <p style="color:#67c23a">{{list.amount}}</p>
              </el-col>
            </el-row>
          </div>
        </router-link>
      </el-col>
    </scroller>

    <bottom></bottom>
  </div>
</template>

<script>
import HeadDiv from "../components/head";
import Bottom from "../components/bottom";
import api from "../API/index.js";

export default {
  data() {
    return {
      titleMsg: "市场",
      lists: [],
      noDataText:'没钱啦，别拉了...',
      page: 1
    };
  },
  components: {
    HeadDiv,
    Bottom
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let that = this;
      api.minicart.template.choices("marketList").then(response => {
        if (response.res.buy) {
          that.lists = response.res.buy;
        }
      });
    },
    //上拉加载更多
    infinite() {
      this.page += 1;
      console.log('page');
      let arr = [];
      setTimeout(() => {
        let that = this;
        api.minicart.template
          .choices("marketList" + "&page" + this.page)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      }, 1000);
    },

  }
};
</script>

<style scoped>
.lists {
  background: white;
  box-shadow: 0 0 5px #dbdbdb;
  padding: 15px;
  position: relative;
  border-radius: 6px;
  margin-bottom: 1rem;
}
.lists:last-child {
  margin-bottom: 0;
}
.lists > a > img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  left: 15px;
}
.listContent {
  margin-left: 5rem;
  color: #2c3e50;
}
.el-col-12 {
  line-height: 2rem;
  text-align: left;
}
.el-col-12:last-child {
  text-align: right;
}
</style>
