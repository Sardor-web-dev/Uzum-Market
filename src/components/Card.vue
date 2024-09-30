<template>
  <div
    class="flex flex-col justify-between gap:1 sm:gap-2 sm:p-3 md:gap-1 sm:justify-between text-center pt-2  relative max-w-48 max-h-sm xl:w-96 bg-white border border-slate-100 rounded-3xl md:p-8 cursor-pointer md:hover:-translate-y-2 md:hover:shadow-xl tranisition"
  >
    <div
      class="p-1 rounded-full right-2 absolute sm:right-4 md:top-5 md:right-4 bg-slate-300"
    >
      <img
        class="w-2  sm:w-3 md:h-4 md:w-4 sm:h-3 h-2"
        v-if="onClickFavorite"
        @click="onClickFavorite"
        :src="!isFavorite ? '/heart.png' : '/liked.png'"
        alt="Like 1"
      />
    </div>
    <div class="bg-white flex sm:flex bg-cover items-center justify-center">
      <img class="w-14 h-14 md:w-24 md:h-20" :src="imageUrl" alt="Item" />
    </div>
    <p class="text-xs self-center w-12 md:text-sm">{{ title }}</p>
    <div class="flex relative justify-between px-4 items-center md:justify-between">
      <div class="flex flex-col text-center justify-end">
        <span class="text-slate-400 text-sm md:text-base"> Цена: </span>
        <b class="text-xs md:text-sm"> {{ price }}$</b>
      </div>
      <img
        class="absolute right-1  w-5 h-5  md:w-8 md:-right-5 md:top-1 md:h-8 opacity-40 md:hover:opacity-100 transition cursor-pointer"
        v-if="onClickAdd"
        @click="onClickAdd"
        :src="!isAdded ? '/basket.png' : '/checked.svg'"
        alt="plus"
      />
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const props = defineProps({
  imageUrl: Array,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function,
  id: Number,
});
</script>
