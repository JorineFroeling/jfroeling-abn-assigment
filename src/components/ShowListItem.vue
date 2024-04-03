<template>
  <li
    class="show__list-item"
    @click="$emit('select', show.id)"
    @keydown.enter="$emit('select', show.id)"
    role="link"
    tabindex="0"
    :aria-label="`View details for ${show.name}, rating: ${show.rating.average}`"
    :style="{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${show.image.medium})`,
    }"
  >
    <h3 class="show__list-item-title">{{ show.name }}</h3>
    <span>Rating: {{ show.rating.average }}</span>
  </li>
</template>

<script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  import type { Show } from '../types/types';

  export default defineComponent({
    name: 'ShowListItem',
    props: {
      show: {
        type: Object as PropType<Show>,
        required: true,
      },
    },
    emits: ['select'],
  });
</script>
