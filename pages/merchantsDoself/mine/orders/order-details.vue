<template>
	<view class="order-form">
		<view class="top-part">
			<view class="" style="margin-bottom: 18rpx; position: relative;">
				<image @click="toBack()"
					style="width: 17rpx; height: 30rpx; position: absolute; top: 12rpx; left: 30rpx;"
					src="/static/rmcp_back.png" mode=""></image>
				<text>订单详情</text>
			</view>
		</view>
		<!-- 个人信息 -->
		<view class="customer-info">
			<view class="flex-center-center">
				<text class="address">{{ orderDetails.SelfMadeGoodOrder.address}}</text>
				<!-- <image style="width: 12rpx;" src="/static/shopCar/order_r.png" mode="widthFix"></image> -->
			</view>
			<view class="c-info">
				<text>{{ orderDetails.SelfMadeGoodOrder.addressName }}</text>
				<text
					style="margin-left: 8rpx;">{{ orderDetails.SelfMadeGoodOrder.addressSex == '0'? '先生': '女士' }}</text>
				<text style="margin-left: 28rpx;">{{ orderDetails.SelfMadeGoodOrder.addressTel }}</text>
			</view>
		</view>
		<!-- 订单信息 -->
		<view class="order-info">
			<view class="order-item" v-for="(item,index) in 1" :key="index">
				<view class="store-info">
					<view class="flex-center-center">
						<text class="store-name">{{ orderDetails.shop.name }}</text>
						<text class="store-type">商家自配</text>
					</view>
				</view>
				<view class="goods-info">
					<view class="row1" v-for="(val,ind) in orderDetails.userCars">
						<view class="image">
							<image style="" :src="val.selfMadeGood.imageUrl" mode=""></image>
							<view class="info">
								<view class="name">
									<text>{{ val.selfMadeGood.name }}</text>
								</view>
								<view class="num">
									<text>x {{ val.goodNum }}</text>
								</view>
							</view>
						</view>
						<view class="price">
							<text style="font-size: 22rpx;">￥</text><text>{{ val.money * val.goodNum }}</text>
						</view>
					</view>
					<view class="row5 flex-center-center">
						<view class="flex-center-center">
							<image style="width: 32rpx;" src="/static/shopCar/order_quan.png" mode="widthFix">
							</image>
							<text class="text">商家代金券</text>
						</view>
						<view class="flex-center-center">
							<text class="cF75732">-</text><text class="cF75732" style="font-size: 22rpx;">￥</text><text
								class="cF75732"
								style="font-size: 32rpx;">{{ orderDetails.SelfMadeGoodOrder.couponReduce? orderDetails.SelfMadeGoodOrder.couponReduce:0 }}</text>
						</view>
					</view>
					<view class="row6 flex-center-center">
						<view class="title">
							<text>备注</text>
						</view>
						<view class="flex-center-center">
							<text
								class="text">{{ orderDetails.SelfMadeGoodOrder.remarks?orderDetails.SelfMadeGoodOrder.remarks:'无' }}</text>
							<!-- <image style="width: 12rpx;" src="/static/shopCar/order_r.png" mode="widthFix"></image> -->
						</view>
					</view>
				</view>
				<!-- 合计 -->
				<view class="accounts">
					<view class="rules">
						<text>优惠规则</text>
					</view>
				</view>
			</view>
		</view>
		<!-- zhifufangshi -->
		<view class="pay-way">
			<text class="way-q">支付方式</text>
			<text class="way-a">在线支付</text>
		</view>
		<view class="submit">
			<view class="left">
				<text>已优惠￥{{ orderDetails.SelfMadeGoodOrder.reduceMoney?orderDetails.SelfMadeGoodOrder.reduceMoney: 0 }}</text>
				<view class="flex-center-center">
					<text style="margin-right: 6rpx;">合计</text><text
						style="font-size: 32rpx; font-weight: 500;">￥{{ orderDetails.SelfMadeGoodOrder.productAmountTotal }}</text><text
						style="font-size: 40rpx; font-weight: 500;"></text>
				</view>
			</view>
			<view v-if="orderDetails.SelfMadeGoodOrder.status == 0" class="right" @click="togglePay()">
				<text>去支付</text>
			</view>
			<view v-else class="right">
				<text>已支付</text>
			</view>
		</view>
	</view>
</template>

<script>
	import merchantsDoself from '@/api/merchantsDoself/merchantsDoself.js';

	// import * as util from '../../common/util.js'
	// var main = util.main

	export default {
		components: {

		},
		data() {
			return {
				orderId: '',
				orderDetails: {

				},
				returnMsg: '',
			}
		},
		computed: {

		},
		onLoad(option) {
			this.orderId = option.orderId;
			this.getSelfMadeGoodOrder(option.orderId);
		},
		onShow() {

		},
		watch: {
			// orderList(val) {
			// 	this.getListAllUserCar()
			// }
		},
		methods: {
			toBack() {
				uni.navigateBack();
			},
			getSelfMadeGoodOrder(id) {
				merchantsDoself.getSelfMadeGoodOrder(id).then(res => {
					if (res.code == 200) {
						this.orderDetails = res.data;
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
			// 去支付
			togglePay() {
				let orders = [];
				let obj = {};
				obj.id = this.orderId;
				orders.push(obj);
				wxpay.selfMadeGoodOrderPayBeforePay(orders).then((res) => {
					var timestamp = new Date().getTime() / 1000
					var orderInfo = {
						"appid": res.data.appId, // 应用ID（AppID）
						"partnerid": res.data.partnerId, // 商户号（PartnerID）
						"prepayid": res.data.prepayId, // 预支付交易会话ID
						"package": res.data.packageValue, // 固定值
						"noncestr": res.data.nonceStr, // 随机字符串
						"timestamp": res.data.timeStamp, // 时间戳（单位：秒）
						"sign": res.data.sign // 签名，这里用的 MD5 签名
					};
					uni.getProvider({
						service: 'payment',
						success: function(res) {
							console.log(res.provider)
							if (~res.provider.indexOf('wxpay')) {
								uni.requestPayment({
									"provider": "wxpay", //固定值为"wxpay"
									"orderInfo": orderInfo,
									success: function(res) {
										var rawdata = JSON.parse(res.rawdata);
										// console.log("支付成功");
										uni.navigateTo({
											url: '/pages/merchantsDoself/mine/orders/orders?index=0'
										})
									},
									fail: function(err) {
										// console.log('支付失败:' + JSON.stringify(err));
										uni.navigateTo({
											url: '/pages/merchantsDoself/mine/orders/orders?index=0'
										})
									},
									complete: function(res) {
										// uni.switchTab({
										// 	url:'/pages/tabBar/order/order',
										// })
									}
								});
							}
						}
					});
				})
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;

		},
	}
</script>

<style lang="scss" scoped>
	.cF75732 {
		color: #F75732;
	}

	.order-form {
		.flex-center-center {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
		}

		width: 750rpx;
		// height: 3000rpx;
		background-color: #F8F9F9;
		background-image: url(/static/shopCar/order_bcg.png);
		background-repeat: no-repeat;
		background-size: 100%;
		padding-left: 22rpx;
		padding-right: 22rpx;
		box-sizing: border-box;
		padding-bottom: 100rpx;

		// height: 1600rpx;
		// border-top: 0.2rpx solid #FD8931;
		.top-part {
			font-size: 40rpx;
			font-weight: 500;
			// background: linear-gradient(to right, #FD8931 , #FD8931);
			position: relative;
			text-align: center;
			padding-top: 102rpx;
			box-sizing: border-box;


		}

		.customer-info {
			width: 100%;
			// height: 166rpx;
			border-radius: 10rpx;
			background-color: #FFFFFF;
			margin-bottom: 18rpx;
			box-sizing: border-box;
			padding: 42rpx 32rpx 36rpx 24rpx;

			.address {
				font-size: 32rpx;
				font-weight: 500;
				width: 600rpx;
			}

			.c-info {
				font-size: 26rpx;
				color: #808080;
			}
		}

		.order-info {
			width: 100%;

			// height: 1000rpx;
			// background-color: #FFFFFF;
			// border-radius: 10rpx;
			.order-item {
				border-radius: 10rpx;
				padding-left: 24rpx;
				padding-right: 24rpx;
				background-color: #FFFFFF;
				box-sizing: border-box;
				margin-bottom: 40rpx;

				.store-info {
					padding: 26rpx 0 32rpx;
					// display: flex;
					// justify-content: space-between;
					border-bottom: 0.6rpx solid #E3E3E3;

					.store-name {
						font-size: 28rpx;
					}

					.store-type {
						font-size: 24rpx;
						color: #808080;
						border: 1rpx solid #707070;
						border-radius: 8rpx;
						box-sizing: border-box;
						padding: 0 6rpx;
					}

				}

				.time-info {
					padding: 38rpx 0 28rpx;

					position: relative;

					.row1 {
						margin-bottom: 8rpx;

						.fc {
							font-size: 28rpx;
							font-weight: 500;
						}

						.sc {
							font-size: 28rpx;
							color: #F18A25;
						}
					}

					.row2 {
						color: #F18A25;
						font-size: 24rpx;
					}
				}

				.goods-info {
					margin-top: 40rpx;

					.row1 {
						display: flex;
						justify-content: space-between;
						margin-bottom: 32rpx;

						.image {
							display: flex;

							// align-items: center;
							// margin-left: 16rpx;
							.info {
								margin-left: 16rpx;

								.name {
									font-size: 28rpx;
									font-weight: 500;
								}

								.guige {
									color: #808080;
									font-size: 24rpx;
								}

								.num {
									color: #808080;
									font-size: 24rpx;
								}
							}

							image {
								width: 96rpx;
								height: 96rpx;
							}
						}

						.price {
							font-size: 32rpx;
							font-weight: 500;
						}
					}

					.row2 {
						margin-top: 44rpx;
						margin-bottom: 72rpx;

						.text {
							font-size: 28rpx;
						}
					}

					.row3 {
						display: flex;
						// align-items: center;
						justify-content: space-between;
						padding-bottom: 14rpx;
						border-bottom: 0.6rpx solid #E3E3E3;

						.text {
							font-size: 28rpx;

						}
					}

					.row4 {
						margin-top: 16rpx;
						margin-bottom: 30rpx;

						.text {
							font-size: 28rpx;
							margin-left: 4rpx;
						}

						.isHb {
							background-color: #F75732;
							color: #FFFFFF;
							border-radius: 8rpx;
							// margin-right: 12rpx;
							padding: 2rpx 8rpx;
							font-size: 26rpx;
						}

						.isQuan {
							margin-right: 12rpx;
							color: #808080;
							font-size: 28rpx;
						}
					}

					.row5 {
						padding-bottom: 24rpx;
						border-bottom: 0.6rpx solid #E3E3E3;

						.text {
							font-size: 28rpx;
							margin-left: 4rpx;
						}

						.isQuan {
							margin-right: 12rpx;
							color: #808080;
							font-size: 28rpx;
						}

						.isHb {
							background-color: #F75732;
							color: #FFFFFF;
							border-radius: 8rpx;
							// margin-right: 12rpx;
							padding: 2rpx 8rpx;
							font-size: 26rpx;
						}
					}

					.row6,
					.row7,
					.row8 {
						margin-top: 38rpx;
						margin-bottom: 34rpx;

						.title {
							font-size: 28rpx;
							font-weight: 500;
						}

						.text {
							margin-right: 12rpx;
							color: #808080;
							font-size: 28rpx;
						}
					}
				}

				.accounts {
					width: 708rpx;
					height: 94rpx;
					background-color: #FAF1DF;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 30rpx 0 24rpx;
					box-sizing: border-box;
					left: -24rpx;
					position: relative;
					border-radius: 0 0 10rpx 10rpx;

					.rules {
						font-size: 28rpx;
						color: #808080;
					}
				}
			}
		}

		.pay-way {
			width: 100%;
			height: 90rpx;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 0 30rpx 0 26rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 26rpx;

			.way-q {
				font-size: 28rpx;
				font-weight: 500;
			}

			.way-a {
				font-size: 28rpx;
			}
		}

		.stores {
			margin: 0 auto 36rpx;
			width: 194rpx;
			height: 62rpx;
			line-height: 62rpx;
			text-align: center;
			background: #FFFFFF;
			box-shadow: 0 0 12rpx 2rpx rgba(0, 0, 0, 0.10196078431372549);
			border-radius: 32rpx 32rpx 32rpx 32rpx;
		}

		.submit {
			width: 706rpx;
			height: 98rpx;
			background-color: transparent;
			position: fixed;
			bottom: 10rpx;
			display: flex;
			border-radius: 50rpx;
			box-shadow: 0 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.403921568627451);

			.left {
				width: 500rpx;
				height: 98rpx;
				background-color: #000000;
				border-radius: 50rpx 0 0 50rpx;
				color: #FFFFFF;
				font-size: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 34rpx 0 22rpx;
				box-sizing: border-box;
			}

			.right {
				width: 206rpx;
				height: 98rpx;
				background: linear-gradient(153deg, #F0C82D, #FFB000);
				border-radius: 0 50rpx 50rpx 0;
				text-align: center;
				line-height: 98rpx;

				text {
					font-size: 28rpx;
					font-weight: 500;
				}
			}
		}
	}
</style>
