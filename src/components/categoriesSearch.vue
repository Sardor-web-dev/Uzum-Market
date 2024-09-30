<template>
  <div
    v-if="showCategories"
    class="fixed  top-12 md:top-16 w-full bottom-0 sm:wi md:w-full h-full bg-black/50 z-10"
  >
    <div
      v-if="showCategories"
      class="bg-white pl-4 sm:w-lvw sm:pl-20 md:w-lvw  sm:m-0 md:m-auto  z-20 flex flex-col text-left md:pl-40 xl:pl-96  pb-10 gap-3"
    >
      <div
        @click="() => emit('openCategories')"
        class="cursor-pointer text-4xl  font-bold absolute right-1/4"
      >
        &times;
      </div>
      <span class="text-xs text-gray-400">Категории Товаров</span>
      <div @click="setCategory('')" class="flex items-center gap-5">
        <h4 class="font-semibold cursor-pointer text-xl">Все товары</h4>
        <span class="text-xs bg-violet-700 py-1 px-4 rounded-sm text-white"
          >{{ items.length }} Товаров</span
        >
      </div>
      <div @click="setCategory('beauty')" class="flex items-center gap-5">
        <h4 class="font-semibold cursor-pointer text-xl">Красота</h4>
        <span class="text-xs bg-violet-700 py-1 px-4 rounded-sm text-white"
          >{{ beautyItems.length }} Товаров</span
        >
      </div>
      <div @click="setCategory('fragrances')" class="flex items-center gap-5">
        <h4 class="font-semibold cursor-pointer text-xl">Парфюмы</h4>
        <span class="text-xs bg-violet-700 py-1 px-4 rounded-sm text-white"
          >{{ fragrancesItems.length }} Товаров</span
        >
      </div>
      <div @click="setCategory('furniture')" class="flex items-center gap-5">
        <h4 class="font-semibold cursor-pointer text-xl">Мебель</h4>
        <span class="text-xs bg-violet-700 py-1 px-4 rounded-sm text-white"
          >{{ furnitureItems.length }} Товаров</span
        >
      </div>
      <div @click="setCategory('groceries')" class="flex items-center gap-5">
        <h4 class="font-semibold cursor-pointer text-xl">Продукты Питания</h4>
        <span class="text-xs bg-violet-700 py-1 px-4 rounded-sm text-white"
          >{{ groceriesItems.length }} Товаров</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { defineEmits, defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

import axios from "axios";
import { routerKey } from "vue-router";

defineProps({
  showCategories: Boolean,
});
const items = ref([]);

onMounted(async () => {
  await fetchItems();
});

const fetchItems = async () => {
  try {
    const { data } = await axios.get(
      "https://b8f2c9deab9d2b35.mokky.dev/items"
    );
    items.value = data;
  } catch (e) {
    console.log(e);
  }
};

const beautyItems = computed(() =>
  items.value.filter((item) => item.category === "beauty")
);

const fragrancesItems = computed(() =>
  items.value.filter((item) => item.category === "fragrances")
);

const furnitureItems = computed(() =>
  items.value.filter((item) => item.category === "furniture")
);

const groceriesItems = computed(() =>
  items.value.filter((item) => item.category === "groceries")
);
const emit = defineEmits(["openCategories", "setCategory"]);

const setCategory = (items) => {
  router.push("/");
  emit("setCategory", items);
  emit("openCategories");
};
</script>