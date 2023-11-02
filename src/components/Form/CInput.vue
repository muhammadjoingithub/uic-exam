<template>
    <div class="flex search justify-start container">
    <slot name="prefix"></slot>
    <input type="text" placeholder="Search" class="input py-2 px-4">
    <slot name="suffix"></slot>
  </div>
 
</template>
<script lang="ts" setup>

</script>
<style scoped>
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
