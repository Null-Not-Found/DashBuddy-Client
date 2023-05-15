<template>
  <TitleBar />
  <!--  <GraphTypePicker />-->
  <div>
    <TabList ref="tabList">
      <template #graph>
        <GraphBar />
      </template>
      <template #filter> </template>
    </TabList>
  </div>
</template>

<script setup lang="ts">
import TitleBar from "@/components/Widget Creator/Query Creator/TitleBar.vue";
import TabList from "@/components/Default/TabList.vue";
import GraphBar from "@/components/Widget Creator/Query Creator/GraphBar.vue";
import { onMounted, ref } from "vue";

const tabList = ref();

onMounted(() => {
  if (tabList.value) {
    console.log(tabList.value);
    tabList.value.registerTab("graph", "Graph");
    tabList.value.registerTab("filter", "Filter");
  }
});
</script>
