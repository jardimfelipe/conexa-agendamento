import { shallowMount } from '@vue/test-utils';
import NotLoggedLayout from './not-logged.vue';

describe('@layouts/not-logged.vue', () => {
  it('should render a content', () => {
    const slotContent = '<p>Hello!</p>';
    const { element } = shallowMount(NotLoggedLayout, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
