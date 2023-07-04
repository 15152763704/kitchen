<template>
	<view id="scroll-item">
		<view class="cp-goods-select-goods__classify">
			<slot name="category">
				<text class="cp-goods-select-goods__classify_text">{{category}}</text>
			</slot>
		</view>
		<view class="cp-goods-select-goods__list" :class="[customClass]">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		options: { styleIsolation: 'shared' },
		inject: ['goodsSelect'],
		props: {
			category: String,
			"customClass": String,
		},
		data: () => ({

		}),
		computed: {},
		methods: {}
	}
</script>

<style lang="scss">
	@import '../cp-goods-select/cp-goods-select.scss';
</style>