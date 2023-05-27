<template lang="pug">
#CSSView
  ThreeD1
  ThreeD2
  ThreeD4
  ThreeDTest
  div.svg-container
    Svg1
    Svg2
    Svg3
    div(style="display:flex; flex-direction:column")
      svg(width="300px" height="175px" :class="{'animated-svg': animated}" @animationend="HandleStop")
        path(d="M 10 80 Q 80 10 145 80 T 280 80"
        stroke="black"
        stroke-width="5"
        fill="transparent")
      Button(@click="HandleAnimate") {{ "Click me to animate svg" }}
</template>

<script>
export default {
  name: 'CSSView',
  components: {
    ThreeD1: () => import('@/components/ThreeD/ThreeD1.vue'),
    ThreeD2: () => import('@/components/ThreeD/ThreeD2.vue'),
    ThreeD4: () => import('@/components/ThreeD/ThreeD4.vue'),
    ThreeDTest: () => import('@/components/ThreeD/ThreeDTest.vue'),
    Svg1: () => import('@/components/ThreeD/Svg1.vue'),
    Svg2: () => import('@/components/ThreeD/Svg2.vue'),
    Svg3: () => import('@/components/ThreeD/Svg3.vue'),
  },
  data() {
    return {
      animated: false
    }
  },
  methods: {
    HandleAnimate() {
      this.animated = true
    },
    HandleStop() {
      this.animated = false
    }
  }
}
</script>

<style lang="scss" scoped>
#CSSView {
  .section {
    width: 100%;
    height: 100vh;
  }

  .svg-container {
    display: flex;
    gap: 30px;
    margin-bottom: 20px;

    .animated-svg {
      stroke-dasharray: 320;
      stroke-dashoffset: 0;
      animation: dash 1s linear;
    }
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 320;
  }

  100% {
    stroke-dashoffset: 0;
  }
}
</style>