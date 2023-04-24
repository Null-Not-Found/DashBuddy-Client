<template>
  <div class="db-dashboard">
    <WidgetCreate />
    <div class="db-widgets-container">
      <template v-for="widget in widgets" :key="widget.id">
        <DefaultWidget :id="widget.id" :title="widget.title">
          <template #icons>
            <i class="fa fa-xmark" @click="deleteWidget(widget.id)"></i>
          </template>
          <template #default>
            <BarGraph v-if="widget.chartType === 'bar'" />
            <LineGraph v-else-if="widget.chartType === 'line'" />
            <PieGraph v-else-if="widget.chartType === 'pie'" />
          </template>
        </DefaultWidget>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@fortawesome/fontawesome-free/css/all.css";
import WidgetCreate from "@/components/Widget/WidgetCreate.vue";
import { useDashboard } from "@/composables/useDashboard";
import DefaultWidget from "@/components/Widget/DefaultWidget.vue";
import BarGraph from "@/components/Graphs/BarGraph.vue";
import LineGraph from "@/components/Graphs/LineGraph.vue";
import PieGraph from "@/components/Graphs/PieGraph.vue";

const { widgets, deleteWidget } = useDashboard("test");
</script>

<style>
.db-dashboard {
  padding: 2rem;
  background-color: #f2f2f2;

  > * {
    margin: 0;
    padding: 0;
  }
}
</style>
