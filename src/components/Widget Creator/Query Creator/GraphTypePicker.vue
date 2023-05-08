<template>
  <div class="bar">
    <input type="radio" name="chartType" value="simple" />
    <i class="fa-solid fa-chart-simple"></i>

    <input type="radio" name="chartType" value="pie" />
    <i class="fa-solid fa-chart-pie"></i>

    <input type="radio" name="chartType" value="line" />
    <i class="fa-solid fa-chart-line"></i>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.bar {
  display: flex;
  align-items: center;
  padding: 0 1rem;
}
</style>
