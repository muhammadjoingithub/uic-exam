<template>
  <div>
    <h1 class="text-red">Hello world</h1>
    <h1>{{ $t('greeting') }}</h1>
    <p>{{ $t('message') }}</p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
h1 {
  color: blue;
}
</style>
