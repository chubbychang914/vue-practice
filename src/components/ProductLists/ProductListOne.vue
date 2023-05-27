<template lang="pug">
#ProductListOne
  h2 {{ "Product List One" }}
    ul
      li(v-for="product in saleProducts", :key="product.id") {{ product.name }}
        span.price {{ " 💲" + product.price }}
  //- we're passing data into the `reducePrice` method
  button(@click="reducePrice(4)") {{ "Reduce Price with mutations" }}
</template>
    
<script>
export default {
  computed: {
    products() {
      return this.$store.state.productList.products;
    },
    saleProducts() {
      return this.$store.getters["productList/saleProducts"];
    },
  },
  methods: {
    reducePrice(amount) {
      // we normally don't want to call the mutation directly
      // this.$store.commit("reducePrice")
      // we're using the action here
      this.$store.dispatch("productList/reducePriceAction", amount); // amount is the data we're sending through as a parameter
    },
  },
};
</script>
    
<style scoped lang="scss">
#ProductListOne {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;

  ul {
    padding: 0;
  }

  li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
  }
}

.price {
  font-weight: bold;
  color: #e8800c;
}</style>