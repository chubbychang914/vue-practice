<template>
  <div id="app">
    <div class="navbar" v-show="isLoggedIn">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/timer">Timer</router-link>
        <router-link to="/carousel">Carousel</router-link>
        <router-link to="/css">3D CSS</router-link>
        <router-link to="/games">Games</router-link>
        <router-link :to="{ name: 'example' }">Copied Code</router-link>
        <!-- <router-link to="/todolist">TodoList</router-link> -->
        <!-- <router-link to="/transitions">Transitions</router-link> -->
        <!-- <router-link to="/iView">iView</router-link> -->
        <!-- <router-link :to="{ name: 'productList' }">Products List</router-link> -->
      </nav>
    </div>
    <router-view :style="contentStyle" />
    <ButtonGroup class="btnGroup" vertical>
      <Button type="primary" @click="ToggleLoginStatus">切換登入狀態</Button>
      <Button type="error" @click="ClearLocalStorage">清除 storage</Button>
    </ButtonGroup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarHeight: 100,
    };
  },
  computed: {
    isLoggedIn() {
      console.log(this.$store)
      return this.$store.state.auth.isLoggedIn;
    },
    contentStyle() {
      return {
        paddingTop: `${this.navbarHeight}px`,
      };
    },
  },
  methods: {
    ClearLocalStorage() {
      localStorage.clear();
    },
    ToggleLoginStatus() {
      this.$store.dispatch("auth/ToggleLoginStatus");
      this.OpenNotice(false);
    },
    // 顯示 notice -> notice description
    OpenNotice(nodesc) {
      this.$Notice.open({
        title: "✨ Login status changed",
        desc: nodesc
          ? ""
          : "記得 isLoginStatus 是設定在 vuex 的 $store 裡面，要更改也是用 actions 去帶動 mutations",
      });
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

#app {
  position: relative;
  display: block;

  .btnGroup {
    position: fixed;
    right: 0;
    bottom: 0;
  }

  .navbar {
    position: fixed;
    z-index: 100;
    font-size: 20px;
    font-weight: 700;
    background-color: black;
    width: 100%;
    overflow: auto;

    nav {
      display: flex;
      justify-content: space-around;

      // padding: 10px 20px;
      a {
        background-color: #fff;
        padding: 10px 20px;
        flex: 1;
        border: 1px solid black;
        border-radius: 5px;
        margin: 10px;
        text-align: center;
      }
    }
  }
}
</style>
