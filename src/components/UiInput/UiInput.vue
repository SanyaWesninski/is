<template>
  <input
    :class="$style.input"
    :data-disabled="props.isDisabled"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    :disabled="props.isDisabled"
    @input="onInput"
  />
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  isDisabled?: boolean;
  placeholder?: string;
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<IProps>(), {
  isDisabled: false,
  placeholder: '',
});

const emit = defineEmits<IEmit>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style module lang="scss">
.input {
  width: 100%;
  height: 44px;
  padding: 0 16px;
  font-size: 1rem;
  color: var(--color-text);
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 4px var(--color-focus);
  }

  &[data-disabled='true'] {
    background: var(--color-disabled-bg);
    color: var(--color-disabled-text);
    cursor: not-allowed;
  }
}
</style>