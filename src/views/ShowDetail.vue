<template>
  <div class="show-detail">
    <router-link
      :to="{ name: 'show-overview' }"
      class="show-detail__return"
      aria-label="Return to show overview"
    >
      ← return to shows
    </router-link>
    <div
      v-if="isLoading"
      aria-live="assertive"
    >
      <LoadingSpinner />
    </div>
    <section
      v-else
      class="show-detail__content"
    >
      <img
        :src="selectedShow?.image.original"
        class="show-detail__content-img"
        :alt="selectedShow?.name"
      />
      <div class="show-detail__content-info">
        <div class="show-detail__content-info__header">
          <h2>{{ selectedShow?.name }}</h2>
          <p>
            {{ selectedShow?.premiered ? new Date(selectedShow.premiered).getFullYear() : '' }}
            • {{ selectedShow?.genres.join(', ') }}
          </p>
        </div>
        <div class="show-detail__content-info__extra">
          <p>Rating: {{ selectedShow?.rating?.average }}</p>
          <p>Language: {{ selectedShow?.language }}</p>
        </div>
        <div
          class="show-detail__content-summary"
          v-html="selectedShow?.summary"
        ></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, computed } from 'vue';
  import { useTvShowsStore } from '@/store/tvShowsStore';
  import LoadingSpinner from '@/components/LoadingSpinner.vue';

  const store = useTvShowsStore();
  const selectedShow = computed(() => store.selectedShow);
  const isLoading = computed(() => store.loading);

  onMounted(() => {
    if (store.selectedShowId) {
      store.loadShowDetails(store.selectedShowId);
    }
  });
</script>
