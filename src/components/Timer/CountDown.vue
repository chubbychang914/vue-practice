<template lang="pug">
#CountDown
  .CountDown
    h1 {{ displayTime }}
    .btnContainer
      Button(@click="HandleStart", type="primary") {{ "Start" }}
      Button(@click="HandleStop", v-if="isRunning") {{ "Pause" }}
      Button(@click="HandleClear") {{ "Clear" }}
    .inputContainer(v-if="!isRunning")
      Select(v-model="time.hour", placeholder="時")
        Option(v-for="i of 13", :value="i - 1", :key="i") {{ i - 1 }}
      Select(v-model="time.min", placeholder="分")
        Option(v-for="i of 60", :value="i - 1", :key="i") {{ i - 1 }}
      Select(v-model="time.sec", placeholder="秒")
        Option(v-for="i of 60", :value="i - 1", :key="i") {{ i - 1 }}
</template>

<script>
export default {
  name: "CountDown",
  components:{  },
  data() {
    return {
      time: { hour: 0, min: 0, sec: 0 },
      intervalStatus: null,
      isRunning: false,
    };
  },
  computed: {
    displayTime() {
      let displayHr = `${this.time.hour}`.padStart(2, "0");
      let displayMin = this.time.min < 10 ? `0${this.time.min}` : this.time.min;
      let displaySec = this.time.sec < 10 ? `0${this.time.sec}` : this.time.sec;
      return `${displayHr} : ${displayMin} : ${displaySec}`;
    },
  },
  methods: {
    // 開始倒數
    HandleStart() {
      if (this.time.hour === 0 && this.time.min === 0 && this.time.sec === 0) {
        this.$Message.error("請選擇時間");
        this.isRunning = false;
        return;
      }
      this.$Message.success("倒數開始！");
      this.isRunning = true;
      if (this.intervalStatus !== null) {
        clearInterval(this.intervalStatus);
      }
      this.intervalStatus = setInterval(this.Counter, 100);
    },
    // 暫停倒數
    HandleStop() {
      this.$Message.error("暫停倒數");
      clearInterval(this.intervalStatus);
    },
    // 歸零
    HandleClear() {
      this.$Message.info("倒數歸零");
      this.isRunning = false;
      this.time.hour = 0;
      this.time.min = 0;
      this.time.sec = 0;
      clearInterval(this.intervalStatus);
    },
    // 設定時改變時間的規則
    Counter() {
      if (this.time.hour === 0 && this.time.min === 0 && this.time.sec === 0) {
        clearInterval(this.intervalStatus);
        this.$Message.success("Timer ended");
        this.isRunning = false;
        return;
      }
      this.time.sec--;
      if (this.time.sec < 0) {
        this.time.min--;
        this.time.sec = 59;
        return;
      }
      if (this.time.min < 0) {
        this.time.hour--;
        this.time.min = 59;
        return;
      }
      if (this.time.hour < 0) {
        this.time.hour = 0;
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#CountDown {
  .CountDown {
    width: 500px;
    border: 1px solid black;
    padding: 50px;
    @extend .center;
    flex-direction: column;
    .inputContainer {
      display: flex;
    }
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>