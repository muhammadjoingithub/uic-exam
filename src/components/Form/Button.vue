<template>
  <button 
  class="py-3 px-7 rounded-lg active:scale-90 transition duration-200  flex align-center justify-center gap-2" :class="[List, btn]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, ref, computed } from 'vue'

interface Props {
  variant?: string
  btn?: string
}
const props = defineProps<Props>()

const List = computed(() => {
  if (props.variant === 'red') {
    return 'bg-red-500 hover:bg-red-600 active:ring-4 active:ring-red-400 text-white'
  } else if (props.variant === 'dark') {
    return 'bg-slate-600 hover:bg-slate-500 active:ring-4 active:ring-slate-300 text-white'
  } else {
    return 'bg-slate-600 hover:bg-slate-500 active:ring-4 active:ring-slate-300 text-white'
  }
})

</script>

<style lang="scss" scoped></style>