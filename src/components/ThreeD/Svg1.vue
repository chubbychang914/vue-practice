<template lang="pug">
//- 請填寫功能描述👈
#Svg1
  svg.svg-box(viewBox="-100 -100 200 200")
    circle.big-circle(cx="0" cy="20" r="70" fill="#D1495B")
    circle.small-circle(cx="0" cy="-75" r="12" fill="none" stroke="#F79257" stroke-width="3")
    rect.rectangle(x="-17.5" y="-65" width="35" height="20" fill="#F79257")
</template>

<script>
export default {
  name: "Svg1",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Svg1 {}

// 元件
#Svg1 {
  .svg-box {
    width: 200px;
    height: 200px;
    background-color: #f0f0f0;
  }
}
</style>
