<template lang="pug">
#DatePicker4
  h2.desc {{ "✨ Disabled 不可選的日期" }}
  .container
    DatePicker(type="date", placeholder="disabled 所有之前日期", :options="options3")
    DatePicker(type="date", placeholder="disabled 指定日期", :options="options4")
  h2.desc {{ "確認後才選擇" }}
  .container
    DatePicker(type="date", placeholder="confirm", confirm)
  h2.desc {{ "size : small / large" }}
  .container
    Row
      Col
        DatePicker(size="small", type="date", placeholder="Select date")
      Col
        DatePicker(type="date", placeholder="Select date")
      Col
        DatePicker(size="large", type="date", placeholder="Select date")
</template>

<script>
export default {
  data() {
    return {
      options3: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now() - 86400000;
        },
      },
      options4: {
        disabledDate(date) {
          const disabledDay = date.getDate();
          return disabledDay === 15;
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#DatePicker4 {
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