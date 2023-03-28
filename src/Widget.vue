<template>
  <div class="widget">
    Widget
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
.widget {
  grid-column-start: v-bind(x + 1);
  grid-column-end: v-bind(x + 1 + width);
  grid-row-start: v-bind(y + 1);
  grid-row-end: v-bind(y + 1 + height);

  background-color: white;
  padding: 1rem;
  margin: 0.5rem;
}
</style>