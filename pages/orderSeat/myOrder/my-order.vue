<template>
	<view class="my-order" :style="{minHeight: windowHeight + 'px'}">
		<view v-if="myPerMakeOrder.length" class="">
			<view class="mo-item" v-for="(item,index) in myPerMakeOrder" :key="index + 1" @click="toDetails(item)">
				<view class="header">
					<text class="h-l">{{ item.shopName }}</text>
					<text v-if="item.status == 0" class="h-r">待支付定金</text>
					<text v-if="item.status == 1" class="h-r">待商家确认</text>
					<text v-if="item.status == 2" class="h-r">待到店</text>
					<text v-if="item.status == 3" class="h-r">待支付</text>
					<text v-if="item.status == 4" class="h-r">预约成功</text>
					<text v-if="item.status == 5 && item.refundMoneyStatus == null" class="h-r" style="color: #808080;">取消预约</text>
					<text v-if="item.status == 5 && item.refundMoneyStatus == 0" class="h-r" style="color: #808080;">退款中</text>
					<text v-if="item.status == 5 && item.refundMoneyStatus == 1" class="h-r" style="color: #808080;">退款成功</text>
					<text v-if="item.status == 5 && item.refundMoneyStatus == 2" class="h-r" style="color: #808080;">退款失败</text>
				</view>
				<view class="content">
					<image :src="item.shopHeaderUrl" mode=""></image>
					<view class="">
						<view class="">
							<text class="cont-info">时间：</text><text class="cont-info">{{ item.receiveDate }} {{ item.receiveTime }}</text>
						</view>
						<view class="">
							<text class="cont-info">人数：</text><text class="cont-info">{{ item.receivePeople }}人｜{{ item.roomName? item.roomName:'大厅'}}</text>
						</view>
						<view class="">
							<text class="cont-info">套餐：</text><text class="cont-info">{{ item.foodPackageName? item.foodPackageName:'无' }}</text>
						</view>
					</view>
					<view v-if="item.status == 3 || item.status == 4" class="price">
						<text>￥</text><text>{{ item.orderMoney }}</text>
					</view>
				</view>
				<view class="" style="display: flex; justify-content: flex-end;">
					<view v-if="item.status == 0 || item.status == 3" class="actions" @click.stop="toPay(item)" style="">
						<text>去支付</text>
					</view>
					<view v-if="item.status == 4 && !item.isPublish" class="actions" @click.stop="evaluate(item)" style="">
						<text>评价</text>
					</view>
					<view v-if="item.status == 5 && item.refundMoneyStatus == null && item.isPayMoney == 1" class="actions" @click.stop="refundMoney(item)">
						<text class="">申请退款</text>
					</view>
					<view v-if="item.status != 4 && item.status != 3 && item.status != 5" class="actions actions-cancel" @click.stop="dialogToggle(item.id)">
						<text>取消</text>
					</view>
				</view>
			</view>
		</view>
		<view v-else class="no-data" :style="{minHeight: (windowHeight - 10) + 'px'}">
			<image style="width: 96rpx; margin-bottom: 22rpx;" src="/static/none.png" mode="widthFix"></image>
			<text style="font-size: 24rpx; color: #56575B;">暂无预约～</text>
		</view>
		<uni-popup ref="alertDialog" type="dialog" style="z-index: 9999">
			<uni-popup-dialog type="info" cancelText="关闭" confirmText="确定" title="" content="您确定要取消订座吗？"
				@confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
		</uni-popup>
		<!-- 选择支付 -->
		<popup-pay ref="popupPay" @sendPayway="getPayway" :cardData="cardData" :orderItem="orderItem" :payway="'wx'"/>
	</view>
</template>

<script>
	import orderSeat from '@/api/orderSeat/orderSeat.js'
	import login from '@/api/login/login.js'
	import popupPay from './popupPay.vue';
	export default {
		name: 'myOrder',
		components: {
			popupPay
		},
		data() {
			return {
				pageNum: 1,
				pageSize: 10,
				myPerMakeOrder: [],
				orderTotal: null,
				orderId: null,
				windowHeight: 0,
				orderItem: {},
				cardData: {}
			}
		},
		computed: {},
		created() {
			
		},
		methods: {
			dialogToggle(id) {
				this.$refs.alertDialog.open();
				this.orderId = id;
			},
			dialogConfirm() {
				// uni.showToast({
				// 	title: '确定取消',
				// 	icon: 'none'
				// })
				this.editPerMakeSeat(this.orderId);
			},
			dialogClose() {
				uni.showToast({
					title: '点击了关闭',
					icon: 'none'
				})
			},
			// 获取列表
			findMyPerMakeOrder() {
				orderSeat.findMyPerMakeOrder(this.pageNum, this.pageSize).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.rows)
						this.myPerMakeOrder = this.myPerMakeOrder.concat(res.rows);
						this.orderTotal = res.total
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
			toDetails(item) {
				uni.navigateTo({
					url: `/pages/orderSeat/myOrder/my-order-details?id=${item.id}`
				})
			},
			editPerMakeSeat(id) {
				let data = {
					id: id,
					status: 5
				}
				orderSeat.editPerMakeSeat(data).then(res => {
					// console.log(res)
					if (res.code == 200) {
						uni.showToast({
							title: '取消预约成功',
							icon: 'none'
						})
						this.pageNum = 1;
						this.myPerMakeOrder = [];
						this.findMyPerMakeOrder();
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
			// 评价
			evaluate(item) {
				// console.log(item)
				uni.navigateTo({
					url: '../../hotRecipes/evaluation/evaluate?id=' + item.id + '&from=2'
				})
			},
			findCardByShopIdAndTel() {
				login.findCardByShopIdAndTel(uni.getStorageSync('userInfo_key').phonenumber, this.orderItem.shopId).then(res => {
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
					actionMoney: this.orderItem.orderMoney,
					perMakeSeatOrderId: this.orderItem.id,
				}
				orderSeat.perMakeSeatReduceOrderMoney(data).then((res)=>{
					// console.log('res', res.code); // 200
					if (res.code == 200) {
						uni.showToast({
							title: '支付成功',
							icon: 'success'
						})
						this.pageNum = 1;
						this.myPerMakeOrder = [];
						this.findMyPerMakeOrder();
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
			wxPay() {
				if(this.orderItem.status == 0) {
					orderSeat.orderSeatbeforePay({id:this.orderItem.id}).then((res)=>{
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
											this.pageNum = 1;
											this.myPerMakeOrder = [];
											this.findMyPerMakeOrder();
										},
										fail: function (err) {
											// console.log('支付失败:' + JSON.stringify(err));
											this.pageNum = 1;
											this.myPerMakeOrder = [];
											this.findMyPerMakeOrder();
										}
									});
								}
							}
						});
					})
				} else {
					orderSeat.beforePayLeftMoney({id:this.orderItem.id}).then((res)=>{
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
											this.pageNum = 1;
											this.myPerMakeOrder = [];
											this.findMyPerMakeOrder();
										},
										fail: function (err) {
											// console.log('支付失败:' + JSON.stringify(err));
											this.pageNum = 1;
											this.myPerMakeOrder = [];
											this.findMyPerMakeOrder();
										}
									});
								}
							}
						});
					})
				}
			},
			// 去支付
			toPay(item) {
				this.orderItem = item;
				if(item.status == 0 || !uni.getStorageSync('userInfo_key').phonenumber) {
					this.wxPay();
					return;
				}
				this.findCardByShopIdAndTel();
				// item.status: 0,3
				// console.log(item)
			},
			// 申请退款
			refundMoney(item) {
				orderSeat.updateRefundStatus(0, item.id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						uni.showToast({
							title: '退款申请已提交',
							icon: 'success'
						})
						this.pageNum = 1;
						this.myPerMakeOrder = [];
						this.findMyPerMakeOrder();
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
		onLoad() {
			let that = this;
			uni.getSystemInfo({
				success: function(res) {
					that.windowHeight = res.windowHeight
				}
			})
		},
		onShow() {
			this.pageNum = 1;
			this.myPerMakeOrder = [];
			this.findMyPerMakeOrder();
		},
		onReachBottom() {
			// console.log('触底啦~')
			if (this.myPerMakeOrder.length >= this.orderTotal) return;
			this.pageNum++;
			this.findMyPerMakeOrder();
		},
	}
</script>

<style lang="scss" scoped>
.my-order {
	padding: 12rpx 22rpx 0 22rpx;
	box-sizing: border-box;
	.mo-item {
		margin-top: 20rpx;
		padding: 0 20rpx 24rpx 22rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		.header {
			padding: 26rpx 0 18rpx 0;
			border-bottom: 1rpx solid #E3E3E3;
			display: flex;
			justify-content: space-between;
			
			.h-l {
				font-size: 28rpx;
			}
			.h-r {
				font-size: 24rpx;
			}
		}
		.content {
			padding: 18rpx 0 32rpx 0;
			box-sizing: border-box;
			display: flex;
			position: relative;
			// align-items: center;
			image {
				width: 76rpx;
				height: 76rpx;
				border-radius: 10rpx;
				margin-right: 26rpx;
				margin-top: 18rpx;
			}
			.cont-info {
				font-size: 24rpx;
				color: #808080;
			}
			.price {
				font-size: 28rpx;
				color: rgb(247, 87, 50);
				position: absolute;
				top: 30rpx;
				right: 0;
			}
		}
		.actions {
			// width: 108rpx;
			padding: 0 28rpx;
			height: 50rpx;
			line-height: 50rpx;
			border-radius: 42rpx;
			display: flex;
			justify-content: center;
			background: linear-gradient(to right, #F18A25, #F75732);
			text {
				font-size: 24rpx;
				font-weight: 500;
				color: #FFFFFF;
			}
		}
		.actions-cancel {
			background: linear-gradient(to right, #999999, #999999);
		}
	}
	.no-data {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding-bottom: 88rpx;
	}
}
</style>
