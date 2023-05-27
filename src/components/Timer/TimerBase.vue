<template lang="pug">
#TimerBase
  .TimerBase
    .displayContainer
      .hourContainer.container
        FlipCard(:startNum="hourTen")
        FlipCard(:startNum="hour")
      h1.colon {{ ":" }}
      .minContainer.container
        FlipCard(:startNum="minTen")
        FlipCard(:startNum="min")
      h1.colon {{ ":" }}
      .secContainer.container
        FlipCard(:startNum="secTen")
        FlipCard(:startNum="sec")
    .btnContainer
      Button(@click="StartTimer") {{ "StartTimer" }}
      Button(@click="StopTimer") {{ "StopTimer" }}
      Button(@click="ResetTimer") {{ "ResetTimer" }}
</template>

<script>
export default {
  name: "TimerBase",
  components: {
    FlipCard: () => import("@/components/Timer/FlipCard.vue"),
  },
  data() {
    return {
      sec: 0,
      secTen: 0,
      min: 0,
      minTen: 0,
      hour: 0,
      hourTen: 0,
      // 會在 runInterval 綁定 setInterval
      runInterval: null,
    };
  },
  methods: {
    // 開始計時器
    StartTimer() {
      this.$Message.success("Start");
      if (this.runInterval !== null) {
        clearInterval(this.runInterval);
      }
      this.runInterval = setInterval(this.Counter, 100);
    },
    // 停止計時器
    StopTimer() {
      this.$Message.error("StopTimer");
      clearInterval(this.runInterval);
    },
    // 歸零計時器
    ResetTimer() {
      this.$Message.info("ResetTimer");
      clearInterval(this.runInterval);
      this.hour = 0;
      this.hourTen = 0;
      this.min = 0;
      this.minTen = 0;
      this.sec = 0;
      this.secTen = 0;
    },
    // 設定計時的
    Counter() {
      this.sec++;
      if (this.sec === 10) {
        this.sec = 0;
        this.secTen++;
        return;
      }
      if (this.secTen === 6) {
        this.secTen = 0;
        this.min++;
      }
      if (this.min === 10) {
        this.min = 0;
        this.minTen++;
      }
      if (this.minTen === 6) {
        this.minTen = 0;
        this.hour++;
      }
      if (this.hour === 10) {
        this.hour = 0;
        this.hourTen++;
      }
      if (this.hourTen == 10) {
        this.StopTimer();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#TimerBase {
  .TimerBase {
    width: 500px;
    border: 1px solid black;
    padding: 50px;
    @extend .center;
    flex-direction: column;
    .displayContainer {
      @extend .center;
      margin-bottom: 30px;
    }
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  margin-right: 15px;
  margin-left: 15px;
  gap: 5px;
  &:last-child {
    margin-right: 0;
  }
  &:first-child {
    margin-left: 0;
  }
}
</style>