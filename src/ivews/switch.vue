<template>
 <div>
     <el-switch v-model="value3" active-text="按月付费" inactive-text="按年付费"></el-switch>
     <el-switch v-model="value4" active-text="按月付费" inactive-text="按年付费" style="display:block" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
 </div>
</template>

<script>
export default {
 data() {
  return {
      value3:true,
      value4:true
  }
 }
}
</script>

<style scoped>

</style>
