<template>
  <div class="container">
    <default-button class="fas fa-plus"></default-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DefaultButton from "@/components/Default/DefaultButton.vue";
import "@fortawesome/fontawesome-free/css/all.css";

export default defineComponent({
  components: { DefaultButton },
});
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
}
</style>
