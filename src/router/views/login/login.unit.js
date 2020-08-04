import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Login from './login.vue';

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
          },
        },
      },
    });
  });
  it('should redirect to home page after successfull login', async () => {
    const wrapper = shallowMount(Login, {
      localVue,
      store,
      data() {
        return {
          model: {
            email: 'jardim.felipe@hotmail.com',
            password: 'password',
          },
        };
      },
    });
    const routerPush = jest.fn();
    wrapper.vm.$router = { push: routerPush };
    wrapper.vm.$route = { query: {} };
    wrapper.vm.tryToLogin();
    await wrapper.vm.$nextTick();
    expect(routerPush).toHaveBeenCalledWith('/');
  });
});
