<template lang="pug">
#ProductListTwo
  h2 {{ "Product List Two" }}
    ul
      li(v-for="product in saleProductsList", :key="product.id") {{ product.name }}
        span.price {{ "💲" + product.price }}
    button(@click="reducePriceClick") {{ "reduce price from frontend" }}
</template>
    
<script>
export default {
  computed: {
    products() {
      return this.$store.state.productList.products;
    },
    saleProductsList() {
      let saleProductsList = this.$store.state.productList.products.map((product) => {
        return {
          name: "⚡️ " + product.name + " ⚡️",
          price: product.price * 0.75,
        };
      });
      return saleProductsList;
    },
  },
  methods: {
    reducePriceClick() {
      this.$store.state.productList.products.forEach((product) => {
        product.price -= 2;
      });
    },
  },
};
</script>
    
<style scoped lang="scss">
#ProductListTwo {
  background: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  ul {
    padding: 0;
    list-style-type: none;
    li {
      margin-right: 10px;
      margin-top: 10px;
      padding: 20px;
      background: rgba(255, 255, 255, 0.7);
    }
  }
}

.price {
  font-weight: bold;
  color: #860ce8;
  display: block;
}
</style>