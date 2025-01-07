import Vue from 'vue';
import VueRouter from 'vue-router';

import AddFavorite from '../components/AddFavorite.vue';

const routes = [
  
    { path: '/favorite', component: AddFavorite, name: 'favorite' },

  ];

  const router = new VueRouter({
    mode: 'history',  
    routes
  });
  
  export default router;