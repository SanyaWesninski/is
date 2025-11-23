<template>
  <select
    :class="$style.select"
    :data-disabled="props.isDisabled"
    :value="props.modelValue"
    :disabled="props.isDisabled"
    @change="onChange"
  >
    <option v-for="option in props.options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
import type { IProps, IEmit } from './types';

const props = withDefaults(defineProps<IProps>(), {
  isDisabled: false,
});

const emit = defineEmits<IEmit>();

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
};
</script>

<style module lang="scss">
.select {
  width: 100%;
  height: 44px;
  padding: 0 16px;
  font-size: 1rem;
  color: var(--color-text);
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: 8px;
  outline: none;
  appearance: none;
  background-image: url("image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 12px;
  padding-right: 40px;
  transition: border-color 0.25s, box-shadow 0.25s;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 4px var(--color-focus);
  }

  &[data-disabled='true'] {
    background: var(--color-disabled-bg);
    color: var(--color-disabled-text);
    cursor: not-allowed;
    opacity: 1;
  }
}
</style>