<template lang="pug">
#HomeView
  .loginRegister
    Register(v-show="!isShowRegister")
    Login(v-show="isShowRegister")
    ButtonGroup
      Button(
        type="success",
        :size="buttonSize",
        @click="isShowRegister = false"
      ) {{ "註冊頁面" }}
      Button(
        type="primary",
        :size="buttonSize",
        @click="isShowRegister = true"
      ) {{ "登入頁面" }}
</template>

<script>
export default {
  name: "HomeView",
  components: {
    Register: () => import("@/components/Auth/Register.vue"),
    Login: () => import("@/components/Auth/Login.vue"),
  },
  data() {
    return {
      isShowRegister: false,
      buttonSize: "large",
    };
  }
};
</script>

<style lang="scss" scoped>
#HomeView {
  height: 100vh;
  background-color: lightskyblue;
  @extend .center;

  .loginRegister {
    display: flex;
    flex-direction: column;
  }

  .cheatBtns {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>