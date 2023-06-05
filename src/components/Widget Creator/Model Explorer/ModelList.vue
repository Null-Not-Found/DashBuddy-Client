<template>
  <draggable
    :group="{ name: 'models', pull: 'clone', put: false }"
    v-model="models"
    tag="ul"
  >
    <template #item="{ element }">
      <li class="bubble">{{ element.title }}</li>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import Draggable from "vuedraggable";
import { defineProps } from "vue";
import Model from "@/Model/Model";

defineProps<{ models: Model[] }>();
</script>

<style scoped>
.bubble {
  margin: 0.2rem;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #345b8a;
  color: white;
}
</style>
