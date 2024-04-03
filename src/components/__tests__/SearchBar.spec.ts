import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SearchBar from '@/components/SearchBar.vue';

describe('Searchbar', () => {
  it('renders and contains an input', () => {
    const wrapper = mount(SearchBar);
    const input = wrapper.find('input[type="search"]');
    expect(input.exists()).toBe(true);
  });

  it('emits update:modelValue event on input', async () => {
    const wrapper = mount(SearchBar, {
      props: {
        modelValue: '',
      },
    });
    await wrapper.find('input[type="search"]').setValue('Comedy');
    expect(wrapper.emitted('update:modelValue')).toEqual([['Comedy']]);
  });
});
