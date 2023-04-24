<template>
  <div class="app-container">
    <suspense>
      <DbDashboard id="mainDashboard" />
    </suspense>
  </div>
</template>

<script setup lang="ts">
import { DbDashboard } from "../src";
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#mainDashboard {
  width: calc(100vw - 4rem);
  height: calc(100vh - 4rem);
}
</style>
