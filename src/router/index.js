import Vue from 'vue';
import VueRouter from 'vue-router';

import AddFavorite from '../components/AddFavorite.vue';

const routes = [
  
    { path: '/favorite', component: AddFavorite, name: 'favorite' },

  ];

  const router = new VueRouter({
    mode: 'history',  // Для работы с чистыми URL (без #)
    routes
  });
  
  export default router;