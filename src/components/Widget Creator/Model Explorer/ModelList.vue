<template>
  <div class="models">
    <ModelBubble
      v-for="model in models"
      :key="model.id"
      :model-name="model.name"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import ModelBubble from "@/components/Widget Creator/Model Explorer/ModelBubble.vue";

const props = defineProps({
  models: Array,
});
</script>

<style scoped>
.models {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
}
</style>
