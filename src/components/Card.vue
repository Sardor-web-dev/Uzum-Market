<template>
    <div class="product-page">
      <div class="product-container">
        <div class="image-gallery">
        <div class="thumbnails">
          <img :src="product.thumbnail" :alt="product.title" class="thumbnail-image" />
        </div>
      </div>
        <div class="product-details">
          <h1>{{ product.title }}</h1>
          <div class="price">
            <span class="current-price">{{ calculateDiscountedPrice(product.price, product.discountPercentage) }} $</span>
            <span class="old-price">{{ product.price  }} $</span>
          </div>
          <hr>
          <div class="info">
            <span>{{ product.description}}</span>
          </div>
          <p class="product-description">
            
          </p>
          <div class="action-buttons">
            <button class="primary-btn">Добавить в корзину</button>
            <button  class="secondary-btn">Добавить в избранное</button>
          </div>
        </div>
      </div>
  
      <div class="product-info">
        <br>
        <br>
        <h2>Описание товара</h2>
        <span>{{ product.description}}</span>
        <br>
        <br>
      </div>
    </div>
    
  </template>
  
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'Card',
    setup() {
      const hash = ref(window.location.hash.substring(1)); // Получаем hash из URL
      const product = ref({}); // Реактивная переменная для продукта
      const products = ref([]); // Массив продуктов
  
      const fetchProducts = () => {
        fetch('/dbj.json')
          .then(response => response.json())
          .then(data => {
            products.value = data.products; // Сохраняем продукты
  
            // Проходим через каждый продукт и проверяем его id с hash
            products.value.forEach((producta) => {
              if (producta.id == hash.value) {
                product.value = producta; // Устанавливаем найденный продукт
                console.log(product.value.title); // Проверяем вывод в консоль
              }
            });
          })
          .catch(error => {
            console.error('Ошибка загрузки данных:', error);
          });
      };
  
      // Вызываем fetchProducts при монтировании компонента
      onMounted(() => {
        fetchProducts();
      });
  
      const addToCart = () => {
        alert("Товар добавлен в корзину");
      };
  
      const addToFavorites = () => {
        alert("Товар добавлен в избранное");
      };
  
      // Возвращаем реактивные переменные и методы
      return {
        hash,
        product,
        addToCart,
        addToFavorites
      };
    },

    methods: {
      calculateDiscountedPrice(price, discount) {
    return (price - (price * (discount / 100))).toFixed(2); // Считаем цену со скидкой
  },
    },
  };
  </script>
  
  <style scoped>
  .product-page {
	margin: 20px;
  }
  
  .product-container {
	display: flex;
	gap: 20px;
	padding: 50px;
    justify-content: center;
    align-items: start;

    margin-left: -150px;
    font-family: 'Inter', sans-serif;
  }
  
  @font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

  .image-gallery {
	display: flex;
	flex-direction: column;
  width: 340px;
  height: 366px;
  background-color: gray;
  background-color: #DDDDDE;
  }
  
  .thumbnails {
	display: flex;
  align-items: center;
  margin-top: 25px;
  justify-content: center;
  }
  
  .thumbnail {
	width: 60px;
	cursor: pointer;
  }
  
  .main-image img {
	max-width: 100%;
	height: auto;
  }
  
  .product-details {
	width: 60%;
  margin-top: 20px;
  margin-left: 20px;
  }
  
  h1 {
	font-size: 28px;
	margin-bottom: 10px;
  }
  
  .price {
	display: flex;
	gap: 10px;
	align-items: center;
	margin-bottom: 26px;
  padding-top: 15px;
  }
  
  .current-price {
	font-size: 24px;
	color: #000;
	font-weight: bold;
  }

  hr {
    width: 818px;
    border: 0>1px solid #ACACAC
  }
  
  .old-price {
	font-size: 23px;
  text-align: center;
	color: #888;
	text-decoration: line-through;
  }
  
  .quantity-section {
	margin-bottom: 15px;
  }
  
  .quantity-section label {
	margin-right: 10px;
  }
  
  .product-description {
	margin-bottom: 20px;
  }
  
  .action-buttons {
	display: flex;
	gap: 10px;
  }
  
  .primary-btn {
  width: 176px;
  height: 38px;
  border-radius: 4px;
  opacity: 0px;
	cursor: pointer;
  border: none;
  background: #7000FF;
  color: white;

  }
  
  .secondary-btn {
    width: 176px;
  height: 38px;
  border-radius: 4px;
  opacity: 0px;
	cursor: pointer;
  border: 1px solid #7000FF;
  background: white;
  color: #7000FF;

  }
  
  .primary-btn:hover,
  .secondary-btn:hover {
	opacity: 0.8;
  }
  
  .info {
    width: 500px;
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    text-align: left;
    margin-top: 26px;
  }

  .product-info {
  font-family: 'Inter', sans-serif;
  margin-left: 70px;
  width: 793px;



  }
  
  .product-info h2 {
	margin-bottom: 10px;
  }
  </style>
  
