import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AppBar from './app-bar.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('@components/app-bar.vue', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        auth: {
          namespaced: true,
          state: {
            currentUser: 'Felipe',
          },
        },
      },
    });
  });
  it('should display new appointment button when in home', () => {
    const $route = {
      path: '/',
      meta: {
        backButton: false,
      },
    };
    const wrapper = shallowMount(AppBar, {
      localVue,
      store,
      mocks: {
        $route,
      },
    });
    const button = wrapper.find('#new-appointment');
    expect(button).not.toBe(undefined);
  });
});
