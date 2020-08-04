import { actions, mutations, state } from './index';

jest.mock('@/service/auth.js', () => ({
  PostAppointment: jest.fn().mockResolvedValue({
    status: 200,
    data: {
      data: { name: 'user' },
    },
  }),
  GetAppointMentList: jest.fn().mockResolvedValue({
    status: 200,
    data: {
      data: [{ name: 'user' }],
    },
  }),
}));

describe('appointment actions', () => {
  it('should get a list of appointments and set it with SET_APPOINTMENT_LIST', async () => {
    const context = {
      commit: jest.fn(),
    };
    const appointmentList = [{ name: 'user' }];
    actions.fetchAppointmentList(context).then(() => {
      expect(context.commit).toHaveBeenCalledWith('SET_APPOINTMENT_LIST', appointmentList);
    });
  });
});

describe('appointment mutations', () => {
  it('should SET_APPOINTMENT_LIST save list of appointments', () => {
    const appointmentList = [{ name: 'user' }];
    mutations.SET_APPOINTMENT_LIST(state, appointmentList);
    expect(state.appointmentList).toBe(appointmentList);
  });
});
