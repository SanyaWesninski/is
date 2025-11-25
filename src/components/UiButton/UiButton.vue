<template>
  <button
    :class="$style.button"
    :data-layout="props.layout"
    :disabled="props.isDisabled"
    :type="props.type"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { IProps } from './types';

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
  isDisabled: false,
});
</script>

<style module lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 44px;
  padding: 0 24px;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: 10px; /* более мягкие углы */
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  outline: none;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;

  /* === Primary === */
  color: var(--color-button-text-primary);
  background: var(--color-button-bg-primary);
  border-color: var(--color-button-border-primary);

  /* Фон при наведении — через псевдоэлемент для плавного градиента */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-button-bg-primary-hover);
    opacity: 0;
    transition: opacity 0.25s ease;
    z-index: -1;
  }

  &:hover:not(:disabled) {
    &::before {
      opacity: 1;
    }
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:focus-visible:not(:disabled) {
    box-shadow: 0 0 0 4px var(--color-focus);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    opacity: 1;
    cursor: not-allowed;
    color: var(--color-disabled-text);
    background: var(--color-disabled-bg);
    border-color: var(--color-border);
    box-shadow: none;
    transform: none;

  /* Специально для secondary: убираем прозрачность */
  &[data-layout='secondary'] {
    color: var(--color-disabled-text); 
    background: var(--color-disabled-bg);
    border-color: var(--color-border);
  }
}

  /* === Secondary === */
  &[data-layout='secondary'] {
    color: var(--color-button-text-secondary);
    background: var(--color-button-bg-secondary);
    border-color: var(--color-button-border-secondary);

    &::before {
      background: var(--color-button-bg-secondary-hover);
    }

    &:hover:not(:disabled) {
      color: var(--color-button-text-secondary-hover);
    }
  }
}
</style>