<template>
  <div v-if="activeAuth" class="auth-form p-4">
    <div v-if="activeLogin" class="login">
      <div class="d-flex justify-content-between align-items-center">
        <span class="fs-24 fw-8">Login</span>
        <button @click="handleHiddenAuth">
          <img width="40" src="~/static/imgs/icon_close.png" />
        </button>
      </div>
      <div class="mt-3">
        <span class="fs-14">Please enter your username and password!</span>
      </div>
      <div class="mt-5">
        <input
          @keyup="getName"
          ref="myName"
          placeholder="Enter username"
          class="px-2 w-100 input"
        />
        <input
          @keyup="getPassword"
          ref="myPassword"
          type="password"
          placeholder="Enter password"
          class="px-2 mt-3 w-100 input"
        />
      </div>
      <div class="d-flex mt-3 justify-content-end">
        <span class="fs-12 fw-4">Forgot password ?</span>
      </div>
      <div class="d-flex justify-content-center mt-5">
        <button @click="handleLogin" class="btn-login">Login</button>
      </div>
      <div class="d-flex justify-content-center mt-4">
        <span>Don't have an account?</span>
        <button
          @click="handleTranferRegis"
          style="border: none"
          class="fs-15 fw-6"
        >
          Sign up
        </button>
      </div>
    </div>
    <div v-else class="register">
      <div class="d-flex justify-content-between align-items-center">
        <span class="fs-24 fw-8">Register</span>
        <button @click="handleHiddenAuth">
          <img width="40" src="~/static/imgs/icon_close.png" />
        </button>
      </div>
      <div class="mt-3">
        <span class="fs-14"
          >Please enter your username, email and password!</span
        >
      </div>
      <div class="mt-5">
        <input
          @keyup="getName"
          ref="myName"
          placeholder="Enter username"
          class="px-2 w-100 input"
        />
        <input
          @keyup="getEmail"
          ref="myEmail"
          type="email"
          placeholder="Enter email"
          class="mt-3 px-2 w-100 input"
        />
        <input
          @keyup="getPassword"
          ref="myPassword"
          type="password"
          placeholder="Enter password"
          class="px-2 mt-3 w-100 input"
        />
      </div>
      <div class="d-flex justify-content-center mt-5">
        <button @click="handleRegister" class="btn-login">Register</button>
      </div>
    </div>
  </div>
</template>
<script>
import { AuthApi } from "../../../datasource/Auth/auth";

export default {
  props: ["activeAuth", "activeLogin"],
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleTranferRegis() {
      this.activeLogin = false;
    },
    handleHiddenAuth() {
      this.activeAuth = false;
    },
    getName() {
      this.username = this.$refs.myName.value;
    },
    getEmail() {
      this.email = this.$refs.myEmail.value;
    },
    getPassword() {
      this.password = this.$refs.myPassword.value;
    },
    handleRegister() {
      this.registerUser();
    },
    handleLogin() {
      this.loginUser();
    },
    async registerUser() {
      try {
        const data = {
          username: this.username,
          email: this.email,
          password: this.password,
          role: ["user"],
        };
        const response = await AuthApi.registerApi(data);
        console.log(response);
        handleTranferRegis();
      } catch {
        console.log("error");
      }
    },
    async loginUser() {
      try {
        const data = {
          username: this.username,
          password: this.password,
        };
        const response = await AuthApi.loginApi(data);
        console.log(response);  
      } catch {
        console.log("error");
      }
    },
  },
};
</script>
<style scoped>
.auth-form {
  width: 350px;
  height: 450px;
  background: var(--background-color-thirty);
  position: fixed;
  top: calc(50% - 225px);
  left: calc(50% - 175px);
  z-index: 2;
}
.input {
  height: 40px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 8px;
  background: transparent;
  color: var(--text-primary-color);
}
button {
  background: transparent;
  color: var(--text-primary-color);
  cursor: pointer;
  border: none;
}
.btn-login {
  width: 200px;
  height: 40px;
  background: transparent;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 8px;
  color: var(--text-primary-color);
}
</style>
