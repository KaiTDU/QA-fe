<template>
  <div class="language">
    <select
      class="choose-language"
      v-model="selectedValue"
      @change="onChange(selectedValue)"
    >
      <option disabled value>    select one</option>
      <option
        v-for="(locale, index) in $i18n.locales"
        :key="index"
        :value="locale.code"
      >
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: "",
    };
  },
  created() {
    this.selectedValue = this.$i18n.locale;
  },
  methods: {
    onChange(event) {
      this.$router.replace(this.switchLocalePath(event));
    },
  },
};
</script>
<style scoped>
.language {
  margin-left: 10px;
}
.choose-language {
  width: 100px;
  height: 34px;
}
</style>