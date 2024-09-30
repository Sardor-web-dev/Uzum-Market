import "./assets/main.css";
import Home from "./pages/Home.vue";
import Favorites from "./components/Favorites.vue"; 
import { createRouter, createWebHistory } from "vue-router"; 
import { createApp } from "vue";
import App from "./App.vue";
import Swiper from "./components/Swiper.vue";

const app = createApp(App);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites, 
  },
  {
    path: "/swiper",
    name: "swiper",
    component: Swiper, 
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});


app.use(router);
app.mount("#app");
