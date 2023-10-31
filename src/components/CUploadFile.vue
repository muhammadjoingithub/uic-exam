<template>
  <div class="flex flex-wrap justify-center ali p-[30px] gap-[20px]">
    <input type="file" :accept="accept" @change="uploadFunction"  />
    <div v-if="uploading">
      <img :src="uploading" alt="here is a img" class="rounded-[50%] w-[200px] h-[200px] object-cover"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref , defineProps } from 'vue';

interface Props {
accept: {
  type: string,
  required: true,
}
}
const props = defineProps<Props>()
 
const uploading = ref('')
const uploadFunction = (event) => {
    const file = event.target.files[0]
      if (file && file.type.startsWith('image/')) {
        const set = new FileReader()
        set.onload = () => {
          uploading.value = set.result
        }
        set.readAsDataURL(file)
    }
}
</script>