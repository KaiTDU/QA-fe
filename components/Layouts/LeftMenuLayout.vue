<template>
  <div class="container-fluid main">
    <nuxt-link to="/">
      <img
        width="60"
        src="~/static/imgs/left-menu/isp.svg"
      />
    </nuxt-link>
    <div class="menu-left">
      <ul class="navbar-nav">
        <li v-for="item in itemHeaders" :key="item.id" class="nav-item pr-4">
          <nuxt-link
            class="
              nav-link
              fs-18
              d-flex
              justify-content-start
              align-items-start
            "
            :to="item.path"
          >
            <div
              :class="[item.img, item.active ? 'bg-active' : 'bg-unactive']"
              class="icon-menu"
            ></div>
            <span
              class="name-menu"
              :class="item.active ? 'active' : 'unactive'"
              >{{ item.name }}</span
            >
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import letMenuJson from "@/mock/leftmenu.json";
export default {
  data() {
    return {
      itemHeaders: [],
    };
  },
  created() {
    this.itemHeaders = letMenuJson;
  },
};
</script>
<style scoped>
.main {
  padding-left: 0.5rem;
  margin-top: 12px;
}
.menu-left {
  margin-top: 64px;
}
.icon-menu {
  width: 24px;
  height: 20px;
  margin-right: 8px;
}

.launchpad {
  mask-image: url("~/static/imgs/left-menu/launchpad.svg");
  display: block;
}
.nftpad {
  mask-image: url("~/static/imgs/left-menu/nftpad.svg");
  display: block;
}

.bg-active {
  background: var(--text-primary-color);
}
.bg-unactive {
  background: var(--text-secondary-color);
}
.active {
  color: var(--text-primary-color);
}
.unactive {
  color: var(--text-secondary-color);
}
</style>