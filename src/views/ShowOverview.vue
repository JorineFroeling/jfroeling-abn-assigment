<template>
  <div class="show-overview">
    <header class="show-overview__header">
      <h1 class="show-overview__header-title">Popular shows by genre</h1>
      <SearchBar />
    </header>
    <ShowList />
  </div>
</template>

<script setup lang="ts">
  import ShowList from '@/components/ShowList.vue';
  import SearchBar from '@/components/SearchBar.vue';
</script>
