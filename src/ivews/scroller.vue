<template>
 <div>
     <headDiv :title="titleMsg"></headDiv>
     <scroller :on-refresh="refresh" :on-infinite="infinite" :noDataText="noDataText" style="top:50px;bottom:50px;">
         <div v-for="item in items" :key="item" class="test" >
             {{item}}
         </div>
     </scroller>
 </div>
</template>

<script>
import HeadDiv from "../components/head";
export default {
 data() {
  return {
      titleMsg:'上拉加载更多',
      items:[],
      noDataText:'--没有更多数据了--'
  }
 },
 components:{
     HeadDiv
 },
 mounted() {
     for(let i=0;i<15;i++){
         this.items.push((i+1)+'加载更多示例！！')
     }
     this.top=1,
     this.bottom=15
 },
 methods: {
     //下拉刷新
     refresh(done){
         setTimeout(() => {
             done()
         }, 1000);
     },
     //上拉加载更多
     infinite(done){
         setTimeout(() => {
             let start=this.bottom+1
             for(let i=start;i<start+10;i++){
                 this.items.push(i+'加载更多示例！！')
             }
             this.bottom=this.bottom+10
             done()
         }, 1000);
     }
 },
}
</script>

<style scoped>
.test{
    background: #f1f1f1;
    padding:15px;
    margin-bottom: 2px;
}
</style>
