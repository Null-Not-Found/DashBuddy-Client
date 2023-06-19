<template>
  <DefaultWidget :id="widget.id" :title="widget.title">
    <template #default>
      <BarGraph v-if="widget.chartType === 'bar'" />
      <LineGraph v-else-if="widget.chartType === 'line'" />
      <PieGraph v-else-if="widget.chartType === 'pie'" />
    </template>
  </DefaultWidget>
</template>

<script setup lang="ts">
import DefaultWidget from "@/components/Widget/DefaultWidget.vue";
import Widget from "@/BLL/Widget/Widget";
import BarGraph from "@/components/Graphs/BarGraph.vue";
import LineGraph from "@/components/Graphs/LineGraph.vue";
import PieGraph from "@/components/Graphs/PieGraph.vue";

let props = defineProps<{
  title: string;
  chartType: string;
}>();

let widget = new Widget(-1, props.title, props.chartType);
</script>

<style scoped></style>
