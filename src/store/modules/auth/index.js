import { Login } from '@/service/auth';
import { saveState, getSavedState, removeState } from '@/utils/localStorage';

export const state = {
  currentUser: getSavedState('auth.currentUser'),
};

export const getters = {};

export const mutations = {
  SET_CURRENT_USER(state, newUser) {
    state.currentUser = newUser;
    saveState('auth.currentUser', newUser);
    saveState('auth.token', newUser.token);
  },
  REMOVE_USER(state) {
    state.currentUser = '';
    removeState('auth.currentUser');
    removeState('auth.token');
  },
};

export const actions = {
  async logIn({ commit }, credentials) {
    const resp = await Login(credentials);
    if (resp.status !== 200) return false;
    commit('SET_CURRENT_USER', resp.data.data);
    return resp;
  },
  logOut({ commit }) {
    commit('REMOVE_USER');
  },
};

const auth = {
  namespaced: true,
  mutations,
  state,
  actions,
};
export default auth;
