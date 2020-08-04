import { mapState, mapActions } from 'vuex';

export const appointmentMethods = mapActions('appointment', [
  'createNewAppointment',
  'fetchAppointmentList',
]);

export const appointmentComputed = {
  ...mapState('appointment', ['appointmentList']),
};
