<template>
  <div>
    <header
      class="flex gap-2 sm:gap-6 items-center sm:justify-between border-b bg-white border-slate-100 px-5 py-4"
    >
      <router-link class="w-20 sm:w-32 md:w-56 lg:w-64" to="/">
        <img class="w-full h-full" src="/logo.png" alt="Logo" />
      </router-link>
      <ul class="flex items-center gap-6 md:10">
        <li
          @click="() => emit('openCategories')"
          class="md:flex hover:text-black cursor-pointer text-gray-500"
        >
          <button
            class="bg-slate-300 text-xs px-2 sm:px-2 sm:py-1 sm:text-sm md:py-1 md:px-4 text-violet-600 rounded-md lg:font-bold hover:translate-y-1 transition ease-in-out hover:scale-110"
          >
            Каталог
          </button>
        </li>
        <li
          @click="() => emit('openDrawer')"
          class="flex hover:text-black cursor-pointer text-gray-500 gap-1 sm:gap-2 lg:gap-4"
        >
          <img class="w-2 lg:w-5 sm:w-4" src="/public/basket.png" alt="" />
          <p class="text-xs sm:text-sm sm:font-bold lg:text-lg">
            {{ totalPrice }}$
          </p>
        </li>
        <router-link to="/favorites">
          <li
            class="hover:text-black cursor-pointer text-gray-800 flex items-center gap-1"
          >
            <img class="w-2 sm:w-4 lg:w-5" src="/heart.svg" alt="" />
            <span class="text-xs lg:text-sm">Избранное</span>
          </li>
        </router-link>
        <li
          @click="() => !loginUser && emit('openAuthorization')"
          class="text-gray-500 cursor-pointer flex items-center gap-1 lg:gap-2 hover:text-black"
        >
          <img class="w-2 sm:w-4" src="/profile.svg" alt="" />
          <span class="text-xs lg:text-sm">{{
            loginUser ? loginUser : "Войти"
          }}</span>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const emit = defineEmits(["openDrawer", "openCategories", "openAuthorization"]);
defineProps({ totalPrice: Number });

const loginUser = ref(null); 

onMounted(() => {
  loginUser.value = localStorage.getItem("login");
});

window.addEventListener('storage', () => {
  loginUser.value = localStorage.getItem("login");
  console.log(loginUser.value);
});

</script>

<style scoped>
</style>