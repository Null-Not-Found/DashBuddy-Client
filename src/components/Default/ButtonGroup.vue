<template>
  <div class="db-button-group">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.db-button-group {
  display: flex;
  column-gap: 1rem;
Æ
  > button {
    flex-grow: 1;
  }
}
</style>
