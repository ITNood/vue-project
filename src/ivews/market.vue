<template>
  <div id="market">
    <headDiv :title="titleMsg"></headDiv>

    <scroller
      ref="my_scroller"
      :on-refresh="refresh"
      :on-infinite="infinite"
      :noDataText="noDataText"
      style="top:50px;bottom:50px;padding:10px 0;"
    >
      <div
        class="lists"
        v-for="(list,index) in lists"
        :key="index"
      >
        <router-link :to="{path:'/details',query:{id:list.id}}">
          <img :src="list.imgURL">
          <div class="listContent">
            <div class="half">
              <h3>{{list.username}}</h3>
              <p>{{list.date}}</p>
            </div>
            <div class="half">
              <h3>购入金额</h3>
              <p style="color:#67c23a">{{list.amount}}</p>
            </div>
          </div>
        </router-link>
      </div>
    </scroller>

    <bottom></bottom>
  </div>
</template>

<script>
import HeadDiv from "../components/head";
import Bottom from "../components/bottom";
import api from "../API/index.js";
import Vue from "vue";
import VueScroller from "vue-scroller";
Vue.use(VueScroller);
export default {
  data() {
    return {
      titleMsg: "市场",
      lists: [],
      noDataText: "--我也是有底线的--",
      page: 0
    };
  },
  components: {
    HeadDiv,
    Bottom
  },
  mounted() {
    // this.getList();
  },
  methods: {
    // getList() {
    //   let that = this;
    //   api.minicart.template.choices("marketList").then(response => {
    //     if (response.res.buy) {
    //       that.lists = response.res.buy;
    //     }
    //   });
    // },
    //下拉刷新
    refresh(done) {
      setTimeout(() => {
        done();
      }, 1000);
    },
    //上拉加载更多
    infinite(done) {
      console.log(111);
      let that = this;
      let pages = (this.page += 1);
      let arr = [];
      setTimeout(() => {
        api.minicart.template
          .choices("marketList?page=" + pages)
          .then(response => {
            if (response.res.buy.length > 0) {
              that.lists = that.lists.concat(response.res.buy);
              done();
            } else {
              that.$refs.my_scroller.finishInfinite(true)
              return;
            }
          })
          .catch(error => {
            console.log(error);
          });
      }, 1200);
    }
  }
};
</script>

<style lang="less" scoped>
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
.listContent:after {
  clear: both;
  display: block;
  content: "";
  overflow: visible;
}
.half {
  width: 48%;
  float: left;
  text-align: left;
  display: block;
  h3 {
    line-height: 2rem;
  }
  p {
    line-height: 2rem;
  }
}
.half:last-child {
  text-align: right;
}
</style>
