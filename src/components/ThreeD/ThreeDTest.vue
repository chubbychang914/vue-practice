<template lang="pug">
#ThreeD3
  .camera
    .box.box1
      iframe(:src="videoSrc" :style="videoStyle")
</template>

<script>
export default {
  name: "ThreeD3",
  data() {
    return {
      videoSrc: "https://www.youtube.com/embed/Za7PiYZlc4I",
      videoStyle: {
        width: `100%`,
        height: `100%`,
        border: "none"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#ThreeD3 {
  width: 100%;
  height: 100vh;
  @extend .center;

  .camera {
    width: 90%;
    height: 90%;
    border: 1px solid black;
    @extend .center;
    // 從多遠的地方看
    perspective: 1000px;
    // perspective-origin: top left; // no effect
  }

  .box {
    width: 500px;
    height: 300px;
    box-sizing: border-box;
  }

  .box.box1 {
    background-color: lightgrey;
    transform-style: preserve-3d;
    // ⭐️ simple transform + perspective 
    transform: perspective(1000px) rotateX(20deg) rotateY(-25deg) skewX(0deg) skewY(0deg);
    @extend .center;
    // 其他選項
    // transform: skewY(25deg) translateY(117px);  // 1. use skew(傾斜多少)
    // rotate: 1 1 1 -60deg;                       // 2. use rotate - wtf is vector
  }

  .box1:after {
    content: "";
    position: absolute;
    background-color: lime;
    width: 30px;
    height: 100%;
    transform: skewY(45deg) translate(20px, -260px);
  }

  .box1::before {
    content: "";
    position: absolute;
    background-color: lime;
    width: 30px;
    height: 100%;
    transform: skewY(45deg) translate(280px, -260px);
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>