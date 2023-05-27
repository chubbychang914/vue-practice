<template lang="pug">
#DatePicker3
  h2.desc {{ "日期 ＋ 時間選擇" }}
  .container
    Row
      Col(span="12")
        DatePicker(type="datetime", placeholder="datetime")
      Col(span="12")
        DatePicker(
          type="datetime",
          format="yyyy-MM-dd HH:mm",
          placeholder="datetime no seconds"
        ) 
    Row
      Col(span="12")
        DatePicker(type="datetimerange", placeholder="datetimerange") 
      Col(span="12")
        DatePicker(
          type="datetimerange",
          format="yyyy-MM-dd HH:mm",
          placeholder="datetimerange no sec"
        ) 
  h2.desc {{ "選擇年或月" }}
  .container
    Row
      DatePicker(type="year", placeholder="year")
      DatePicker(type="month", placeholder="month")
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
#DatePicker3 {
  .desc {
    margin: 10px;
  }
  .container {
    border: 1px solid black;
    background-color: lightgray;
    width: 500px;
    padding: 50px;
    margin: 10px;
    @extend .center;
    flex-direction: column;
  }
}
.center {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>