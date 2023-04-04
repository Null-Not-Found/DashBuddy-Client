<template>
  <div
    class="absolute w-full min-h-full top-0 left-0 bg-black bg-opacity-70 flex justify-center items-center"
  >
    <DbContainer
      :title="title"
      :subTitle="subTitle"
      class="w-2/3 h-2/3 shadow-none"
    >
      <slot />
    </DbContainer>
  </div>
</template>

<script setup lang="ts">
import DbContainer from "@/components/Widget/WidgetContainer.vue";

defineProps({
  title: String,
  subTitle: String,
});
</script>
