<template>
  <div class="bg-neutral-100 p-4">
    <DbHeader />
    <div class="grid db-grid">
      <DbWidget
        v-for="widget in dashboard.dashboard.value?.widgets"
        :id="widget.id"
        :title="widget.title"
        :x="widget.x"
        :y="widget.y"
        :width="widget.width"
        :height="widget.height"
      >
        {{ widget.id }}
      </DbWidget>
    </div>
  </div>
</template>

<script setup lang="ts">
import DbWidget from "@/components/CoWidget.vue";
import { computed } from "vue";
import DbHeader from "@/components/CoHeader.vue";
import { useDashboard } from "@/composables/useDashboard";

const dashboard = useDashboard("test");

function generateFractions(amount: number) {
  const joiner = "1fr ";
  let output = "";

  for (let i = 0; i < amount; i++) {
    output += joiner;
  }

  return output;
}

const columnsFractions = computed(() => {
  if (dashboard.dashboard.value?.columns) {
    return generateFractions(dashboard.dashboard.value.columns);
  }
  return "1fr";
});

const rowsFractions = computed(() => {
  if (dashboard.dashboard.value?.rows) {
    return generateFractions(dashboard.dashboard.value.rows);
  }
  return "1fr";
});
</script>

<style>
.db-grid {
  grid-template-columns: v-bind(columnsFractions);
  grid-template-rows: v-bind(rowsFractions);
}
</style>
