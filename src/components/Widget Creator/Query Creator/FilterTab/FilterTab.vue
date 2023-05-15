<template>
  <label>{{ type }}</label>
  <ValuePicker v-if="isStringArray" :value="value"></ValuePicker>
  <RangeSlider v-else :min="value[0]" :max="value[1]"></RangeSlider>
</template>

<script setup lang="ts">
import ValuePicker from "@/components/Widget Creator/Query Creator/FilterTab/ValuePicker.vue";
import RangeSlider from "@/components/Widget Creator/Query Creator/FilterTab/RangeSlider.vue";

const props = defineProps<{
  value: String[] | number[];

  type: {
    type: String;
  };
}>();

let isStringArray: boolean = typeof props.value[0] === "string";
</script>

<style scoped></style>
