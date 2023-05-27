<template lang="pug">
//- 請填寫功能描述👈
#GamesView
  h1.title {{ "刮刮樂" }}
  .scratch
    Scratch
  h1.title {{ "轉盤 Version 1" }}
  .wheel
    Wheel1(:spinTime="2")
</template>

<script>
export default {
  name: "GamesView",
  components: {
    Scratch: () => import("@/components/Games/Scratch"),
    Wheel1: () => import("@/components/Games/Wheel/Wheel1.vue")
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$vh: 80vh;

// 排版
#GamesView {
  margin-bottom: $vh;

  .title {
    padding: 20px;
  }
  .scratch {
    width: 100%;
    height: $vh;
    background-color: lightblue;
    @extend .center-column
  }

  .wheel {
    padding-top: 40px;
    width: 100%;
    height: $vh;
    background-color: lightblue;
    @extend .center-column
  }
}

.center-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

// 元件
#GamesView {}
</style>
