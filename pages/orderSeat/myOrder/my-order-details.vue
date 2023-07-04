<template>
	<view class="my-order-details">
		<view class="mo-state">
			<view class="state-show">
				<view class="left">
					<image v-if="perMakeSeatData.status == 0 || perMakeSeatData.status == 1 ||perMakeSeatData.status == 2 || perMakeSeatData.status == 3 || (perMakeSeatData.status == 5 && perMakeSeatData.refundMoneyStatus == 0)" src="/static/dz_isWait.png" mode=""></image>
					<image v-if="perMakeSeatData.status == 4 || (perMakeSeatData.status == 5 && perMakeSeatData.refundMoneyStatus == 1) || (perMakeSeatData.status == 5 && perMakeSeatData.refundMoneyStatus == 2) || (perMakeSeatData.status == 5 && perMakeSeatData.refundMoneyStatus == null)" src="/static/dz_isSure.png" mode=""></image>
					<text v-if="perMakeSeatData.status == 0" class="">待支付定金</text>
					<text v-if="perMakeSeatData.status == 1" class="">待商家确认</text>
					<text v-if="perMakeSeatData.status == 2" class="">待到店</text>
					<text v-if="perMakeSeatData.status == 3" class="">待支付</text>
					<text v-if="perMakeSeatData.status == 4" class="">预约成功</text>
					<text v-if="perMakeSeatData.status == 5 && perMakeSeatData.refundMoneyStatus == null" class="" style="color: #808080;">取消预约</text>
					<text v-if="perMakeSeatData.status == 5 && perMakeSeatData.refundMoneyStatus == 0" class="" style="color: #808080;">退款中</text>
					<text v-if="perMakeSeatData.status == 5 && perMakeSeatData.refundMoneyStatus == 1" class="" style="color: #808080;">退款成功</text>
					<text v-if="perMakeSeatData.status == 5 && perMakeSeatData.refundMoneyStatus == 2" class="" style="color: #808080;">退款失败</text>
				</view>
				<view class="right" v-if="perMakeSeatData.status != 4 && perMakeSeatData.status != 3 && perMakeSeatData.status != 5" @click.stop="dialogToggle()">
					取消预约
				</view>
				<view class="right-2" v-if="perMakeSeatData.status == 4">
					已支付
				</view>
			</view>
			<view class="shop-info">
				<view class="name">
					<text>杏园茶坊（虹桥坊店）</text>
					<image src="/static/right.png" mode="widthFix"></image>
				</view>
				<view class="info">
					<image :src="perMakeSeatData.shop.shopImgUrl" mode=""></image>
					<view class="">
						<text>营业时间：{{ (perMakeSeatData.shop.canUseTimeStart?perMakeSeatData.shop.canUseTimeStart: '') + '-' + (perMakeSeatData.shop.canUseTimeEnd?perMakeSeatData.shop.canUseTimeEnd:'') }}</text>
						<text>地址：{{ perMakeSeatData.shop.address }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="order-info">
			<view class="tit">
				预约信息
			</view>
			<view class="cont">
				<view class="c-item">
					<view class="label">
						预约人
					</view>
					<view class="value">
						{{ perMakeSeatData.perMakeName }}
					</view>
				</view>
				<view class="c-item">
					<view class="label">
						预约日期
					</view>
					<view class="value">
						{{ perMakeSeatData.receiveDate }}
					</view>
				</view>
				<view class="c-item">
					<view class="label">
						预约时间
					</view>
					<view class="value">
						{{ perMakeSeatData.receiveTime }}
					</view>
				</view>
				<view class="c-item">
					<view class="label">
						餐次
					</view>
					<view class="value">
						{{ perMakeSeatData.lunchOrDinner? '午餐': '晚餐' }}
					</view>
				</view>
				<view class="c-item">
					<view class="label">
						电话
					</view>
					<view class="value">
						{{ perMakeSeatData.perMakeTel }}
					</view>
				</view>
				<view class="c-item">
					<view class="label">
						包厢
					</view>
					<view class="value">
						{{ perMakeSeatData.roomName?perMakeSeatData.roomName:'大厅' }}
					</view>
				</view>
				<view class="c-item">
					<view class="label">
						套餐
					</view>
					<view class="value">
						{{ perMakeSeatData.foodPackageName?perMakeSeatData.foodPackageName:'无' }}
					</view>
				</view>
			</view>
			<view v-if="perMakeSeatData.foodPackageType == 2" class="foodPackage-detail">
				<view class="foodPackageName">
					{{ perMakeSeatData.foodPackageName }}
				</view>
				<view class="fd-list">
					<view class="fd-list-item" v-for="(item,index) in perMakeSeatData.foodPackageContent" :key="index + 1">
						<view class="label">
							<text>{{ item.name }}</text>
							<text style="color: #8B8B8B;">({{ item.num }}份)</text>
						</view>
						<view class="value">
							<text>￥</text> {{ item.price }}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="actions">
			<view class="toPay" v-if="perMakeSeatData.status == 0 || perMakeSeatData.status == 3" @click="toPay()">
				支付
			</view>
			<view class="toRefund" v-if="perMakeSeatData.status == 5 && perMakeSeatData.refundMoneyStatus == null && perMakeSeatData.isPayMoney == 1" @click="refundMoney()">
				申请退款
			</view>
		</view>
		<uni-popup ref="alertDialog" type="dialog" style="z-index: 9999">
			<uni-popup-dialog type="info" cancelText="关闭" confirmText="确定" title="" content="您确定要取消订座吗？"
				@confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
		</uni-popup>
		<!-- 选择支付 -->
		<popup-pay ref="popupPay" @sendPayway="getPayway" :cardData="cardData" :orderItem="perMakeSeatData" :payway="'wx'"/>
	</view>
</template>

<script>
	import orderSeat from '@/api/orderSeat/orderSeat.js'
	import popupPay from './popupPay.vue';
	import login from '@/api/login/login.js'

	export default {
		components: {
			popupPay
		},
		data() {
			return {
				id: '',
				perMakeSeatData: {
					shop: {
						shopImgUrl: ''
					}
				},
				cardData: {}
			}
		},
		computed: {

		},
		onLoad(option) {
			// console.log(JSON.parse(option.id))
			this.id = option.id;
			this.getPerMakeSeatDetails(option.id);
		},
		onShow() {
			
		},
		watch: {
			// orderList(val) {
			// 	this.getListAllUserCar()
			// }
		},
		methods: {
			getPerMakeSeatDetails(id) {
				orderSeat.getPerMakeSeatDetails(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						if(res.data.foodPackageContent) {
							res.data.foodPackageContent = JSON.parse(res.data.foodPackageContent);
						}
						this.perMakeSeatData = res.data;
						// console.log(this.perMakeSeatData);
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
			dialogToggle() {
				// console.log(555)
				this.$refs.alertDialog.open();
			},
			dialogConfirm() {
				// console.log(this.perMakeSeatData.id)
				this.editPerMakeSeat(this.perMakeSeatData.id);
			},
			dialogClose() {
				/* uni.showToast({
					title: '点击了关闭',
					icon: 'none'
				}) */
			},
			editPerMakeSeat(id) {
				let data = {
					id,
					status: 5
				}
				orderSeat.editPerMakeSeat(data).then(res => {
					// console.log(res)
					if (res.code == 200) {
						uni.showToast({
							title: '取消预约成功',
							icon: 'none'
						})
						this.getPerMakeSeatDetails(this.id);
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
			findCardByShopIdAndTel() {
				login.findCardByShopIdAndTel(uni.getStorageSync('userInfo_key').phonenumber, this.perMakeSeatData.shopId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// this.storecardTotal = res.total;
						this.cardData = res.data;
						if(res.data.cardNum) {
							this.$refs.popupPay.showPopup();
						} else {
							this.wxPay();
						}
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
			// 支付方式
			getPayway(payway) {
				console.log('payway', payway);
				if(payway == 'wx') {
					this.wxPay();
				} else {
					this.czkPay();
				}
			},
			czkPay() {
				let data = {
					actionMoney: this.perMakeSeatData.orderMoney,
					perMakeSeatOrderId: this.id,
				}
				orderSeat.perMakeSeatReduceOrderMoney(data).then((res)=>{
					// console.log('res', res.code); // 200
					if (res.code == 200) {
						uni.showToast({
							title: '支付成功',
							icon: 'success'
						})
						this.getPerMakeSeatDetails(this.id);
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
			toPay() {
				if(this.perMakeSeatData.status == 0 || !uni.getStorageSync('userInfo_key').phonenumber) {
					this.wxPay();
					return;
				}
				this.findCardByShopIdAndTel();
				// this.$refs.popupPay.showPopup();
				// item.status: 0,3
				// console.log(item)
			},
			wxPay() {
				if(this.perMakeSeatData.status == 0) {
					orderSeat.orderSeatbeforePay({id:this.id}).then((res)=>{
						console.log(res);
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
						// console.log(orderInfo);
						uni.getProvider({
							service: 'payment',
							success: function (res) {
								console.log(res.provider)
								if (~res.provider.indexOf('wxpay')) {
									uni.requestPayment({
											"provider": "wxpay",  //固定值为"wxpay"
											"orderInfo": orderInfo,
										success: function (res) {
											// var rawdata = JSON.parse(res.rawdata);
											console.log("支付成功");
											this.getPerMakeSeatDetails(this.id);
										},
										fail: function (err) {
											// console.log('支付失败:' + JSON.stringify(err));
											this.getPerMakeSeatDetails(this.id);
										}
									});
								}
							}
						});
					})
				} else {
					orderSeat.beforePayLeftMoney({id:this.id}).then((res)=>{
						console.log(res);
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
						// console.log(orderInfo);
						uni.getProvider({
							service: 'payment',
							success: function (res) {
								console.log(res.provider)
								if (~res.provider.indexOf('wxpay')) {
									uni.requestPayment({
											"provider": "wxpay",  //固定值为"wxpay"
											"orderInfo": orderInfo,
										success: function (res) {
											// var rawdata = JSON.parse(res.rawdata);
											console.log("支付成功");
											this.getPerMakeSeatDetails(this.id);
										},
										fail: function (err) {
											// console.log('支付失败:' + JSON.stringify(err));
											this.getPerMakeSeatDetails(this.id);
										}
									});
								}
							}
						});
					})
				}
			},
			// 申请退款
			refundMoney() {
				orderSeat.updateRefundStatus(0, this.id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						uni.showToast({
							title: '退款申请已提交',
							icon: 'success'
						})
						this.getPerMakeSeatDetails(this.id);
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
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;

		},
	}
</script>

<style lang="scss" scoped>
	.my-order-details {
		padding: 26rpx 22rpx;
		box-sizing: border-box;
		.mo-state {
			width: 100%;
			background: #ffffff;
			border-radius: 10rpx;
			padding: 38rpx 22rpx 48rpx;
			box-sizing: border-box;
			
			.state-show {
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx solid #E3E3E3;
				padding-bottom: 20rpx;
				.left {
					display: flex;
					align-items: center;
					
					image {
						width: 34rpx;
						height: 34rpx;
					}
					text {
						font-size: 28rpx;
						color: #000000;
						margin-left: 22rpx;
					}
				}
				.right {
					background: linear-gradient(to right, #F18A25, #F75732);
					color: #ffffff;
					font-size: 28rpx;
					height: 50rpx;
					line-height: 50rpx;
					padding: 0 22rpx;
					box-sizing: border-box;
					border-radius: 25rpx;
				}
				.right-2 {
					color: #F18A25;
					font-size: 28rpx;
				}
			}
			.shop-info {
				padding-top: 32rpx;
				box-sizing: border-box;
				.name {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 36rpx;
					text {
						font-size: 28rpx;
						font-weight: 500;
					}
					image {
						width: 10rpx;
					}
				}
				.info {
					display: flex;
					align-items: center;
					image {
						width: 76rpx;
						height: 76rpx;
						border-radius: 8rpx;
					}
					>view {
						display: flex;
						flex-direction: column;
						box-sizing: border-box;
						padding-left: 26rpx;
						text {
							font-size: 24rpx;
							color: #808080;
							margin-bottom: 6rpx;
						}
					}
				}
			}
		}
		.order-info {
			width: 100%;
			background: #ffffff;
			border-radius: 10rpx;
			padding: 20rpx 22rpx 54rpx;
			box-sizing: border-box;
			margin-top: 24rpx;
			.tit {
				font-size: 30rpx;
				font-weight: 500;
				color: #000000;
			}
			.cont {
				position: relative;
				padding: 36rpx 44rpx 0;
				box-sizing: border-box;
				.c-item {
					display: flex;
					align-items: center;
					font-size: 24rpx;
					color: #000000;
					margin-bottom: 16rpx;
					.label {
						color: #818181;
						width: 160rpx;
					}
				}
			}
			.foodPackage-detail {
				.foodPackageName {
					font-size: 24rpx;
					font-weight: 500;
					margin-left: 8rpx;
					margin-top: 56rpx;
					margin-bottom: 22rpx;
				}
				.fd-list {
					.fd-list-item {
						display: flex;
						align-items: center;
						padding: 0 20rpx;
						box-sizing: border-box;
						margin-bottom: 18rpx;
						.label {
							font-size: 24rpx;
							color: #000000;
							font-weight: 400;
							width: 400rpx;
							display: flex;
							justify-content: space-between;
						}
						.value {
							font-size: 24rpx;
							color: #000000;
							font-weight: 500;
							margin-left: 8rpx;
						}
					}
				}
			}
		}
		.actions {
			width: 100%;
			margin-top: 44rpx;
			font-size: 28rpx;
			.toPay {
				width: 100%;
				height: 60rpx;
				line-height: 60rpx;
				color: #ffffff;
				background: linear-gradient(to right, #25B2F1, #8879FF);
				border-radius: 10rpx;
				text-align: center;
			}
			.toRefund {
				width: 100%;
				height: 60rpx;
				line-height: 60rpx;
				color: #ffffff;
				background: #7B7C7C;
				border-radius: 10rpx;
				text-align: center;
			}
		}
	}
</style>




