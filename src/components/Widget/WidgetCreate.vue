<template>
  <BaseModal title="Create a new Widget" v-show="showModal">
    <TextForm label="Title" v-model="widget.title" />
    <SelectForm
      :options="[
        { label: 'Line graph', value: 'line' },
        { label: 'Bar graph', value: 'bar' },
        { label: 'Pie chart', value: 'pie' },
      ]"
      v-model="widget.chart"
      label="Chart type"
    />
    <BaseButton @click="createWidget">Create</BaseButton>
    <BaseButton @click="showModal = false">Close</BaseButton>
  </BaseModal>
  <DefaultButton @click="showModal = true"
    ><i class="fas fa-plus"
  /></DefaultButton>
</template>

<script setup lang="ts">
import BaseModal from "@/components/Default/BaseModal.vue";
import DefaultButton from "@/components/Default/BaseButton.vue";
import TextForm from "@/components/Forms/TextForm.vue";
import { reactive, ref } from "vue";
import SelectForm from "@/components/Forms/SelectForm.vue";
import BaseButton from "@/components/Default/BaseButton.vue";
import { useDashboard } from "@/composables/useDashboard";

const showModal = ref(false);

const widget = reactive({
  title: "",
  chart: "",
});

const dashboard = useDashboard("test");

function createWidget() {
  if (widget.title === "") {
    alert("Widget title is empty.");
    return;
  }

  if (widget.chart === "") {
    alert("Widget chart is empty.");
    return;
  }

  showModal.value = false;

  dashboard.createWidget(widget.title, widget.chart);
}
</script>

<style scoped>
button {
  margin-top: 1rem;
}
</style>
