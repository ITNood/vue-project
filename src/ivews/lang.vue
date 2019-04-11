<template>
  <div>
    <span class="language">{{$t('message.text')}}</span>
    
    <el-select
      v-model="selectValue"
      @change="langChange"
      placeholder="请选择"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-input
      v-model="message"
      placeholder="请输入"
      type="number"
      v-on:input="change"
      class="number"
    ></el-input>

    <p class="total">总价:{{total}}</p>

    <el-select
      v-model="id"
      placeholder="请选择"
    >
      <el-option
        v-for="content in contents"
        :value="content.id"
        :label="content.name"
        :key="content.value"
      >{{content.name}}</el-option>
    </el-select>

    <el-checkbox-group
      v-model="checkboxGroup"
      style="margin-top:20px"
    >
      <el-checkbox-button
        v-for="city in cites"
        :label="city"
        :key="city"
      >{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>
 
<script>
const cityoptions = ["上海", "北京", "深圳", "广州"];
export default {
  data() {
    return {
      selectValue: "",
      options: [
        {
          value: "cn",
          label: "中文"
        },
        {
          value: "en",
          label: "English"
        }
      ],
      message: "",
      total: 0,
      id: "",
      contents: [{ id: 1, name: "选择1" }, { id: 2, name: "选择2" }],
      checkboxGroup: ["上海"],
      cites: cityoptions
    };
  },
  created() {
    let that = this;
    console.log(localStorage.lang);
    that.selectValue =
      localStorage.lang == undefined ? "cn" : localStorage.lang;
  },
  methods: {
    //语言切换
    langChange(e) {
      // console.log(e)
      localStorage.setItem("lang", e);
      this.$i18n.locale = e;
    },
    change() {
      console.log(this.message);
      this.total = (
        Math.floor(Number(this.message) * 2.5 * 100) / 100
      ).toFixed(2);
    }
  },
  watch: {
    id(id, oldId) {
      console.log(id);
    }
  }
};
</script>
<style scoped>
.language {
  display: block;
  line-height: 30px;
  font-size: 16px;
}
.number {
  width: 217px;
  height: 40px;
  border-radius: 4px;
  margin-top: 20px;
}
.total {
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
</style>
