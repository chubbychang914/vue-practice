<template lang="pug">
#DatePicker2
  h2.desc {{ "切換年份時候，不會跟著改變年份" }}
  .container
    DatePicker(type="daterange", placeholder="split-panels", split-panels)
  h2.desc {{ "多選" }}
  .container
    DatePicker(type="date", placeholder="multiple", multiple)
  h2.desc {{ "顯示星期數 => not supported?" }}
  .container
    DatePicker(type="date", placeholder="show-week-numbers", show-week-numbers)
  h2.desc {{ "起始日期" }}
  .container
    DatePicker(
      type="date",
      placeholder="start-date",
      :start-date="new Date(1997, 8, 14)"
    )
  h2.desc {{ "✨ 顯示的日期格式 - format" }}
  .container
    Col
      DatePicker(
        type="date",
        placeholder="format",
        :value="new Date()",
        format="yyyy年MM月dd日"
      )
    Col
      DatePicker(
        type="daterange",
        placeholder="format",
        :value="dateRangeValue",
        format="yyyy/MM/dd"
      )
</template>

<script>
export default {
  data() {
    return {
      dateRangeValue: ["2016-01-01", "2016-02-15"],
    };
  },
};
</script>

<style lang="scss" scoped>
#DatePicker2 {
  .desc {
    margin: 10px;
  }
  .container {
    border: 1px solid black;
    background-color: lightblue;
    width: 500px;
    padding: 50px;
    margin: 10px;
    @extend .center;
  }
}
.center {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>