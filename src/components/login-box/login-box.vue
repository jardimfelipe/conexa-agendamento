<script>
export default {};
</script>

<template>
  <div class="login-box">
    <div class="login-box__logo">
      <v-img src="@/assets/logo-conexa.svg" width="300" alt="Conexa Saude" />
    </div>
    <div class="login-box__form-container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './login-box';
</style>
