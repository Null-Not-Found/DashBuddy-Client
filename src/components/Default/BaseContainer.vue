<template>
  <div class="db-container">
    <div class="db-container-header">
      <div class="db-container-header-titles">
        <h1>{{ title }}</h1>
        <h2 v-if="subTitle">{{ subTitle }}</h2>
      </div>
      <div class="db-container-header-buttons">
        <slot name="icons"></slot>
      </div>
    </div>
    <div class="db-dashboard-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  subTitle: String,
});
</script>

<style scoped lang="scss">
.db-container {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  color: #3c4043;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  margin: 1rem 0;

  h1 {
    padding: 1rem 1rem 0.2rem 1rem;
    font-size: 2em;
    margin: 0;
  }
  h2 {
    color: #606165;
    font-size: 1.2em;
    padding: 0 1rem 1rem 1rem;
    margin: 0;
  }

  .db-container-header {
    display: flex;

    .db-container-header-buttons {
      opacity: 0;
      flex-grow: 1;
      display: flex;
      justify-content: end;
      align-items: flex-start;
      padding: 1rem;
      transition: opacity 200ms;
      font-size: 1.2em;
    }
  }

  &:hover .db-container-header-buttons {
    opacity: 1;
  }

  .db-dashboard-content {
    padding: 0 1rem 1rem;

    > * {
      margin: 0;
    }
  }
}
</style>
