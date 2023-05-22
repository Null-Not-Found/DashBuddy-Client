<template>
  <div class="bubble">{{ modelName }}</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  id: Number,
  modelName: String,
});
</script>

<style scoped>
.bubble {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #345b8a;
  color: white;
}
</style>
