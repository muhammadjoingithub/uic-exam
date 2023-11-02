<template>
    <div class="container mx-auto flex flex-wrap gap-4">
        <div>
             <label for="" class="text-white">Name</label><br>
             <input type="text" placeholder="Samantha Smith" class="form py-3 px-9">
        </div>
        <div class="">
            <label for="" class="text-white">Contact</label><br>
            <input type="email" placeholder="example@gmail.com" class="form py-3 px-9">
        </div>
        <div class="w-[100%]">
            <label for="" class="text-white">Message</label><br>
            <input type="textarea" placeholder="Your message" class="textarea py-10 px-4">
        </div>

    </div>
</template>
<script lang="ts" setup>

</script>
<style scoped>
.form{
display: block;
align-items: center;
border-radius: 8px;
border: 1px solid rgba(255, 255, 255, 0.20);
background: rgba(255, 255, 255, 0.10);
backdrop-filter: blur(20px);
outline: none;
color: white;
}
.textarea{
    display: flex;
width: 580px;
height: 87px;
padding: 12px 461px 54px 16px;
align-items: center;
border-radius: 8px;
border: 1px solid rgba(255, 255, 255, 0.20);
background: rgba(255, 255, 255, 0.10);
backdrop-filter: blur(20px);
color: white;
outline: none;

}
</style>