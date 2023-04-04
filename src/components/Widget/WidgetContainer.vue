<template>
  <div class="rounded-lg border border-gray-300 bg-white shadow-lg">
    <h1 v-if="title">{{ title }}</h1>
    <h2 v-if="subTitle">{{ subTitle }}</h2>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: String,
  subTitle: String,
});
</script>
