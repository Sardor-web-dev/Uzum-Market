<script setup>
defineProps({
  imgUrl: String,
  title: String,
  description: String,
});
</script>

<template>
  <div class=" w-72 mx-auto flex flex-col text-center items-center justify-center">
    <img height="80" width="80" :src="imgUrl" alt="Info Image" />
    <h2 class="mt-4 text-2xl font-medium">{{ title }}</h2>
    <p class="text-slate-400 mt-2">{{ description }}</p>
  </div>
</template>

<style scoped>
</style>