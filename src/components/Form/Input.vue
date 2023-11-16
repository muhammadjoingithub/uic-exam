<template>
  <div>
    <label :for="id" class="text-white">{{ label }}</label><br>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      class="form py-3 px-9 border border-white/[0.4]"
      :value="model"
      :max="max"
      :min="min"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInput"
    >
    <span v-if="hasError" class="text-red-500">Please enter your validation please</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps([
  'id', 
  'label', 
  'type',
  'placeholder', 
  'model', 
  'max', 
  'min', 
  'disabled', 
  'readonly'
]);

const hasError = ref(false);

const handleInput = (event) => {
  if (!event.target.value.trim()) {
    hasError.value = true;
  } else {
    hasError.value = false;
    $emit('update:model', event.target.value);
  }
};
</script>


<style scoped>
.form {
  display: block;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(20px);
  outline: none;
  color: white;
}
.input{
border-radius: 8px;
border: 1px solid rgba(255, 255, 255, 0.12);
background: rgba(255, 255, 255, 0.12);
outline: none;
color: white;
}
.search{
    align-items: center;
}
</style>

