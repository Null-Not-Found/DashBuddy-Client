<template>
  <div v-for="year in value" :key="year" class="picker">
    <div>
      <input type="checkbox" checked />
      {{ year }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  value: {
    type: Array as () => string[],
    required: true,
  },
});
</script>

<style scoped>
.picker {
  display: flex;
  flex-wrap: wrap;
}
</style>
