<template>
  <splitpanes
    class="default-theme"
    :push-other-panes="false"
  >
    <pane max-size="20">
      <span> <ModelExplorer /> </span>
    </pane>
    <pane>
      <splitpanes :push-other-panes="false" horizontal>
        <pane>
          <span> <QueryCreator /> </span>
        </pane>
        <pane>
          <span> <WidgetPreview /> </span>
        </pane>
      </splitpanes>
    </pane>
  </splitpanes>
</template>

<script setup lang="ts">
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import QueryCreator from "@/components/Widget Creator/Query Creator/QueryCreator.vue";
import ModelExplorer from "@/components/Widget Creator/Model Explorer/ModelExplorer.vue";
import WidgetPreview from "@/components/Widget Creator/Widget Preview/WidgetPreview.vue";
</script>

<style scoped></style>
