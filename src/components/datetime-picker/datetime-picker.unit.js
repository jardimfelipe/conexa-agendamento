import { shallowMount } from '@vue/test-utils';
import DatetimePicker from './datetime-picker.vue';

describe('components/datetime-picker', () => {
  it('should format date to brazilian format', async () => {
    const expectedResult = '03/08/2020 12:00';
    const localThis = {
      hasPickedDateAndTime: true,
      date: '2020/08/03',
      time: '12:00',
    };
    const formattedDate = DatetimePicker.computed.formattedDate.call(localThis);
    expect(formattedDate).toBe(expectedResult);
  });
  it('should submitHandler close modal, change tab to first and emit input event', async () => {
    const wrapper = shallowMount(DatetimePicker, {
      data() {
        return {
          modal: true,
          activeTab: 1,
        };
      },
    });
    wrapper.vm.submitHandler();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.modal).toBe(false);
    expect(wrapper.vm.activeTab).toBe(0);
    expect(wrapper.emitted().input).not.toBe(undefined);
  });
  it('should nextTab change to last tab', async () => {
    const wrapper = shallowMount(DatetimePicker, {
      data() {
        return {
          activeTab: 0,
        };
      },
    });
    wrapper.vm.nextTab();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.activeTab).toBe(1);
  });
});
