<template>
  <div class="search__container">
    <p class="search__title">Find your favorite show</p>
    <form @submit.prevent="submitSearch">
      <input
        type="search"
        v-model="internalQuery"
        @input="updateSearchQuery"
        placeholder="Search by name or genre.."
        class="search__input"
        aria-label="Search shows"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useTvShowsStore } from '@/store/tvShowsStore';

  const props = defineProps({
    modelValue: String,
  });

  const store = useTvShowsStore();
  const internalQuery = ref(props.modelValue || '');

  function updateSearchQuery() {
    store.searchQuery = internalQuery.value;
  }

  function submitSearch() {
    // You might want to trigger a search or navigation based on the query
    // For example, load shows based on the search query
    // store.loadShowsBasedOnQuery(internalQuery.value); // If you have such an action
  }
</script>
