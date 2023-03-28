<template>
  <div class="db-dashboard">
    <DbWidget v-for="widget in dashboard.widgets" :height="widget.height" :width="widget.width" :y="widget.y" :x="widget.x">
      {{ widget.id }}
    </DbWidget>
    <button @click="addWidget()">Add widget</button>
  </div>
</template>

<script setup lang="ts">
import DbWidget from "@/components/DbWidget.vue";
import {computed, reactive, ref} from "vue";
import DashboardCollection from "@/BLL/DashboardCollection";
import Dashboard from "@/BLL/Dashboard";

const dashboardCollection = new DashboardCollection()

let db: Dashboard | undefined;

try {
  db = await dashboardCollection.fetchDashboard('test');
} catch (e) {
  db = await dashboardCollection.createDashboard();
}

const dashboard = reactive(db)

const columns = ref(4);
const rows = ref(3);

let index = 0;
function addWidget() {
  index++;
  dashboard.createWidget('test', index, 0, 1, 2)
}

function generateFractions(amount: number) {
  const joiner = '1fr '
  let output = ''

  for (let i = 0; i < amount; i++) {
    output += joiner
  }

  return output
}

const columnsFractions = computed(() => {
  return generateFractions(columns.value)
})

const rowsFractions = computed(() => {
  return generateFractions(rows.value)
})

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
</script>

<style>
.db-dashboard {
  background-color: #3f3f3f;
  padding: 4px;

  display: grid;
  grid-template-columns: v-bind(columnsFractions);
  grid-template-rows: v-bind(rowsFractions);
}

.db-table {
  width: 100%;
  border-collapse: collapse;
}

.db-table th {
  padding: 1rem;
  text-align: left;
  background-color: darkgray;
}

.db-table td {
  padding: 1rem;
}

.db-table tr:nth-child(odd) {
  background-color: #eaeaea;
}

.db-table tr:nth-child(even) {
  background-color: #cfcfcf;
}
</style>