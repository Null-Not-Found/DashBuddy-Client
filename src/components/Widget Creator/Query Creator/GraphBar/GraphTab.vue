<template>
  <div class="graphbar">
    <div class="x-axis-dropdowns">
      <h1>X-axis</h1>
      <draggable
        :group="{ name: 'models', pull: false, put: true }"
        v-model="modelsXAxis"
        tag="ul"
      >
        <template #item="{ element }">
          <li class="bubble">{{ element.title }}</li>
        </template>
      </draggable>
    </div>
    <div class="y-axis-dropdowns">
      <h1>Y-axis</h1>
      <draggable
        class="y-axis-dropdowns"
        :group="{ name: 'fsjiowa', pull: false, put: true }"
        v-model="modelsYAxis"
        tag="ul"
      >
        <template #item="{ element }">
          <li class="bubble">{{ element.title }}</li>
        </template>
      </draggable>
    </div>
    <!-- graph implementation using D3 -->
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import Model from "@/Model/Model";
import Draggable from "vuedraggable";

let modelsXAxis = ref<Model[]>([]);

let modelsYAxis = ref<Model[]>([]);

interface YAxisDropdown {
  info: string | null;
  aggFn: string | null;
}

const xAxisInfo: Ref<string | null> = ref(null);
const xAxisAggFn: Ref<string | null> = ref(null);
const yAxisDropdowns: Ref<YAxisDropdown[]> = ref([{ info: null, aggFn: null }]);

const addYAxisDropdown = (): void => {
  yAxisDropdowns.value.push({ info: null, aggFn: null });
};
</script>

<style>
.graphbar {
  display: flex;
  align-items: flex-start;
}

.y-axis-dropdowns {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bubble {
  margin: 0.2rem;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #345b8a;
  color: white;
}

select {
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  margin: 10px;
  font-size: 16px;
}

button {
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: #345b8a;
  color: #fff;
  cursor: pointer;
  margin-left: 10px;
  font-size: 16px;
}

button:hover {
  background-color: #345b8a;
}

h1 {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
</style>
