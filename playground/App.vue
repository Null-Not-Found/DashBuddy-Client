<template>
  <BarGraph />
</template>

<script setup lang="ts">
import BarGraph from "../src/components/Graphs/BarGraph.vue";
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
