<template lang="pug">
//- 請填寫功能描述👈
#TodoItem
  .item-title(@click="ClickEdit") {{ todoItem.title }}
  .item-check
    Icon(type="md-build" size="30"  @click="ClickChecked")
  .item-delete
    Icon(type="md-trash" size="30" @click="ClickDelete")
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todoItem: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {};
  },
  methods: {
    // Emit ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    EmitChecked(id) {
      this.$emit("on-checked", id)
    },
    EmitDelete() {
      this.$emit("on-delete")
    },
    EmitEdit() {
      this.$emit("on-edit")
    },
    // Event ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    ClickChecked() {
      this.EmitChecked()
    },
    ClickDelete() {
      this.EmitDelete()
    },
    ClickEdit() {
      this.EmitChecked()
    }
    // Flow ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    // Function ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    // Api ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  }
};
</script>

<style lang="scss" scoped>
// 排版
#TodoItem {
  display: grid;
  grid-template-columns: 350px 50px 50px;
}

// 元件
#TodoItem {
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
  font-family: 'Press Start 2P', cursive;

  &:hover {
    background-color: #f0f0f0;
  }

  &:nth-of-type(1) {
    margin-top: 10px;
  }

  .item-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // outline: auto;
  }

  .item-check {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // outline: auto;
  }

  .item-delete {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // outline: auto;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
