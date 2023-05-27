<template lang="pug">
#FormTodo
  Form.FormTodo(ref="formTodo", :model="formTodo", :label-width="80")
    FormItem(
      v-for="(item, index) in formTodo.items",
      :key="index",
      :label="'Item ' + item.index",
      :prop="'items.' + index + '.value'",
      v-if="item.status",
      :rules="{ required: true, message: `Item ${item.index} cannot be empty`, trigger: 'blur' }"
    )
      Row
        Col(span="18")
          Input(type="text", v-model="item.value", placeholder="enter ...")
        Col(span="4", offset="1")
          Button(@click="HandleRemove(index)") {{ "Delete" }}
    FormItem
      Row
        Col(span="12")
          Button(type="dashed", long, icon="md-add", @click="HandleAdd") {{ "Add Item" }}
    FormItem
      Button(type="primary", @click="HandleSubmit('formTodo')") {{ "Submit" }}
      Button(@click="HandleReset('formTodo')") {{ "Reset" }}
  pre {{ formTodo.items }}
</template>

<script>
export default {
  data() {
    return {
      index: 1,
      formTodo: {
        items: [{ value: "", index: 1, status: 1 }],
      },
    };
  },
  methods: {
    HandleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("成功新增");
        } else {
          this.$Message.error("新增失敗");
        }
      });
    },
    HandleReset(name) {
      this.$refs[name].resetFields();
    },
    HandleAdd() {
      this.index++;
      this.formTodo.items.push({
        value: "",
        index: this.index,
        status: 1,
      });
    },
    HandleRemove(index) {
      this.formTodo.items[index].status = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
#FormTodo {
  .FormTodo {
    background-color: lightblue;
    padding: 50px;
    margin: 50px;
    width: 500px;
    border: 1px solid black;
    border-radius: 5px;
  }
}
</style>