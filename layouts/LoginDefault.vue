<template>
  <div>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Inter"
    />
    <div class="container">
      <HeaderLogin />
      <div class="d-flex justify-content-end align-items-center">
        <ToggleTheme />
        <Language />
      </div>
      <Nuxt />
    </div>
    <div class="footer mt-5">
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from "../components/Layouts/Footer.vue";
import ToggleTheme from "../components/Layouts/ToggleTheme.vue";
import Language from "../components/Layouts/Language.vue";
import HeaderLogin from "../components/Layouts/HeaderLogin.vue";
export default {
  components: { Footer, ToggleTheme, Language, HeaderLogin },
};
</script>
<style scoped>
.body {
  margin-top: 12px;
}
</style>