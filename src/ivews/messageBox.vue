<template>
  <div>
    <el-button
      type="text"
      @click="open"
    >点击打开message Box</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    open() {
      this.$confirm("是否在离开页面前保存修改？", "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "保存",
        cancelButtonText: "放弃修改"
      })
        .then(() => {
          //  this.$message({
          //      type:'info',
          //      message:'保存修改'
          //  });
          //成功保存信息后的操作
        })
        .catch(action => {
          //  this.$message({
          //      type:'info',
          //      message:action==='cancel'
          //      ?'放弃保存并离开页面'
          //      :'停留在当前页面'
          //  })
          //放弃保存信息后的操作
          console.log(222);
        });
    }
  }
};
</script>

<style scoped>
</style>
