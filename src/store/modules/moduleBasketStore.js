export default {
	actions: {
		increaseProductAction({commit}, product) {
			commit('increaseProduct', product);
		},
		decreaseProductAction({commit}, product) {
			commit('decreaseProduct', product);
		},
		removeProductAction({commit}, product) {
			commit('removeProduct', product);
		},
	},
	mutations: {
		increaseProduct(state, product) {
			if (state.products[product.id]) {
				state.products[product.id].productAmount += 1;
			} else {
				state.products[product.id] = product;
				state.products[product.id].productAmount = 1;
			}
		},
		decreaseProduct(state, product) {
			state.products[product.id].productAmount -= 1;
			if (state.products[product.id].productAmount <= 0) {
				delete state.products[product.id];
			}
		},
		removeProduct(state, product) {
			delete state.products[product.id];
		},
	},
	state: {
		products: {},
		amount: 0
	},
	getters: {
		getproductAmount(state) {
			return Object.values(state.products).reduce((a, b) => a + b.productAmount, 0);
		},
		getBasketProductsAmount(state) {
			return Object.values(state.products).length;
		},
		getBasketItems(state) {
			return state.products;
		},
		getBasketProductAmount: (state) => (id) => {
			return state.products[id]?.productAmount ?? 0;
		}
	}
}
