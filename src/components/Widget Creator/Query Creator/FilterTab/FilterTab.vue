<template>
  <RangeSlider :min="min" :max="max"></RangeSlider>
  <ValuePicker :value="years"></ValuePicker>
</template>

<script setup lang="ts">
import ValuePicker from "@/components/Widget Creator/Query Creator/FilterTab/ValuePicker.vue";
import RangeSlider from "@/components/Widget Creator/Query Creator/FilterTab/RangeSlider.vue";
const years: number[] = [2018, 2019, 2020, 2021, 2022];
const min: number = 5;
const max: number = 40;
</script>

<style scoped></style>
