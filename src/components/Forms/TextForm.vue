<template>
  <label>
    {{ label }}:
    <input
      v-model="inputValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const inputValue = ref(props.modelValue);
</script>

<style scoped>
label {
  display: block;
  font-size: 1.4rem;
}

input {
  padding: 0.5rem;
  width: calc(100% - 1rem);
}
</style>
