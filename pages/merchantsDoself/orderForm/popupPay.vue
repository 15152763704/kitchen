<template>
	<uni-popup ref="popup" type="bottom" :animation="true" :is-mask-click="false">
		<view class="p-boddy">
			<view class="header">
				<text class="header-text">支付</text>
				<image class="header-image" style="width: 40rpx;" src="/static/shopCar/close.png" mode="widthFix"
					@click="closePopup" />
			</view>
			<view class="content">
				<!-- 支付信息 -->
				<view class="pay-info">
					<!-- 支付剩余时间 12:28 -->
					<view class="residue-time">
						<text>支付剩余时间 15:00</text>
					</view>
					<!-- 支付金额 -->
					<view class="pay-amount">
						<text>￥</text>
						<text style="font-size: 64rpx;">{{ ctotalPayPrice.toFixed(2) }}</text>
					</view>
				</view>
				<!-- 其他 列表 -->
				<view class="others-list">
					<!-- 订单详情 -->
					<view class="order-details" v-for="(item,index) in orders" :key="index" @click="showOrderDetails(item)">
						<view class="label">
							<text>订单详情</text>
						</view>
						<view class="cont">
							<text>{{ item.shop.name }}</text>
							<image style="width: 13rpx; margin-left: 18rpx;" src="/static/shopCar/pay_left.png"
								mode="widthFix"></image>
						</view>
					</view>
					<!-- 付款方式 -->
					<!-- <view class="pay-way" style="border-bottom: none;" @click="showPayway()"> -->
					<view class="pay-way" style="border-bottom: none;">
						<view class="label">
							<text>付款方式</text>
						</view>
						<view class="cont">
							<text>微信支付</text>
							<image style="width: 13rpx; margin-left: 18rpx;" src="/static/shopCar/pay_left.png"
								mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
			<!-- 底部操作 -->
			<view class="actions">
				<!-- 确定支付 -->
				<view class="sure-pay" @click="showPaysuccess()">
					<text>确定支付</text>
				</view>
				<!-- 更多支付方式 -->
				<!-- <view class="more-payway" @click="showMorePayway()">
					<text>更多支付方式</text>
				</view> -->
				<view class="more-payway" style="height: 44rpx;">
				</view>
			</view>

			<!-- 订单详情 popup -->
			<uni-popup class="orderdetails-popup" ref="popupOrderdetails" type="right"
				mask-background-color="rgba(0,0,0,0)">
				<view class="orderdetails">
					<view class="header">
						<image class="header-image" style="width: 13rpx;" src="/static/shopCar/pay_back.png"
							mode="widthFix" @click="closeOdPopup" />
						<text class="header-text">订单详情</text>
					</view>
					<view class="list-info">
						<view class="shipping-address">
							<view class="label">
								<text>收货地址</text>
							</view>
							<view class="cont">
								<view class="">
									<text>{{ orderInfo.address }}</text>
								</view>
								<view class="">
									<text>{{ orderInfo.addressName?orderInfo.addressName.substr(0, 1): '' }}{{ orderInfo.addressSex == '0'?'（先生）':'（女士）' }}{{ orderInfo.addressTel }}</text>
								</view>
							</view>
						</view>
						<view class="goods-info">
							<view class="label">
								<text>订单商品</text>
							</view>
							<view class="cont">
								<view class="" v-for="(item,index) in orderInfo.userCars" :key="index">
									<text>{{ item.selfMadeGood.name }} x{{ item.goodNum }}</text>
								</view>
							</view>
						</view>
						<view class="discounts-info">
							<view class="label">
								<text>代金券</text>
							</view>
							<view class="cont">
								<view class="" v-if="orderInfo.couponReduce">
									<text>-￥{{ orderInfo.couponReduce }}</text>
								</view>
								<view class="" v-else>
									<text>无</text>
								</view>
							</view>
						</view>
						<view class="ps-info">
							<view class="label">
								<text>备注信息</text>
							</view>
							<view class="cont">
								<view class="" v-if="orderInfo.remarks">
									<text>{{ orderInfo.remarks }}</text>
								</view>
								<view class="" v-else>
									<text>无</text>
								</view>
							</view>
						</view>
					</view>
					<view class="actions">
						<!-- 确定支付 -->
						<view class="sure-pay" @click="showPaysuccess()">
							<text>确定支付</text>
						</view>
						<!-- 更多支付方式 -->
						<view class="more-payway" style="height: 44rpx;">
						</view>
					</view>
				</view>
			</uni-popup>
			<!-- 支付方式 popup -->
			<uni-popup class="payway-popup" ref="popupPayway" type="right" mask-background-color="rgba(0,0,0,0)">
				<view class="payway">
					<view class="header">
						<image class="header-image" style="width: 13rpx;" src="/static/shopCar/pay_back.png"
							mode="widthFix" @click="closePwPopup" />
						<text class="header-text">选择支付方式</text>
					</view>
					<view class="bankcard-list">
						<view class="list-item">
							<view class="left">
								<image style="width: 48rpx; margin-right: 18rpx;" src="/static/shopCar/pay_jh.png"
									mode="widthFix"></image>
								<text>建设银行信用卡（1234）</text>
							</view>
							<view class="right">
								<image style="width: 31rpx;" src="/static/shopCar/pay_gou.png" mode="widthFix"></image>
							</view>
						</view>
						<!-- 增加银行卡 -->
						<view class="list-item">
							<view class="left">
								<image style="width: 42rpx; margin-right: 18rpx;" src="/static/shopCar/pay_yhk.png"
									mode="widthFix"></image>
								<text>添加银行卡支付</text>
							</view>
							<view class="right">
								<image style="width: 28rpx;" src="/static/shopCar/pay_add.png" mode="widthFix"></image>
							</view>
						</view>
					</view>
					<view class="actions">
						<!-- 确定支付 -->
						<view class="sure-pay" @click="showPaysuccess()">
							<text>确定支付</text>
						</view>
						<!-- 更多支付方式 -->
						<view class="more-payway" style="height: 44rpx;">
						</view>
					</view>
				</view>
			</uni-popup>
			<!-- 更多支付方式 -->
			<uni-popup class="morepayway-popup" ref="popupMorePayway" type="right"
				mask-background-color="rgba(0,0,0,0)">
				<view class="morePayway">
					<view class="header">
						<image class="header-image" style="width: 13rpx;" src="/static/shopCar/pay_back.png"
							mode="widthFix" @click="closeMpwPopup" />
						<text class="header-text">使用其他支付方式</text>
					</view>
					<view class="payway-list">
						<view class="list-item">
							<view class="left">
								<image style="width: 48rpx; border: 8rpx; margin-right: 32rpx;"
									src="/static/shopCar/pay_vx.png" mode="widthFix"></image>
								<text>微信支付</text>
							</view>
							<image style="width: 13rpx;" src="/static/shopCar/pay_left.png" mode="widthFix"></image>
						</view>
						<view class="list-item">
							<view class="left">
								<image style="width: 48rpx; border: 8rpx; margin-right: 32rpx;"
									src="/static/shopCar/pay_zfb.png" mode="widthFix"></image>
								<text>支付宝支付</text>
							</view>
							<image style="width: 13rpx;" src="/static/shopCar/pay_left.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</uni-popup>
			<!-- 支付成功 1111111111111111111111111 -->
			<uni-popup class="paysuccess-popup" ref="popupPaysuccess" type="right"
				mask-background-color="rgba(0,0,0,0)">
				<view class="paySuccess">
					<view class="headerr">
						<!-- <image class="header-image" style="width: 13rpx;" src="/static/shopCar/pay_back.png" mode="widthFix"
							@click="closePsPopup()" /> -->
						<text class="headerr-text">支付成功</text>
					</view>
					<view class="cont">
						<view class="price">
							<text style="font-size: 36rpx;">￥</text>
							<text>28.15</text>
						</view>
						<text class="way">微信支付</text>
					</view>
					<view class="actions">
						<!-- 确定支付 -->
						<view class="sure-pay" @click="closePsPopup()">
							<text>完成</text>
						</view>
						<!-- 更多支付方式 -->
						<view class="more-payway" style="height: 44rpx;">
						</view>
					</view>
				</view>
			</uni-popup>
		</view>
	</uni-popup>
</template>

<script>
	// 测试服务器
	// import olylisCascader from '@/components/olylis-cascader/olylis-cascader'
	import wxpay from '@/api/wxpay/wxpay.js'
	export default {
		components: {
			// olylisCascader
		},
		props: {
			orders: {
				type: Array,
				default () {
					return [

					]
				}
			},
		},
		data() {
			return {
				orderInfo: {
					
				}
			}
		},
		filters: {

		},
		computed: {
			ctotalPayPrice() {
				let totalPayPrice = 0;
				for (var i = 0; i < this.orders.length; i++) {
					totalPayPrice = totalPayPrice + this.orders[i].orderAmountTotal
				}
				return totalPayPrice;
			},
		},
		created() {

		},
		methods: {
			showPopup(item) {
				this.$refs.popup.open();
			},

			closePopup() {
				this.$refs.popup.close();
				// uni.showTabBar()

			},
			showOrderDetails(item) {
				// console.log(item);
				this.orderInfo = item;
				this.$refs.popupOrderdetails.open();
			},
			closeOdPopup() {
				this.$refs.popupOrderdetails.close();
			},
			showPayway() {
				this.$refs.popupPayway.open();
			},
			closePwPopup() {
				this.$refs.popupPayway.close();
			},
			showMorePayway() {
				this.$refs.popupMorePayway.open();
			},
			closeMpwPopup() {
				this.$refs.popupMorePayway.close();
			},
			showPaysuccess() {
				// this.$refs.popupPaysuccess.open();
				this.beforePay(this.orders);
			},
			beforePay(orders){
				wxpay.selfMadeGoodOrderPayBeforePay(orders).then((res)=>{
					var timestamp = new Date().getTime() / 1000
					var orderInfo = {
					  "appid": res.data.appId,  // 应用ID（AppID）
					  "partnerid": res.data.partnerId,      // 商户号（PartnerID）
					  "prepayid": res.data.prepayId, // 预支付交易会话ID
					  "package": res.data.packageValue,        // 固定值
					  "noncestr": res.data.nonceStr, // 随机字符串
					  "timestamp": res.data.timeStamp,        // 时间戳（单位：秒）
					  "sign": res.data.sign // 签名，这里用的 MD5 签名
					};
					uni.getProvider({
						service: 'payment',
						success: function (res) {
							console.log(res.provider)
							if (~res.provider.indexOf('wxpay')) {
								uni.requestPayment({
										"provider": "wxpay",  //固定值为"wxpay"
										"orderInfo": orderInfo,
									success: function (res) {
										var rawdata = JSON.parse(res.rawdata);
										console.log("支付成功");
										uni.navigateTo({
											url: '/pages/merchantsDoself/mine/orders/orders?index=0'
										})
									},
									fail: function (err) {
										console.log('支付失败:' + JSON.stringify(err));
										uni.navigateTo({
											url: '/pages/merchantsDoself/mine/orders/orders?index=1'
										})
									},
									complete:function(res){
										// uni.switchTab({
										// 	url:'/pages/tabBar/order/order',
										// })
									}
								});
							}
						}
					});
				})
			},
			closePsPopup() {
				this.$refs.popupPaysuccess.close();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.p-boddy {
		width: 750rpx;
		height: 1020rpx;
		background-color: #FFFFFF;
		border-radius: 28rpx 28rpx 0 0;
		position: relative;

		.content {
			.pay-info {
				padding-top: 20rpx;
				text-align: center;

				.residue-time {
					font-size: 24rpx;
					color: #808080;
					margin-bottom: 14rpx;
				}

				.pay-amount {
					font-size: 46rpx;
					font-weight: 500;
				}
			}

			.others-list {
				box-sizing: border-box;
				padding: 8rpx 16rpx 0 16rpx;

				.order-details,
				.pay-way {
					display: flex;
					align-items: center;
					justify-content: space-between;
					box-sizing: border-box;
					padding: 40rpx 16rpx 32rpx;
					border-bottom: 0.6rpx solid #E3E3E3;
					font-size: 28rpx;

					.label {
						color: #808080;
					}

					.cont {
						display: flex;
						align-items: center;
						color: #454545;

						text {
							width: 280rpx;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							text-align: right;
						}
					}
				}
			}
		}

		.actions {
			padding: 0 32rpx;
			box-sizing: border-box;
			position: absolute;
			bottom: 0;

			.sure-pay {
				width: 686rpx;
				height: 78rpx;
				line-height: 78rpx;
				font-size: 30rpx;
				font-weight: 500;
				text-align: center;
				border-radius: 10rpx;
				background: linear-gradient(to bottom, #FFD417, #FFBD2B);
			}

			.more-payway {
				width: 686rpx;
				font-size: 24rpx;
				font-weight: 500;
				text-align: center;
				margin-top: 22rpx;
				color: #56575B;
			}
		}
	}

	.p-boddy .header {
		width: 750rpx;
		height: 92rpx;
		/* background-color: #000000; */
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.p-boddy .header-text {
		font-size: 32rpx;
		font-weight: 500;
	}

	.p-boddy .header-image {
		position: absolute;
		right: 34rpx;
	}

	.orderdetails-popup {
		.orderdetails {
			width: 750rpx;
			height: 1020rpx;
			border-radius: 28rpx 28rpx 0 0;
			background-color: #FFFFFF;

			.header {
				.header-image {
					left: 32rpx;
				}
			}

			.list-info {
				padding: 0 32rpx;
				box-sizing: border-box;
				margin-top: 40rpx;

				.shipping-address,
				.goods-info,
				.discounts-info,
				.ps-info,
				.invoice-info {
					display: flex;
					margin-bottom: 40rpx;

					.label {
						width: 112rpx;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						color: #808080;
						margin-right: 40rpx;
						font-size: 28rpx;
					}

					.cont {
						width: 520rpx;
						font-size: 28rpx;
					}
				}
			}
		}
	}

	.payway-popup {
		.payway {
			width: 750rpx;
			height: 1020rpx;
			border-radius: 28rpx 28rpx 0 0;
			background-color: #FFFFFF;

			.header {
				.header-image {
					left: 32rpx;
				}
			}

			.bankcard-list {
				// margin-top: 50rpx;
				padding-left: 16rpx;
				padding-right: 16rpx;
				box-sizing: border-box;

				.list-item {
					border-bottom: 0.6rpx solid #E3E3E3;
					box-sizing: border-box;
					padding-left: 16rpx;
					padding-right: 26rpx;
					padding-top: 52rpx;
					padding-bottom: 52rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.left {
						display: flex;
						align-items: center;
						font-size: 28rpx;
					}

					.right {}
				}
			}
		}
	}

	.morepayway-popup {
		.morePayway {
			width: 750rpx;
			height: 1020rpx;
			border-radius: 28rpx 28rpx 0 0;
			background-color: #FFFFFF;

			.header {
				.header-image {
					left: 32rpx;
				}
			}

			.payway-list {
				padding-left: 32rpx;
				padding-right: 32rpx;
				box-sizing: border-box;

				.list-item {
					height: 140rpx;
					border-radius: 18rpx;
					background-color: #F7F7F7;
					margin-top: 24rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding-left: 34rpx;
					padding-right: 38rpx;

					.left {
						display: flex;
						align-items: center;
						font-size: 32rpx;
					}
				}

			}
		}
	}

	.paysuccess-popup {
		.paySuccess {
			width: 750rpx;
			height: 1020rpx;
			border-radius: 28rpx 28rpx 0 0;
			background-color: #FFFFFF;

			.headerr {
				padding-top: 60rpx;
				text-align: center;

				.headerr-text {
					font-size: 32rpx;
					font-weight: 500;
				}
			}

			.cont {
				margin-top: 104rpx;
				text-align: center;

				.price {
					font-size: 64rpx;
					font-weight: 500;
				}

				.way {
					margin-top: 16rpx;
					font-size: 28rpx;
				}
			}
		}
	}
</style>
