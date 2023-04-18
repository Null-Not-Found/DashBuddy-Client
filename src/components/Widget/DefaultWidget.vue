<template>
  <BaseContainer :title="title" class="widget">
    <template #icons>
      <slot name="icons" />
    </template>
    <template #default>
      <slot />
    </template>
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseContainer from "@/components/Default/BaseContainer.vue";

defineProps<{
  id: number;
  title: string;
}>();

// const dashboard = useDashboard("test");

// function deleteSelf() {
//   console.log(props.id);
//   dashboard.dashboard.value?.deleteWidget(props.id);
// }
</script>

<style scoped>
.widget {
  display: inline-block;
  grid-column-start: v-bind(x + 1);
  grid-column-end: v-bind(x + 1 + width);
  grid-row-start: v-bind(y + 1);
  grid-row-end: v-bind(y + 1 + height);

  background-color: white;
  padding: 1rem;
  margin: 0.5rem;
}
</style>
