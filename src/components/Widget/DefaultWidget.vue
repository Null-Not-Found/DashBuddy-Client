<template>
  <div>
    <WidgetContainer>
      <h3>
        {{ widget.label }}
        <default-button @click="onDelete"> Delete </default-button>
      </h3>
    </WidgetContainer>
  </div>
</template>

<script setup lang="ts">
import Widget from "@/BLL/Widget/Widget";
import WidgetContainer from "@/components/Widget/WidgetContainer.vue";
import DefaultButton from "@/components/Default/DefaultButton.vue";

defineProps<{ widget: Widget }>();
const onDelete = (_id: number) => {
  console.log(_id);
};
</script>

<style scoped></style>
