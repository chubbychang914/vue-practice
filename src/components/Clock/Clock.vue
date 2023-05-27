<template lang="pug">
#Clock
  .bg-img 
  svg#svg-container(viewBox="0 0 700 700")
    circle#face(cx="350" cy="350" r="300")
    circle#middle(cx="350" cy="350" r="30")
    //- g stands for "group", works like a div
    g#numbers
      text(x="320" y="120" fill="white") {{ "12" }}
      text(x="580" y="367" fill="white") {{ "3" }}
      text(x="336" y="630" fill="white") {{ "6" }}
      text(x="80" y="367" fill="white") {{ "9" }}
    g#hands
      rect#hour(x="340" y="350" rx="25" ry="25" :style="{transform: `rotate(${hourAngle}deg)`}") 
      rect#min(x="340" y="350" rx="25" ry="25" :style="{transform: `rotate(${minAngle}deg)`}") 
      line#sec(x1="350" y1="350" x2="350" y2="600" :style="{transform: `rotate(${secAngle}deg)`}")
    g#time
      text(x="0%" y="100%" fill="white") {{`${monthNum} ${currentTime.getDate()}` }}
    circle#mini-middle(cx="350" cy="350" r="10")
  .moon 
    .week {{ weekNum }}
  //- .ring
  //- .ring2
    
</template>

<script>
export default {
  name: "Clock",
  data() {
    return {
      currentTime: new Date(),
      timer: null,
      weekNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      monthNames: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.currentTime = new Date()
    }, 1000)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  computed: {
    // 每整點30deg，每分鐘0.5deg + 原本歸零的180deg
    hourAngle() {
      const hour = this.currentTime.getHours()
      const min = this.currentTime.getMinutes()
      return hour % 12 * 30 + min * 0.5 + 180
    },
    // 一圈360deg，每分鐘6deg，因為svg起點全指向6，所以+180
    minAngle() {
      const min = this.currentTime.getMinutes()
      return min * 6 + 180
    },
    // 一圈360deg，每秒6deg，因為svg起點全指向6，所以+180
    secAngle() {
      const sec = this.currentTime.getSeconds()
      console.log(sec);
      return sec * 6 + 180
    },
    weekNum() {
      let num = this.currentTime.getDay()
      return this.weekNames[num]
    },
    monthNum() {
      let num = this.currentTime.getMonth()
      return this.monthNames[num]
    }
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Clock {
  @extend .center;
  position: relative;
  font-family: 'Press Start 2P', cursive;
}

// 元件
#Clock {
  #svg-container {
    width: 700px;
    height: 700px;
    z-index: 3;
  }

  #face {
    stroke: rgba(0, 0, 0, 0.5);
    stroke-width: 10px;
    fill-opacity: 0;
  }

  #middle {
    fill: midnightblue;
  }

  #mini-middle {
    stroke: white;
    fill: darkgray;
  }

  // =============================================
  #numbers {
    font-size: 30px;
  }

  #hands {
    box-sizing: border-box;
    fill: #f6f6f6;

    #hour {
      width: 20px;
      height: 180px;
      transform-origin: center;
    }

    #min {
      width: 20px;
      height: 280px;
      transform-origin: center;
    }

    #sec {
      stroke: red;
      stroke-width: 5px;
      transform-origin: center;
    }
  }

  #time {
    font-size: 30px;
    // animation: date 5s infinite linear;
  }

  @keyframes date {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  // =============================================
  .bg-img {
    height: 600px;
    width: 600px;
    z-index: 2;
    // background-image: url("/Users/johnny/Desktop/vue-practice/public/imgs/milkyway.jpeg");
    background-image: url("https://www.solarsystemscope.com/textures/download/8k_venus_surface.jpg");
    background-size: 600px 600px;
    border-radius: 50%;
    position: absolute;
    /* linear:play an animation with the same speed from beginning to end */
    animation: bg_loop 90s infinite linear;
  }

  @keyframes bg_loop {
    100% {
      // starting position of bg image
      background-position: -9000px;
      transform: rotateZ(360deg);
    }
  }

  // =============================================
  .moon {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: url("https://www.solarsystemscope.com/textures/download/8k_mercury.jpg");
    box-shadow:
      inset -1.5em -1.5em 1.5em #000,
      -0.2em -0.2em 0.5em #ccc;
    position: absolute;
    left: -120px;
    z-index: 100;
    animation:
      rotate 90s linear infinite,
      orbit 17s ease-in-out infinite;
    @extend .center;

    .week {
      color: white;
    }
  }

  @keyframes rotate {
    100% {
      background-position: -200% 0;
    }
  }

  @keyframes orbit {
    50% {
      left: 730px;
      z-index: 100;
    }

    61% {
      z-index: 1;
    }

    90% {
      z-index: 1;
    }

    100% {
      z-index: 100;
    }
  }

  .ring {
    border: 7px dashed #f0f0f0;
    border-radius: 50%;
    width: 680px;
    height: 680px;
    position: absolute;
    animation: ring-rotate 60s infinite linear;
  }

  .ring2 {
    border: 7px double black;
    border-radius: 50%;
    width: 700px;
    height: 700px;
    position: absolute;
  }

  @keyframes ring-rotate {
    100% {
      transform: rotate(-360deg);
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
