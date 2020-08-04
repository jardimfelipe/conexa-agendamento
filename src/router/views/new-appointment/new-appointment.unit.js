import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import NewAppointment from './new-appointment.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('@views/new-appointment', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        appointment: {
          namespaced: true,
          actions: {
            createNewAppointment(_, appointment) {
              return appointment;
            },
          },
        },
      },
    });
  });
  it('should not send form with validation errors', async () => {
    const FormStub = {
      render: () => {},
      methods: {
        validate: () => false,
      },
    };
    const createNewAppointment = jest.fn();
    const wrapper = shallowMount(NewAppointment, {
      localVue,
      store,
      stubs: {
        'v-form': FormStub,
      },
    });
    wrapper.vm.submitHandler();
    await wrapper.vm.$nextTick();
    expect(createNewAppointment).not.toHaveBeenCalled();
  });
  it('should redirect after successfull submit', async () => {
    const FormStub = {
      render: () => {},
      methods: {
        validate: () => true,
      },
    };
    const wrapper = shallowMount(NewAppointment, {
      localVue,
      store,
      stubs: {
        'v-form': FormStub,
      },
    });
    const routerPush = jest.fn();
    const swal = jest.fn().mockResolvedValue({ status: true });
    wrapper.vm.$router = { push: routerPush };
    wrapper.vm.$swal = swal;
    wrapper.vm.submitHandler();
    await wrapper.vm.$nextTick();
    setTimeout(() => {
      expect(routerPush).toHaveBeenCalledWith('/');
    }, 3000);
  });
});
