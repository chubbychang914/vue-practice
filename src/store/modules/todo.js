import storageFn from "@/plugin/storage"

const state = {
  todoList: [
    { id: 0, title: "Finish todolist", done: false },
    { id: 1, title: "Eat lunch", done: true },
    { id: 2, title: "Play games", done: false }
  ]
}
const getters = {

}
const mutations = {
  SET_TODO(state, todoList) {
    state.todoList = todoList
  }
}
const actions = {
  CREATE_TODO(context) {
    // 1. 抓資料
    const todoList = storageFn.GET('todo-vue')
    // 2. commit mutation
    context.commit("SET_TODO")
    // 3. return
    return {

    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}