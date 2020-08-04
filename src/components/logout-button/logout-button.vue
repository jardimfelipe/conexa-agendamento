<script>
import { authMethods } from '@/store/helpers/auth';

export default {
  methods: {
    ...authMethods,
    logoutUser() {
      this.logOut();
      this.$nextTick().then(() => this.$router.push('/login'));
    },
  },
};
</script>

<template>
  <v-btn class="mx-2" id="logout" fixed right fab dark color="primary" @click="logoutUser">
    <v-icon dark>mdi-login</v-icon>
  </v-btn>
</template>
