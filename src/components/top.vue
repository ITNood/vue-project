<template>
  <div>
    <el-header
      id="top"
      height="50px"
    >
      <el-col :span="6">
        <i
          class="el-icon-arrow-left return"
          @click="go_back"
        ></i>
      </el-col>
      <el-col
        :span="12"
        id="title"
      >{{title}}</el-col>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {};
  },
  methods: {
    go_back(){
      this.$router.go(-1)
    }
  },
  props: ["title"]
};
</script>

<style scoped>
#top {
  background: #42b983;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}
.return {
  color: white;
  font-size: 18px;
  line-height: 50px;
  display: block;
  text-align: left;
}
#title {
  line-height: 50px;
  color: white;
  font-size: 18px;
}
</style>
