<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{ clickable: true }"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    :virtual="true"
  >
    <swiper-slide v-for="(itemm, index) in items" :key="index" class="relative">
      <div
        class="pb-10 flex flex-col lg:pb-0  text-left pl-16 sm:pl-20 lg:gap-2 pt-4 lg:pt-8 lg:pl-28 text-gray bg-violet-500 h-full"
      >
        <h2 class="font-bold text-xs lg:text-lg 2xl:text-2xl">{{ itemm.title }}</h2>
        <p class="font-medium text-sm 2xl:text-xl">{{ itemm.price }} $</p>
        <p class="font-thin text-xs w-40 lg:w-96 lg:text-sm 2xl:text-xl">{{ itemm.description }}</p>
      </div>
      <img class="absolute right-1 sm:right-4 top-2 lg:right-10 lg:top-8 lg:w-16 lg:h-16 w-6 h-7" :src="itemm.imageUrl" alt="" />
    </swiper-slide>
  </swiper>
</template>
  
  <script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Virtual } from "swiper/modules";
import axios from "axios";

export default {
  data(){
    return{
      items: [],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay, Virtual],
    };
  },
  methods:{
    async fetchItems(){
      const itemsArr = await axios.get("https://b8f2c9deab9d2b35.mokky.dev/items");
      this.items = itemsArr.data.splice(0, 9)
    }
  },
  async mounted(){
    await this.fetchItems();
  }
};
</script>