import Vue from 'vue';
import Vuex from 'vuex';

import auth from "./modules/auth"
import productList from "./modules/productList"
import todo from "./modules/todo"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    auth,
    productList,
    todo
  }
})


