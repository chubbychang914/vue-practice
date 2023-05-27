<template lang="pug">
#VuexView
  h1 {{ "Products Page" }}
  ProductListOne
  ProductListTwo
  ProductListThree
</template>

<script>
export default {
  components: {
    ProductListOne: () => import("@/components/ProductLists/ProductListOne"),
    ProductListTwo: () => import("@/components/ProductLists/ProductListTwo.vue"),
    ProductListThree: () => import("@/components/ProductLists/ProductListThree.vue"),
  },
};
</script>

<style lang="scss" scoped>
#VuexView{
    h1{
        text-align: center;
        font-size: 50px;
    }
}
</style>