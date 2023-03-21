<template>
  <div>
    This is a dashboard number {{ number }}
    <button @click="clickyButton">
      click me
    </button>
    <slot />
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const number = ref(0)
function clickyButton() {
  number.value++;
}
</script>

<style scoped>

</style>