<script>
export default {
  name: 'App',

  computed: {
    LayoutComponent() {
      return require(`@/router/layouts/${this.$route.meta.layout || 'main'}.vue`).default;
    },
  },
};
</script>

<template>
  <v-app>
    <v-main>
      <transition name="fade-transition" mode="out-in">
        <component :is="LayoutComponent" v-if="!!$route.meta.rule">
          <transition name="fade-transition" mode="out-in">
            <router-view />
          </transition>
        </component>
      </transition>
    </v-main>
  </v-app>
</template>
