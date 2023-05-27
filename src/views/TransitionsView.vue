<template lang="pug">
#TransitionsView
  .div
    h1 {{ "transition" }}
    TransitionPractice
    h1 {{ "transition-group" }}
    TransitionGroup
  .div
    h1 {{ "drag drop" }}
    DragDrop
</template>

<script>
export default {
  name: "TransitionsView",
  components: {
    TransitionPractice: () =>
      import("@/components/Transitions/TransitionPractice.vue"),
    TransitionGroup: () =>
      import("@/components/Transitions/TransitionGroup.vue"),
    DragDrop: () => import("@/components/Transitions/DragDrop.vue")
  },
};
</script>

<style lang="scss" scoped>
#TransitionsView {
  display: flex;
  justify-content: center;
  gap: 100px;
}
</style>