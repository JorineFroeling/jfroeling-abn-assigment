import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import ShowList from '@/components/ShowList.vue';
import { useTvShowsStore } from '@/store/tvShowsStore';

describe('ShowList', () => {
  it('should render a loading spinner when isLoading is true', async () => {
    setActivePinia(createPinia());
    const store = useTvShowsStore();
    store.$patch({ loading: true });

    const wrapper = mount(ShowList, {
      global: {
        plugins: [createPinia()],
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent({ name: 'LoadingSpinner' }).exists()).toBe(true);
  });
});
