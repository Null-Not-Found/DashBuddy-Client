<template>
  <div class="button-container">
    <DbButton @click="showModal = true" class="fas fa-plus"></DbButton>
  </div>
  <teleport to="body">
    <CoModel v-show="showModal" title="Create new widget" subTitle="Settings">
      <label class="block">Title</label>
      <input class="block" type="text" v-model="newWidget.title" />
      <DbButton
        @click="
          showModal = false;
          createWidget();
        "
      >
        Create
      </DbButton>
      <DbButton
        @click="
          showModal = false;
          reset();
        "
      >
        Close
      </DbButton>
    </CoModel>
  </teleport>
</template>

<script setup lang="ts">
import DbButton from "@/components/CoButton.vue";
import CoModel from "@/components/CoModel.vue";
import { reactive, ref } from "vue";
import { useDashboard } from "@/composables/useDashboard";
import '@fortawesome/fontawesome-free/css/all.css';


const showModal = ref(false);

const dashboard = useDashboard("test");

const newWidget = reactive({
  x: 0,
  y: 0,
  width: 1,
  height: 1,
  title: "Title",
});

function reset() {
  newWidget.x = 0;
  newWidget.y = 0;
  newWidget.width = 1;
  newWidget.height = 1;
  newWidget.title = "Title";
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
.button-container {
  text-align: center;
}
</style>
