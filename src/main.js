import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import MainPage from './MainPage.vue';
import AddFavorite from './components/AddFavorite.vue';
import AddBasket from './components/AddBasket.vue';
import Card from './components/Card.vue';
import User from './components/User.vue';


const routes = [
  { path: '/', component: MainPage},
  { path: '/favorite', component: AddFavorite, name: 'favorite' },
  { path: '/basket', component: AddBasket, name: 'basket' },
  { path: '/card',component: Card},
  { path: '/user', component: User}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
