<template lang="pug">
//- 請填寫功能描述👈
#Svg2
  svg.svg-box(viewBox="-100 -100 200 200")
    polygon.bot(points="0,0 80,120 -80,120" fill="#234236")
    polygon.mid(points="0,-40 60,60 -60,60" fill="#0C5C4C")
    polygon.top(points="0,-80 40,0 -40,0" fill="#38755B")
    rect(x="-20" y="120" width="40" height="30" fill="brown")
</template>

<script>
export default {
  name: "Svg2",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Svg2 {}

// 元件
#Svg2 {
  .svg-box {
    width: 200px;
    height: 200px;
    background-color: #f0f0f0;
  }
}
</style>
