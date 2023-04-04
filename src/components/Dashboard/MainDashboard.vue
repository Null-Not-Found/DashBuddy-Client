<template>
  <div class="container">
    <default-button class="fas fa-plus"></default-button>
  </div>
</template>

<script setup lang="ts">
import DefaultButton from "@/components/Default/DefaultButton.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import Widget from "@/BLL/Widget/Widget";
import { ref } from "vue";

const Widgets = ref<Widget[]>([
  {
    id: 1,
    label: "line graph",
  },
  {
    id: 2,
    label: "pie chart",
  },
  {
    id: 3,
    label: "bar graph",
  },
  {
    id: 4,
    label: "another one",
  },
]);
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
</style>
