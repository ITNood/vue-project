<template>
  <div>
    <el-footer
      id="footer"
      height="50px"
    >
      <el-row>
        <el-col
          :span="6"
          v-for="(item,index) in items"
          :key="index"
        >
          <router-link
            :to="item.URL"
            active-class="active"
          >
          <i :class="item.font" class="icon iconfont"></i>
          {{item.msg}}
          </router-link>
        </el-col>
      </el-row>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  data() {
    return {
      items: [
        { msg: "首页", URL: "/home",font:'icon-home' },
        { msg: "市场", URL: "/market",font:'icon-lefenshichang' },
        { msg: "消息", URL: "/news",font:'icon-news' },
        { msg: "我的", URL: "/me",font:'icon-aui-icon-my' }
      ],
    };
  },
};
</script>

<style scoped>
@import '../assets/iconfont/iconfont.css';
#footer {
  background: white;
  border-top: 1px solid #cfe4db;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
   padding:2px;
  z-index: 99;
}
#footer a {
  color: #2c3e50;
  display: block;
  text-decoration: none;
  height:45px;
 
}
#footer a>i{
  height:25px;
  display:block;
  font-size:20px;
  line-height: 25px;
}
#footer .active a,
.active {
  background: #f0f9eb;
  color: #67c23a !important;
}
.el-col-6 {
  border-radius: 6px;
  overflow: hidden;
}
</style>
