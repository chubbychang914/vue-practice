<template lang="pug">
#Login
  Form.LoginForm(
    ref="loginForm",
    :model="loginForm",
    :rules="loginRules",
    :label-width="80",
    label-position="left"
  )
    h1 {{ "Login" }}
    .input-area
      FormItem(label="Account", prop="account")
        Input(type="email", v-model="loginForm.account")
          Icon(type="ios-contact", slot="prepend")
      FormItem(label="Password", prop="password")
        Input(type="password", v-model="loginForm.password")
          Icon(type="ios-lock", slot="prepend")
      FormItem
        Button(type="primary", @click="HandleSubmit('loginForm')") {{ "Login" }}
        Button(type="error", @click="HandleClear('loginForm')") {{ "Clear" }}
        Button(@click="LogoutSuccessful") {{ "Logout" }}
    .line-login
      LineLogin
</template>

<script>
import storageFn from "@/plugin/storage.js";
export default {
  components: {
    LineLogin: () => import("@/components/Auth/LineLogin.vue"),
  },
  data() {
    const validateAccount = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("請輸入帳號"));
      }
      return callback();
    };
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("請輸入密碼"));
      }
      if (value.length < 6) {
        return callback(new Error("密碼至少要6個字元"));
      }
      setTimeout(() => {
        return callback();
      }, 1000);
    };
    return {
      loginForm: {
        account: "",
        password: "",
      },
      loginRules: {
        account: [{ validator: validateAccount, trigger: "change" }],
        password: [{ validator: validatePassword, trigger: "change" }],
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },

  methods: {
    HandleSubmit(refName) {
      this.$refs[refName].validate((valid) => {
        if (valid) {
          this.HandleAuthFlow();
        }
      });
    },
    HandleAuthFlow() {
      const { account, password } = this.loginForm;
      let userData = storageFn.Get("userData");
      console.log(userData);
      const accountExists = userData.users.find((user) => {
        return user.account === account && user.password === password;
      });
      if (accountExists) {
        this.LoginSuccessful();
        return this.$Message.success("Login Successful");
      }
      return this.$Message.error("帳號或密碼不正確");
    },
    HandleClear(refName) {
      this.$refs[refName].resetFields();
    },
    // global context from $store
    LoginSuccessful() {
      this.$store.dispatch("auth/UserLogin");
      storageFn.Set("isLoggedIn", true);
    },
    LogoutSuccessful() {
      this.$store.dispatch("auth/UserLogout");
      storageFn.Remove("isLoggedIn");
      this.$Message.success("成功登出");
    }
  },
};
</script>

<style lang="scss" scoped>
#Login {
  .LoginForm {
    background-color: #fff;
    width: 600px;
    border: 5px double black;
    border-radius: 10px;
    padding: 50px;

    h1 {
      margin-bottom: 20px;
    }

    .input {
      font-size: 100px;
    }
  }
}
</style>