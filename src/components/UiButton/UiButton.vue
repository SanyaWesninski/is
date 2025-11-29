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
interface IProps {
  layout?: 'primary' | 'secondary' | 'outline';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
  isDisabled: false,
});
</script>

<style module lang="scss">
.button {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 12px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease;
  background-color: var(--color-surface);
  color: var(--color-text);
  border: 2px solid transparent;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    background-color: var(--color-disabled);
  }

  &[data-layout='primary'] {
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
    color: #ffffff;
    box-shadow: 0 0 12px rgba(255, 0, 255, 0.4);

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 0 20px var(--color-primary-glow);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 0 12px var(--color-primary-glow);
    }
  }

  &[data-layout='secondary'] {
    background-color: var(--color-surface);
    border: 2px solid var(--color-border);
    box-shadow: none;

    &:hover:not(:disabled) {
      background-color: #222236;
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  }

  &[data-layout='outline'] {
    background: transparent;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    box-shadow: 0 0 8px rgba(255, 0, 255, 0.2);

    &:hover:not(:disabled) {
      background: rgba(255, 0, 255, 0.05);
      box-shadow: 0 0 12px rgba(255, 0, 255, 0.3);
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  }
}
</style>
