import {createStore} from 'vuex'
import moduleBasketStore from './modules/moduleBasketStore.js';
import moduleProductsStore from './modules/moduleProductsStore.js';

export default createStore({
	modules: {
		moduleBasketStore,
		moduleProductsStore,
	}
});
