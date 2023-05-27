<template lang="pug">
#DatePicker5
  h2.desc {{ "✨ 手動控制元件" }}
  .container
    DatePicker(
      type="date",
      :open="open",
      :value="value3",
      confirm,
      @on-change="HandleChange",
      @on-clear="HandleClear",
      @on-ok="HandleOk"
    )
      a(href="javascript:void(0)", @click="HandleClick")
        Icon(type="ios-calendar-outline")
        template(v-if="value3 === ''") {{ "Select Date" }}
        template(v-else) {{ value3 }}
</template>

<script>
export default {
  data() {
    return {
      open: false,
      value3: "",
    };
  },
  methods: {
    // a href 的 click 事件
    HandleClick() {
      this.open = !this.open;
    },
    // datepicker 的事件
    HandleChange(date) {
      this.value3 = date;
    },
    HandleClear() {
      this.open = false;
    },
    HandleOk() {
      this.open = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#DatePicker5 {
  .desc {
    margin: 10px;
  }
  .container {
    border: 1px solid black;
    background-color: cyan;
    width: 500px;
    padding: 50px;
    margin: 10px;
    margin-bottom: 500px;
    @extend .center;
  }
}
.center {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>