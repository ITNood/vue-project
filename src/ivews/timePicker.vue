<template>
  <div>
    <el-time-select
      v-model="value"
      :picker-options="{
         start:'00:00',
         end:'24:00',
         step:'01:00'
     }"
      placeholder="选择时间"
    >
    </el-time-select>

    <div class="block">
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
      >
      </el-date-picker>
    </div>

    <div class="block">
      <el-date-picker
        v-model="value2"
        type="datetimerange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['12:00:00']"
      >
      </el-date-picker>
    </div>

    <div class="block">
      <el-rate
        v-model="value3"
        :icon-classes="['icon-rate-face-1','icon-rate-face-2','icon-rate-face-3']"
        void-icon-class="icon-rate-face-off"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
      >
      </el-rate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      value1: "",
      value2: "",
      value3: null
    };
  }
};
</script>

<style scoped>
.block {
  margin-top: 20px;
}
</style>
