<template lang="pug">
//- 請填寫功能描述👈
#Svg3
  svg.svg-box(viewBox="-100 -100 200 200")
    defs
      path#branch(d="M 0 0 L 0 -90 M 0 -20 L 20 -34 M 0 -20 L -20 -34 M 0 -40 L 20 -54 M 0 -40 L -20 -54 M 0 -60 L 20 -74 M 0 -60 L -20 -74")
    use(href="#branch")
    use(href="#branch", transform="rotate(60)")
    use(href="#branch", transform="rotate(120)")
    use(href="#branch", transform="rotate(180)")
    use(href="#branch", transform="rotate(240)")
    use(href="#branch", transform="rotate(300)")
</template>

<script>
export default {
  name: "Svg3",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Svg3 {}

// 元件
#Svg3 {
  .svg-box {
    width: 200px;
    height: 200px;
    background-color: #f0f0f0;
  }

  #branch {
    stroke: #E5C39C;
    stroke-width: 5;
  }
}
</style>
