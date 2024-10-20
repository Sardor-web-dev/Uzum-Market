<template>
  <meta name="theme-color" content="#ff0000">
    
    <div id="main-page" class="container">
        <swiper :pagination="true" :modules="modules" class="mySwiper resthree" >
          <swiper-slide><img src="https://images.uzum.uz/crlbmj2jot51rkb1rf30/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlc8foj5no2jr72qbn0/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crkkq5pbjcvd8a773k50/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/cr68jjmsbq7g1s9b0510/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlal1shug2lhicnaiu0/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlbmj2jot51rkb1rf30/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlc8foj5no2jr72qbn0/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crkkq5pbjcvd8a773k50/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/cr68jjmsbq7g1s9b0510/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlal1shug2lhicnaiu0/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlbmj2jot51rkb1rf30/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlc8foj5no2jr72qbn0/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crkkq5pbjcvd8a773k50/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/cr68jjmsbq7g1s9b0510/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlal1shug2lhicnaiu0/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlbmj2jot51rkb1rf30/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlc8foj5no2jr72qbn0/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crkkq5pbjcvd8a773k50/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/cr68jjmsbq7g1s9b0510/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlal1shug2lhicnaiu0/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlbmj2jot51rkb1rf30/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlc8foj5no2jr72qbn0/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crkkq5pbjcvd8a773k50/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/cr68jjmsbq7g1s9b0510/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlal1shug2lhicnaiu0/main_page_banner.jpg" alt=""></swiper-slide>  
          <swiper-slide><img src="https://images.uzum.uz/crlbmj2jot51rkb1rf30/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlc8foj5no2jr72qbn0/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crkkq5pbjcvd8a773k50/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/cr68jjmsbq7g1s9b0510/main_page_banner.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://images.uzum.uz/crlal1shug2lhicnaiu0/main_page_banner.jpg" alt=""></swiper-slide>

        </swiper>
        <transition name="scroll-to-top-animation">
        <div 
          v-if="isScrollVisible" 
          class="scroll-to-top" 
          title="Наверх" 
          @click="scrollToTop">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" style="width: 54px; height: 54px;">
            <g>
              <path d="M53,27L53,27c0,14.359-11.641,26-26,26h0C12.641,53,1,41.359,1,27v0C1,12.641,12.641,1,27,1h0C41.359,1,53,12.641,53,27z" style="fill: rgb(127, 77, 255);"></path>
              <path d="M39,32.706c-0.256,0-0.512-0.098-0.707-0.293L27,21.12L15.707,32.413c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414l11.498-11.498c0.666-0.666,1.752-0.666,2.418,0l11.498,11.498c0.391,0.391,0.391,1.023,0,1.414C39.512,32.608,39.256,32.706,39,32.706z" style="fill: rgb(255, 255, 255);"></path>
            </g>
          </svg>
        </div>
      </transition>
  <div class="recom">
    <h1 class="recommend">{{ getCategoryTitle() }}</h1>
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon title-icon">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.18945 16.4983C8.91426 16.1887 8.94215 15.7146 9.25174 15.4394L13.1211 12L9.25173 8.56055C8.94215 8.28536 8.91426 7.81131 9.18945 7.50172C9.46464 7.19213 9.93869 7.16425 10.2483 7.43943L14.7483 11.4394C14.9084 11.5818 15 11.7858 15 12C15 12.2142 14.9084 12.4182 14.7483 12.5605L10.2483 16.5605C9.93869 16.8357 9.46464 16.8079 9.18945 16.4983Z" fill="black"></path>
    </svg>
  </div>

  <div class="cards">
    <div v-for="product in products.filter(isCategorySelected)" :key="product.id" class="card">
      <div class="photo">
        <router-link :to="'/card#' + product.id" style="text-decoration: none;">
          <img :src="product.thumbnail" :alt="product.title" />
        </router-link>
        <button   :style="{ color: isProductLiked(product.id) ? 'red' : 'inherit' }" class="like"  @click="favorite(product.id)">
          <svg   v-if="!isProductLiked(product.id)"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" alt="like" class="ui-icon">
          <path  d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z" fill="white" fill-opacity="0.8"></path>
          <path :fill="isFavorite(product.id) ? '#800080' : 'currentColor'" d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"></path>
          </svg>
          <svg v-if="isProductLiked(product.id)"  data-v-04a70945="" width="20" height="20" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" alt="like" class="ui-icon ">
          <path d="M5.45 0.169434C8.01792 0.169434 9.5 2.32178 9.5 2.32178C9.5 2.32178 10.985 0.169434 13.55 0.169434C16.205 0.169434 18.5 2.23943 18.5 5.11943C18.5 9.34995 12.0604 13.7892 9.86509 15.7297C9.65819 15.9126 9.34179 15.9126 9.13488 15.7297C6.94056 13.7903 0.5 9.34976 0.5 5.11943C0.5 2.23943 2.795 0.169434 5.45 0.169434Z" fill="#8967F0"></path>
            </svg>
        </button>
      </div>
      <div class="details">
        <router-link :to="'/card#' + product.id" style="text-decoration: none;">
          <span class="product-title">{{ product.title }}</span>
        </router-link>
        <router-link :to="'/card#' + product.id" style="text-decoration: none;">
          <span class="product-rating"><img src="/src/assets/imgs/star.png" alt="">{{ product.rating }}</span>
        </router-link>
        <router-link :to="'/card#' + product.id" style="text-decoration: none;">
          <span class="monthly-payment">{{ calculateMonthlyPayment(product.price) }} /month</span>
        </router-link>
        <div class="card-footer">
          <router-link :to="'/card#' + product.id" style="text-decoration: none;">
            <div class="prices">
              <span class="product-free"><s>{{ product.price }} $</s></span>
              <span class="product-price" style="color: black;">{{ calculateDiscountedPrice(product.price, product.discountPercentage) }} $</span>
            </div>
          </router-link>
          <button class="basket" @click="addToBacket(product.id)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon add-cart-icon">
              <path d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z" fill="black"></path>
              <path d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z" fill="black"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'; // Подключаем стилияяя

import { Pagination } from 'swiper/modules'; // Подключаем необходимые модули
import User from './components/User.vue';
import AddFavorite from './components/AddFavorite.vue';
import { useRoute } from 'vue-router';
import AddBasket from './components/AddBasket.vue';
import Card from './components/Card.vue';



export default {
  setup() {
    const route = useRoute();

    // Проверка на то, находимся ли мы на маршруте /favorite
    const isFavoriteRoute = computed(() => route.path === '/favorite');

    return {
      isFavoriteRoute
    };
  },
  created() {
    // Загружаем список из localStorage при создании компонента
    const storedLikedProducts = JSON.parse(localStorage.getItem('LikedProducts'));
    if (storedLikedProducts) {
      this.likedProducts = storedLikedProducts; // Если данные существуют, устанавливаем их
    }
  },
  name: 'MainPage',
  components: {
    Swiper,
    SwiperSlide,
    User,
    AddFavorite
  },
  data() {
    return {
    
      likedProducts: JSON.parse(localStorage.getItem('LikedProducts')) || [],
      BacketProducts: JSON.parse(localStorage.getItem('BacketProducts')) || [],
      orderNumber: null,
      searchQuery: '',
      products: [], // Ваши товары должны быть загружены в этот массив
      filteredProducts: [],
      cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
      searchQuery: '',
      isModalOpen: false,
      isOnFavoritePage: false,
      phoneNumber: '',
      firstName: '',
      lastName: '',
      registeredUser: '',
      isModalOpen: false, // Для модалки Каталога и Еще
      isNameStage: false,
      isScrollVisible: false,
      maxSearchWidth: '550px',
      minSearchWidth: '100px',
      products: [
        
      ], // Список всех товаров
      filteredResults: [], // Отфильтрованные результаты поиска
      searchQuery: '', // Поисковый запрос
      isContactModalOpen: false,
      showFavoriteModal: false,
      favorites: [], // Список избранных товаров
      isCatalogModalOpen: false,
      selectedCategory: 'all',
      filteredProducts: [],
      cartItems: [],  // Список товаров в корзине
      favoriteItems: [],
      favoriteProducts: [],
      cartProducts: [],
      isCartOpen: false, // Статус модалки
      cartProducts: [],
      products: [
        // Твои товары
      ] // Список избранных товаров // Отфильтрованные товары // По умолчанию показывать все товары // Для модального окна каталогов
    };
  },

  computed: {
    totalCartValue() {
      return this.cartItems.reduce((total, item) => {
        return total + this.calculateDiscountedPrice(item.price, item.discountPercentage);
      }, 0).toFixed(2); // Ensures a fixed decimal value
    },
    filteredProducts() {
      if (!this.searchQuery) return this.products; // Return all products if searchQuery is empty
      const query = this.searchQuery.toLowerCase();
      return this.products.filter(product => 
        product.title.toLowerCase().startsWith(query) // Filter products starting with the searchQuery
      );
    },

    dynamicSearchWidth() {
      const baseWidth = 550;
      const reductionPerChar = 8;

      if (this.searchQuery.length > 8) {
        const reducedWidth = baseWidth - (this.searchQuery.length - 8) * reductionPerChar;
        return `${Math.max(reducedWidth, 100)}px`;
      }
      return `${baseWidth}px`;
    }
  },
  setup() {
    return {
      modules: [Pagination]
    };
  },
  methods: {
    favorite(productId) {
      let likedProducts = JSON.parse(localStorage.getItem('LikedProducts')) || [];

      if (this.likedProducts.includes(productId)) {
      this.likedProducts = this.likedProducts.filter(id => id !== productId);
    } else {
      // Если продукта нет в списке, добавляем его
      this.likedProducts.push(productId);
    }

    // Сохраняем обновленный список в localStorage
    localStorage.setItem('LikedProducts', JSON.stringify(this.likedProducts));

      // Дополнительные действия при добавлении в избранное (если необходимо)
    },
    isProductLiked(productId) {
      let likedProducts = JSON.parse(localStorage.getItem('LikedProducts')) || [];
      return likedProducts.includes(productId); // Проверяем, находится ли продукт в избранном
    },
    addToBacket(productId) {
      let BacketProducts = JSON.parse(localStorage.getItem('BacketProducts')) || [];

      if (this.BacketProducts.includes(productId)) {
      this.BacketProducts = this.BacketProducts.filter(id => id !== productId);
    } else {
      // Если продукта нет в списке, добавляем его
      this.BacketProducts.push(productId);
    }

    // Сохраняем обновленный список в localStorage
    localStorage.setItem('BacketProducts', JSON.stringify(this.BacketProducts));

      // Дополнительные действия при добавлении в избранное (если необходимо)
    },
    isProductBacket(productId) {
      let BacketProducts = JSON.parse(localStorage.getItem('BacketProducts')) || [];
      return BacketProducts.includes(productId); // Проверяем, находится ли продукт в избранном
    },
    toggleFavorite2() {
      if(isProductLiked){
      return {
        
        display: none
        }
      }
    },
    isFavorite(productId) {
      return this.favoriteProducts.some(product => product.id === productId);
    },
    calculateDiscountedPrice(price, discountPercentage) {
      return price - (price * discountPercentage) / 100;
    },
    calculateMonthlyPayment(price) {
      return (price / 12).toFixed(2);
    },
    addToCart(product) {
      // Логика добавления товара в корзину
    },
    closeCartModal() {
      this.isCartOpen = false;
      this.orderConfirmed = false; // Reset the order confirmation on closing
    },
    confirmOrder() {
      this.orderConfirmed = true;
      this.cartItems = []; // Clear the cart
    },
    addToCart(product) {
      // Your logic to add products to the cart
    },
    calculateMonthlyPayment(price) {
      // Your logic to calculate monthly payment
    },
    calculateDiscountedPrice(price, discountPercentage) {
      return price - (price * (discountPercentage / 100));
    },
    addToCart(product) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1; // Increment quantity if item exists
    } else {
      this.cartItems.push({ ...product, quantity: 1 }); // Add new item with quantity
    }
  },

  calculateTotal() {
    return this.cartItems.reduce((total, item) => {
      return total + this.calculateDiscountedPrice(item.price, item.discountPercentage) * item.quantity; // Calculate total with discount
    }, 0).toFixed(2); // Fixed to two decimal points
  },

  finalizeOrder() {
    if (this.cartItems.length > 0) {
      this.orderNumber = Math.floor(Math.random() * 11); // Generate a random order number between 0 and 10
      this.orderConfirmed = true; // Set order confirmed flag
      this.cartItems = []; // Clear the cart
    } else {
      alert("Ваша корзина пуста!"); // Alert if cart is empty
    }
  },

        filterResults() {
      // You can perform any additional actions here if needed
    },
    getCategoryTitle() {
      return 'Recommended Products'; // Update this as needed
    },
    filterResults() {
      // Фильтрация товаров по первой букве
      const query = this.searchQuery.toLowerCase(); // Приводим к нижнему регистру
      this.filteredProducts = this.products.filter(product => 
        product.title.toLowerCase().startsWith(query) // Проверка на соответствие
      );
    },
    calculateMonthlyPayment(price) {
      return (price / 12).toFixed(2);
    },
    calculateDiscountedPrice(price, discount) {
      return (price * (1 - discount / 100)).toFixed(2);
    },
    toggleCartModal() {
    this.isCartOpen = !this.isCartOpen; // Переключение состояния модального окна корзины
  },
  closeCartModal() {
    this.isCartOpen = false; // Закрытие модального окна корзины
  },
  addToCart(product) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (!existingItem) {
      this.cartItems.push(product); // Добавление товара в корзину
      this.updateLocalStorage(); // Обновление localStorage
    }
  },
  removeFromCart(productId) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId); // Удаление товара из корзины
    this.updateLocalStorage(); // Обновление localStorage
  },
  updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems)); // Сохранение корзины в localStorage
  },
    toggleCartModal() {
    this.isCartOpen = !this.isCartOpen; // Переключение состояния модального окна корзины
  },
  closeCartModal() {
    this.isCartOpen = false; // Закрытие модального окна корзины
  },
  addToCart(product) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (!existingItem) {
      this.cartItems.push(product); // Добавление товара в корзину
    }
  },
  calculateMonthlyPayment(price) {
    return (price / 12).toFixed(2); // Пример: делим на 12 месяцев
  },
  calculateDiscountedPrice(price, discount) {
    return (price - (price * (discount / 100))).toFixed(2); // Считаем цену со скидкой
  },
  toggleFavorite(product) {
    const existingFavorite = this.favorites.find(item => item.id === product.id);
    if (existingFavorite) {
      this.favorites = this.favorites.filter(item => item.id !== product.id); // Удаление из избранного
    } else {
      this.favorites.push(product); // Добавление в избранное
    }
  },
  isFavorite(productId) {
    return this.favorites.some(fav => fav.id === productId); // Проверка, является ли товар избранным
  },
  toggleFavoriteModal() {
    this.showFavoriteModal = !this.showFavoriteModal; // Переключаем состояние модалки избранного
  },
  isCategorySelected(product) {
    // Логика фильтрации товаров по категориям
    return true; // Пример: возвращаем true, если категория выбрана
  },
  closeModal() {
    this.isCatalogModalOpen = false; // Закрываем модальное окно каталога
  },
  selectCategory(category) {
    this.setCategory(category); // Устанавливаем выбранную категорию
    this.filteredProducts = this.products.filter(product => {
      return category === 'all' || product.category === category; // Фильтруем товары по выбранной категории
    });
    this.closeModal(); // Закрываем модальное окно после выбора категории
  },
  setCategory(category) {
    this.selectedCategory = category; // Устанавливаем выбранную категорию
  },
  resetCategory() {
    this.selectCategory('all'); // Сбрасываем категорию на "Все товары" и закрываем модальное окно
  },
    selectCategory(category) {
        // Устанавливаем выбранную категорию
        this.selectedCategory = category; // Устанавливаем выбранную категорию
        // Фильтруем товары по выбранной категории
        this.filteredProducts = this.products.filter(product => product.category === category);
        // Закрываем модальное окно после выбора категории
        this.closeModal(); 
    },
    selectCategory(category) {
      // Устанавливаем выбранную категорию
      this.setCategory(category);

      // Фильтруем товары по выбранной категории
      this.filteredProducts = this.products.filter(product => product.category === category);
      
      // Закрываем модальное окно после выбора категории
      this.closeModal(); 
    },
    showAllProducts() {
      this.filteredProducts = this.products; // Показываем все продукты
      this.closeModal(); // Закрываем модальное окно
    },
    selectCategory(category) {
      // Фильтруем товары по выбранной категории
      this.filteredProducts = this.products.filter(product => product.category === category);
      this.closeModal(); // Закрываем модальное окно после выбора категории
    },
    showAllProducts() {
      this.filteredProducts = this.products; // Показываем все продукты
      this.closeModal(); // Закрываем модальное окно
    },
    setCategory(category) {
    this.selectedCategory = category; // Устанавливаем выбранную категорию
  },
  resetCategory() {
    this.selectedCategory = 'all'; // Сбрасываем категорию
  },
  isCategorySelected(product) {
    return this.selectedCategory === 'all' || product.category === this.selectedCategory;
  },
  getCategoryTitle() {
    return this.selectedCategory === 'all' ? 'Рекомендуем' : this.selectedCategory.charAt(0).toUpperCase() + this.selectedCategory.slice(1);
  },
    toggleFavorite(product) {
    const index = this.favorites.findIndex(fav => fav.id === product.id);
    if (index === -1) {
      this.favorites.push(product); // Добавляем в избранное
    } else {
      this.favorites.splice(index, 1); // Удаляем из избранного
    }
  },
  isFavorite(product) {
    return this.favorites.some(fav => fav.id === product.id);
  },
    goToBasket() {
      this.$router.push('/basket'); // Перенаправление на страницу корзины
    },

    goToCard() {
      this.$router.push('/'); // Перенаправление на страницу корзины
    },
    closeCategoryModal() {
      this.isModalVisible = true; // Открыть модалку
    },
    closeCategoryModal() {
      this.isModalVisible = false; // Закрыть модалку
    },
    goToFavorite() {
      this.$router.push({ name: 'favorite' }); // Переход на страницу избранного
    },
    openContactModal() {
      this.isContactModalOpen = true; // Открываем модальное окно
      document.body.classList.add('modal-open');
    },
    closeContactModal() {
      this.isContactModalOpen = false; // Закрываем модальное окно
      document.body.classList.remove('modal-open');
    },
    handleLoginClick() {
      if (this.registeredUser) {
        this.$router.push({ name: 'UserPage' });
      } else {
        this.isModalOpen = true;
      }
    },
    openCatalogModal() {
      this.isCatalogModalOpen = true; // Открываем модальное окно каталогов
      this.isModalOpen = false; // Закрываем модальное окно ввода номера телефона
      this.isNameStage = false; // Сбрасываем этап ввода имени
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка наверх
      });
    },
    handleScroll() {
      const scrollThreshold = 300; // Порог прокрутки, при котором кнопка становится видимой
      this.isScrollVisible = window.scrollY > scrollThreshold;
    },
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    calculateMonthlyPayment(price) {
      const monthlyPayment = price / 12;
      return monthlyPayment.toFixed(2).toLocaleString();
    },
    calculateDiscountedPrice(a, b) {
      return (a / 100 * (100 - b)).toFixed(2);
    },
    formatPhoneNumber() {
      // Удаляем все символы, кроме цифр
      let value = this.phoneNumber.replace(/\D/g, '');

      // Ограничиваем длину до 9 цифр
      if (value.length > 9) {
        value = value.substring(0, 9);
      }

      // Добавляем пробелы и дефисы в нужные места
      if (value.length > 2 && value.length <= 5) {
        value = `${value.slice(0, 2)} ${value.slice(2)}`;
      } else if (value.length > 5 && value.length <= 7) {
        value = `${value.slice(0, 2)} ${value.slice(2, 5)}-${value.slice(5)}`;
      } else if (value.length > 7) {
        value = `${value.slice(0, 2)} ${value.slice(2, 5)}-${value.slice(5, 7)}-${value.slice(7)}`;
      }

      // Присваиваем отформатированное значение обратно в поле
      this.phoneNumber = value;
    },
    toggleCatalogModal() {
      if (this.isCatalogModalOpen) {
        this.isCatalogModalOpen = false;
        document.body.classList.remove('no-scroll');
        window.scrollTo(0, this.scrollPosition);
        document.body.style.top = '';
      } else {
        this.scrollPosition = window.pageYOffset;
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.classList.add('no-scroll');
        this.isCatalogModalOpen = true;
      }
    },
    submitPhoneNumber() {
      if (this.phoneNumber.length === 12) {
        const storedUser = localStorage.getItem('registeredUser');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          if (userData.phoneNumber === this.phoneNumber) {
            this.firstName = userData.firstName;
            this.lastName = userData.lastName;
            this.registeredUser = this.firstName;
            this.$router.push({ name: 'UserPage' });
          } else {
            this.isNameStage = true;
          }
        } else {
          this.isNameStage = true;
        }
      } else {
        alert('Введите корректный номер телефона.');
      }
    },
    submitName() {
      if (this.firstName) {
        localStorage.setItem('registeredUser', JSON.stringify({
          phoneNumber: this.phoneNumber,
          firstName: this.firstName,
          lastName: this.lastName
        }));
        this.registeredUser = this.firstName;
        this.toggleModal();
        this.isNameStage = false;
      } else {
        alert('Введите имя.');
      }
    },
    goBackToPhoneStage() {
      this.isNameStage = false;
    },
    navigateToUserPage() {
      this.$router.push({ name: 'UserPage' });
    },
    fetchProducts() {
      fetch('/dbj.json')
        .then(response => response.json())
        .then(data => {
          this.products = data.products;
        })
        .catch(error => {
          console.error('Ошибка загрузки данных:', error);
        });
    },
    filterResults() {
      if (this.searchQuery) {
        this.filteredResults = this.products.filter(product => 
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.filteredResults = [];
      }
    },
    openProduct(item) {
      console.log(`Открываем товар: ${item.name}`);
      this.$router.push({ name: 'ProductPage', params: { productId: item.id } });
    },
    selectProduct(item) {
      this.openProduct(item);
    }
  },
  watch: {
    '$route'(to) {
      this.isOnFavoritePage = to.name === 'favorite'; // Устанавливаем флаг, если мы на странице избранного
    },
    searchQuery() {
      this.filterResults(); // Фильтруем результаты при изменении поискового запроса
    },
    favorites(newFavorites) {
    // Логика для отображения на странице AddFavorite
    // Например, можно сохранить избранное в локальное хранилище
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  },
  mounted() {
    const storedFavorites = localStorage.getItem('favoriteProducts');
    if (storedFavorites) {
      this.favoriteProducts = JSON.parse(storedFavorites);
    }
    this.filteredProducts = this.products;
    this.products = [
    {
    "products": [
      
    ]
}
    ];
    this.filteredProducts = this.products;
    this.isOnFavoritePage = this.$route.name === 'favorite';
    window.addEventListener('scroll', this.handleScroll);
    const storedUser = localStorage.getItem('registeredUser');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      this.phoneNumber = userData.phoneNumber;
      this.firstName = userData.firstName;
      this.lastName = userData.lastName;
      this.registeredUser = userData.firstName;
      document.getElementById('login').value = userData.firstName;
    }
    this.fetchProducts();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header {
  display: flex;
  margin-top: 26px;
  align-items: center;
  justify-content: center;
  font-family: Inter, sans-serif;
  gap: 36px;
  box-sizing: border-box;
}

.text {
  width: 50px;
  height: 16px;
  font-size: 13px;
  font-weight: 550;
  line-height: 15.77px;
  font-family: Inter, sans-serif;
}

.catalog {
  width: 80px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: #e4e4ff;
  color: #3333CC;
  transition: background-color 0.5 ease;
}

.catalog:hover {
  background-color:#ccccff;
}

.input-container {
  position: relative; 
  display: inline-block; 
}

.search {
  width: 550px;
  height: 40px;
  border: 1px solid rgb(203, 203, 203);
  border-radius: 4px;
  font-family: Inter, sans-serif;
  font-size: .875rem;
  font-weight: 400;
  outline: none;
  padding: 0 calc(15% + 5px) 0 16px;
  transition: box-shadow .2s ease;
}

.search-btn {
  width: 70px;
  position: absolute;
  right: 0.2%;
  top: 50%; 
  transform: translateY(-50%);
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
  padding: 6.5px;
  border-radius: 3px;
}

.search-part {
  display: flex;
  gap: 8px;
}

.policy {
  padding-top: 100px;
  display: block; 
  text-align: center; 
  font-size: 14px;
  color: #333;
  margin-top: 20px; 
}

.policy-link {
  color: #007bff;
  text-decoration: none;
}

.search-btn img {
  margin-top: 4px;
  height: 17px;
  width: 17px;
}

.user-part {
  display: flex;
  gap: 11px;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.user {
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 400px;
  animation: slideIn 1s ease forwards;
  opacity: 0;
  transform: translateY(100px);
  position: relative;
  z-index: 1010;
}

.modal-header {
  display: flex;
  justify-content: space-between; 
  margin-bottom: 25px;
}

.close-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e6e6e6;
  border: none;
  padding-bottom: 2px;
  font-size: 16px;
  font-weight: bold;
  color: #555;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.close-button:hover {
  background-color: #cccccc;
}

.back-button {
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 4px;
  background-color: white;
  color: black;
  cursor: pointer;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.register-container {
  width: 100%;
}

.lastname, .firstname {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1.5px solid gray;
  padding-left: 10px;
  outline: none;
}

.register-form h2 {
  margin-bottom: 10px;
  color: #000000;
  font-family: Inter, sans-serif;
}

.register-form span {
  color: #3f3f3f;
  font-family: Inter, sans-serif;
}

.input-group {
  position: relative;
  margin-bottom: 15px;
  margin-top: 15px;
}

.prefix {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #333;
  pointer-events: none;
  margin-top: 10px;
}

.number {
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  padding-left: 55px;
  outline: none;
  margin-top: 20px;
  background-color: #dde1e6;
  letter-spacing: 2px;
}

.number::placeholder {
  color: gray;
  opacity: 1;
}

.log {
  width: 100%;
  height: 45px;
  padding: 12px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  background-color: #821cff;
  color: white;
  cursor: pointer;
  border-radius: 10px;
}

.log:hover {
  background-color: #9742ff;
}

.user-icon {
  width: 18px;
  height: 18px;
}

.like-icon {
  width: 18px;
  height: 18px;
}

.market-icon {
  width: 20px;
  height: 20px;
}

.user, .liked, .market {
  padding: 10px;
  display: flex;
  gap: 10px;
  font-size: 15px;
}

.user:hover, .liked:hover, .market:hover {
  background-color:#dde4ec;
  border-radius: 0;
  cursor: pointer; 
  border-radius: 5px;
}

.user-text, .liked-text {
  padding-top: 1px;
}

.market-text {
  padding-top: 2px;
}

.categories {
  display: flex;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  gap: 20px;
  padding-top: 20px;
}

.categories-2 {
  display: flex;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  gap: 20px;
}

.categories > div {
  display: flex;
  align-items: center;
}

.categories img {
  width: 25px;
  height: 25px;
}

.categories span {
  font-family: 'Inter', sans-serif;
}

.others {
  display: flex;
  gap: 3px;
  font-size: 15px;
}

.others img {
  width: 14px;
  height: 14px;
}

.category-1, .category-2, .category-3, .category-4 {
  display: flex;
  gap: 5px;
  font-size: 13.5px;
  cursor: pointer;
  color: #434343;
}

.categories > div {
  overflow: hidden;
}

.category-5, .category-6, .category-7, .category-8, .category-9, .category-10, .others {
  color: gray;
  font-size: 15px;
  cursor: pointer;
  transition: color 0.3s; 
}

.category-5, .category-6, .category-7, .category-8, .category-9, .category-10 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden; 
}

.category-5 span, .category-6 span, .category-7 span, .category-8 span, .category-9 span, .category-10 span {
  position: relative;
  padding-bottom: 10px; 
  transition: color 0.3s; 
  padding-top: 10px;
}

.category-5 span::before, .category-6 span::before, .category-7 span::before, .category-8 span::before, .category-9 span::before, .category-10 span::before {
  content: "";
  position: absolute;
  left: -100%;
  bottom: 0;
  width: 100%;
  height: 1px; 
  background: black; 
  transition: left 0.3s; 
}

.category-5:hover span, .category-6:hover span, .category-7:hover span, .category-8:hover span, .category-9:hover span, .category-10:hover span {
  color: black;
}

.category-5:hover span::before, .category-6:hover span::before, .category-7:hover span::before, .category-8:hover span::before, .category-9:hover span::before, .category-10:hover span::before {
  left: 0; 
}

.others:hover {
  color: black;
}

.swiper {
  width: 1265px;
  max-width: 100%;
  height: auto;
  border-radius: 30px;
  margin-top: 15px;
  cursor: pointer;
  margin-bottom: -10px;
}

.swiper-slide img {
  display: block;
  width: auto;
  height: auto;
  object-fit: cover;
}

/* Стиль для кнопок навигации */
.swiper-button-prev {
  background-color: rgba(214, 214, 214, 0.5); /* Полупрозрачный фон */
  color: #000000; /* Цвет стрелок */
  width: 45px; /* Сделать кнопки меньше */
  height: 45px;
  border-radius: 50%; /* Закругление углов */
  padding-right: 3px;
  margin-left: 10px;
}

.swiper-button-next {
  background-color: rgba(214, 214, 214, 0.5); /* Полупрозрачный фон */
  color: #404040; /* Цвет стрелок */
  width: 45px; /* Сделать кнопки меньше */
  height: 45px;
  border-radius: 50%; /* Закругление углов */
  padding-left: 3px;
  margin-right: 10px;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 22px; /* Размер стрелки */
}

/* Стиль для пагинации */
.swiper-pagination-bullet {
  background: #ccc; /* Цвет неактивных кружков */
  width: 7px; /* Ширина кружка */
  height: 7px; /* Высота кружка */
  background: #0000004d;
}

.swiper-pagination-bullet-active {
  width: 7px;
  height: 7px;
  background: #FFFFFFCC; /* Цвет активного кружка */
}

.cards {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  justify-content: center;
}



.card {
width: auto;
height: auto;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  margin-bottom: 15px;
  overflow: hidden; /* Чтобы содержимое карточки не выходило за рамки */
  transition: transform 0.8s, box-shadow 0.8s; /* Добавляем плавную анимацию */
}

.card:hover {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); /* Увеличиваем тень при наведении */
  border-radius: 12px;
}

.photo img {
  width: 100%;
  height: 100%;
  background-color: #DDDDDE;
  border-radius: 9px 9px 9px 9px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.photo {
  overflow: hidden;
}

.card:hover img{
  transform: scale(1.05); 
}


.details {
  display: flex;
  flex-direction: column;
  padding: 12px 8px 8px;
  height: 147px;
}

.product-title {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 16.98px;
  color: #48494E;
}

.product-price {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 18.98px;
}

.monthly-payment {
  font-family: 'Inter', sans-serif;
  width: 49%;
  padding-left: 5px;
  padding-top: 2px;
  padding-bottom: 1px;
  border-radius: 4px;
  background-color: yellow;
  color: #474747;
  font-size: 14px;
}

.product-free {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 14.56px;
  text-align: left;
  padding-bottom: 3px;
  color: #818181;
}

.prices {
  display: flex;
  flex-direction: column;
}

.card-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
}

.basket {
  border-radius: 50%;
  box-sizing: border-box;
  height: 32px;
  padding: 3.5px;
  align-items: center;
  align-self: center;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  text-decoration: none;
  transition: all .2s;
  box-shadow: 0 0 0 1px rgba(54, 55, 64, .2 ) inset;
  border: 1px;
  background-color: white;
}

.basket:hover {
  background-color: rgb(233, 233, 233);
}

.product-rating {
  font-size: 75%;
  padding-top: 3px;
  padding-bottom: 3px;
  color: gray;
}

.product-rating img {
  width: 12px;
  height: 12px;
}

.photo {
  position: relative;
}

.like {
  position: absolute;
  top: 10px;  
  right: 10px;  
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.like svg {
  width: 20px;
  height: 20px;
}

.recommend {
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 14.56px;
  padding-bottom: 35px;
  padding-top: 61px;
}

footer {
  font-family: 'Inter', sans-serif;
  display: flex;
  gap: 200px;
  padding-top: 45px;
}

.about-us, .for-user, .for-seller {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.app-media {
  padding-right: 59px;
  display: flex;
  flex-direction: column;
  gap: 45px;
}

.apps {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.links {
  display: flex;
  gap: 10px;
}

.apple svg {
  fill: black;
  position: relative;
  margin-bottom: -6.5px;
}

.play-market svg {
  margin-bottom: -7px;
}

.links button {
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
}

.links a {
  text-decoration: none;
  color: inherit;
  text-align: center;
}

.links svg {
  margin-right: 5px; /* Расстояние между иконкой и текстом */
}

.media {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.media-links {
  display: flex;
  gap: 10px;
}

.footer-end {
  display: flex;
  margin:  auto;
  max-width: 1240px;
  padding: 20px 0;
  padding-bottom: 150px;  
  font-family: 'Inter', sans-serif;
}

.link-1 {
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-right: 16px;
  white-space: nowrap;
  text-decoration: none;
}

.line {
  width: 1235px;
  height: 0.5px;
  margin-top: 60px;
}

.link-2 {
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-right: 16px;
  white-space: nowrap;
  text-decoration: none;
}

.footer-end span {
  color: gray;
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  margin-left: auto;
  padding-left: 395px;
}

.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s;
  transform: translateY(0px);
}

.scroll-to-top svg {
  fill: #fff;
}

.scroll-to-top:hover {
  opacity: 0.8;
}

/* Анимация появления кнопки снизу */
.scroll-to-top-animation-enter-active,
.scroll-to-top-animation-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.scroll-to-top-animation-enter {
  transform: translateY(11px);
  opacity: 0;
}

.scroll-to-top-animation-leave-to {
  transform: translateY(80px);
  opacity: 0;
}

.about-us a,
.for-user a,
.for-seller a {
  color: rgb(101, 101, 101);
  display: block;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.5px;
}

.about-us h4,
.for-user h4,
.for-seller h4 {
  font-size: 14px;
}

.hidden {
  display: none; /* Скрыть элемент */
}


.recom {
  display: flex;
  align-items: center;
  padding-right: 1010px;
}

.recom svg {
  margin-top: 30px;
}


/* Основной стиль модального окна */
.custom-modal {
  display: flex;
  position: fixed;
  z-index: 1002;  /* Поверх полупрозрачного фона */
  bottom: -500%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff; /* Цвет модального окна без прозрачности */
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-family: 'Arial', sans-serif;
  transition: bottom 1s ease-in-out;
}

.custom-modal.show {
  bottom: 50px; /* Появление на 50px от нижнего края */
}

.modal-open {
  overflow: hidden;
}

/* Прозрачный задний фон (Backdrop) */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */
  z-index: 1001; /* За модальным окном */
}

/* Стили для заголовка модального окна */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h4 {
  margin: 0;
  font-size: 18px;
  color: #1f2026;
}

.btn-close {
  background: none;
  border: none;
  cursor: pointer;
}

.btn-close svg {
  width: 24px;
  height: 24px;
}

.modal-body p {
  color: #555;
  font-size: 13px;
}

/* Стили для контактных опций */
.contact-details {
  margin-top: 5px;
}

.contact-options {
  display: flex;
  flex-direction: column;
  padding-top: 25px;
}

.contact-options a {
  width: 355px;
  height: 60px;
  border-radius: 10px;
  padding-left: 10px;
}

.contact-options a:hover {
  background-color: #dde4ec;
}

.contact-item {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-bottom: 15px;
}

.contact-item svg {
  margin-right: 10px;
  width: 44px;
  height: 44px;
}

.contact-text {
  display: flex;
  flex-direction: column;
}

.contact-title {
  font-size: 10px;
  font-weight: 600;
  color: black;
}

.contact-subtitle {
  font-size: 10px;
  color: #7d7d7d;
}

/* Стили для почты поддержки */
.support-email {
  font-size: 14px;
  color: #555;
  margin-top: 15px;
}

.support-email a {
  color: #0026ff;
}

.catalog-button {
  background-color: #6200ee;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.catalog-button:hover {
  background-color: #3700b3;
}

/* Модальное окно */
.catalog-modal-overlay {
  position: fixed;
  top: 130px; /* Модалка начинается под хедером */
  left: 0;
  width: 100%;
  height: calc(100% - 60px); /* Высота модального окна под хедером */
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Модалка внизу экрана */
  z-index: 1000;
}

body.no-scroll {
  position: fixed;
  width: 100%;
  overflow: hidden;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}


.catalog-modal-content {
  width: 100%;
  max-width: 1550px;
  background-color: white;
  padding: 20px;
  transition: all 0.3s ease;
}

.catalog-modal-header {
  background-color: white;
  padding: 10px;
  border-bottom: 1px solid #ddd; /* Легкая граница */
}

.catalog-close-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.text {
  cursor: pointer;
}


.catalog-modal-body {
  background-color: rgba(0, 0, 0, 0.8); /* Полупрозрачный темный фон для контента */
  color: white;
  padding: 20px;
  border-radius: 0 0 10px 10px; /* Скругленные углы снизу */
}

.footer {
  display: flex;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.footer-column {
  flex: 1;
  margin: 20px;
}

.footer-socials {
  display: flex;
  gap: 10px;
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 0 0 4px 4px;
  z-index: 10;
}

.search-results ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.search-results li {
  padding: 10px;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-results li:hover {
  background-color: #f1f1f1;
}

.search-results li:last-child {
  border-bottom: none;
}
.overlay {
margin-top: 118px;
  
  top: 12px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.category-container {
  background-color: white;
  padding-top: 30px;
  padding-left: 366px;
  padding-bottom: 50px;
  margin-top: -120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
}

.close-buttons {
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  right: 25%;
  cursor: pointer;
}

.category-title {
  font-size: 12px;
  color: gray;
}

.category-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.category-name {
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}

.item-count {
  font-size: 12px;
  background-color: #7d3ef7;
  padding: 5px 10px;
  border-radius: 3px;
  color: white;
}

.wrapper {
  display: flex;
}

.fixed-header {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 10px 0;
  font-family: 'Arial', sans-serif;
  border: 1px solid gray;
  align-items: center;
  padding-left: 0px;
  z-index: 1000; /* Чтобы header находился поверх других элементов */
}

/* Стили для кнопки открытия избранного */
.liked {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.like-icon {
  width: 24px;
  height: 24px;
}

.liked-text {
  margin-left: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #48494E;
}

/* Стили для модального окна */
.favorite-modal {
  position: fixed;
  top: 0;
  right: 0;
  width: 400px; /* Ширина модального окна */
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  transform: translateX(100%); /* Начальное состояние за экраном */
  transition: transform 0.3s ease-in-out;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-height: 100%; /* Ограничиваем высоту модального окна */
  overflow-y: auto; /* Включаем вертикальную прокрутку */
  overflow-x: hidden; /* Отключаем горизонтальную прокрутку */
  z-index: 99999; /* Еще выше для контента */
}

.like svg.liked path {
  fill: #800080; /* Цвет фиолетовый при добавлении в избранное */
}

.modal {
  z-index: 1000; /* Модальное окно выше всего */
  /* Другие стили для модального окна */
}

.liked {
  fill: red; /* Цвет красного сердечка */
  transition: transform 0.3s ease, fill 0.3s ease; /* Плавный переход цвета и трансформации */
}

.heart-animation {
  animation: pulse 0.3s ease; /* Анимация мерцания */
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2); /* Увеличение при мерцании */
  }
  100% {
    transform: scale(1);
  }
}


/* Оверлей для блокировки элементов за модалкой */
.modal-overlay {
  position: fixed;
  display: flex;

  

}


.ui-icon.liked {
  color: purple; /* Фиолетовый цвет для избранных товаров */
}


/* Блокируем прокрутку фона при открытой модалке */
body.modal-open {
  overflow: hidden;
}

.favorite-modal.active {
  transform: translateX(0); /* Когда активна, модалка перемещается на экран */
}

.modal-content {
  padding: 20px;
}

.photo-2 button {
  cursor: pointer;
  margin-left: 320px;
  position: absolute;
}

.favorite-modal {
    overflow-y: auto; /* Включаем вертикальную прокрутку */
    overflow-x: hidden; /* Отключаем горизонтальную прокрутку */
    z-index: 99999; /* Еще выше для контента */
}

.prices-2 {
  margin-top: 20px;
  flex-direction: column;
  display: flex;
}

.favorite-product {
  padding-bottom: 20px;
  margin-left: 57px;
  margin-top: 20px;
  font-family: 'Arial', sans-serif;
}



.close-button-2 {
  background-color: transparent;
  border: none;
  font-size: 17px;
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 25px;
}

/* Остальные стили для контента */


.heart-active {
  color: #800080; /* Фиолетовый цвет */
}

.favorite-products {
display: flex;
align-items: center;
justify-content: center;

  gap: 20px;
}

.modal-content h2 {
  font-family: 'Arial', sans-serif;
}

.modal-2-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 170px;
}


.close-button {
  margin-right: 40px;
  font-size: 16px;
}

.cart-item {
  overflow-y: auto; /* Включаем вертикальную прокрутку */
  overflow-x: hidden; /* Отключаем горизонтальную прокрутку */
  z-index: 99999; /* Еще выше для контента */
}

.photo-2 img {
  width: 240px;
  height: 300px;
  object-fit: cover;
}

.favorite-product {
  width: 250px;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid gray;
}

.hearts-image {
  width: 100px;
  margin-bottom: 20px;
}

.main-text {
  font-size: 20px;
  font-weight: 600;
  line-height: 39.2px;
  text-align: left;
  padding-top: 15px;
}

.sub-text {
  font-size: 14px;
  font-weight: 500;
  line-height: 16.98px;
  text-align: center;
  padding-top: 11px;
}

.home-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #a560ff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-top: 15px;
}

.home-link:hover {
  background-color: #9d53ff;
}


.ui-icon {
  margin-bottom: 5px;
}

.svg-container {
  position: relative;
}

.ui-component {
 border: none;
 background-color:  white;
}

.products-amount {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: black;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wapper {
  display: flex;
  font-family: 'Arial', sans-serif;
  margin-top: 10px;
}

.mobile-text {
  margin-left: 10px;
}

.category-title {
  margin-top: -60px;
}

.photo-2 svg {
  position: absolute;
  margin-top: 20px;
  right: 90px;
}

.close {
  width: 100px;
  height: 40px;
  margin-left: 900px;
  cursor: pointer;

  border: none;
  border-radius: 4px;
  background-color: white;
  color: black;
  cursor: pointer;
}
.basket-2:hover {
  background-color: rgb(233, 233, 233);
}

.mobile-app {
  width: 90px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: #7000FF;
  color: white;
  cursor: pointer;
  margin-left: 430px;
}

.basket-2 {
  border-radius: 50%;
  box-sizing: border-box;
  height: 32px;
  padding: 3.5px;
  align-items: center;
  align-self: center;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  text-decoration: none;
  transition: all .2s;
  box-shadow: 0 0 0 1px rgba(54, 55, 64, .2) inset;
  border: 1px;
  background-color: white;
  margin-top: -40px;
  margin-left: 190px;
}

.market {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.cart-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  transform: translateX(-100%); /* Начальная позиция скрыта */
  z-index: 10000;
  font-family: 'Arial', sans-serif;
}

.cart-modal h2 {
  margin-top: 15px;
  margin-left: 20px;
}

.cart-modal.open {
  transform: translateX(0); /* Показать модалку */
}

.close-button {
  cursor: pointer;
  margin: 10px;
}

.fixed-header__item a:hover, .fixed-header__button:hover {
  color: #6b6b6b;
}

.hearts-image {
  width: 100px;
  margin-bottom: 20px;
}

.main-text {
  font-size: 32px;
  font-weight: 600;
  line-height: 39.2px;
  text-align: center;
  padding-top: 15px;
}

.like {
  background: none;
  border: none;
  cursor: pointer;
}

svg.liked path {
  fill: #8B00FF; /* Цвет фиолетовый при нажатии */
}

.cart-item {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  position: relative;
}

.cart-item img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
}

.empty-cart {
  text-align: center;
  margin-top: 20px;
}

.empty-cart img {
  width: 100px;
  margin-bottom: 20px;
}

.main-text,
.sub-text {
  margin: 10px 0;
}

.home-link {
  display: inline-block;
  margin-top: 15px;
  text-decoration: none;
  color: #007BFF;
}

.cart-modal {
  width: 400px;
  height: 100%;
}

.home-link:hover {
  text-decoration: underline;
}

.sub-text {
  font-size: 14px;
  font-weight: 500;
  line-height: 16.98px;
  text-align: center;
  padding-top: 11px;
}

.home-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #a560ff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-top: 15px;
}

.home-link:hover {
  background-color: #9d53ff;
}


.cart-modal {
  position: fixed;
  top: 0;
  left: -100%; /* Начальная позиция вне экрана */
  width: 300px; /* Ширина модалки */
  height: 100%; /* Высота модалки */
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  transition: left 0.3s ease; /* Плавный переход */
  z-index: 1000; /* Положение над другими элементами */
  padding: 20px;
  overflow-y: auto; /* Прокрутка, если содержимое выходит за пределы */
}

.cart-modal.open {
  left: 0; /* Когда модалка открыта, позиция слева 0 */
}

.close-button-2 {
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
}

.empty-cart {
  text-align: center;
}

.main-text {
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0;
}

.sub-text {
  font-size: 14px;
  color: #666;
  margin: 5px 0;
}

.home-link {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: blue; /* Цвет ссылки */
}

.cart-item {
  display: flex;
  flex-direction: column; /* Изменяем направление на столбец */
  margin-bottom: 15px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px; /* Округление углов */
  background-color: #f9f9f9; /* Цвет фона карточки */
  margin-top: 20px;
}

.photo {
  overflow: hidden;
  margin-bottom: 10px; /* Отступ между изображением и названием товара */
}

.cart-item img {
  width: 100%; /* Полная ширина */
  height: auto; /* Автоматическая высота */
  object-fit: cover;
}

.product-title {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #48494E;
  margin: 5px 0; /* Отступы сверху и снизу */
}

.product-rating {
  font-size: 14px;
  color: #888;
  margin: 5px 0; /* Отступы сверху и снизу */
}

.monthly-payment {
  font-size: 14px;
  color: #474747;
}

.prices-3 {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}

 .cart-modal h2 {
  margin-top: -1px;
 }

 .pace .pace-progress {
   background: red !important;
}

.basket-3 {
  border-radius: 50%;
  box-sizing: border-box;
  height: 32px;
  padding: 3.5px;
  align-items: center;
  align-self: center;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  text-decoration: none;
  transition: all .2s;
  box-shadow: 0 0 0 1px rgba(54, 55, 64, .2) inset;
  border: 1px;
  background-color: white;
  margin-top: -35px;
  margin-left: 190px;
  position: absolute;
}

.checkout-button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.checkout-button:hover {
  background-color: #45a049; /* Darker green */
}

.order-confirmation {
  color: #800080; /* Purple color */
  margin-top: 10px;
  font-weight: bold;
}



@media (min-width: 375px) and (max-width: 426px) {

  .container {
    overflow: hidden;
    box-sizing: border-box;
  }
  .cards {
      padding-left: 256px;
      gap: 0px;
    }

    .card {
      max-width: 80%;

    }

    

    .search {
      width: 350px;
      margin-left: -10px;
    }

    .mobile-app {
      margin-left: 20px;
    }

    .close {
      padding-right: 50px;
    }


   

    .recom {
      font-size: 10%;
      padding-left: 370px;
    }

    .search {
      width: 350px;
      margin-left: -10px;
    }

    .mobile-app {
      margin-left: 59px;
    }
}

@media (max-width: 9561px) {
  .wapper {
    display: none;
  }

  .nav {
    display: none;
  }

  .fixed-header {
    display: none;
  }
}


@media (max-width: 2560px) {
  .container {
    overflow: hidden;
  }
  .cards {
    grid-template-columns: repeat(4, 1fr);
    width: 83%;
    width: 1265px;
    max-width: 100%;
  }

  .wapper {
    display: none;
  }

  .nav {
    display: none;
  }

  .fixed-header {
    display: none;
  }
}

@media (max-width: 1441px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
    width: 93%;
  }
  .wapper {
    display: none;
  }

  .nav {
    display: none;
  }

  .fixed-header {
    display: none;
  }
}

@media (max-width: 769px) {
  .swiper {
  width: 700px;
  max-width: 100%;
  height: auto;
  border-radius: 30px;
  margin-top: 15px;
  cursor: pointer;
  margin-bottom: -10px;
}
  .fixed-header {
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
  z-index: 1000;
}

.close {
  margin-left: 590px;
}

.fixed-header__body {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

.fixed-header__item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ui-link, .ui-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #8B8E99;
  text-decoration: none;
  font-size: 12px;
}

.ui-link svg, .ui-button svg {
  fill: #8B8E99;
  margin-bottom: 5px; /* Добавим отступ между иконкой и текстом */
}

.active-link {
  color: #7a41e2;
}

.active-link svg {
  fill: #7a41e2;
}

.svg-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.products-amount {
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 10px;
}

.fixed-header__button {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fixed-header__button svg, .ui-link svg {
  margin-bottom: 5px;
}


.ui-icon {
  margin-bottom: 5px;
}

  .wapper {
    display: flex;
  }

  .media-links {
    padding-left: 33px;
  }

  .logo {
    display: none;
  }

  .app-media {
    display: flex;
    flex-direction: column;
  }

  .footer-end {
    display: flex;
    flex-direction: column;
  }

  .container{
    overflow: hidden;
  }

  .footer-end a {
    text-align: center;
    margin-left: 50px;
    margin-top: 10px;
  }

  .apps h4 {
    margin-left: 255px;
  }

  .media h4 {
    margin-left: 25px;
  }


  .link-1 {
    padding-top: 45px;
  }

  .scroll-to-top {
    display: none;
  }

  .apps {
    display: flex;
    flex-direction: column;
    padding-left: 786px;
    padding-bottom: 90px;
    margin-top: -100px;
  }

  .modal-content {
    height: 85%;
    margin-bottom: 90px;
  }



  .categories, .user-part, .catalog {
    display: none;

  }

  .recom {
    margin-right: -255px;
  }

  .links {
    margin-left: 235px;
  }

  .about-us, .for-user, .for-seller{
    display: none;
  }

  .media {
    text-align: center;
    padding-left: 710px;
    margin-bottom: -40px;
  }

  .for-user {
    margin-left: -300px;
  }

  .for-seller {
    margin-bottom: 150px;
  }

  .footer-end span {
    margin-right: 130px;
    margin-bottom: -20px;
    margin-top: 10px;
  }

  .footer-end a {
    margin-right: 35px;
  }

  .line {
    display: none;
  }

.catalog-modal-overlay {
  margin-top: -130px;
}

.category-container {
 padding-left: 50px;
}

.category-item h4 {
  font-size: 13px;
}

.close-buttons {
  font-size: 17px;
}

.category-item span {
  font-size: 10px;
}

  .fixed-header {
    display: flex;
  }

  .cards {
    grid-template-columns: repeat(3, 1fr);
    width: 40%;

    margin-right: -250px;
  }
}

@media (max-width: 1025px) {
  .user-text, .liked-text, .market-text {
    display: none;
  }

  .swiper-slide {
    height: 95%;
    width: auto;
  }

  .cards {
    height: 110%;
  }

  .product-free {
    padding-top: 10px;
  }

  .swiper-slide img {
    height: 105%;
    width: 123%;
  }

  .user-part {
    margin-left: -15px;
    gap: 0px;
  }

  .custom-modal.show {
  bottom: -100px; /* Появление на 50px от нижнего края */
  }

  .recom {
    padding-right: 730px;
  }


  .header {
    padding-left: 10px;
  }



  .user-part {
    margin-left: -30px;
  }

  .categories {
    gap: 63px;
  }

  .catalog {
    margin-left: -25px;
  }
  
  .cards {
    height: 3450px;
    grid-template-columns: repeat(4, 1fr);
    margin-left:  0px;
  }

  .category-item, .category-title {
    margin-left: -115px;
  }

  .close {
    margin-left: 50px;
  }

  .card {
    width: 230px;
  }

  .about-us {
    margin-left: -430px;
  }

  .app-media {
    margin-top: 130px;
    position: relative;
    margin-left: -975px;
    display: flex;
  }
  
  .media {
    position: relative;
    margin-left: 300px;
    margin-top: -100px;
  }

  .link-1, .link-2 {
    font-size: 12px;
  }

  .scroll-to-top {
    width: 60px;
    height: 50px;
  }

  .footer-end span {
    margin-left: -240px;
  }

  .line {
    width: 950px;
    margin-left: -10px;
  }
}




@media screen and (max-width: 1025px) {
                .resone { display:none !important;}
                .swiper {
  width: 980px;
  max-width: 100%;
  height: 460px;
  border-radius: 30px;
  margin-top: 15px;
  cursor: pointer;
  margin-bottom: -10px;
}
            }  
            
            @media screen and (max-width: 991px) {
                .restwo { display:none !important;}
            }    
            @media screen and (max-width: 767px) {
                .resthree { display:none !important;}
                td { font-size: 12px; }
            } 
            @media screen and (max-width: 540px) {
                .resfour { display:none !important;}
                .resfourshow { display:block !important;}
                td { font-size: 11px; }
            } 
            @media screen and (max-width: 410px) {
                .resfive { display:none !important;}
            } 

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
</style>
