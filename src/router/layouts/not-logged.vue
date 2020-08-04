<template>
  <v-container class="login-container">
    <v-row>
      <v-col align="center">
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>
