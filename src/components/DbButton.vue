<template>
  <button class="bg-neutral-200 rounded p-2">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  background: #98d2eb;
  color: #000;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 10px;
}

button:hover {
  filter: brightness(85%);
}
</style>
