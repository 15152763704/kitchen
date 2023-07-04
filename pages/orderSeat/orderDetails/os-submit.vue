<template>
	<view class="combo-list">
		<combo-select :comboList="comboList" @clickItem="selectdCombo" style="margin-top: 22rpx"></combo-select>
		<!-- <view class="btn-container">
			<button type="" style="margin-bottom: 40rpx;" @click="sureOrder()">确定预约</button>
			<button type="" style="opacity: 0.6;">确定预约</button>
		</view> -->
		<view class="recommend">
			<view class="Divide">
				<text class="Divide-leftLine"></text>
				<text class="Divide-text">以下是为您推荐的热门菜</text>
				<text class="Divide-rightLine"></text>
			</view>
			<view class="Content">
				<view class="rc-item" v-for="(item,index) in recommendList" :key="index + 1">
					<image :src="item.picImg" mode="widthFix"></image>
					<text>{{ item.name }}</text>
				</view>
			</view>
		</view>
		
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog type="info" cancelText="取消" confirmText="预约" title="预约信息" :content="alertContent" @confirm="dialogConfirm"
				@close="dialogClose"></uni-popup-dialog>
		</uni-popup>
		
	</view>
</template>

<script>
	import orderSeat from '@/api/orderSeat/orderSeat.js'
	import comboSelect from "./comboSelect/combo-select.vue"
	// import popupPay from './popupPay.vue';
	export default {
		name: 'comboList',
		components: {
			comboSelect
		},
		data() {
			return {
				comboList: [],
				orderorInfo: {},
				isNeedDeposite: null,
				recommendList: [],
				
				alertContent:'', // 预约文本
				selectComboIndex: null
			}
		},
		computed: {},
		created(){},
		mounted(){},
		onLoad(options) {
			// console.log((options.isNeedDeposite));
			this.isNeedDeposite = options.isNeedDeposite;
			this.orderorInfo = JSON.parse(options.orderorInfo);
			this.findFoodPackageList(this.orderorInfo.roomId);
		},
		methods: {
			dialogClose() {
				console.log('点击关闭');
				this.comboList[this.selectComboIndex].state = false;
			},
			dialogConfirm() {
				console.log('点击确认')
				this.sureOrder();
			},			
			// 获取预约套餐(xin)
			findFoodPackageList(seatId) {
				orderSeat.findFoodPackageList(seatId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.rows)
						for (var i = 0; i < res.rows.length; i++) {
							let obj = {};
							obj.id = res.rows[i].id;
							obj.name = res.rows[i].packageName;
							obj.content = res.rows[i].foodPackageContentData?JSON.stringify(res.rows[i].foodPackageContentData):'';
							obj.price = res.rows[i].price;
							obj.vacationUse = res.rows[i].vacationUse;
							obj.imgUrl = res.rows[i].imgUrl;
							obj.packageType = res.rows[i].packageType; // 2: 总价套餐，1：人均套餐 3：自定义人均套餐
							obj.state = false; // 2: 总价套餐，1：人均套餐 3：自定义人均套餐
							if (res.rows[i].vacationUse) {
								obj.time = '周一到周日';
							} else {
								obj.time = '周一到周五（法定节假日不可用）'
							}
							this.comboList.push(obj);
						}
						this.getFoodRecommendList(res.rows[0].shopId);
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
			getFoodRecommendList(shopId) {
				orderSeat.getFoodRecommendList(shopId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.recommendList = res.rows;
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
			selectdCombo(arr, type) {
				this.comboList = arr;
				this.selectComboIndex = type;
				// console.log(arr[type])
				// if (!arr[type].state) {
				// 	this.orderorInfo.foodPackageName = '';
				// 	this.orderorInfo.foodPackagePrice = '';
				// 	this.orderorInfo.foodPackageType = '';
				// 	this.orderorInfo.vacationUse = null;
				// 	this.orderorInfo.foodPackageContent = '';
				// } else {
				// 	this.orderorInfo.foodPackageName = arr[type].name;
				// 	this.orderorInfo.foodPackagePrice = arr[type].price;
				// 	this.orderorInfo.foodPackageType = arr[type].packageType;
				// 	this.orderorInfo.vacationUse = arr[type].vacationUse;
				// 	this.orderorInfo.foodPackageContent = arr[type].content;
				// 	this.sureOrder();
				// }
				this.orderorInfo.foodPackageName = arr[type].name;
				this.orderorInfo.foodPackagePrice = arr[type].price;
				this.orderorInfo.foodPackageType = arr[type].packageType;
				this.orderorInfo.vacationUse = arr[type].vacationUse;
				this.orderorInfo.foodPackageContent = arr[type].content;
				let that = this;
				let whw = this.orderorInfo.lunchOrDinner==0?"午餐":"晚餐";
				this.alertContent = "您即将预约"+this.orderorInfo.roomName+"包厢于"+this.orderorInfo.receiveDate+"日的"+whw+"餐次，选购套餐为："+this.orderorInfo.foodPackageName+"。我们恭候您的光临！"
				this.$refs.alertDialog.open();
			},
			sureOrder() {
				if (!this.orderorInfo.foodPackageName) {
					uni.showToast({
						title: '请选择套餐',
						icon: 'none'
					});
					return;
				}
				// console.log(this.orderorInfo)
				let data = {
					foodPackageName: this.orderorInfo.foodPackageName,
					foodPackageContent: this.orderorInfo.foodPackageContent,
					foodPackagePrice: this.orderorInfo.foodPackagePrice,
					foodPackageType: this.orderorInfo.foodPackageType,
					// isRoom: this.orderorInfo.roomIsChecked ? 1 : 0,
					perMakeName: this.orderorInfo.orderorName,
					perMakeRemark: this.orderorInfo.orderorNote,
					perMakeSex: this.orderorInfo.isMale ? 0 : 1,
					perMakeTel: this.orderorInfo.orderorPhone,
					receiveDate: this.orderorInfo.receiveDate,
					receivePeople: this.orderorInfo.receivePeople,
					receiveTime: this.orderorInfo.receiveTime,
					shopId: this.orderorInfo.shopId,
					vacationUse: this.orderorInfo.vacationUse,
					roomId: this.orderorInfo.roomId,
					roomName: this.orderorInfo.roomName,
					lunchOrDinner: this.orderorInfo.lunchOrDinner
				};
				this.addPerMakeSeat(data);
			},
			addPerMakeSeat(data) {
				console.log(data);
				orderSeat.addPerMakeSeat(data).then(res => {
					if (res.code == 200) {
						if (this.isNeedDeposite == 1) {
							uni.showToast({
								title: "正在跳转支付...",
								icon: 'loading'
							})
							this.beforePay(res.data);
						} else {
							uni.navigateTo({
								url: '/pages/orderSeat/myOrder/my-order'
							})
						}
						// uni.showLoading({
						// 	// title: '加载中'
						// });
						// setTimeout(() => {
						// 	uni.navigateBack({
			
						// 	})
						// }, 1000);
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			beforePay(orders) {
				orderSeat.orderSeatbeforePay(orders).then((res) => {
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
							// console.log(res.provider)
							if (~res.provider.indexOf('wxpay')) {
								uni.requestPayment({
									"provider": "wxpay", //固定值为"wxpay"
									"orderInfo": orderInfo,
									success: function(res) {
										var rawdata = JSON.parse(res.rawdata);
										console.log("支付成功");
										uni.navigateTo({
											url: '/pages/orderSeat/myOrder/my-order'
										})
									},
									fail: function(err) {
										console.log('支付失败:' + JSON.stringify(err));
										uni.navigateTo({
											url: '/pages/orderSeat/myOrder/my-order'
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
			},
		}
	}
</script>

<style lang="scss" scoped>
.combo-list {
	background-color: #ffffff;
	.btn-container {
		box-sizing: border-box;
		margin-top: 32rpx;
		padding: 0 26rpx 40rpx;
		position: fixed;
		bottom: 0;
		width: 750rpx;
		button {
			background-color: #007AFF;
			color: #FFFFFF;
			font-size: 28rpx;
			background: linear-gradient(to right, #F0C819, #FF9D00);
		}
	}
	.recommend {
		padding-top: 50rpx;
		background-color: #F5F5F5;
		.Divide {
			position: relative;
			margin-bottom: 50rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			.Divide-text {
				font-size: 24rpx;
				color: #C4C4C4;
				text-align: center;
				margin: 0 20rpx;
			}
			.Divide-leftLine {
				width: 172rpx;
				height: 1rpx;
				background: #C4C4C4;
			}
			
			.Divide-rightLine {
				width: 172rpx;
				height: 1rpx;
				background: #C4C4C4;
			}
		}
		.Content {
			padding-bottom: 20rpx;
			.rc-item {
				width: 660rpx;
				margin: 0 auto 40rpx;
				text-align: center;
				image {
					width: 100%;
				}
				text {
					font-size: 28rpx;
					// color: #BABABA;
				}
			}
		}
	}
}
</style>
