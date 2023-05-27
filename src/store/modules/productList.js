const state = {
  products: [
    { name: "Banana Skin", price: 20, id: 1 },
    { name: "Shiny Star", price: 40, id: 2 },
    { name: "Green Shell", price: 60, id: 3 },
    { name: "Red Shell", price: 80, id: 4 },
  ]
}
const getters = {
  saleProducts: (state) => {
    let saleProducts = state.products.map((product) => {
      return {
        name: "💥 " + product.name + " 💥",
        price: product.price / 2
      }
    });
    return saleProducts;
  }
}
const mutations = {
  reducePrice: (state, payload) => {
    state.products.forEach(product => {
      product.price -= payload
    })
  },
}
// we're using setTimeout to simulate an async action
const actions = {
  reducePriceAction: (context, payload) => {
    setTimeout(() => {
      context.commit("reducePrice", payload)
    }, 500)
  },
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
