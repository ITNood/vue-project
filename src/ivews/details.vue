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
      titleMsg:'消息详情'
  }
 },
 components:{
     Top
 },
 methods:{
     getNews(){
         let id=this.$route.query.id
         let that=this
         that.$axios({
             method:'post',
             url:'http://www.newos.com/messageDetail'+id,
             headers:{
                 'Token':window.localStorage.getItem('token')
             }
         }).then(res=>{

         }).catch(err=>{

         })
     }
 },
 mounted() {
     this.getNews
 },
}
</script>

<style scoped>

</style>
