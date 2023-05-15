<template>
  <div>
    <label></label>
    <Slider v-model="value" :min="min" :max="max" />
  </div>
</template>

<script setup lang="ts">
import Slider from "@vueform/slider";
import { defineProps } from "vue";

defineProps({
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
  },
});

let value: number[] = [0, 100];
</script>

<style src="@vueform/slider/themes/default.css"></style>
