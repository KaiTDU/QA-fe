<template>
  <div></div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "DashbroadDefault",
  created() {
    if (window.location.pathname === "/") {
      this.$router.push("/dashbroad");
    }
  },
};
</script>
