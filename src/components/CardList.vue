<template>
  <div class="grid grid-cols-3 md:grid-cols-5 gap-3 2xl:grid-cols-6 xl:gap-2 xl:grid-cols-5 p-2 xl:pl-8">
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :isFavorite="item.isFavorite"
      :price="item.price"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :onClickFavorite="() => emit('addToFavorite', item)"
      :onClickAdd="() => emit('addToCart', item)"
      :isAdded="item.isAdded"
    />
  </div>
</template>
<script setup>
defineProps({
  items: Array,
  isFavorites: Boolean,
});
const emit = defineEmits(["addToFavorite", "addToCart"]);
import Card from "./Card.vue";

</script>