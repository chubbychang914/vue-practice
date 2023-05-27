<template lang="pug">
#TimerView
  TimerBase
  CountDown

  #clock
    Clock
</template>

<script>
export default {
  name: "TimerView",
  data() {
    return {
      numbers: {
        sec: 3,
        secTen: 4,
      },
      interval: null,
    };
  },
  methods: {
    StartCount() {
      setInterval(() => {
        if (this.numbers.sec + 1 === 10) {
          this.numbers.sec = 0;
          this.numbers.secTen++
          return;
        }
        this.numbers.sec++;
      }, 1000);
    },
  },
  components: {
    TimerBase: () => import("@/components/Timer/TimerBase.vue"),
    CountDown: () => import("@/components/Timer/CountDown.vue"),
    Clock: () => import("@/components/Clock/Clock.vue")
  },
};
</script>

<style lang="scss" scoped>
#TimerView {
  Button {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  #clock {
    height: 100vh;
    @extend .center;
    background: black;
    background: radial-gradient(circle, midnightblue 0%, black 100%);
    background-image: url("https://cdn.pixabay.com/photo/2016/06/05/07/59/stars-1436950__340.jpg");
  }

}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>