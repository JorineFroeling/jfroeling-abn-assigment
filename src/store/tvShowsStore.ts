import { defineStore } from 'pinia';
import { fetchShowsByPage } from '../services/tvShowsService';
import { fetchShowDetailsById } from '../services/showDetailsService';
import type { Show } from '../types/types';

export const useTvShowsStore = defineStore('tvShows', {
  state: () => ({
    shows: [] as Show[],
    loading: false,
    error: null as Error | null,
    selectedShowId: null as number | null,
    selectedShow: null as Show | null,
    searchQuery: '',
  }),
  actions: {
    async loadShows(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const shows = await fetchShowsByPage(page);
        this.shows = shows;
      } catch (e) {
        this.error = e instanceof Error ? e : new Error(String(e));
      } finally {
        this.loading = false;
      }
    },
    async loadShowDetails(showId: number) {
      this.loading = true;
      this.error = null;
      try {
        const showDetails = await fetchShowDetailsById(showId);
        this.selectedShow = showDetails;
      } catch (e) {
        this.error = e instanceof Error ? e : new Error(String(e));
      } finally {
        this.loading = false;
      }
    },
    setSelectedShowId(showId: number | null) {
      this.selectedShowId = showId;
    },
  },
  getters: {
    sortedGenreLists: (state) => {
      if (!state.searchQuery) {
        const sortedLists: Record<string, Show[]> = {};
        state.shows.forEach((show) => {
          if (show.rating.average > 7) {
            show.genres.forEach((genre) => {
              if (!sortedLists[genre]) {
                sortedLists[genre] = [];
              }
              sortedLists[genre].push(show);
            });
          }
        });

        for (const genre in sortedLists) {
          sortedLists[genre].sort((a, b) => b.rating.average - a.rating.average);
        }

        return sortedLists;
      }
      return {};
    },
    uniqueSearchResults: (state) => {
      if (state.searchQuery) {
        const results = state.shows
          .filter(
            (show) =>
              show.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
              show.genres.some((genre) =>
                genre.toLowerCase().includes(state.searchQuery.toLowerCase()),
              ),
          )
          .filter((show) => show.rating.average > 7);

        const unique = Array.from(new Map(results.map((show) => [show.id, show])).values());
        return unique;
      }
      return [];
    },
  },
});
