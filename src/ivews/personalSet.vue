<template>
 <div>
     <top :title="titleMsg"></top>
 </div>
</template>

<script>
import Top from '../components/top'
export default {
 data() {
  return {
      titleMsg:'个性设置'
  }
 },
 components:{
     Top
 }
}
</script>

<style scoped>

</style>
