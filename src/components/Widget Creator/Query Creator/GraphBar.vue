<template>
  <div class="graphbar">
    <div class="x-axis-dropdowns">
      <h1>X-axis</h1>
      <select v-model="xAxisInfo">
        <option>Date</option>
      </select>
      <select v-model="xAxisAggFn">
        <option>Year</option>
        <option>Month</option>
        <option>Week</option>
        <option>Day</option>
      </select>
    </div>
    <div class="y-axis-dropdowns">
      <h1>Y-axis</h1>
      <div v-for="(yAxis, index) in yAxisDropdowns" :key="index">
        <select v-model="yAxis.info">
          <option>Amount of products</option>
          <option>Price</option>
        </select>
        <select v-model="yAxis.aggFn">
          <option>Sum</option>
          <option>Avg</option>
          <option>Min</option>
          <option>Max</option>
        </select>
      </div>
      <button @click="addYAxisDropdown">Add Y Axis</button>
    </div>
    <!-- graph implementation using D3 -->
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

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

.dropdowns-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.y-axis-dropdowns {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dropdown-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
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
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  margin-left: 10px;
  font-size: 16px;
}

button:hover {
  background-color: #0069d9;
}

h1 {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
</style>
