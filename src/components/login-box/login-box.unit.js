import { shallowMount } from '@vue/test-utils';
import LoginBox from './login-box.vue';

describe('@components/login-box.vue', () => {
  it('should render a content', () => {
    const slotContent = '<p>Hello!</p>';
    const { element } = shallowMount(LoginBox, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
