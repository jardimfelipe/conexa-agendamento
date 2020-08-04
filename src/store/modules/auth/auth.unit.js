import { actions, mutations, state } from '@/store/modules/auth';
import flushPromises from 'flush-promises';

jest.mock('@/service/auth.js', () => ({
  Login: jest.fn().mockResolvedValue({
    status: 200,
    data: {
      data: { name: 'user' },
    },
  }),
}));

describe('auth actions', () => {
  it('should logIn set new current user after successfull login calling SET_CURRENT_USER', async () => {
    const context = {
      commit: jest.fn(),
    };
    const currentUser = { name: 'user' };
    actions.logIn(context);
    await flushPromises();
    expect(context.commit).toHaveBeenCalledWith('SET_CURRENT_USER', currentUser);
  });
});

describe('auth mutations', () => {
  it('should SET_CURRENT_USER saves user infos in localStorage', () => {
    const currentUser = { name: 'user' };
    mutations.SET_CURRENT_USER(state, currentUser);
    expect(state.currentUser).toBe(currentUser);
  });
});
