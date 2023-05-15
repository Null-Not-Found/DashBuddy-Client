<template>
  <header class="titleBar">
    <div>
      <input type="text" placeholder="New Widget" v-model="text" />
    </div>
    <div>
      <base-button><i class="fa-solid fa-plus fa-xl"></i></base-button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "@/components/Default/BaseButton.vue";
const text = ref();
</script>

<style scoped>
.titleBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: #fff;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

input {
  border: none;
  outline: none;
  font-size: xx-large;
}
</style>
