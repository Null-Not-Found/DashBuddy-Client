<template>
  <widget-creator class="creator"></widget-creator>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useDashboard } from "@/composables/useDashboard";
import WidgetCreator from "@/components/Widget Creator/WidgetCreator.vue";

const showModal = ref(true);

const widget = reactive({
  title: "",
  chart: "",
});

const dashboard = useDashboard("test");

function createWidget() {
  if (widget.title === "") {
    alert("Widget title is empty.");
    return;
  }

  if (widget.chart === "") {
    alert("Widget chart is empty.");
    return;
  }

  showModal.value = false;

  dashboard.createWidget(widget.title, widget.chart);
}
</script>

<style scoped>
.creator{
  display: flex;
  justify-content: stretch;
  align-items: stretch;
}

button {
  margin-top: 1rem;
}
</style>
