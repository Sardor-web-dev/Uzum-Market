<template>
  <div class="flex flex-col flex-1 justify-between gap-4" >
    <CartItem
     
      v-for="item in cart"
      :key="item.id"
      :price="item.price"
      :title="item.title"
      :imageUrl="item.imageUrl"
      @onClickRemove="removeFromCart(item)"
    />
  </div>
</template>
<script setup>
import { inject } from "vue";
import CartItem from "./CartItem.vue";
const { cart, removeFromCart } = inject("cart");
</script>