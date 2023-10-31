<template>
  <div class="flex justify-center gap-8 h-[100px] ali">
    <button @click="decrease" :disabled="isMin" class="h-[30px] w-[30px] rounded-md outline-none bg-slate-100 hover:bg-sky-200 active:bg-lime-700">-</button>
    <input type="number" v-model="count" @input="checkLimits" class="h-[40px] w-[60px] rounded-md outline-none p-[10px]"/>
    <button @click="increase" :disabled="isMax" class="h-[30px] w-[30px] rounded-md outline-none bg-slate-100 hover:bg-sky-200 active:bg-lime-700">+</button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';

const props = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 10,
  },
});

const count = ref(props.min);

function increase(): void {
  if (count.value >= props.max) {
    return;
  }
  count.value++;
}

function decrease(): void {
  if (count.value <= props.min) {
    return;
  }
  count.value--;
}

function checkLimits(): void {
  if (count.value < props.min) {
    count.value = props.min;
  } else if (count.value > props.max) {
    count.value = props.max;
  }
}

const isMin = computed(() => count.value <= props.min);
const isMax = computed(() => count.value >= props.max);
</script>