<template>
	<modal :isOpen="isOpen" v-if="product">
		<div>
			<h3>{{product.name}}</h3>
			<img :alt="product.name" :src="product.img" class="card-img-top">
			<p class="mt-3 card-text">{{product.description}}</p>
			<p class="mt-3 card-text"><strong>Price:</strong> {{product.price}} rub</p>
			<div>
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
	</modal>
</template>

<script>
	import Modal from "../components/Modal.vue";
	import {mapActions, mapGetters} from "vuex";

	export default {
		name: 'ProductModal',
		props: {
			product: {},
			isOpen: false,
		},
		components: {
			Modal,
		},
		computed: {
			...mapGetters([
				'getBasketProductAmount',
			]),
		},
		methods: {
			...mapActions([
				'increaseProductAction',
				'decreaseProductAction',
				'removeProductAction',
			]),
		},
	}
</script>

<style scoped>

</style>
