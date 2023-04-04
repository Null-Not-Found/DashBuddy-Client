<template>
  <BaseModal>
    <slot />
    <ButtonGroup>
      <BaseButton>Confirm</BaseButton>
      <BaseButton>Cancel</BaseButton>
    </ButtonGroup>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from "@/components/Default/BaseModal.vue";
import BaseButton from "@/components/Default/BaseButton.vue";
import ButtonGroup from "@/components/Default/ButtonGroup.vue";
</script>

<style scoped></style>
