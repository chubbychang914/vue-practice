<template lang="pug">
#TransitionGroup
  Button-group
    Button(@click="ClickAdd") {{ "Add" }}
    Button(@click="ClickShuffle") {{ "Shuffle" }}
    Button(@click="ClickReset") {{ "Reset" }}
    Button(@click="ClickClear") {{ "Clear" }}
  transition-group.number-list(tag="ul", name="list")
    li.item(v-for="item in numList", :key="item") {{ item }}
</template>

<script>
export default {
  data() {
    return {
      numList: [1, 2, 3],
      nextNum: 4,
    };
  },
  methods: {
    // splice can add statements?!
    ClickAdd() {
      this.numList.splice(this.GenerateRandomIndex(), 0, this.nextNum++);
    },
    ClickReset() {
      this.numList = [1, 2, 3];
      this.nextNum = 4;
    },
    // 兩個兩個做比對，sort default(small -> big)，change it to random and -0.5 to get values between -0.5 and 0.5
    ClickShuffle() {
      this.numList.sort(() => {
        return Math.random() - 0.5;
      });
    },
    ClickClear() {
      this.numList = [];
      this.nextNum = 1;
    },
    // 隨機生成 index 再把數字插入
    GenerateRandomIndex() {
      return Math.floor(Math.random() * this.numList.length);
    },
  },
};
</script>

<style lang="scss" scoped>
#TransitionGroup {
  width: 350px;
  .number-list {
    position: relative;
    padding: 20px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    .item {
      margin-right: 10px;
      list-style-type: none;
      width: 40px;
      height: 40px;
      background-color: lightseagreen;
      @extend .center;
    }
  }
  .list-enter-active,
  .list-leave-active,
  .list-move {
    // 用來處理當元素改變定位時進行的動畫
    transition: opacity 0.7s, transform 0.7s;
  }

  .list-leave-active {
    // 讓 remove all 的時候會全部聚集到同一個點
    position: absolute;
  }

  .list-enter {
    opacity: 0;
    transform: translateY(-20px);
  }

  .list-leave-to {
    opacity: 0;
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>