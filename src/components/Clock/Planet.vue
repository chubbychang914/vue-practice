<template lang="pug">
//- 請填寫功能描述👈
#Planet
  .planet 
    .moon
</template>

<script>
export default {
  name: "Planet",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Planet {
  background-image: url("https://wallpaperaccess.com/full/296728.png");
  background-position: top left;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

// 元件
#Planet {
  perspective: 1000px;

  .planet,
  .moon {
    border-radius: 50%;
    background-repeat: repeat;
    background-size: 200% 100%;
  }

  .planet {
    width: 20em;
    height: 20em;
    background: url("https://www.centraldatacore.com/wp-content/uploads/00A-BG-PT2-Venus.jpg");
    box-shadow:
      inset -2em -2em 2em #000,
      -0.5em -0.5em 1em #f0d08b;
    position: relative;
    animation: rotate 20s linear infinite;
    transform-origin: center;
    transform: translateZ(-200px) scale(2);
  }

  .moon {
    background: url("https://www.solarsystemscope.com/textures/download/4k_eris_fictional.jpg");
    box-shadow:
      inset -1.5em -1.5em 1.5em #000,
      -0.2em -0.2em 0.5em #ccc;
    width: 6em;
    height: 6em;
    position: absolute;
    left: -11em;
    top: 50%;
    transform: translate(-50%);
    animation:
      rotate 50s linear infinite,
      orbit 5s infinite ease-in-out;
    z-index: 1;
  }

  @keyframes rotate {
    to {
      background-position: -200% 0;
    }
  }

  @keyframes orbit {
    49% {
      z-index: 1;
    }

    50% {
      left: 25em;
      z-index: -1;
    }

    99% {
      z-index: -1;
    }

    100% {
      left: -11em;
      z-index: 1;
    }
  }
}
</style>
