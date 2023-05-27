<template lang="pug">
#FlipCard
  .flip-card
    .top {{ startNum }}
    .bottom {{ startNum }}
    .animateTop(:class="{ 'top-flip': isCounting }") {{ startNum }}
    .animateBot(:class="{ 'bottom-flip': isCounting }") {{ startNum }}
</template>
<script>
export default {
  props: {
    startNum: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isCounting: false,
    };
  },
  watch: {
    startNum(newVal, oldVal) {
      if (newVal === 1 && oldVal === 0) {
        this.ToggleCount();
      }
      setTimeout(() => {
        this.ToggleCount();
      }, 950);
    },
  },
  methods: {
    ToggleCount() {
      this.isCounting = true;
      setTimeout(() => {
        this.isCounting = false;
      }, 500); // 幾秒後移除 class
    },
  },
};
</script>


<style lang="scss" scoped>
* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#FlipCard {
  // 佈局 CSS
  .flip-card {
    display: inline-flex;
    flex-direction: column;
    border-radius: 0.1em;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    position: relative;
    // decoration only
    font-size: 3rem;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    overflow: hidden;
    gap: 1.5px;
    background-color: rgba(0, 0, 0, 0.1);
    // divide into two halves ======================================================================
    .top {
      background-color: #f7f7f7;
      @extend .top-border;
    }
    .bottom {
      background-color: white;
      display: flex;
      align-items: flex-end;
      @extend .bottom-border;
    }
    .top,
    .bottom {
      height: 0.75em;
      padding: 0.25em;
      line-height: 1;
      overflow: hidden;
    }
  }
  // 動畫個別的 flap，一個上到中，一個中到下 ============================================================
  .bottom-flip,
  .top-flip,
  .animateTop,
  .animateBot {
    position: absolute;
    height: 0.75em;
    padding: 0.25em;
    line-height: 1;
    overflow: hidden;
    width: 100%;
  }
  // top animation ********************
  .top-flip {
    background-color: #f7f7f7;
    @extend .top-border;
    animation: flip-top 250ms ease-in;
    transform-origin: bottom;
  }
  @keyframes flip-top {
    100% {
      transform: rotateX(90deg);
    }
  }
  // bottom animation ********************
  .bottom-flip {
    bottom: 0;
    background-color: white;
    display: flex;
    align-items: flex-end;
    @extend .bottom-border;
    animation: flip-bottom 250ms ease-out;
    transform-origin: top;
    transform: rotateX(90deg);
    animation-delay: 250ms;
  }
  @keyframes flip-bottom {
    100% {
      transform: rotateX(0deg);
    }
  }
}
// ==========================================================================================
// 角的弧度
.top-border {
  border-top-right-radius: 0.1em;
  border-top-left-radius: 0.1em;
}
.bottom-border {
  border-bottom-right-radius: 0.1em;
  border-bottom-left-radius: 0.1em;
}
</style>