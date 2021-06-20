<template>
	<div class="container mt-3 mb-3">
		<div class="row">
			<div :key="name"
			     class="col-lg-3 col-md-4 col-sm-6 mb-3"
			     v-for="(product, name) in getProductsList"
			>
				<Product
					:product="product"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import Product from './Product.vue';
	import {mapGetters} from "vuex";

	export default {
		name: 'Products',
		components: {
			Product,
		},
		computed: {
			...mapGetters([
				'getProductsList',
			]),
		},
	}
</script>

<style scoped>

</style>
