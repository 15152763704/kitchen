<template>
	<view class="orders">
		<view class="tabs">
			<v-tabs ref="tabs" @change="changeTab" v-model="current" :fixed="false" :lineScale="0.8" lineHeight="4rpx"
				lineColor="#FEBD2C" :scroll="false" color="#535353" activeColor="#000000" fontSize="28rpx" bgColor=''
				:tabs="['全部订单', '待支付', '待评价', '取消/售后']"></v-tabs>
		</view>
		<view class="container-tabs__list">
			<swiper class="container-tabs__swiper" style="height: 100%;" :current="swiperCurrent"
				@change="animationFinished" :disable-touch="true">
				<swiper-item class="swiper-item" style="height: 100%;" v-for="(item,index) in 4" :key="index">
					<scroll-view scroll-y style="height: 100%; padding: 0 22rpx;" @scrolltolower="scrolltolower()">
						<!-- <order-list @toPay="toPay" @cancelOrder="cancelOrder" @againOne="againOne" :orderList="orderList"> -->
						<order-list :orderList="orderList" @toPay="toPay" @cancelOrder="cancelOrder"
							@refundMoney="refundMoney" @againOne="againOne"></order-list>
						<view v-if="orderList.length > 0" class="isBottom">
							<text class="isBottom-leftLine"></text>
							<text v-if="orderList.length >= orderTotal" class="isBottom-text">已经到底啦</text>
							<text v-else class="isBottom-text">加载中...</text>
							<text class="isBottom-rightLine"></text>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>
<script>
	import orderList from "./order-list.vue"
	import merchantsDoself from '@/api/merchantsDoself/merchantsDoself.js'
	import wxpay from '@/api/wxpay/wxpay.js'
	export default {
		components: {
			orderList
		},
		data() {
			return {
				current: 0,
				swiperCurrent: 0,
				listPortForm: {
					pageNum: 1,
					pageSize: 10,
					status: '',
					isPublish: ''
				},
				orderList: [],
				orderTotal: null,
			}
		},
		onLoad: function(option) {
			this.current = Number(option.index);
			this.swiperCurrent = Number(option.index);
			switch (Number(option.index)) {
				case 0:
					this.listPortForm.status = '';
					break;
				case 1:
					this.listPortForm.status = 0;
					break;
				case 2:
					this.listPortForm.status = 3;
					this.listPortForm.isPublish = 0;
					break;
				default:
					this.listPortForm.status = 4;
					break;
			}
			this.getFindMyOrderList();
		},
		onShow() {

		},
		methods: {
			changeTab(index) {
				this.swiperCurrent = index
				// console.log(index)
				switch (index) {
					case 0:
						this.listPortForm.pageNum = 1
						this.listPortForm.status = ''
						this.listPortForm.isPublish = ''
						this.orderList = [];
						break;
					case 1:
						this.listPortForm.pageNum = 1
						this.listPortForm.status = 0
						this.listPortForm.isPublish = 0
						this.orderList = [];
						break;
					case 2:
						this.listPortForm.pageNum = 1
						this.listPortForm.status = 3
						this.listPortForm.isPublish = 0
						this.orderList = [];
						break;
					default:
						this.listPortForm.pageNum = 1
						this.listPortForm.status = 4
						this.listPortForm.isPublish = ''
						this.orderList = [];
						break;
				}
				this.getFindMyOrderList();
			},
			animationFinished(e) {
				this.current = e.detail.current
				this.swiperCurrent = e.detail.current
			},
			scrolltolower() {
				// console.log('触底啦~')
				if (this.orderList.length >= this.orderTotal) return;
				this.listPortForm.pageNum++;
				this.getFindMyOrderList();
			},
			// 获取订单列表
			getFindMyOrderList() {
				// isPublish：0=未评价 1=已评价
				// status：0待支付1待派送2待收货3已完成4取消售后
				let pageNum = this.listPortForm.pageNum
				let pageSize = this.listPortForm.pageSize
				let status = this.listPortForm.status
				let isPublish = this.listPortForm.isPublish
				merchantsDoself.getFindMyOrderList(pageNum, pageSize, isPublish, status).then(res => {
					if (res.code == 200) {
						// console.log(res.rows)
						this.orderList = this.orderList.concat(res.rows);
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
			// 去支付
			toPay(item) {
				// console.log(item)
				let orders = [];
				let obj = {};
				obj.id = item.orderId;
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
										console.log("支付成功");
										this.listPortForm.pageNum = 1;
										this.orderList = [];
										this.getFindMyOrderList();
									},
									fail: function(err) {
										console.log('支付失败:' + JSON.stringify(err));
										this.listPortForm.pageNum = 1;
										this.orderList = [];
										this.getFindMyOrderList();
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
			},
			// 取消订单	
			cancelOrder(item) {
				// console.log('item：', item);
				this.updateStatus(item.orderId, 4)
			},
			// 更改订单状态
			updateStatus(takeOutOrderId, status) {
				merchantsDoself.updateStatus(takeOutOrderId, status).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: '取消成功',
							icon: 'success'
						});
						this.listPortForm.pageNum = 1;
						this.orderList = [];
						this.getFindMyOrderList();
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
			// 申请退款
			refundMoney(item) {
				// console.log(item);
				this.updateRefundStatus(item.orderId, 0);
			},
			// 更改订单退款状态
			updateRefundStatus(takeOutOrderId, refundMoneyStatus) {
				merchantsDoself.updateRefundStatus(takeOutOrderId, refundMoneyStatus).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: '退款申请已提交',
							icon: 'success'
						});
						this.listPortForm.pageNum = 1;
						this.orderList = [];
						this.getFindMyOrderList();
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
			// 再来一单
			againOne(item) {
				merchantsDoself.againOrder(item.orderId).then(res => {
					if (res.code == 200) {
						uni.navigateTo({
							url: '/pages/merchantsDoself/merchants-doself?ID=6&zlyd=1'
						})
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
			// this.scrollTop = e.scrollTop;
		},
	}
</script>

<style lang="less" scoped>
	.container-tabs__list {
		height: calc(100vh - 220rpx);
		box-sizing: border-box;
		margin-top: 52rpx;

		.isBottom {
			/* text-align: center; */
			position: relative;
			margin-bottom: 14rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
		}

		.isBottom-text {
			font-size: 24rpx;
			color: rgb(186, 186, 186);
			text-align: center;
			margin: 0 20rpx;
		}

		.isBottom-leftLine {
			width: 160rpx;
			height: 4rpx;
			background: #e5e5e5;
		}

		.isBottom-rightLine {
			width: 160rpx;
			height: 4rpx;
			background: #e5e5e5;
		}
	}
</style>
