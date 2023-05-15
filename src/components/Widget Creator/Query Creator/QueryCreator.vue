<template>
  <TitleBar />
  <!--  <GraphTypePicker />-->
  <div>
    <TabList ref="tabList">
      <template #graph>
        <GraphTab />
      </template>
      <template #filter>
        <FilterTab
          type="Year"
          :value="['2017', '2018', '2019', '2020', '2021', '2022', '2023']"
        />
      </template>
    </TabList>
  </div>
</template>

<script setup lang="ts">
import TitleBar from "@/components/Widget Creator/Query Creator/TitleBar.vue";
import TabList from "@/components/Default/TabList.vue";
import { onMounted, ref } from "vue";
import GraphTab from "@/components/Widget Creator/Query Creator/GraphBar/GraphTab.vue";
import FilterTab from "@/components/Widget Creator/Query Creator/FilterTab/FilterTab.vue";

const tabList = ref();

onMounted(() => {
  if (tabList.value) {
    console.log(tabList.value);
    tabList.value.registerTab("graph", "Graph");
    tabList.value.registerTab("filter", "Filter");
  }
});
</script>
