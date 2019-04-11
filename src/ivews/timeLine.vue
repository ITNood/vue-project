<template>
  <div>
    <div class="block">
        <div
          v-for="item in items"
          :key="item.index"
          placement="top"
        >
          <p>{{item.time}}</p>
          <el-card>
            <h4>{{item.title}}</h4>
            <p>{{item.details}}</p>
          </el-card>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ time: "2018/4/12", title: "标题1", details: "111111" },{ time: "2018/4/12", title: "标题1", details: "111111" }]
    };
  }
};
</script>

<style scoped>
</style>
