const auth = {
  // namespace 是讓 actions mutations 可以分開，不然原本是全部在 store 的 root directory
  namespaced: true,
  state: {
    isLoggedIn: true
  },
  getters: {},
  mutations: {
    // 登入
    ChangeLoginStatus(state) {
      state.isLoggedIn = true
    },
    // 登出
    ChangeLogoutStatus(state) {
      state.isLoggedIn = false
    },
    // 快速切換
    ToggleLoginStatus(state) {
      state.isLoggedIn = !state.isLoggedIn
    }
  },
  actions: {
    UserLogin(context) {
      context.commit("ChangeLoginStatus")
    },
    UserLogout(context) {
      context.commit("ChangeLogoutStatus")
    },
    ToggleLoginStatus(context) {
      context.commit("ToggleLoginStatus")
    }
  }
}

// 可以像這樣匯出一大包，或像 productList 那樣拆成小包的再匯出 obj
export default auth





