<template>
  <div>
    <top :title="titleMsg"></top>
    <div id="newContent">
        <h3>22</h3>
        <p>22</p>
    </div>
  </div>
</template>

<script>
import Top from "../components/top";
import api from "../API/index.js";
export default {
  data() {
    return {
      titleMsg: "消息详情"
    };
  },
  components: {
    Top
  },
  methods: {
    getNews() {
      let id = this.$route.query.id;
      let that = this;
      api.minicart.template
        .choices("messageDetail" + id)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        });
    }
  },
  mounted() {
    this.getNews;
  }
};
</script>

<style lang="less" scoped>

#newContent{
     margin-top:50px;
    h3{
       font-size:36px;
    }
    p{
        font-size:16px;
    }
}
</style>
