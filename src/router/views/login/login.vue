<script>
import LoginBox from '@/components/login-box/login-box.vue';

import { authMethods, authComputed } from '@/store/helpers/auth';

export default {
  components: {
    LoginBox,
  },
  data() {
    return {
      model: {
        email: '',
        password: '',
      },
      required: [(v) => !!v || 'Preencha este campo'],
    };
  },
  computed: {
    ...authComputed,
  },
  methods: {
    ...authMethods,
    tryToLogin() {
      const validateForm = this.$refs.form.validate();
      if (!validateForm) return;
      const { model } = this;
      const credentials = { email: model.email, password: model.password };
      this.logIn(credentials).then((resp) => {
        if (resp) this.$router.push('/');
      });
    },
  },
};
</script>

<template>
  <LoginBox>
    <v-form ref="form" @submit.prevent="tryToLogin">
      <v-text-field v-model="model.email" id="email" :rules="required" label="E-mail" required />
      <v-text-field
        v-model="model.password"
        id="password"
        :rules="required"
        label="Senha"
        required
      />
      <v-btn color="primary" id="login-button" class="mr-4" type="submit">entrar</v-btn>
    </v-form>
  </LoginBox>
</template>
