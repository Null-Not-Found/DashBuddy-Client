<template>
  <splitpanes
    class="default-theme"
    :push-other-panes="false"
    style="height: 400px"
  >
    <pane size="50%" min-size="5" max-size="70">
      <span> <ModelExplorer/> </span>
    </pane>
    <pane>
      <splitpanes :push-other-panes="false" horizontal>
        <pane min-size="10">
          <span> <QuerryCreator /> </span>
        </pane>
        <pane min-size="10">
          <span> <WidgetPreview/> </span>
        </pane>
      </splitpanes>
    </pane>
  </splitpanes>
</template>

<script setup lang="ts">
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import QuerryCreator from "@/components/Widget Creator/QuerryCreator.vue";
import ModelExplorer from "@/components/Widget Creator/ModelExplorer.vue";
import WidgetPreview from "@/components/Widget Creator/WidgetPreview.vue";
</script>

<style scoped></style>
