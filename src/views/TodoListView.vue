<template lang="pug">
#ToDoListView
  .todoList
    h1 {{ "Todo List" }}
    TodoList(:todoList = "todoList")
</template>

<script>
export default {
  name: "ToDoListView",
  components: {
    TodoList: () => import("@/components/TodoList/TodoList.vue")
  },
  data() {
    return {
      todoList: [
        { id: "0", title: "Learn Vue", done: false },
        { id: "1", title: "Eat lunch", done: true },
        { id: "2", title: "Play Wild Rift", done: false }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
// 排版
#ToDoListView {
  @extend .center;
}

// 元件
#ToDoListView {}

.center {
  display: flex;
  justify-content: center;
  align-items: center
}
</style>