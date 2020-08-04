<script>
import { authComputed } from '@/store/helpers/auth';

export default {
  computed: {
    ...authComputed,
    routeName() {
      return this.$route.name;
    },
  },
};
</script>

<template>
  <div class="app-bar">
    <v-app-bar dark color="primary">
      <v-toolbar-title>Conexa agendamentos</v-toolbar-title>
      <v-spacer />
      <v-icon class="mr-2">mdi-account-circle-outline</v-icon>
      {{ currentUser.nome }}
    </v-app-bar>
    <v-container>
      <v-row>
        <v-col class="d-flex align-center">
          <v-btn v-if="$route.meta.backButton" fab text @click="$router.go(-1)">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <h1 class="font-weight-light">{{ routeName }}</h1>
        </v-col>
        <v-col v-if="$route.path === '/'" class="justify-end align-center d-flex">
          <v-btn
            id="new-appointment"
            color="secondary"
            @click.prevent="$router.push('/nova-consulta')"
            >Nova consulta</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
