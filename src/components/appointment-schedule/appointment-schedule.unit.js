import { shallowMount } from '@vue/test-utils';
import AppointmentSchedule from './appointment-schedule.vue';

describe('components/appointment-schedule', () => {
  it('should format date to datespan', async () => {
    const inputDate = '23/04/2020 08:30';
    const expectedResult = new Date('2020-04-23 08:30');
    const wrapper = shallowMount(AppointmentSchedule, {
      data() {
        return {
          modal: true,
          activeTab: 1,
        };
      },
    });
    const newDate = wrapper.vm.getFormattedDate(inputDate);
    expect(newDate).toStrictEqual(expectedResult);
  });
});
