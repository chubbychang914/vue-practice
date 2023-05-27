<template lang="pug">
#ThreeD4
  .container
    .box.box1
      h1 Hello there! This is just some sample text that I can think of right now!
    .box.box2
      h1 Hello there! This is just some sample text that I can think of right now!
</template>

<style lang="scss" scoped>
#ThreeD4 {
  .container {
    width: 100%;
    height: 100vh;
    background: radial-gradient(#673ab7, #190838);
    @extend .center;



    .box {
      position: absolute;
      width: 1200px;
      height: 400px;
      @extend .center;
      overflow: hidden; // remove this to see the how it works
      transform-style: preserve-3d;

      h1 {
        position: absolute;
        left: 0;
        margin: 0;
        padding: 0;
        font-size: 150px;
        white-space: nowrap;
        animation: spotlight 12s linear infinite;
      }
    }

    .box.box1 {
      background-color: #673ab7;
      transform-origin: right; // ✨
      transform: perspective(500px) translateX(-50%) rotateY(-15deg);

      h1 {
        color: white;
      }
    }

    .box.box2 {
      background-color: #40158c;
      transform-origin: left; // ✨
      transform: perspective(500px) translateX(50%) rotateY(15deg);

      h1 {
        color: rgba(255, 255, 255, 0.3);
        left: -100%;  // add this to make the text match speed
      }
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes spotlight {
  0% {
    transform: translate(2400px) // box width x 2
  }

  100% {
    transform: translateX(-100%)
  }
}
</style>