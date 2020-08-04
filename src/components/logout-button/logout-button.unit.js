import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import LogoutButton from './logout-button.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('@views/login', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        auth: {
          namespaced: true,
          actions: {
            logIn(_, { email, password }) {
              if (email === 'jardim.felipe@hotmail.com' && password === 'password') {
                return true;
              }
              return false;
            },
            logOut() {
              return true;
            },
          },
        },
      },
    });
  });
  it('should redirect to home page after successfull login', async () => {
    const wrapper = shallowMount(LogoutButton, {
      localVue,
      store,
    });
    const routerPush = jest.fn();
    wrapper.vm.$router = { push: routerPush };
    wrapper.vm.logoutUser();
    await wrapper.vm.$nextTick();
    expect(routerPush).toHaveBeenCalledWith('/login');
  });
});
