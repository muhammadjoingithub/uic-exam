<template>
  <button
    :class="[variantClass, sizeClass, { 'disabled': disabled || loading }]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="!loading">
      <slot></slot>
    </span>
    <span v-else>Loading...</span>
  </button>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';

interface Props {
  variant?: string;
  size?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const props = defineProps<Props>();

const handleClick = () => {
  if (props.onClick && !props.loading) {
    props.onClick();
  }
};

const variantClass = computed(() => {
 
  if (props.variant === 'red') {
    return 'bg-red-500 hover:bg-red-600 active:ring-4 active:ring-red-400 text-white rounded-lg';
  } else if (props.variant === 'dark') {
    return 'bg-slate-600 hover:bg-slate-500 active:ring-4 active:ring-slate-300 text-white rounded-lg';
  } else {
    return 'bg-slate-600 hover:bg-slate-500 active:ring-4 active:ring-slate-300 text-white rounded-lg';
  }
});

const sizeClass = computed(() => {
  if (props.size === 'small') {
    return 'py-2 px-4';
  } else if (props.size === 'large') {
    return 'py-4 px-8';
  } else {
    return 'py-3 px-7';
  }
});
</script>

<style scoped>
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
