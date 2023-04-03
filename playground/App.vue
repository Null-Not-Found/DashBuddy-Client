<template>
  <div class="app-container">
    <suspense>
      <DbDashboard id="mainDashboard"> test </DbDashboard>
    </suspense>
  </div>
</template>

<script setup lang="ts">
import { DbDashboard } from "../src";
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#mainDashboard {
  width: calc(100vw);
  height: calc(100vh);
}
</style>
