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
            active-class ="active"
          >{{item.msg}}</router-link>
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
        { msg: "首页", URL: "/home" },
        { msg: "市场", URL: "/market" },
        { msg: "消息", URL: "/news" },
        { msg: "我的", URL: "/me" }
      ],
      istrue: 0
    };
  },
  methods: {
   
  }
};
</script>

<style scoped>
#footer {
  background: white;
  border-top: 1px solid #cfe4db;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0;
  z-index: 99;
}
#footer a {
  color: #2c3e50;
  display: block;
  line-height: 49px;
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
