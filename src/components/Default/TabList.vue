<template>
  <div>
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTabIndex = index"
        :class="{ active: activeTabIndex === index }"
        class="tab-item"
      >
        {{ tab.title }}
      </div>
    </div>
    <div class="tab-content">
      <slot
        v-if="tabs[activeTabIndex]"
        :name="tabs[activeTabIndex].name"
      ></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Tab {
  name: string;
  title: string;
}

const tabs = ref<Tab[]>([]);
const activeTabIndex = ref<number>(0);

function registerTab(name: string, title: string) {
  tabs.value.push({ name, title });
}

defineExpose({
  registerTab,
});
</script>

<style>
.tabs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}

.tabs div {
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
}

.tabs div.active {
  background-color: #ccc;
}

.tab-content {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
