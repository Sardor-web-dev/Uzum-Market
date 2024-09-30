<template >
  <Drawer :totalPrice="totalPrice" :vatPrice="vatPrice" v-if="drawerOpen" />
  <authModale @openAuthorization="openAuthorization" v-if="authActive"/>
  <categoriesSearch
    @openCategories="openCategories"
    @setCategory="setCategory"
    v-if="showCategories"
    :showCategories="showCategories"
  />
  <div class="w-lvw md:w-full shadow-xl rounded-xl bg-white ">
    <Header
      @openCategories="openCategories"
      :totalPrice="totalPrice"
      @openDrawer="openDrawer"
      @openAuthorization="openAuthorization"
    />

    <div class=" w-full">
      <router-view></router-view>
    </div>  
  </div>
</template>

<script setup>
import axios from "axios";
import categoriesSearch from "./components/categoriesSearch.vue";
import authModale from "./components/authModale.vue";

import Header from "./components/Header.vue";
import Drawer from "./components/Drawer.vue";
import { computed, provide, ref, watch } from "vue";

const cart = ref([]);
const showCategories = ref(false);

const drawerOpen = ref(false);

const currentCategory = ref('');

const totalPrice = computed(
  () =>
    Math.round(cart.value.reduce((acc, item) => acc + item.price, 0) * 100) /
    100
);
const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100));

const closeDrawer = () => {
  drawerOpen.value = false;
};


const authActive = ref(false);
const openAuthorization = () => {
  authActive.value = !authActive.value;
}
const openCategories = () => {
  showCategories.value = !showCategories.value;
};

const openDrawer = () => {
  drawerOpen.value = true;
};
const setCategory = (item) => {
  currentCategory.value = item;
}

const addToCart = (item) => {
  cart.value.push(item);
  item.isAdded = true;
};

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1);
  item.isAdded = false;
};

watch(
  cart,
  () => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  },
  { deep: true }
);

provide("cart", { cart, closeDrawer, openDrawer, addToCart, removeFromCart, currentCategory });
</script>

<style>
body{
  width:100%
}
</style>
