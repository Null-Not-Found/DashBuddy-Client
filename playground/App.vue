<template>
  <div class="app-container">
    <Dashboard id="mainDashboard">
      test
    </Dashboard>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Dashboard from "../src/Dashboard.vue";

const showSlider = ref(true);
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#mainDashboard {
  width: calc(100% - 8px);
  height: calc(100vh - 8px);
}
</style>
