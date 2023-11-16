<template >
  <div class="flex flex-wrap w-full  bg-black  gap-7">
     <!-- <Button :class="''" variant="red">Explore <img src="/public/images/globe.png" alt=""></Button>
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


     <Button variant="red" btn="custom-btn" type="submit"  @click="handleButtonClick">Explore</Button> -->

       <Button
      variant="red"
      size="large"
      :disabled="submitting"
      :loading="submitting"
      @click="handleSubmit"
    >
      Explore
    </Button>
       <Button
      variant="dark"
      size="large"
      :disabled="submittingDark"
      :loading="submittingDark"
      @click="handleSubmitDark"
    >
      Explore
    </Button>

</div>

<div class="w-full bg-slate-900">
    <Input
      id="name"
      label="Name"
      type="text"
      placeholder="Samantha Smith"
      :model="name"
      :max="maxName"
      :min="minName"
      :disabled="isNameDisabled"
      :readonly="isNameReadonly"
    />
    <Input
      id="email"
      label="Contact"
      type="email"
      placeholder="example@gmail.com"
      :model="email"
      :max="maxEmail"
      :min="minEmail"
      :disabled="isEmailDisabled"
      :readonly="isEmailReadonly"
    />
    <Input
      id="message"
      label="Message"
      type="textarea"
      placeholder="Your message"
      :model="message"
      :max="maxMessage"
      :min="minMessage"
      :disabled="isMessageDisabled"
      :readonly="isMessageReadonly"
    />
      <Input
      id="message"
      label="Search"
      type="text"
      placeholder="Search"
      :model="message"
      :max="maxMessage"
      :min="minMessage"
      :disabled="isMessageDisabled"
      :readonly="isMessageReadonly"
    />
</div>
<div class="bg-black">
  <Footer/>
</div>
</template>
<script setup lang="ts">
const submitting = ref(false);
const submittingDark = ref(false);


const handleSubmit = () => {
  submitting.value = true;
  setTimeout(() => {
    submitting.value = false;
  }, 2000);
};
const handleSubmitDark = () => {
  submittingDark.value = true;
  setTimeout(() => {
    submittingDark.value = false;
  }, 2000);
};
import { ref } from 'vue';
import Button from '../components/Form/Button.vue'
import Footer from '../components/Footer.vue'
import Input from '../components/Form/Input.vue'

const name = ref('');
const email = ref('');
const message = ref('');

const maxName = ref(10);
const minName = ref(1);
const isNameDisabled = ref(false);
const isNameReadonly = ref(false);

const maxEmail = ref(5);
const minEmail = ref(1);
const isEmailDisabled = ref(false);
const isEmailReadonly = ref(false);

const maxMessage = ref(10);
const minMessage = ref(1);
const isMessageDisabled = ref(false);
const isMessageReadonly = ref(false);

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


