import {createApp} from 'vue';
import Basket from './vue/basket/Basket.vue';
import Products from './vue/products/Products.vue';
import store from './store';
import './css/main.css';

createApp(Basket).use(store).mount('#vue-basket');
createApp(Products).use(store).mount('#vue-products');
