<template lang="pug">
#ThreeD1
  .section
    .pattern 
      .face.face1 
      .face.face2
</template>

<script>
export default {
  name: 'ThreeD1',
}
</script>

<style lang="scss" scoped>
/* background */
#ThreeD1 {
  height: 100vh;
}

.section {
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.pattern {
  transform-style: preserve-3d;
  perspective: 1000px;
  /* animations */
  animation: animateBg 10s ease-in-out infinite
}

.pattern .face {
  position: relative;
  width: 100%;
  height: 50vh;
  background: url(./imgs/check.jpg);
  background-size: 100px 100px;
  /* animation */
  animation: animate 1s linear infinite;
}

@keyframes animate {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100px;
  }
}

@keyframes animateBg {

  0%,
  100% {
    transform: scale(1.6) rotate(-15deg);
  }

  50% {
    transform: scale(1.6) rotate(15deg);
  }
}

/* 傾斜角度 */
.pattern .face.face2 {
  height: 100vh;
  transform-origin: top;
  transform: rotateX(70deg);
}

/* shadow for depth perspective 上半部*/
.pattern .face1:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 125px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent);
}

/* shadow for depth perspective 下半部*/
.pattern .face2:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 125px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent);
}
</style>

