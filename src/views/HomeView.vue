<template >
  <div class="flex flex-wrap w-full  bg-black  gap-7">
     <!-- <div class="bg-amber-400 w-[400px] rounded-md">
      <CCounterUp :min="0" :max="5"/>
    </div>
   <div class="bg-amber-400 w-[400px] rounded-md">
     <CUploadFile accept="image/*"/>
   </div> -->

<!-- <div id="app">
<HelloWorld/>
</div> -->
     <Button :class="''" variant="red">Explore <img src="/public/images/globe.png" alt=""></Button>
     <Button :class="''" variant="red">All news<img src="/public/images/right.png" alt=""></Button>
     <Button :class="''" variant="red">View <img src="/public/images/play.png" alt=""> </Button>
     <Button :class="''" variant="red">Load more<img src="/public/images/down.png" alt=""></Button>
     <Button :class="''" variant="red">Watch video <img src="/public/images/play.png" alt=""></Button>
     <Button :class="''" variant="red" >Go to home page <img src="/public/images/house1.png" alt=""></Button>
     <Button :class="''" variant="red" >Send <img src="/public/images/send.png" alt=""></Button>



     <Button :class="''" variant="dark">More about us <img src="/public/images/right.png" alt=""></Button>
     <Button :class="''" variant="dark">Clear</Button>
     <Button :class="''" variant="red">Apply</Button>
     <Button :class="''" variant="dark">Less</Button>
     <Button :class="''" variant="dark" >More</Button>
</div>

<div class="w-full bg-slate-900">
  <Input/>
</div>


<div class="bg-dark">
  <CInput>
  <template #prefix>
       <img src="/public/images/search.png" alt="" class="absolute" >
      </template>
      <template #suffix></template>
</CInput>
</div>



<div class="bg-black">
  <Footer/>
</div>


</template>
<script setup lang="ts">
import { ref } from 'vue';
// import CUploadFile from '../components/CUploadFile.vue'
// import CCounterUp from '../components/CCounterUp.vue'
// import HelloWorld from '../components/HelloWorld.vue'
import Button from '../components/Form/Button.vue'
import Footer from '../components/Footer.vue'
import Input from '../components/Form/Input.vue'
import CInput from '../components/Form/CInput.vue'



</script>
<style scoped>
.ali{
  align-items: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


