<template>
	<div @click="showProduct(product)" class="card justify-content-between">
		<div>
			<img :alt="product.name"
			     :src="product.img" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title">{{product.name}}</h5>
				<p class="card-text">{{product.description}}</p>
			</div>
		</div>
		<div>
			<div class="card-body pt-0 pb-0">
				<p class="card-text"><strong>Price:</strong> {{product.price}} rub</p>
			</div>
			<div class="card-body">
				<button @click.stop="increaseProductAction(product)"
				        class="btn btn-success"
				        type="button" v-if="!getBasketProductAmount(product.id)">
					Add to basket
				</button>
				<div class="amount-box d-flex justify-content-between align-items-center" v-else>
					<div class="d-flex align-items-center">
						<span @click.stop="increaseProductAction(product)" class="-plus"><i class="bi bi-plus"></i></span>
						<span class="-amount">{{getBasketProductAmount(product.id)}}</span>
						<span @click.stop="decreaseProductAction(product)" class="-minus"><i class="bi bi-dash"></i></span>
					</div>
					<span @click.stop="removeProductAction(product)" class="-trash"><i class="bi bi-trash"></i></span>
				</div>
			</div>
		</div>
	</div>

	<ProductModal
		:product="productModal"
		:isOpen="isOpen"
	/>
</template>

<script>
	import EventBus from '../services/eventBus.js';
	import ProductModal from "./ProductModal.vue";
	import {mapActions, mapGetters} from "vuex";

	export default {
		name: "Product",
		components: {
			ProductModal,
		},
		props: {
			product: {}
		},
		data() {
			return {
				isOpen: false,
				productModal: {},
			}
		},
		computed: {
			...mapGetters([
				'getProductsList',
				'getBasketProductAmount',
			]),
		},
		mounted() {
			EventBus.on('isOpen', (isOpen) => this.isOpen = isOpen);
		},
		methods: {
			...mapActions([
				'increaseProductAction',
				'decreaseProductAction',
				'removeProductAction',
			]),
			showProduct(product) {
				this.isOpen = true;
				this.productModal = product;
			},
		},
	}
</script>

<style scoped>

</style>
