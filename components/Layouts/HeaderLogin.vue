<template>
  <div>
    <nav class="navbar row flex-wrap align-items-center">
      <nuxt-link to="/">
        <img width="60" src="~/static/imgs/left-menu/isp.svg" />
      </nuxt-link>
      <div class="d-flex justify-content-end">
        <button
          @click="handleRegister"
          class="
            buy-nftpad
            d-flex
            align-items-center
            fs-14
            justify-content-center
          "
        >
          <span>Register</span>
          <img
            width="14px"
            src="https://nftpad.fi/_next/static/media/pancakeswap.dda38ed5.svg"
          />
        </button>
        <button
          @click="handleLogin"
          class="
            connect-wallet
            d-flex
            align-items-center
            fs-14
            justify-content-center
          "
        >
          <span>Login</span>
        </button>
      </div>
    </nav>
    <AuthForm :activeAuth="activeAuth" :activeLogin="activeLogin" />
  </div>
</template>
<script>
import ToggleTheme from "./ToggleTheme.vue";
import AuthForm from "../Parts/Login/AuthForm.vue";
export default {
  components: { ToggleTheme, AuthForm },
  data() {
    return {
      activeAuth: false,
      activeLogin: true,
    };
  },
  methods: {
    handleLogin() {
      this.activeAuth = true;
      this.activeLogin = true;
    },
    handleRegister() {
      this.activeAuth = true;
      this.activeLogin = false;
    },
  },
};
</script>
<style scoped>
.buy-nftpad {
  width: 152px;
  height: 46px;
  border: 1px solid rgb(122, 119, 119);
  background: #ffffff0d;
  border-radius: 8px;
  margin-right: 20px;
}
.buy-nftpad span {
  margin-right: 10px;
}
.connect-wallet {
  width: 152px;
  height: 46px;
  background: #e9066b;
  border-radius: 8px;
}
button {
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-primary-color);
}
</style>