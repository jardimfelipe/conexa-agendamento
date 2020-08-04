import { mapState, mapActions } from 'vuex';

export const authMethods = mapActions('auth', ['logIn', 'logOut']);

export const authComputed = {
  ...mapState('auth', ['currentUser']),
};
