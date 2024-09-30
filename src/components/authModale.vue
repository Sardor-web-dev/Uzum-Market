<template>
  <div
    class="fixed flex items-center justify-center top-0 bottom-0 left-0 w-full h-full bg-black/50 z-20"
  >
    <div
      class="relative flex flex-col gap-4 focus:outline-none bg-violet-600 p-10 rounded-xl"
    >
      <p
        @click="openAuthorization"
        class="absolute cursor-pointer text-3xl top-2 right-8"
      >
        &times;
      </p>
      <label class="flex text-white text-xl flex-col gap-4" for="">
        Введите номер телефона
        <input
          v-model="login"
          placeholder="+998........."
          class="text-black px-5 py-2 rounded-xl"
          type="text"
        />
      </label>
      <button
        @click="shareData"
        class="p-4 bg-white rounded-lg hover:scale-105 transition"
      >
        Зарегистрироваться/Войти  
      </button>
      <p v-if="validationError" class="text-red-500">
        Пожалуйста, введите правильный   номер телефона, Например :  +998 (00) 000 00 00   
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const login = ref("");
const validationError = ref(false);

const emit = defineEmits(["openAuthorization"]);
const openAuthorization = () => {
  emit("openAuthorization");
};
const loginUser = localStorage.getItem("login");

const shareData = () => {
  const phonePattern = /^\+998/;

  if (phonePattern.test(login.value)  ) {
    localStorage.setItem("login", login.value);
    validationError.value = false; 
    emit("openAuthorization");
  } else {
    validationError.value = true;
  }
};
</script>