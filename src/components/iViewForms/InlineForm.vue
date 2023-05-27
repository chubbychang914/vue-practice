<template lang="pug">
#InlineForm
  Form.InlineForm(
    ref="formInline",
    :model="formInline",
    :rules="ruleInLine",
    inline
  )
    FormItem(prop="user")
      Input(type="text", v-model="formInline.user", placeholder="Username")
        Icon(type="ios-person-outline", slot="append")
    FormItem(prop="password")
      Input(
        type="password",
        v-model="formInline.password",
        placeholder="Password"
      )
        Icon(type="ios-lock-outline", slot="prepend")
    FormItem
      Button(type="primary", @click="handleSubmit('formInline')") {{ "Sign In" }}
</template>


<script>
export default {
  name: "InlineForm",
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
      ruleInLine: {
        user: [
          { required: true, message: "請輸入使用者名稱", trigger: "blur" },
        ],
        password: [
          {
            required: true,
            message: "請輸入密碼",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      // validate、$Message.success/error 都是 iview 內建的
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("成功登入");
        } else {
          this.$Message.error("失敗");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#InlineForm {
  .InlineForm {
    background-color: #fff;
    padding: 50px;
    margin: 50px;
    width: 500px;
    border: 1px solid black;
    border-radius: 5px;
  }
}
</style>