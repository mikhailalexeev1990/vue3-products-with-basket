<template>
	<div @click="openCloseBasket" class="basket" ref="basket">
		<i class="bi bi-cart2"></i>
		<div class="amount">{{getBasketProductsAmount}}</div>
	</div>
	<div class="basket-items card" ref="basket-items" v-if="showBasket">
		<h3>Basket Cart</h3>
		<div v-if="!Object.values(getBasketItems).length">
			Products weren't added
		</div>
		<div v-else class="d-flex justify-content-between align-items-center mt-1 mb-1 -item"
		     v-for="(item, name, index) in getBasketItems">
			<div class="d-flex align-items-center">
				<img :alt="item.name" :src="item.img">
				<p class="mb-0 card-text -name">{{item.name}}</p>
				<p class="mb-0 card-text"><strong>Price:</strong> {{getProductPrice(item.id)}} rub</p>
			</div>
			<div class="amount-box d-flex justify-content-between align-items-center">
				<div class="d-flex align-items-center">
					<span @click.stop="increaseProductAction(item)" class="-plus"><i class="bi bi-plus"></i></span>
					<span class="-amount">{{getBasketProductAmount(item.id)}}</span>
					<span @click.stop="decreaseProductAction(item)" class="-minus"><i class="bi bi-dash"></i></span>
				</div>
				<span @click.stop="removeProductAction(item)" class="-trash"><i class="bi bi-trash"></i></span>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from "vuex";

	export default {
		name: "Basket",
		data() {
			return {
				showBasket: false,
			}
		},
		mounted() {
			document.querySelector('body').addEventListener('click', (e) => {
				if (this.showBasket
						&& this.$refs['basket'] !== e.target.closest('.basket')
						&& this.$refs['basket-items'] !== e.target.closest('.basket-items')
				) {
					this.openCloseBasket();
				}
			})
		},
		computed: {
			...mapGetters([
				'getBasketAmount',
				'getBasketProductsAmount',
				'getBasketItems',
				'getBasketProductAmount',
			]),
		},
		methods: {
			...mapActions([
				'increaseProductAction',
				'decreaseProductAction',
				'removeProductAction',
			]),
			openCloseBasket() {
				this.showBasket = !this.showBasket;
			},
			getProductPrice(id) {
				let amount = this.getBasketProductAmount(id);
				let items = this.getBasketItems;

				return Number(items[id].price * amount).toFixed(2);
			},
		},
	}
</script>

<style scoped>
	.basket {
		position: relative;
		margin-right: 30px;
		color: var(--bs-green);
	}

	.basket i:before {
		font-size: 30px;
		cursor: pointer;
	}

	.basket .amount {
		font-size: 11px;
		position: absolute;
		top: -5px;
		right: -20px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		cursor: pointer;
		color: var(--bs-green);
		border: 1px solid var(--bs-green);
		border-radius: 50%;
	}

	.basket-items {
		position: absolute;
		top: 46px;
		right: 36px;
		overflow: auto;
		width: 80%;
		max-width: 800px;
		max-height: 400px;
		padding: 20px;
		background: #fff;
		box-shadow: 0 2px 6px #00000029;
	}

	.basket-items .-item {
		padding-top: 10px;
		border-top: 1px solid #ccc;
	}

	.basket-items .-item img {
		width: 50px;
		height: 50px;;
		object-fit: cover;
	}

	.card {
		height: auto;
	}

	.amount-box .-trash {
		margin-left: 20px;
	}

	.card-text {
		margin: 0 10px;
	}

	.card-text.-name {
		width: 150px;
	}
</style>
