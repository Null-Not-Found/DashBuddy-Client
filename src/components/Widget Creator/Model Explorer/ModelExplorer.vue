<template>
  <ModelList :models="models" />
</template>

<script setup lang="ts">
import ModelList from "@/components/Widget Creator/Model Explorer/ModelList.vue";
import Model from "@/Model/Model";
import { ref } from "vue";

let models = ref<Model[]>([
  new Model(1, "Model 1"),
  new Model(2, "Model 2"),
  new Model(3, "Model 3"),
]);
</script>

<style scoped></style>
