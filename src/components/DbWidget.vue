<template>
  <DbContainer class="widget">
    <slot />
    <DbButton @click="deleteSelf"> Delete this widget</DbButton>
  </DbContainer>
</template>

<script setup lang="ts">
import DbContainer from "@/components/DbContainer.vue";
import DbButton from "@/components/DbButton.vue";
import { useDashboard } from "@/composables/useDashboard";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
});

const dashboard = useDashboard("test");

function deleteSelf() {
  console.log(props.id);
  dashboard.dashboard.value?.deleteWidget(props.id);
}
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
