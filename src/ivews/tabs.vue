<template>
 <div>
     <el-tabs v-model="activeName" type="border-card" tab-position="top" @tab-click="handleClick">
         <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
         <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
         <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
         <el-tab-pane label="定时任务补偿" name="foutth">定时任务补偿</el-tab-pane>
     </el-tabs>
 </div>
</template>

<script>
export default {
 data() {
  return {
      activeName:'first'
  }
 },
 methods: {
     handleClick(tab,event){
         console.log(tab,event)
     }
 },
}
</script>

<style scoped>

</style>
