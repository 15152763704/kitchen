<template name="orderlist">
	<view class="orderlist">
		<view v-if="orderList.length >0" @click="toOrderDetails(iiitem)" class="order-list-item" v-for="(iiitem,iiindex) in orderList">
			<view class="order-list-item-storeInfo">
				<view class="flex-row" @click.stop="toShopStore(iiitem)">
					<view class="">
						<image style="width: 80rpx; height: 80rpx; border-radius: 8rpx;" :src="iiitem.shopImgUrl"
							mode=""></image>
					</view>
					<view class="" style="margin-left: 18rpx; position: relative;">
						<view class="flex-row flex-items-center" style="position: absolute;">
							<text class="fs-28 storeInfo-name"
								style="width: 180rpx; lines: 1; text-overflow: ellipsis;">{{ iiitem.shopName }}</text>
							<image style="width: 8.4rpx; margin-left: 26rpx;" src="/static/order/right.png"
								mode="widthFix"></image>
						</view>
	
					</view>
				</view>
				<view class="">
					<text v-if="iiitem.orderStatus == 0" class="fs-28" style="color: #808080;">待支付</text>
					<text v-if="iiitem.orderStatus == 1" class="fs-28" style="color: #808080;">待派送</text>
					<text v-if="iiitem.orderStatus == 2" class="fs-28" style="color: #808080;">待收货</text>
					<text v-if="iiitem.orderStatus == 3" class="fs-28" style="color: #808080;">已完成</text>
					<text v-if="iiitem.orderStatus == 4 && iiitem.refundMoneyStatus == null" class="fs-28" style="color: #808080;">售后/取消</text>
					<text v-if="iiitem.orderStatus == 4 && iiitem.refundMoneyStatus == 0" class="fs-28" style="color: #808080;">退款中</text>
					<text v-if="iiitem.orderStatus == 4 && iiitem.refundMoneyStatus == 1" class="fs-28" style="color: #808080;">退款成功</text>
					<text v-if="iiitem.orderStatus == 4 && iiitem.refundMoneyStatus == 2" class="fs-28" style="color: #808080;">退款失败</text>
				</view>
			</view>
			<scroll-view class="" :scroll-x="true" style="display: flex; flex-direction:row;">
				<view class="order-list-item-goodsList">
					<view class="goodsList-item" v-for="(v,i) in iiitem.historyUserCars">
						<view class="">
							<image style="width: 168rpx; height: 124rpx; margin-bottom: 10rpx;" :src="v.selfMadeGood.imageUrl" mode="">
							</image>
						</view>
						<view class="">
							<text class="goods-name">{{ v.selfMadeGood.name }}</text>
						</view>
					</view>
				</view>
			</scroll-view>
			<view v-if="true" class="order-list-item-actions">
				<view v-if="iiitem.orderStatus == 3" class="again-one" @click.stop="againOne(iiitem)">
					<text class="actions-text">再来一单</text>
				</view>
				<view v-if="iiitem.orderStatus == 0" class="again-one" @click.stop="toPay(iiitem)">
					<text class="actions-text">去支付</text>
				</view>
				<view v-if="iiitem.orderStatus == 0 || iiitem.orderStatus == 1 || iiitem.orderStatus == 2" class="again-one" @click.stop="cancelOrder(iiitem)">
					<text class="actions-text">取消订单</text>
				</view>
				<view v-if="iiitem.orderStatus == 4 && iiitem.refundMoneyStatus == null && iiitem.isPayMoney == 1" class="again-one" @click.stop="refundMoney(iiitem)">
					<text class="actions-text">申请退款</text>
				</view>
				<view v-if="!iiitem.isPublish && iiitem.orderStatus == 3" class="goods-evaluate" @click.stop="evaluate(iiitem)">
					<text class="actions-text" style="border: none;">评价</text>
				</view>
			</view>
		</view>
		<view v-if="orderList.length == 0" class="" style="display: flex; flex-direction: column; align-items: center; margin-top: 240rpx;">
			<image style="width: 96rpx;margin-bottom: 22rpx;" src="/static/none.png" mode="widthFix"></image>
			<text style="font-size: 24rpx; color: #56575B;">暂无订单～</text>
		</view>
	</view>
</template>

<script>
	
	export default {
		name: 'orderlist',
		props: {
			orderList: {
				type: Array,
				default(){
					return []
				}
			},
		},
		data() {
			return {
	
			}
		},
		methods: {
			toShopStore(item) {
				// console.log(item)
				uni.navigateTo({
					url: '/pages/merchantsDoself/storeHome/store-home?id=' + item.shopId
				})
			},
			toOrderDetails(item) {
				uni.navigateTo({
					url: '/pages/merchantsDoself/mine/orders/order-details?orderId=' + item.orderId
				})
			},
			// 评价
			evaluate(item) {
				// console.log(item)
				uni.navigateTo({
					url: '/pages/merchantsDoself/mine/orders/evaluate?orderId=' + item.orderId
				})
				
				// // #ifdef APP-NVUE
				// e.stopPropagation()
				// // #endif
			},
			// 再来一单
			againOne(item) {
				// uni.showToast({
				// 	title: '再来一单',
				// 	icon: 'none'
				// });
				this.$emit('againOne', item);
				// // #ifdef APP-NVUE
				// e.stopPropagation()
				// // #endif
			},
			// 取消订单
			cancelOrder(item) {
				// uni.showToast({
				// 	title: '取消订单',
				// 	icon: 'none'
				// });
				this.$emit('cancelOrder', item);
				// // #ifdef APP-NVUE
				// e.stopPropagation()
				// // #endif
			},
			// 去支付
			toPay(item) {
				// uni.showToast({
				// 	title: '去支付',
				// 	icon: 'none'
				// });
				this.$emit('toPay', item);
			},
			// 申请退款
			refundMoney(item) {
				this.$emit('refundMoney', item);
			}
		},
		mounted() {

		}
	}
</script>

<style scoped lang="scss">
	.fw-500 {
		font-weight: 500;
	}
	.fs-28 {
		font-size: 28rpx;
	}
	.fs-24 {
		font-size: 24rpx;
	}
	.flex-row {
		display: flex;
		flex-direction: row;
	}
	.flex-justify-between {
		justify-content: space-between;
	}
	.flex-items-center {
		align-items: center;
	}
	.order-list-item {
		width: 706rpx;
		// height: 440rpx;
		border-radius: 28rpx;
		background-color: #FFFFFF;
		margin-bottom: 16rpx;
		padding-bottom: 26rpx;
	}

	.order-list-item-storeInfo {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-top: 30rpx;
		padding-left: 26rpx;
		padding-right: 26rpx;
	}
	.storeInfo-name {
		/* #ifdef H5 */
		overflow: hidden;
		white-space: nowrap;
		/* #endif */
	}

	.goods-info-fullreduce {
		/* display: flex; */
		flex-direction: row;
		height: 32rpx;
		/* line-height: 32rpx; */
		border-radius: 8rpx;
		border: 0.6rpx solid rgba(247, 87, 50, 0.7764705882352941);
		padding-top: 2rpx;
		padding-bottom: 2rpx;
		align-items: center;
		box-sizing: border-box;
		margin-top: 10rpx;
		margin-top: 50rpx;
	}

	.fullreduce-text {
		height: 28rpx;
		line-height: 28rpx;
		font-size: 20rpx;
		color: #F75732;
		/* border-right: 1px solid #000000; */
		padding-left: 14rpx;
		padding-right: 14rpx;
	}

	.fullreduce-textline {
		height: 18rpx;
		line-height: 18rpx;
		border-right: 0.6rpx solid rgba(247, 87, 50, 0.7764705882352941);
	}

	.theLast {
		border-right: none !important;
	}
		
	.order-list-item-goodsList {
		display: flex;
		flex-direction: row;
		margin-top: 24rpx;
		padding-left: 26rpx;
	}
	.goodsList-item {
		margin-right: 10rpx;
	}
	.goods-name {
		display: inline-block;
		font-size: 24rpx;
		color: #292929;
		/* #ifdef APP-PLUS */
		lines: 1;
		text-overflow: ellipsis;
		/* #endif */
		width: 168rpx;
		/* #ifdef H5 */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		/* #endif */
	}
	.order-list-item-actions {
		// margin-top: 30rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		
		margin-top: 60rpx;
		padding-right: 24rpx;
	}
	.again-one {
		margin-left: 16rpx;
	}
	.goods-evaluate {
		margin-left: 16rpx;
		
		border-radius: 14rpx;
		background:linear-gradient(to right, #F0C819, #FF9D00)
	}
	.actions-text {
		display: inline-block;
		font-size: 24rpx;
		width: 142rpx;
		height: 62rpx;
		line-height: 62rpx;
		border-radius: 14rpx;
		border: 1rpx solid #BABABA;
		text-align: center;
	}
</style>
