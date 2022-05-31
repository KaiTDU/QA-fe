<template>
  <div>
    <nav class="navbar row flex-wrap align-items-center">
      <label
        class="
          d-flex
          align-items-center
          justify-content-between
          search-pjs
          px-4
        "
      >
        <input placeholder="Search for ask" />
        <img width="14" src="~/static/imgs/icon-filter.png" />
      </label>
      <div class="d-flex justify-content-end">
        <div
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
        </div>
        <div
          class="
            connect-wallet
            d-flex
            align-items-center
            fs-14
            justify-content-center
          "
        >
          <span>Login</span>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import ToggleTheme from "./ToggleTheme.vue";
export default {
  components: { ToggleTheme },
};
</script>
<style scoped>
.search-pjs {
  width: 288px;
  height: 48px;
  background: var(--background-color-primary);
  border-radius: 20px;
  border: 1px solid rgb(122, 119, 119);
}

.search-pjs:focus {
  border: 1px solid rgb(122, 119, 119);
  margin-top: 4px;
}
.search-pjs input {
  background: transparent;
  color: #fff;
  border: none;
  width: 200px;
  height: 46px;
}
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
</style>