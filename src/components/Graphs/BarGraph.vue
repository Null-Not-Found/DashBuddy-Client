<template>
  <canvas ref="chartCanvas"></canvas>
</template>

<script setup lang="ts">
import Chart from "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";
import { computed, onMounted, reactive, ref } from "vue";

const chartCanvas = ref();

let chartData = computed<ChartData<"bar">>(() => data);

const data = reactive<ChartData<"bar">>({
  labels: ["Jan", "Feb", "Mar", "Apr", "Jun"],
  datasets: [
    {
      label: "Example",
      data: [1, 22, 4, 5, 56],
    },
  ],
});

const chartOptions: ChartOptions<"bar"> = {
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};
onMounted(() => {
  new Chart(chartCanvas.value, {
    type: "bar",
    data: chartData.value,
    options: chartOptions,
  });
});
</script>

<style scoped></style>
