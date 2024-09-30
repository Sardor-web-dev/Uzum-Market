<template>
  <div class="fixed top-0 left-0 w-full h-full bg-black z-10 opacity-70"></div>

  <div class="bg-white max-w-96 h-full fixed left-0 top-0 z-20 p-8 overflow-scroll">
    <DrawerHead />

    <div v-if="!totalPrice || orderId" class="flex h-full items-center">
      <infoBlock
        v-if="!totalPrice && !orderId"
        title="Корзина пустая"
        description="Выберите товары на главной странице и добавьте их в корзину"
        img-url="/shopocat.png"
      />
      <infoBlock
        v-if="orderId"
        title="Заказ оформлен!"
        :description="`Ваш заказ #${orderId} скоро будет доставлен в пункт выдачи`"
        img-url="/order-success-icon.png"
      />
    </div>

    <div v-else>
      <CartItemList />

      <div class="flex flex-col gap-4 mt-7 my-7">
        <div class="flex gap-2">
          <span>Итого:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ totalPrice }} $</b>
        </div>
        <button
          @click="createOrder"
          :disabled="buttonDisabled"
          class="bg-lime-500 mt-4 disabled:bg-slate-300 cursor-pointer w-full rounded-xl py-3 text-white hover:bg-lime-600 transition actvie:bg-lime-700"
        >
          Оформить Заказ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import DrawerHead from "./DrawerHead.vue";
import CartItemList from "./CartItemList.vue";
import infoBlock from "./infoBlock.vue";
import axios from "axios";
import { ref, provide, computed, inject } from "vue";

const props = defineProps({
  totalPrice: Number,
  buttonDisabled: Boolean,
});
const { cart, closeDrawer } = inject("cart");
const isCreating = ref(false);

const orderId = ref(null);

const createOrder = async () => {
  try {
    isCreating.value = true;

    const { data } = await axios.post(
      "https://b8f2c9deab9d2b35.mokky.dev/orders",
      {
        items: cart.value,
        totalPrice: props.totalPrice,
      }
    );

    cart.value = [];
    orderId.value = data.id;
    return data;
  } catch (e) {
    console.log(e);
  } finally {
    isCreating.value = false;
  }
};

const buttonDisabled = computed(() => isCreating.value || cartIsEmpty.value);

const cartIsEmpty = computed(() => cart.value.length === 0);
</script>



<style lang="scss" scoped>
</style>