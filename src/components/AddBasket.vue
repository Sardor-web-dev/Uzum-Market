<template>
  <div id="add-favorite" class="container">
    <div class="content">
      <h2 v-if="favorites.length > 0"class="favorite-text">Корзина</h2>
      <hr v-if="favorites.length > 0" class="favorite-line">
      <div v-else class= "else-content">
        <img src="/src/assets/imgs/shopocat 1.png" alt="Избранное пусто" />
        <p class="main-text">В корзине пока нет товаров</p>
        <p class="sub-text">Начните с подборок на главной странице или найдите нужный товар через поиск</p>
        <a href="/" class="home-link">На главную</a>
      </div>
     
      <!-- Если есть избранные товары, отображаем их -->
      <div v-if="favorites.length > 0 " class="cards">
        <div v-for="product in favorites" :key="product.id" :id="'product' + product.id" class="card">
          <div class="photo">
        <router-link :to="'/card#' + product.id" style="text-decoration: none;">
          <img :src="product.thumbnail" :alt="product.title" />
        </router-link>
     
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
          <button class="basket" @click="addToBacket(product.id)" :onclick="'document.getElementById(\'product' + product.id +'\').style.display = \'none\';'">
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
  </div>
</template>

<script>
export default {
  name: 'AddBacket',
  data() {
    return {
      BacketProducts: JSON.parse(localStorage.getItem('BacketProducts')) || [],
      favorites: [],
    };
  },
  methods: {
    favorite(productId) {
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
    calculateDiscountedPrice(price, discountPercentage) {
      return price - (price * discountPercentage) / 100;
    },
    calculateMonthlyPayment(price) {
      return (price / 12).toFixed(2);
    },
    fetchProducts() {
      fetch('/dbj.json')
        .then(response => response.json())
        .then(data => {
          this.products = data.products;
          this.products.forEach(product => {
            if (this.BacketProducts.includes(product.id)) {
              this.favorites.push(product); // Добавляем продукт в массив favorites, если его id есть в likedProducts
            }
          });
        })
        .catch(error => {
          console.error('Ошибка загрузки данных:', error);
        });
      },
    },

    mounted() {
      this.fetchProducts();
     
    }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;


  font-family: 'Inter', sans-serif;
}

.heart-active {
color: #800080; /* Фиолетовый цвет */
}

.favorite-text {
margin-top: 20px;
}


.favorite-line {
margin-top: 20px;
margin-bottom: 20px;
}

.cards {
display: grid;
grid-template-columns: repeat(1, 1fr);
gap: 20px;
justify-content: center;
}

.else-content {
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
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

.hearts-image {
  width: 100px;
  margin-bottom: 20px;
}

.main-text {
  font-size: 32px;
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

@media (min-width: 425px) {

.container {
overflow: hidden;
box-sizing: border-box;
}

.favorite-text, .favorite-line {
  display: noje
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


@media (max-width: 768px) {
.container {
text-align: start;
width: 100%;
}

.favorite-line {
width: 720px;
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
width: 100%;
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
height: 100%;
width: 100%;
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
