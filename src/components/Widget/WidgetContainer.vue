<template>
  <div class="bg-white rounded shadow shadow-neutral-200">
    <h1 v-if="title" class="text-xl pt-4 px-4">{{ title }}</h1>
    <h2 v-if="subTitle" class="text-lg px-4 text-gray-400">{{ subTitle }}</h2>
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
