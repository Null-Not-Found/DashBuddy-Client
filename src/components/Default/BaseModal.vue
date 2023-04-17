<template>
  <div class="db-modal-background">
    <BaseContainer :title="title" class="db-modal-container">
      <slot />
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import BaseContainer from "@/components/Default/BaseContainer.vue";

defineProps<{
  title: string;
}>();
</script>

<style scoped lang="scss">
.db-modal-background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.db-modal-container {
  min-width: 20%;
  min-height: 10%;
}
</style>
