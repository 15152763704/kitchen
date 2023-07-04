<template>
	<uni-popup ref="popup" type="bottom" :animation="true" :is-mask-click="false">
		<view class="p-boddy">
			<view class="header">
				<text class="header-text">选择支付方式</text>
				<image class="header-image" style="width: 40rpx;" src="/static/shopCar/close.png" mode="widthFix"
					@click="closePopup" />
			</view>
			<view class="content">
				<view class="payway">
					<!-- <view class="header">
						<text class="header-text">选择支付方式</text>
					</view> -->
					<view class="bankcard-list">
						<view class="list-item" @click="selectWay('wx')">
							<view class="left">
								<image style="width: 48rpx; margin-right: 18rpx;" src="/static/shopCar/pay_vx.png"
									mode="widthFix"></image>
								<text>微信支付</text>
							</view>
							<view class="right">
								<!-- <image v-if="payway == 'wx'" style="width: 31rpx;" src="/static/shopCar/pay_gou.png" mode="widthFix"></image>
								<view v-else class="" style="width: 31rpx; height: 31rpx;"></view> -->
								<image style="width: 31rpx; height: 31rpx;"
									:src="payway == 'wx'?'/static/shopCar/pay_gou.png': ''" mode="widthFix"></image>
							</view>
						</view>
						<!-- 增加银行卡 -->
						<view class="list-item">
							<view class="list-item-mask" v-if="orderItem.orderMoney > cardData.leftMoney"></view>
							<view class="list-item-wrap" @click="selectWay('czk')">
								<view class="left">
									<image style="width: 42rpx; margin-right: 18rpx;" src="/static/shopCar/pay_yhk.png"
										mode="widthFix"></image>
									<text>储值卡支付</text>
									<text style="font-size: 20rpx; color: #666666;">(余额：￥{{ cardData.leftMoney }})</text>
								</view>
								<view class="right">
									<!-- <image v-if="payway == 'czk'" style="width: 31rpx;" src="/static/shopCar/pay_gou.png" mode="widthFix"></image>
									<view v-else class="" style="width: 31rpx; height: 31rpx;"></view> -->
									<image style="width: 31rpx; height: 31rpx;"
										:src="payway == 'czk'?'/static/shopCar/pay_gou.png': ''" mode="widthFix"></image>
								</view>
							</view>
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
				<view class="more-payway" style="height: 44rpx;">
				</view>
			</view>
			<!-- 更多支付方式 -->
			<!-- <uni-popup class="morepayway-popup" ref="popupMorePayway" type="right" mask-background-color="rgba(0,0,0,0)">
				<view class="morePayway">
					<view class="header">
						<image class="header-image" style="width: 13rpx;" src="/static/shopCar/pay_back.png" mode="widthFix"
							@click="closeMpwPopup" />
						<text class="header-text">使用其他支付方式</text>
					</view>
					<view class="payway-list">
						<view class="list-item">
							<view class="left">
								<image style="width: 48rpx; border: 8rpx; margin-right: 32rpx;" src="/static/shopCar/pay_vx.png" mode="widthFix"></image>
								<text>微信支付</text>
							</view>
							<image style="width: 13rpx;" src="/static/shopCar/pay_left.png" mode="widthFix"></image>
						</view>
						<view class="list-item">
							<view class="left">
								<image style="width: 48rpx; border: 8rpx; margin-right: 32rpx;" src="/static/shopCar/pay_zfb.png" mode="widthFix"></image>
								<text>支付宝支付</text>
							</view>
							<image style="width: 13rpx;" src="/static/shopCar/pay_left.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</uni-popup> -->
		</view>
	</uni-popup>
</template>

<script>
	// 测试服务器
	// import olylisCascader from '@/components/olylis-cascader/olylis-cascader'
	export default {
		components: {
			// olylisCascader
		},
		props: {
			cardData: {
				type: Object,
				default () {
					return {
		
					}
				}
			},
			orderItem: {
				type: Object,
				default () {
					return {
						
					}
				}
			},
			payway: {
				type: String,
				default: 'wx'
			}
		},
		data() {
			return {
				// payway: 'wx'
			}
		},
		filters: {

		},
		methods: {
			selectWay(way) {
				this.payway = way;
			},
			showPopup(item) {
				this.$refs.popup.open();
			},
			showPaysuccess() {
				// console.log(this.payway);
				this.$emit('sendPayway',this.payway);
				this.$refs.popup.close();
			},
			closePopup() {
				this.$refs.popup.close();
				// uni.showTabBar()
			},
			showMorePayway() {
				this.$refs.popupMorePayway.open();
			},
			closeMpwPopup() {
				this.$refs.popupMorePayway.close();
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
						.list-item-wrap {
							width: 100%;
							display: flex;
							align-items: center;
							justify-content: space-between;
						}
						.left {
							display: flex;
							align-items: center;
							font-size: 28rpx;
						}

						.right {}
					}
					.list-item-mask {
						position: absolute;
						width: 718rpx;
						height: 154rpx;
						left: 16rpx;
						background-color: #f5f5f5;
						opacity: 0.6;
						z-index: 99;
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
</style>
