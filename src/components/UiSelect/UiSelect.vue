<template>
  <select
    :class="$style.select"
    :value="modelValue"
    @change="
      $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
    "
    :disabled="isDisabled"
    :data-disabled="isDisabled"
  >
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  isDisabled?: boolean;
  options: string[];
}>();

defineEmits<(e: 'update:modelValue', value: string) => void>();
</script>

<style module lang="scss">
.select {
  width: 100%;
  padding: 12px 16px;
  font-size: 0.95rem;
  line-height: 1.4;
  border: 2px solid var(--color-border);
  border-radius: 12px;
  background-color: var(--color-surface);
  color: var(--color-text);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: all 0.25s ease;

  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff00ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(255, 0, 255, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: var(--color-disabled);
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238a8ab3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  }
}
</style>
