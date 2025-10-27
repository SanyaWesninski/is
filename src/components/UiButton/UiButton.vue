<template>
  <button :class="$style.button" :data-layout="props.layout" :disabled="props.isDisabled" :type="props.type">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
});
</script>

<style module lang="scss">
.button {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 48px; 
  padding: 36px 36px; 
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  color: #c90842;
  background-color: #e7a4e7; 
  border: 3px solid #c90842; 
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover:not(:disabled) {
    background-color: #de8bef;
  }

  &:active:not(:disabled) {
    background-color: #d7f5ff; 
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &[data-layout='secondary'] {
    color: #e7a4e7;
    background-color: transparent;
    border-color: #e7a4e7;

    &:hover:not(:disabled) {
      background-color: rgba(231, 164, 231, 0.15);
    }

    &:active:not(:disabled) {
      background-color: rgba(215, 245, 255, 0.3);
      color: #d7f5ff;
    }
  }
}
</style>
