<template>
  <div :class="$style.wrapper">
    <input
      :class="$style.input"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :disabled="isDisabled"
      :placeholder="placeholder"
      :data-disabled="isDisabled"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  isDisabled?: boolean;
  placeholder?: string;
}>();

defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<style module lang="scss">
.input {
  width: 100%;
  padding: 12px 16px;
  font-size: 0.95rem;
  line-height: 1.4;
  border: 2px solid var(--color-border);
  border-radius: 12px;
  background-color: var(--color-surface);
  color: var(--color-text);
  transition: all 0.25s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(255, 0, 255, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: var(--color-disabled);
  }

  &::placeholder {
    color: var(--color-placeholder);
  }
}
</style>
