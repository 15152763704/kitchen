<template>
	<view style="background-color: #F8F9FA;">
		<view class="cont">
			<view class="avtor">
				<image class="avtor-img" :src="userInfo.avatar?userInfo.avatar:'/static/danxiaochu.png'" alt=""></image>
				<view class="avtor-name">{{ userInfo.nickName }}</view>
			</view>
			<view class="orders">
				<view class="tit" @click="toOrders(0)">
					<text class="tit-l">所有订单</text>
					<text class="tit-r">查看订单</text>
				</view>
				<view class="items-contanier">
					<view class="cont-item" @click="toOrders(0)">
						<image src="../../../static/mine/wpay.png" mode=""></image>
						<text>全部</text>
					</view>
					<view class="cont-item" @click="toOrders(1)">
						<image src="../../../static/mine/ising.png" mode=""></image>
						<text>待支付</text>
					</view>
					<view class="cont-item" @click="toOrders(2)">
						<image src="../../../static/mine/isfinished.png" mode=""></image>
						<text>待评价</text>
					</view>
					<view class="cont-item" @click="toOrders(3)">
						<image src="../../../static/mine/cancel.png" mode=""></image>
						<text>已取消</text>
					</view>
				</view>
			</view>
			<view class="others">
				<view class="others-item" @click="toCashcoupon()">
					<view class="item-l">
						<image src="../../../static/mine/discount.png" mode="widthFix"></image>
						<text>代金券</text>
					</view>
					<image class="item-r" src="../../../static/mine/right22.png" mode="widthFix"></image>
				</view>
				<view class="others-item" @click="toAddress()">
					<view class="item-l">
						<image src="../../../static/mine/address.png" mode="widthFix"></image>
						<text>收货地址</text>
					</view>
					<image class="item-r" src="../../../static/mine/right22.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: uni.getStorageSync('userInfo_key'),
			}
		},
		methods: {
			toOrders(index) {
				uni.navigateTo({
					url: '/pages/merchantsDoself/mine/orders/orders?index=' + index
				})
			},
			toCashcoupon() {
				uni.navigateTo({
					url: '/pages/merchantsDoself/orderForm/cashCoupon/cash-coupon?from=mine'
				})
			},
			toAddress() {
				uni.navigateTo({
					url: '/pages/merchantsDoself/mine/address/address'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.cont{
		width: 100vw;
		height: 100vh;
		// display: flex;
		// justify-content: center;
		// align-items: center;
		background-image: url(../../../static/mine/bcg-mine.png);
		background-repeat: no-repeat;
		background-size: 100%;
		.avtor {
			text-align: center;
			padding-top: 162rpx;
			.avtor-img {
				width: 176rpx;
				height: 176rpx;
				border-radius: 88rpx;
			}
			.avtor-name {
				font-size: 40rpx;
			}
		}
		.orders {
			width: 714rpx;
			height: 358rpx;
			background: #ffffff;
			border-radius: 28rpx;
			margin: 0 auto;
			margin-top: 28rpx;
			padding: 0 12rpx;
			box-sizing: border-box;
			.tit {
				width: 100%;
				height: 120rpx;
				border-bottom: 0.6rpx solid #C4C4C4;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 26rpx;
				box-sizing: border-box;
				.tit-l {
					font-size: 32rpx;
				}
				.tit-r {
					font-size: 28rpx;
					color: #BABABA;
				}
			}
			.items-contanier {
				width: 100%;
				height: 240rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				.cont-item {
					display: flex;
					flex-direction: column;
					align-items: center;
					image {
						width: 50rpx;
						height: 50rpx;
						margin-bottom: 14rpx;
					}
					text {
						font-size: 28rpx;
					}
				}
			}
		}
		.others {
			width: 714rpx;
			// height: 358rpx;
			background: #ffffff;
			border-radius: 28rpx;
			margin: 0 auto;
			margin-top: 24rpx;
			padding: 0 12rpx;
			box-sizing: border-box;
			.others-item {
				display: flex;
				height: 100rpx;
				width: 100%;
				justify-content: space-between;
				align-items: center;
				padding: 0 44rpx 0 30rpx;
				box-sizing: border-box;
				border-bottom: 0.6rpx solid #C4C4C4;
				&:last-child {
					border-bottom: none;
				}
				.item-l {
					display: flex;
					align-items: center;
					image {
						width: 30rpx;
						margin-right: 22rpx
					}
					text {
						font-size: 28rpx;
					}
				}
				.item-r {
					width: 12rpx
				}
			}
		}
		
	}
</style>
