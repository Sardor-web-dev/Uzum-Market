<script setup>
import { inject, reactive, watch, ref, onMounted } from "vue";
import CardList from "../components/CardList.vue";
import axios from "axios";
import debounce from "lodash.debounce";
import Swiper from "../components/Swiper.vue";
const { cart, addToCart, removeFromCart, currentCategory } = inject("cart");

const items = ref([]);
const favorites = ref([]);
const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item);
  } else {
    removeFromCart(item);
  }
  console.log(cart);
};

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    };
    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`;
    }
    if (filters.category) {
      params.category = `*${filters.category}*`;
    }

    const { data } = await axios.get(
      "https://b8f2c9deab9d2b35.mokky.dev/items",
      {
        params,
      }
    );
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: null,
      isAdded: false,
    }));
  } catch (e) {
    console.log("error");
  }
};

onMounted(async () => {
  try {
    const localCart = localStorage.getItem("cart");

    cart.value = localCart ? JSON.parse(localCart) : [];

    await fetchItems();
    await fetchFavorites();

    items.value = items.value.map((item) => ({
      ...item,
      isAdded: cart.value.some((cartItem) => cartItem.id === item.id),
    }));
  } catch (e) {
    console.error("Error during mounted setup:", e);
  }
});

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(
      "https://b8f2c9deab9d2b35.mokky.dev/favorites"
    );
    items.value = items.value.map((item) => {
      const favorite = favorites.find(
        (favorite) => favorite.parentId === item.id
      );

      if (!favorite) return item;
      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id,
      };
    });
  } catch (e) {
    console.log("error");
  }
};
const onChangeSelect = (event) => {
  filters.sortBy = event.target.value;
};

const onChangeSearchInput = debounce((event) => {
  filters.searchQuery = event.target.value;
}, 600);

const filters = reactive({
  sortBy: "title",
  searchQuery: "",
  category: currentCategory,
});

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      item.isFavorite = true;
      const obj = {
        parentId: item.id,
        item,
      };

      const { data } = await axios.post(
        "https://b8f2c9deab9d2b35.mokky.dev/favorites",
        obj
      );

      item.favoriteId = data.id;
    } else {
      item.isFavorite = false;
      await axios.delete(
        `https://b8f2c9deab9d2b35.mokky.dev/favorites/${item.favoriteId}`
      );
      item.favoriteId = null;
    }
  } catch (e) {
    console.log("error");
  }
};

watch(filters, fetchItems);

watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false,
  }));
});
</script>
<template>
  <swiper class="w-full mt-6  sm:w-9/12 lg:h-96 2xl:h-80 2xl:w-7/12 mb-4 z-0"/>
  <div class="flex gap-4 p-3 items-center sm:justify-between">
    <h2 class="font-semibold text-xs sm:text-lg lg:text-2xl">
      Все {{ currentCategory ? currentCategory : "товары" }}
    </h2>

    <div class="flex gap-6 items-center">
      <select
        @change="onChangeSelect"
        class="w-28 sm:w-36 sm:p-2 text-xs lg:text-base lg:w-52 lg:px-4 border rounded-xl outline-none"
      >
        <option  value="title">По Названию</option>
        <option value="price">По Цене(дешевые)</option>
        <option value="-price">По Цене(дорогие)</option>
      </select>

      <div class="relative">
        <img class="absolute left-3 top-1 lg:top-3" src="/search.svg" alt="" />
        <input
          @input="onChangeSearchInput"
          class="border px-2 rounded-md focus:border-gray-400 sm:w-36 sm:py-1 lg:w-56 lg:py-2  pl-11 w-36 outline-none"
          type="text"
          placeholder="Поиск....."
        />
      </div>
    </div>
  </div>

  <div class="mt-10 lg:mt-3">
    <CardList
      @addToCart="onClickAddPlus"
      @addToFavorite="addToFavorite"
      :items="items"
    />
  </div>
</template>