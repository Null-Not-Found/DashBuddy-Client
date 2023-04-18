<template>
  <label>
    {{ label }}:
    <select
      v-model="selectValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </label>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

interface Option {
  label: string;
  value: string;
}

const props = defineProps<{
  label: string;
  modelValue: string;
  options: Option[];
}>();

const selectValue = ref(props.modelValue);
</script>

<style scoped>
label {
  display: block;
  font-size: 1.4rem;
}

select {
  padding: 0.5rem;
  width: 100%;
}
</style>
