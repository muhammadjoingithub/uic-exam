<template >
  <div class="flex flex-wrap w-full h-[100vh] bg-black justify-evenly ali">
     <div class="bg-amber-400 w-[400px] rounded-md">
      <CCounterUp :min="0" :max="5"/>
    </div>
   <div class="bg-amber-400 w-[400px] rounded-md">
     <CUploadFile accept="image/*"/>
   </div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import CUploadFile from '../components/CUploadFile.vue'
import CCounterUp from '../components/CCounterUp.vue'
</script>
<style scoped>
.ali{
  align-items: center;
}
</style>


