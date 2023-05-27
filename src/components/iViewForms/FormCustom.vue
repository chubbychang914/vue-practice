<template lang="pug">
#FormCustom
  Form.FormCustom(
    ref="formCustom",
    :model="formCustom",
    :rules="ruleCustom",
    :label-width="80"
  )
    FormItem(label="Password", prop="passwd")
      Input(type="password", v-model="formCustom.passwd")
    FormItem(label="Confirm Pwd", prop="passwdCheck")
      Input(type="password", v-model="formCustom.passwdCheck")
    FormItem(label="Age", prop="age")
      Input(type="text", v-model="formCustom.age", number)
    FormItem
      Button(type="primary", @click="handleSubmit('formCustom')") {{ "Submit" }}
      Button(style="margin-left: 8px", @click="handleReset('formCustom')") {{ "Reset" }}
</template>

<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter password again"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("Password doesn't match!"));
      } else {
        callback();
      }
    };
    const validateAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Age cannot be empty"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("Please enter a number"));
        } else {
          if (value < 10) {
            callback(new Error("You're too young"));
          }
          if (value > 150) {
            callback(new Error("No one's that old"));
          }
          callback();
        }
      }, 1000);
    };

    return {
      formCustom: {
        passwd: "",
        passwdCheck: "",
        age: "",
      },
      ruleCustom: {
        passwd: [{ validator: validatePass, trigger: "change" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "change" }],
        age: [{ validator: validateAge, trigger: "change" }],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success");
        } else {
          this.$Message.error("Failed");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>


<style lang="scss" scoped>
#FormCustom {
  .FormCustom {
    background-color: lightblue;
    padding: 50px;
    margin: 50px;
    width: 500px;
    border: 1px solid black;
    border-radius: 5px;
  }
}
</style>