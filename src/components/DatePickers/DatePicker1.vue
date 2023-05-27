<template lang="pug">
#DatePicker1
  h2.desc {{ "type = date / daterange，可以用 placement 決定彈窗的出現位置" }}
  .container
    Col
      DatePicker(type="date", placeholder="date")
    Col
      DatePicker(
        type="daterange",
        placeholder="date range",
        placement="bottom-end"
      )
  h2.desc {{ "✨ 幫 datepicker 新增側邊欄位選項，需要在 data() 裡面設定 shortcuts[]，每\n個欄位都是一個物件，再用 value() 來設定值" }}
  .container
    Col
      DatePicker(type="date", placeholder="date", :options="shortcutOptions")
    Col
      DatePicker(
        type="daterange",
        placeholder="date range",
        :options="options2"
      )
</template>

<script>
export default {
  data() {
    return {
      // 這是一般 datepicker 的側邊欄
      shortcutOptions: {
        shortcuts: [
          // 這是第一個快捷
          {
            text: "1 Today",
            value() {
              return new Date();
            },
            onClick: (picker) => {
              this.$Message.info("選擇今天");
            },
          },
          // 第二個快捷
          {
            text: "2 Yesterday",
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
            onClick: (picker) => {
              this.$Message.info("選擇昨天");
            },
          },
          // 第三個快捷
          {
            text: "3 One Week",
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            },
            onClick: (picker) => {
              this.$Message.info("選一週後");
            },
          },
        ],
      },
      // date range 的側邊欄遠項
      options2: {
        shortcuts: [
          // 1 week back
          {
            text: "1 week back",
            value() {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            },
          },
          // 1 month back
          {
            text: "1 month back",
            value() {
              const start = new Date();
              const end = new Date();
              // 幫 start 設定時間
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            },
          },
          // 3 months back
          {
            text: "3 months back",
            value() {
              const start = new Date();
              const end = new Date();
              // 一小時 3600 秒 * 1000 變毫秒 * 24 小時 * 3 個月
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#DatePicker1 {
  .desc {
    margin: 10px;
    max-width: 600px;
  }

  .container {
    border: 1px solid black;
    background-color: lightgray;
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