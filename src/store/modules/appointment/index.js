import { PostAppointment, GetAppointMentList } from '@/service/appointment';

export const state = {
  appointmentList: [],
};

export const getters = {};

export const mutations = {
  SET_APPOINTMENT_LIST(state, newList) {
    state.appointmentList = newList;
  },
};

export const actions = {
  async createNewAppointment(_, appointment) {
    const resp = await PostAppointment(appointment);
    return resp;
  },
  async fetchAppointmentList({ commit }) {
    const resp = await GetAppointMentList();
    commit('SET_APPOINTMENT_LIST', resp.data.data);
    return resp;
  },
};

const appointment = {
  namespaced: true,
  mutations,
  state,
  actions,
};
export default appointment;
