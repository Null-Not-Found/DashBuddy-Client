<template>
  <BarGraph />
</template>

<script setup lang="ts">
import BarGraph from "../src/components/Graphs/BarGraph.vue";
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
