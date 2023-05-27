<template lang="pug">
//- 請填寫功能描述👈
#LineLogin
  img.line-login-btn(src="/imgs/btn_login_press.png" @click="LineLogin")
  //- Button.line-login-btn(@click="LineLogin") {{ "Line Login Button" }}
</template>

<script>
export default {
  name: "LineLogin",
  data() {
    return {};
  },
  methods: {
    LineLogin() {
      // 設定會用到的參數
      let urlQuery = {
        response_type: "code",  // 會回傳參數名code的授權碼
        client_id: "1661076147",  // line dev 建立的 channel ID
        redirect_uri: "http://localhost:8080/timer",  // line dev 設定登入後要引導到哪一頁
        state: "login", // 自訂驗證碼，隨便填
        scope: "profile%20openid%20email" // 要取得user的哪些資料，去docs看，如果要 email 還要先特別設定
      }

      // 要回傳的 URL
      let URL = "https://access.line.me/oauth2/v2.1/authorize?";
      URL += `response_type=${urlQuery.response_type}`;
      URL += `&client_id=${urlQuery.client_id}`;
      URL += `&redirect_uri=${urlQuery.redirect_uri}`;
      URL += `&state=${urlQuery.state}`;
      URL += `&scope=${urlQuery.scope}`;
      console.log(URL)
      
      // 重新導向 URL
      window.location.href = URL
    }
  }
};
</script>

<style lang="scss" scoped>
// 排版
#LineLogin {}

// 元件
#LineLogin {
  .line-login-btn {
    width: 150px;

    &:active {
      transform: scale(0.99);
    }
  }
}
</style>
