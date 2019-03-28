<template>
  <div>
    <el-container id="login_bg">
      <el-col
        :span="20"
        :offset="2"
      >
        <img
          :src="logo"
          id="logo"
        >
        <el-form
          :rules="rules"
          :model="ruleForm"
          ref="ruleForm"
          class="demo-ruleForm"
          style="margin-top:8rem"
        >
          <el-form-item prop="username">
            <el-input
              v-model="ruleForm.username" 
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
              placeholder="请输入密码"
              type="password"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button
          @click="login('ruleForm')"
          type="success"
        >登录</el-button>
      </el-col>
    </el-container>
  </div>
</template>

<script>
import api from "../API/index.js";
export default {
  data() {
    return {
      logo: require("../assets/logo.png"),
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigeger: "blur" },
          {
            type: "string",
            required: true,
            min: 3,
            max: 6,
            message: "符请输入3到6个字",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          let that = this;
          let data = this.ruleForm;
          api.minicart.template
            .login("login", data)
            .then(res => {
              console.log(res);
              if (!window.localStorage) {
                return false;
              } else {
                var storage = window.localStorage;
                storage.setItem("token", res.res.token); //存储token
                let token = window.localStorage.getItem("token"); //判断是否存在token并跳转路由
                if (token) {
                  that.$router.push("/home");
                } else {
                  that.$router.push("/");
                }
              }
            })
            .catch(err => {
              console.log(err);
              // alert(err.data)
            });
        } else {
          alert("用户名或密码错误!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.el-form-item__label {
  color: white !important;
  text-align: justify;
  text-align-last: justify;
}
.el-button {
  width: 100%;
  margin-top: 2rem;
}
</style>
