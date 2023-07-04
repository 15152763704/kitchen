<template>
	<view class="evaluation-container">
		<evaluation-list @evalFilterType="getEvalFilterType" :shopEvalStatics="shopEvalStatics" :evalList="evalList" :marginTop="0" :height="height"></evaluation-list>
	</view>
</template>

<script>
	import shop from '@/api/shop/shop.js';
	export default {
			components: {
				
			},
			computed: {
				
			},
			data() {
				return {
					shopId: '',
					evalList: [],
					shopEvalStatics: {},
					height: 0
				}
			},
			onLoad(options) {
				this.shopId = options.shopId;
				this.getShopEvalList(options.shopId, '', '4', '');
				this.findShopEvalStatics(options.shopId, '4');
			},
			mounted() {
				uni.getSystemInfo({
					success: (res) => {
						// console.log(res.windowHeight)
						this.height = res.windowHeight;
					}
				})
			},
			onPageScroll(e) {
				
			},
			methods: {
				getEvalFilterType(type) {
					// console.log(type)
					let recType = type == '-1'? '': type;
					this.getShopEvalList(this.shopId, recType, '4', '');
				},
				findShopEvalStatics(shopId, evalType) {
					shop.findShopEvalStatics({
						shopId,
						evalType
					}).then(res => {
						if (res.code == 200) {
							this.shopEvalStatics = res.data;
						}
					}).catch(err => {
						uni.showToast({
							title: err.msg,
							icon: 'none'
						})
					});
				},
				// 获取评论列表
				getShopEvalList(shopId, filterType, evalType, foodId) {
					shop.getShopEvalList(shopId, filterType, evalType, foodId).then(res => {
						// console.log(res)
						if (res.code == 200) {
							// console.log(res)
							this.evalList = res.rows
						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none'
							});
						}
					}).catch(err => {
						uni.showToast({
							title: err.msg,
							icon: 'none'
						})
					});
				},
			}
		}
	
</script>

<style lang="scss" scoped>
	.evaluation-container {
		border-top: 0.6rpx solid #E3E3E3;
		padding: 0 30rpx;
		box-sizing: border-box;
		background: #FFFFFF;
		min-height: calc(100vh - 88rpx);
	}
</style>
