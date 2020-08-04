import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3bb1e5',
        secondary: '#ef4056',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});
