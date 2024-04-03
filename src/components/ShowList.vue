<template>
  <main>
    <div
      v-if="store.loading"
      aria-live="assertive"
    >
      <LoadingSpinner />
    </div>
    <template v-else-if="store.searchQuery">
      <ul
        class="search-results__list"
        aria-live="polite"
      >
        <ShowListItem
          v-for="show in store.uniqueSearchResults"
          :key="show.id"
          :show="show"
          @select="loadShowDetails"
        />
      </ul>
    </template>
    <template v-else>
      <section
        v-for="(sortedShows, genre) in store.sortedGenreLists"
        :key="genre"
        class="genre__collection"
        role="region"
        :aria-labelledby="'genre-title-' + genre"
      >
        <h2
          :id="'genre-title-' + genre"
          class="genre__collection-title"
        >
          {{ genre }}
        </h2>
        <ul
          class="show__list"
          aria-live="polite"
        >
          <ShowListItem
            v-for="show in sortedShows"
            :key="show.id"
            :show="show"
            @select="loadShowDetails"
          />
        </ul>
      </section>
    </template>
  </main>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useTvShowsStore } from '@/store/tvShowsStore';
  import ShowListItem from './ShowListItem.vue';
  import LoadingSpinner from './LoadingSpinner.vue';
  import { useRouter } from 'vue-router';

  const store = useTvShowsStore();
  const router = useRouter();

  const loadShowDetails = (showId: number) => {
    store.loadShowDetails(showId);
    router.push({ name: 'show-detail', params: { id: showId } });
  };

  onMounted(() => {
    if (!store.shows.length) {
      store.loadShows();
    }
  });
</script>
