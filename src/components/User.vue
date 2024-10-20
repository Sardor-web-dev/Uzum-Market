<template>

</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
  mounted() {
    const storedUser = localStorage.getItem('registeredUser');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      this.firstName = userData.firstName;
      this.lastName = userData.lastName;
    }
  },
};
</script>

<style scoped>
.user-page {
  padding: 20px;
}

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
  height: 460px;
  border-radius: 30px;
  margin-top: 15px;
  cursor: pointer;
  margin-bottom: -10px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
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

    

    .swiper {
      margin-right: 15px;
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


    .swiper {
      margin-right: 15px;
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
    width: 87%;
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

  .swiper {
    margin-left: 15px;
    width: 97%;
    height: 350px;
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

  