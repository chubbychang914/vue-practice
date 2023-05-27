<template lang="pug">
#FormValidate
  Form.FormValidate(
    ref="formValidate",
    :model="formValidate",
    :rules="ruleValidate",
    :label-width="80"
  )
    FormItem(label="Name", prop="name")
      Input(v-model="formValidate.name", placeholder="Enter name here")
    FormItem(label="Email", prop="email")
      Input(v-model="formValidate.email", placeholder="Enter email here")
    FormItem(label="City", prop="city")
      Select(v-model="formValidate.city", placeholder="Select a city")
        Option(value="tp") {{ "台北" }}
        Option(value="tc") {{ "台中" }}
        Option(value="tn") {{ "台南" }}
    FormItem(label="Date")
      Row
        Col(span="11")
          FormItem(prop="date")
            DatePicker(
              type="date",
              v-model="formValidate.date",
              placeholder="Select a date"
            )
        Col(span="2", style="text-align: center") {{ "-" }}
        Col(span="11")
          FormItem(prop="time")
            TimePicker(
              type="time",
              v-model="formValidate.time",
              placeholder="Select a time"
            )
    FormItem(label="Gender", prop="gender")
      RadioGroup(v-model="formValidate.radio")
        Radio(label="male") {{ "男" }}
        Radio(label="female") {{ "女" }}
    FormItem(label="Hobby", prop="hobby")
      CheckboxGroup(v-model="formValidate.hobby")
        Checkbox(label="eat") {{ "吃" }}
        Checkbox(label="drink") {{ "喝" }}
        Checkbox(label="sleep") {{ "睡" }}
    FormItem(label="Description", prop="desc")
      Input(
        type="textarea",
        v-model="formValidate.desc",
        :autosize="{ minRows: 5, maxRows: 10 }",
        placeholder="this is the description"
      )
    FormItem
      Button(type="primary", @click="handleSubmit('formValidate')") {{ "Submit" }}
      Button(
        type="warning",
        @click="handleReset('formValidate')",
        style="margin-left: 8px"
      ) {{ "Reset" }}
</template>

<script>
export default {
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
        city: "",
        gender: "",
        hobby: [],
        date: "",
        time: "",
        desc: "",
      },
      ruleValidate: {
        name: [
          { required: true, message: "Name cannot be empty", trigger: "blur" },
        ],
        email: [
          {
            required: true,
            message: "Email cannot be empty",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Incorrect email format",
            trigger: "blur",
          },
        ],
        city: [{ required: true, message: "必選", trigger: "change" }],
        date: [
          {
            required: true,
            type: "date",
            message: "Choose date",
            trigger: "change",
          },
        ],
        time: [
          {
            required: true,
            type: "string",
            message: "Please select time",
            trigger: "change",
          },
        ],
        gender: [{ required: true, message: "選擇性別", trigger: "change" }],
        hobby: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "Choose at least one hobby",
            trigger: "change",
          }
        ],
        desc: [
          { required: true, message: "請填入敘述", trigger: "blur" },
          {
            type: "string",
            min: 20,
            message: "至少要 20 字",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("成功送出");
        } else {
          this.$Message.error("失敗的慢");
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
#FormValidate {
  .FormValidate {
    background-color: lightblue;
    padding: 50px;
    margin: 50px;
    width: 500px;
    border: 1px solid black;
    border-radius: 5px;
  }
}
</style>