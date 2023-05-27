<template lang="pug">
//- 請填寫功能描述👈
#Scratch
  canvas#bg-canvas(
    ref="sketchpad" 
    :width="canvasWidth" 
    :height="canvasHeight" 
    @mousedown="HandleMouseDown"  
    @mousemove="HandleMouseMove"
    @mouseup="HandleMouseUp"
    @mouseleave="HandleMouseUp" 
  )
  .prize-nums 
    .num(v-for="item in prizeNumList") {{ item }}
  .info
    h1.percent {{ `${scratchPercent}%` }}
    h1.msg(v-show="scratchPercent >=53") {{ winPrize? "恭喜得獎!" : "QQ沒獎喔！"  }}
</template>

<script>
export default {
  name: "Scratch",
  props: {
    canvasWidth: {
      type: Number,
      default: 400
    },
    canvasHeight: {
      type: Number,
      default: 300
    },
    // 橡皮擦大小
    radius: {
      type: Number,
      default: 30
    },
    foregroundImg: {
      type: String,
      default: "https://picsum.photos/400/300?1"
    },
    lotteryNum: {
      type: Number,
      default: 7
    }
  },
  data() {
    return {
      ctx: null,  // canvas.getContext('2d') to use methods provided
      isDown: false,
      rect: null, // 取得 ref，`this.$refs.sketchpad.getBoundingClientRect()`,
      scratchPercent: 0,
      prizeNumList: [
        this.GenerateRandomNumber(),
        this.GenerateRandomNumber(),
        this.GenerateRandomNumber(),
        this.GenerateRandomNumber(),
        this.GenerateRandomNumber(),
      ]
    }
  },
  mounted() {
    const canvas = this.$refs.sketchpad;
    this.ctx = canvas.getContext('2d')
    // load image onto canvas
    this.SetUpCanvas()
  },
  computed: {
    // 是否包含中獎數字
    winPrize() {
      if (this.prizeNumList.includes(this.lotteryNum)) {
        return true
      }
      return false
    }
  },
  methods: {
    // Ref Init ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // 👉 初始化：把img畫到canvas上
    SetUpCanvas() {
      const ctx = this.ctx
      // setup image on canvas
      const image = new Image()
      image.src = this.foregroundImg
      image.crossOrigin = "Anonymous"  // tainted CORS origin
      image.onload = () => {
        ctx.drawImage(image, 0, 0)  // 從 0,0 開始畫 image
      }
    },
    // Event ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    HandleMouseDown() {
      // 👉 按下滑鼠取得一次周圍參數
      this.rect = this.$refs.sketchpad.getBoundingClientRect()
      this.isDown = true
    },
    HandleMouseUp() {
      this.isDown = false
    },
    HandleMouseMove(e) {
      if (!this.isDown) return
      let pos = this.GetXY(e)
      this.Erase(pos.x, pos.y)
    },
    // Function ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // 👉 取得可以計算的參數
    GetXY(e) {
      if (!this.rect) return;
      return {
        x: e.clientX - this.rect.left,
        y: e.clientY - this.rect.top
      }
    },
    // 👉 刮掉的功能
    Erase(x, y) {
      const ctx = this.ctx
      // 🔑 this is the key part, need this line of code to erase and show bg img
      ctx.globalCompositeOperation = 'destination-out';
      // 畫圈圈 -> use lines instead of circles for smoother scratch
      ctx.beginPath();
      ctx.arc(x, y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      // 算擦掉趴數
      this.CheckScratched();
    },
    // 👉 計算刮掉的趴數
    CheckScratched() {
      const ctx = this.ctx;
      // 取得canvas資訊，用getImageData去抓資料
      const canvas = this.$refs.sketchpad;
      const totalPixels = canvas.width * canvas.height;
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      // console.log(imageData);
      let erasedPixels = 0;
      // Iterate over the pixels and count the erased pixels
      for (let i = 0; i < pixels.length; i += 4) {
        const alpha = pixels[i + 3];
        if (alpha === 0) {
          erasedPixels++;
        }
      }
      // Calculate the percentage scratched off
      const scratchedPercentage = Math.floor((erasedPixels / totalPixels) * 100);
      this.scratchPercent = scratchedPercentage
    },
    //  Other Functions ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // random number generator
    GenerateRandomNumber() {
      return Math.floor(Math.random() * 10) + 1
    }
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Scratch {
  #bg-canvas {
    position: relative;
    border: 3px solid black;
    background-image: url("https://picsum.photos/400/300?2");
  }

  .info {
    width: 100%;
    height: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: white;

    .percent,
    .msg {
      @extend .center;
    }

    .percent {
      background: #f0f0f0;
    }
  }

  .prize-nums {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;

    .num {
      width: 40px;
      height: 40px;
      background-color: red;
      color: white;
      font-weight: 900;
      border-radius: 50%;
      box-shadow:
        inset -0.2em -0.3em 0.2em #000,
        -0.1em -0.1em 0.1em #ccc;
      @extend .center
    }
  }
}



// 元件
#Scratch {
  .luckyNum {
    font-size: 50px;
    position: absolute;
    background-color: yellow;
    z-index: 100;
    top: 0;
    left: 0;
  }

  .msg {
    background-color: #f0f0f0;
    padding: 10px 20px;
    color: blue;
    text-align: center;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
