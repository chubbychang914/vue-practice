<template lang="pug">
//- 請填寫功能描述👈
#Example
  Planet
</template>

<script>
export default {
  name: "Example",
  components: {
    Planet: () => import("@/components/Clock/Planet.vue")
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Example {}

// 元件
#Example {}
</style>
