<template>
  <div :class="$style.field">
    <label v-if="label" :class="$style.label">{{ label }}</label>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string;
}>();
</script>

<style module lang="scss">
.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
  text-shadow: 0 0 4px rgba(255, 42, 109, 0.3); 
}
</style>
