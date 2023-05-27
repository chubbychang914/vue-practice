<template lang="pug">
#Transitions
  div(style="height: 350px")
    transition(name="custom-fade")
      .block(v-show="isShow") {{ "Custom Fade" }}
    div(style="overflow: hidden; width: 150px")
      transition(name="custom-slide")
        .block(v-show="isShow") {{ "Custom Slide" }}
  Button(@click="isShow = !isShow") {{ "Toggle" }}
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style lang="scss" scoped>
#Transitions {
  padding: 20px;
  .block {
    width: 150px;
    height: 150px;
    background-color: lightgreen;
    margin-top: 10px;
  }
}
// ========== Enter ==========
// 進場「之前」的樣式
.custom-fade-enter {
  opacity: 0;
}
// 進場「過程」的樣式
.custom-fade-enter-active {
  transition: opacity 1s;
}
// 進場「結束」的樣式
.custom-fade-enter-to {
  opacity: 1;
}
// ========== Leave ==========
// 退場「之前」的樣式
.custom-fade-leave {
  opacity: 1;
}
// 退場「過程」的樣式
.custom-fade-leave-active {
  transition: opacity 1s;
}
// 退場「結束」的樣式
.custom-fade-leave-to {
  opacity: 0;
}

// Custom Slide animations ==========
.custom-slide-enter {
  transform: translateX(-100%);
}
.custom-slide-enter-active,
.custom-slide-leave-active {
  transition:all ease-in-out 1s;
}
.custom-slide-leave-to {
  transform: translateX(100%);
}
</style>