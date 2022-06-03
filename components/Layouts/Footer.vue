<template>
  <div class="footer p-5">
    <div class="d-flex justify-content-between align-items-start">
      <div class="footer-descrip">
        <img width="100" src="~/static/imgs/left-menu/isp.svg" />
        <div class="mt-4">
          <span>
            If you see any problems with the website, please contact and report
            back to me via email:&nbsp;</span
          ><span style="color: aqua">kaito.ptit@gmail.com&nbsp;</span
          ><span>
            to help this community grow. Your contribution is my pleasure. Wish
            you will have the best experience on the system!</span
          >
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="mt-5">Copyright &copy;ThangPtit 2022</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer {
  background: var(--background-color-secondary);
}
a {
  text-decoration: none;
}
.icon-telegram {
  mask-image: url("~/static/imgs/network/Tele.svg");
  display: block;
}
.icon-nftpad {
  mask-image: url("~/static/imgs/network/Nftpad.svg");
  display: block;
}
.icon-twister {
  mask-image: url("~/static/imgs/network/Twist.svg");
  display: block;
}
.icon-bscs {
  mask-image: url("~/static/imgs/network/BSCS.svg");
  display: block;
}
.icon-network {
  background: var(--text-primary-color);
  width: 16px;
  height: 17px;
  margin-right: 8px;
}
.network {
  color: var(--text-primary-color);
}
</style>
