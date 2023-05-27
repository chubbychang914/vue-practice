<template lang="pug">
#iViewView
  .form-group
    h1 {{"Form Todo"}}
    FormTodo
    h1 {{ "Form Custom" }}
    FormCustom
    h1 {{ "Form Validate" }}
    FormValidate
    h1 {{ "Align Forms" }}
    AlignForms
    h1 {{ "Inline Form" }}
    iViewForm
    h1 {{ "Form Item" }}
    FormItems
  .date-picker-group
    h1 {{ "Date Pickers" }}
    DatePicker1
    DatePicker2
    DatePicker3
    DatePicker4
    DatePicker5
</template>

<script>
export default {
  components: {
    iViewForm: () => import("@/components/iViewForms/InlineForm.vue"),
    FormItems: () => import("@/components/iViewForms/FormItems.vue"),
    AlignForms: () => import("@/components/iViewForms/AlignForms.vue"),
    FormValidate: () => import("@/components/iViewForms/FormValidate.vue"),
    FormCustom: () => import("@/components/iViewForms/FormCustom.vue"),
    FormTodo: () => import("@/components/iViewForms/FormTodo.vue"),
    DatePicker1: () => import("@/components/DatePickers/DatePicker1.vue"),
    DatePicker2: () => import("@/components/DatePickers/DatePicker2.vue"),
    DatePicker3: () => import("@/components/DatePickers/DatePicker3.vue"),
    DatePicker4: () => import("@/components/DatePickers/DatePicker4.vue"),
    DatePicker5: () => import("@/components/DatePickers/DatePicker5.vue"),
  },
};
</script>

<style>
#iViewView {
  display: flex;
  justify-content: space-around;
}
</style>
