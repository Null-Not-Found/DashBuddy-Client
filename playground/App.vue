<template>
  <div class="app-container">
    <suspense>
      <DbDashboard id="mainDashboard">
        test
      </DbDashboard>
    </suspense>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import {DbDashboard} from "../src";

const showSlider = ref(true);
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#mainDashboard {
  width: calc(100% - 8px);
  height: calc(100vh - 8px);
}
</style>
