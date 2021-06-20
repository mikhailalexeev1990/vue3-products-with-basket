<template>
	<div :class="['modal', isOpen ? '-open' : '']"
	     @click="closeModal" ref="modal">
		<div class="modal-content">
			<span @click="closeBtn" class="close">&times;</span>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import EventBus from '../services/eventBus.js';

	export default {
		name: "Modal",
		props: {
			isOpen: false,
		},
		watch: {
			isOpen(val) {
				if (val) this.hideScrollbar();
			},
		},
		methods: {
			closeBtn() {
				EventBus.emit('isOpen', false);
				this.showScrollbar();
			},
			closeModal($e) {
				if (this.$refs['modal'] == $e.target) {
					EventBus.emit('isOpen', false);
					this.showScrollbar();
				}
			},
			getScrollbarWidth() {
				return window.innerWidth - document.querySelector('body').offsetWidth;
			},
			hideScrollbar() {
				let width = this.getScrollbarWidth();
				document.querySelector('body').style.overflow = 'hidden';
				document.querySelector('body').style.marginRight = `${width}px`;
				document.querySelector('#main-header').style.paddingRight = `${width}px`;
			},
			showScrollbar() {
				document.querySelector('body').style.overflow = 'auto';
				document.querySelector('body').style.marginRight = 0;
				document.querySelector('#main-header').style.paddingRight = 0;
			},
		},
	}
</script>

<style scoped>
	.modal {
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		display: none;
		overflow: auto;
		width: 100%;
		height: 100%;
		background-color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.4);
	}

	.modal.-open {
		display: block;
	}

	.modal-content {
		width: 80%;
		max-width: 800px;
		margin: 15% auto;
		padding: 20px;
		border: 1px solid #888;
		background-color: #fefefe;
	}

	.close {
		font-size: 36px;
		font-weight: bold;
		position: absolute;
		z-index: 1000;
		top: 10px;
		right: 10px;
		display: flex;
		overflow: hidden;
		align-items: center;
		justify-content: center;
		width: 26px;
		height: 26px;
		color: #aaa;
	}

	.close:hover,
	.close:focus {
		cursor: pointer;
		text-decoration: none;
		color: black;
	}
</style>
