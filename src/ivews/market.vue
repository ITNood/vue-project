<template>
  <div>
    <headDiv :title="titleMsg"></headDiv>
    <el-main class="martop">
      <el-col
        :span="24"
        class="lists"
        v-for="(list,index) in lists"
        :key="index"
      >
        <img :src="list.imgURL">
        <el-input
          style="display:none"
          :val="list.id"
        />
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
      </el-col>
    </el-main>
    <bottom></bottom>
  </div>
</template>

<script>
import HeadDiv from "../components/head";
import Bottom from "../components/bottom";
export default {
  data() {
    return {
      titleMsg: "市场",
      lists: [
        {
          imgURL: "",
          id: "",
          username: "",
          date: "",
          amount: ""
        }
      ]
    };
  },
  methods: {
    getList() {
      let that = this;
      this.$axios
        .post("marketList")
        .then(res => {
          if (res.data.res.buy) {
            that.lists = res.data.res.buy;
          }
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.getList();
  },
  components: {
    HeadDiv,
    Bottom
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
  margin-bottom: 1.5rem;
}
.lists:last-child {
  margin-bottom: 0;
}
.lists > img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  left: 15px;
}
.listContent {
  margin-left: 5rem;
}
.el-col-12 {
  line-height: 2rem;
  text-align: left;
}
.el-col-12:last-child {
  text-align: right;
}
</style>
