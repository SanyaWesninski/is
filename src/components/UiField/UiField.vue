<template>
  <div :class="$style.field">
    <label v-if="props.label" :class="$style.label">{{ props.label }}</label>
    <div :class="$style.control">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProps } from './types';

// ✅ Явное присваивание — Volar поймёт тип
const props = defineProps<IProps>();
</script>

<style module lang="scss">
.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>