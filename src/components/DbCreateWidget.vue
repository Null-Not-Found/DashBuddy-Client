<template>
  <teleport to="body">
    <DbModal v-show="showModal" title="Create new widget" subTitle="Settings">
      <label class="block">X</label>
      <input class="block" type="number" v-model="newWidget.x">
      <label class="block">Y</label>
      <input class="block" type="number" v-model="newWidget.y">
      <label class="block">Width</label>
      <input class="block" type="number" v-model="newWidget.width">
      <label class="block">Height</label>
      <input class="block" type="number" v-model="newWidget.height">
      <label class="block">Title</label>
      <input class="block" type="text" v-model="newWidget.title">
      <label class="block">Subtitle</label>
      <input class="block" type="text" v-model="newWidget.subTitle">
      <DbButton @click="showModal = false; createWidget()">
        Create
      </DbButton>
      <DbButton @click="showModal = false; reset()">
        Close
      </DbButton>
    </DbModal>
  </teleport>
  <DbButton @click="showModal = true">
    Create new widget
  </DbButton>
</template>

<script setup lang="ts">
import DbButton from "@/components/DbButton.vue";
import DbModal from "@/components/DbModal.vue";
import {reactive, ref} from "vue";
import {useDashboard} from "@/composables/useDashboard";

const showModal = ref(false);

const dashboard = useDashboard('test')

const newWidget = reactive({
  x: 0,
  y: 0,
  width: 1,
  height: 1,
  title: 'Title',
  subTitle: 'subTitle'
});

function reset() {
  newWidget.x = 0
  newWidget.y = 0
  newWidget.width = 1
  newWidget.height = 1
  newWidget.title = 'Title'
  newWidget.subTitle = 'subTitle'
}

function createWidget() {
  dashboard.dashboard.value?.createWidget(
      newWidget.title,
      newWidget.x,
      newWidget.y,
      newWidget.width,
      newWidget.height
  );
}
</script>

<style scoped>
.db-container {

}
</style>