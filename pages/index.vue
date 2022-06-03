<template>
  <div>
    <Login />
  </div>
</template>

<script>
import Login from "../components/Parts/Login/Login.vue";
import LoginForm from "../components/Parts/Login/AuthForm.vue";
export default {
  name: "IndexPage",
  layout: "LoginDefault",
  created() {
    if (window.location.pathname === "/") {
      // this.$router.push("/dashbroad");
    }
  },
  components: { Login, LoginForm },
};
</script>
