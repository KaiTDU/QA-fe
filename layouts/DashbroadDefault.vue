<template>
  <div>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Inter"
    />
    <div class="body">
      <div class="container-fluid d-flex">
        <div class="left-menu">
          <LeftMenuLayout />
        </div>
        <div class="right-body container">
          <HeaderLayout />
          <div class="d-flex justify-content-end align-items-center">
            <ToggleTheme />
            <Language />
          </div>
          <Nuxt />
        </div>
      </div>
    </div>
    <div class="footer mt-5">
      <Footer />
    </div>
  </div>
</template>
<script>
import HeaderLayout from "../components/Layouts/HeaderLayout.vue";
import LeftMenuLayout from "../components/Layouts/LeftMenuLayout.vue";
import Footer from "../components/Layouts/Footer.vue";
import ToggleTheme from "../components/Layouts/ToggleTheme.vue";
import Language from "../components/Layouts/Language.vue";
export default {
  components: { HeaderLayout, LeftMenuLayout, Footer, ToggleTheme, Language },
};
</script>
<style scoped>
.body {
  margin-top: 12px;
}
.left-menu {
  width: 200px;
}
.right-body {
  width: calc(100% - 200px);
  margin-top: 6px;
}
</style>