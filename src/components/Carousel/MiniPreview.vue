<template lang="pug">
#MiniPreview
  .preview-container
    .preview(
      v-for="(img, index) in imgList",
      :key="img.src",
      @click="EmitClick(index)"
    )
      img(:src="img.src")
</template>

<script>
export default {
  name: "MiniPreview",
  props: {
    imgList: {
      type: Array,
      default: [],
    },
  },
  methods: {
    // emit 送出事件
    EmitClick(index) {
      this.$emit("on-click", index);
    },
  },
};
</script>

<style lang="scss" scoped>
$box-width: 700px;
#MiniPreview {
  .preview-container {
    width: $box-width;
    gap: 20px;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    overflow-y: hidden;
    .preview {
      width: $box-width * 0.25;
      flex-shrink: 0;
    }
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
@media screen and (max-width: 1000px) {
  .preview-container {
    width: 350px;
  }
  .preview {
    width: 100px;
  }
}
</style>