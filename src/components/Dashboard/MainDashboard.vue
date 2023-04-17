<template>
  <div class="db-dashboard">
    <default-button><i class="fas fa-plus" /></default-button>
    <DefaultWidget id="2" height="69" width="911" y="666" x="420" />
    <BaseContainer title="title" sub-title="subtitle">
      <template #icons><i class="fas fa-bars" /></template>
      <template #default>
        <p>Test</p>
      </template>
    </BaseContainer>
    <BaseContainer title="title" sub-title="subtitle">
      <template #icons><i class="fas fa-bars" /></template>
      <template #default>
        <p>Test</p>
      </template>
    </BaseContainer>
    <BaseContainer title="Banana" sub-title="Image of a banana">
      <p>Banana</p>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.J713t6KgpMa6j5dXb9AiXQHaHa%26pid%3DApi&f=1&ipt=2e72716ebdb64154559fb448ec54ed78676de2e6cd54a2d3f4d703b081f8cc79&ipo=images"
      />
    </BaseContainer>
    <ConfirmModal v-show="false"> Test </ConfirmModal>
  </div>
</template>

<script setup lang="ts">
import DefaultButton from "@/components/Default/BaseButton.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import Widget from "@/BLL/Widget/Widget";
import { ref } from "vue";
import BaseContainer from "@/components/Default/BaseContainer.vue";
import BaseModal from "@/components/Default/BaseModal.vue";
import ConfirmModal from "@/components/Default/ConfirmModal.vue";
import DefaultWidget from "@/components/Widget/DefaultWidget.vue";

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
.db-dashboard {
  padding: 2rem;
  background-color: #f2f2f2;

  > * {
    margin: 0;
    padding: 0;
  }
}
</style>
