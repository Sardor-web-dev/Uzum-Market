<template>
  <div class="border flex items-center border-slate-200 p-4 gap-4 rounded-xl">
    <img class="w-16 h-16" :src="imageUrl" :alt="title" />

    <div class="flex flex-col flex-1 justify-between">
      <p>{{ title }}</p>
      <div class="flex flex-1 mt-2 justify-between">
        <b>{{ price }} $</b>
        <img
          @click="() => emit('onClickRemove')"
          class="opacity-40 hover:opacity-100 transition cursor-pointer"
          src="/close.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
});
const emit = defineEmits(["onClickRemove"]);
</script>

<style  scoped>
</style>