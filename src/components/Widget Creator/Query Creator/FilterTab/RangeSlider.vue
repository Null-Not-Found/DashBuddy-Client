<template>
  <div class="rangeSlider">
    <Slider v-model="value" :min="min" :max="max" />
  </div>
</template>

<script setup lang="ts">
import Slider from "@vueform/slider";
import { defineProps } from "vue";

let props = defineProps({
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
});

let value: number[] = [props.min, props.max];
</script>

<style src="@vueform/slider/themes/default.css">
.rangeSlider {
  display: flex;
  justify-content: center;
}
</style>
