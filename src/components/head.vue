<template>
  <div>
    <el-header
      id="top"
      height="50px"
    >
      <!-- <el-col :span="6">
          <i class="el-icon-arrow-left return"></i>
        </el-col> -->
      <el-col
        :span="12"
        :offset="6"
        id="title"
      >{{title}}</el-col>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "headDiv",
  props:['title'],
  data() {
    return {};
  }
};
</script>

<style scoped>
#top {
    background: #42b983;
    position: fixed;
    top:0;
    left:0;
    width:100%;
    z-index:99
}
#title{
    line-height: 50px;
    color:white;
    font-size:18px;
}
</style>
