<template lang="pug">
#AlignForms
  Form.AlignForms(:model="formLeft", label-position="left", :label-width="100")
    h3 {{ "label position left" }}
    FormItem(label="Title")
      Input(v-model="formLeft.input1")
    FormItem(label="Title name")
      Input(v-model="formLeft.input2")
    FormItem(label="Aligned Title")
      Input(v-model="formLeft.input3")
  Form.AlignForms(
    :model="formLeft",
    label-position="right",
    :label-width="100"
  )
    h3 {{ "label position right" }}
    FormItem(label="Title2")
      Input(v-model="formRight.input1")
    FormItem(label="Title name 2")
      Input(v-model="formRight.input2")
    FormItem(label="Aligned Title 2")
      Input(v-model="formRight.input3")
  Form.AlignForms(:model="formTop", label-position="top")
    h3 {{ "label position top" }}
    FormItem(label="Title")
      input(v-model="formTop.input1")
    FormItem(label="Title name")
      input(v-model="formTop.input2")
    FormItem(label="Aligned title")
      input(v-model="formTop.input3")
</template>

<script>
export default {
  data() {
    return {
      formLeft: {
        input1: "",
        input2: "",
        input3: "",
      },
      formRight: {
        input1: "",
        input2: "",
        input3: "",
      },
      formTop: {
        input1: "",
        input2: "",
        input3: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#AlignForms {
  .AlignForms {
    background-color: lightcyan;
    padding: 50px;
    margin: 50px;
    width: 500px;
    border: 1px solid black;
    border-radius: 5px;
  }
}
</style>