<script setup>
import { inject, ref, onMounted } from "vue";
import axios from "axios";
import CardList from "./CardList.vue";

const favorites = ref([]);


const { cart, addToCart, removeFromCart } = inject("cart");

const fetchFavorites = async () => {
  try {
    const { data } = await axios.get(
      "https://b8f2c9deab9d2b35.mokky.dev/favorites"
    );

    favorites.value = data.map((obj) => ({
      ...obj.item, 
      serverId: obj.id, 
      isAdded: cart.value.some((cartItem) => cartItem.id === obj.item.id), 
    }));
  } catch (error) {
    console.error("Error fetching favorites:", error);
  }
};

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item);
  } else {
    removeFromCart(item);
  }

  item.isAdded = !item.isAdded;
};

const removeFavorite = async (item) => {
  try {

    await axios.delete(
      `https://b8f2c9deab9d2b35.mokky.dev/favorites/${item.serverId}`
    );

 
    favorites.value = favorites.value.filter(
      (fav) => fav.serverId !== item.serverId
    );
  } catch (error) {
    console.error("Error removing favorite:", error);
  }
};


onMounted(fetchFavorites);
</script>
<template>
  <h2 class="mb-8 text-violet-600 text-3xl font-bold">Мои избранные товары</h2>
  <div
    class="mb-20 flex flex-col items-center justify-center"
    v-if="!favorites || !favorites.length"
  >
    <img class="w-50 h-50" src="/hearts.png" alt="" />
    <h2 class="text-2xl font-bold">Добавьте то, что понравилось</h2>
    <p>Перейдите на главную страницу и нажмите на ♡ в товаре</p>
    <router-link to="/"
      ><p
        class="underline underline-offset-1 hover:translate-x-1 hover:translate-y-1 tranisition hover:text-violet-600 text-underline"
      >
       Вернутся на главную страницу
      </p></router-link
    >
  </div>

  <CardList
    @addToCart="onClickAddPlus"
    @addToFavorite="removeFavorite"
    :items="favorites"
  >
  </CardList>
</template>