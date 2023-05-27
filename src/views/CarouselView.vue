<template lang="pug">
#CarouselView
  Carousel(:imgList="imgList")
</template>

<script>
export default {
  name: "CarouselView",
  components: {
    Carousel: () => import("@/components/Carousel/Base.vue"),
  },
  data() {
    return {
      imgList: [
        {
          src: "https://picsum.photos/1000/600?1",
        },
        {
          src: "https://picsum.photos/1000/600?2",
        },
        {
          src: "https://picsum.photos/1000/600?3",
        },
        {
          src: "https://picsum.photos/1000/600?4",
        },
        {
          src: "https://picsum.photos/1000/600?5",
        },
        {
          src: "https://picsum.photos/1000/600?6",
        },
        {
          src: "https://picsum.photos/1000/600?7",
        },
        {
          src: "https://picsum.photos/1000/600?8",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#CarouselView {
  @extend .center;
  height: 100vh;
  // background: url('@/assets/logo.png');
  background-color: lightblue;
  width: 100%;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>