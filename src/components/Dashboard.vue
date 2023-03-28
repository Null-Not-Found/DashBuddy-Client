<template>
  <div class="db-dashboard">
    <Widget :x="0" :y="0" :width="2" :height="4">
      <table class="db-table">
        <tr>
          <th>Product</th>
          <th>Stock</th>
        </tr>
        <tr v-for="i in ['Apple', 'Orange', 'Banana', 'Avocado', 'Watermelon', 'Pear']">
          <td>{{ i }}</td>
          <td>{{ getRndInteger(1, 20) }}</td>
        </tr>
      </table>
    </Widget>
    <Widget :x="2" :y="0" :width="2" :height="2">
      <Line
          :options="{
            responsive: true
          }"
        :data="{
            labels: [ 'January', 'February', 'March' ],
            datasets: [
              {
                label: 'Sales (1000x)',
                backgroundColor: ['#e4442b'],
                data: [23, 12, 7]
              }
            ]
          }"
      />
    </Widget>
    <Widget :x="2" :y="2" :width="2" :height="1">
      <Doughnut
          :options="{
            responsive: true
          }"
        :data="{
            labels: [ 'Sold', 'In stock', 'Out of stock' ],
            datasets: [
              {
                backgroundColor: ['#41B883', '#00D8FF', '#E46651'],
                data: [40, 20, 12]
              }
            ]
          }"
      /></Widget>
    <Widget :x="2" :y="3" :width="2" :height="1"></Widget>
  </div>
</template>

<script setup lang="ts">
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'
import { Doughnut, Line } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, PointElement, LineElement)

import Widget from "@/components/Widget.vue";
import {computed, ref} from "vue";

const columns = ref(4);
const rows = ref(4);

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