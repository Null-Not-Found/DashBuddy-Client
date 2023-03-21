<template>
  <div>
    Test component
  </div>
</template>

<style lang="css" scoped>
.blaze-pagination-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
}

.blaze-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
}

/**
 * Deep required because buttons are dynamically generated outside Vue.
 * The styling scope cannot be applied.
 */
:deep(.blaze-pagination button) {
  display: flex;
  padding: 0;
  margin: 0 0.25rem;
  height: 1rem;
  width: 1rem;
  font-size: 0;
  border-radius: 99px;
  cursor: pointer;
}

:deep(.blaze-pagination button:hover, .blaze-pagination button.active) {
  transform: scale(1.25);
}

.blaze-prev,
.blaze-next {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  background: none;
  cursor: pointer;
}

.blaze-prev svg,
.blaze-next svg {
  height: 1.5rem;
  width: 1.5rem;
  stroke: currentColor;
}
</style>
