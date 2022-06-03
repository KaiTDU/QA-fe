  <template>
  <div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="intro-title">Online Q&A System</div>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="mt-2">
        A place where you can freely ask questions and get proper answers
      </div>
    </div>
    <div class="mt-5 d-flex justify-content-center">
      <h3 class="mt-5">
        If you want to post questions on the forum, please create an account
      </h3>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.intro-title {
  font-size: 48px;
  letter-spacing: 0.08em;
  font-weight: bold;
  background-image: linear-gradient(
    90deg,
    rgb(63, 123, 255) 0%,
    rgb(190, 73, 223) 32.04%,
    rgb(253, 179, 36) 66%,
    rgb(2, 234, 171) 100%
  );
  background-size: 200% 100%;
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 6s ease 0s infinite alternate none running usJcg;
}
@keyframes usJcg {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(1turn);
  }
}
.intro-total {
  background: var(--background-color-secondary);
  border-radius: 14px;
}
</style>
