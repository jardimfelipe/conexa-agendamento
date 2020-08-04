<script>
import AppBar from '@/components/app-bar/app-bar.vue';
import LogoutButton from '@/components/logout-button/logout-button.vue';

export default {
  components: {
    AppBar,
    LogoutButton,
  },
};
</script>

<template>
  <div id="conexa">
    <AppBar />
    <div class="main-container">
      <slot />
    </div>
    <LogoutButton />
  </div>
</template>
