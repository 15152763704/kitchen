<template>
	<view class="order-form">
		<view class="top-part">
			<view class="" style="margin-bottom: 18rpx; position: relative;">
				<image @click="toBack()"
					style="width: 17rpx; height: 30rpx; position: absolute; top: 12rpx; left: 30rpx;"
					src="../../static/rmcp_back.png" mode=""></image>
				<text>提交订单</text>
			</view>
		</view>
		<!-- 个人信息 -->
		<view class="customer-info">
			<view class="flex-center-center" @click="toggleAddress()">
				<text
					class="address">{{ myAddress?myAddress.addressTitle:'请选择收货地址' }}{{ myAddress?myAddress.addressNum:'' }}</text>
				<image style="width: 12rpx;" src="../../static/shopCar/order_r.png" mode="widthFix"></image>
			</view>
			<view class="c-info">
				<text>{{ myAddress?myAddress.userName:'点击添加收货地址' }}</text>
				<text v-if="myAddress" style="margin-left: 8rpx;">{{ myAddress.sex == '0'? '先生': '女士' }}</text>
				<text style="margin-left: 28rpx;">{{ myAddress?myAddress.mobile:'' }}</text>
			</view>
		</view>
		<!-- 订单信息 -->
		<view class="order-info">
			<view class="order-item" v-for="(item,index) in orderList" :key="index">
				<view class="store-info">
					<view class="flex-center-center">
						<text class="store-name">{{ item.name }}</text>
						<text class="store-type">{{distribution == 0 ? '商家自配' : '平台配送'}}</text>
					</view>
				</view>
				<view class="time-info" @click="toggleTime(index)">
					<!-- <view class="time-info"> -->
					<view class="row1 flex-center-center">
						<text class="fc">{{ (item.userCarsVo.temp_arriveTime && item.userCarsVo.temp_arriveTime != '立即送出')?'指定时间': '立即送出' }}</text>
						<!-- <text class="sc">大约11:28送达</text> -->
						<text class="sc">{{ item.userCarsVo.temp_arriveTime?item.userCarsVo.temp_arriveTime:'' }}</text>
					</view>
					<view class="row2">
						<text>为减少接触，降低风险，推荐使用无接触配送</text>
					</view>
					<view class=""
						style="border-bottom: 0.6rpx solid #E3E3E3;width: 708rpx; height: 28rpx; position: absolute; bottom: 0; left: -24rpx;">
					</view>
				</view>
				<view class="goods-info">
					<view class="row1" v-for="(val,ind) in item.userCarsVo.data">
						<view class="image">
							<image style="" :src="val.food.imageUrl" mode=""></image>
							<view class="info">
								<view class="name">
									<text>{{ val.food.name }}</text>
								</view>
								<view class="guige">
									<text>{{ val.foodSpecsName }}</text>
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
					<view class="row2 flex-center-center">
						<text class="text">打包费</text>
						<view class="">
							<text style="font-size: 22rpx;">￥</text>
							<text style="font-size: 32rpx">{{ item.userCarsVo.packagePrice }}</text>
						</view>
					</view>
					<view class="row3">
						<view class="">
							<text class="text">配送费</text>
							<view class="" style="font-size: 24rpx; color: #808080;">活动减6元配送费</view>
						</view>
						<view class="">
							<text style="font-size: 22rpx;">￥</text>
							<text style="font-size: 32rpx">0</text>
						</view>
					</view>
					<view class="row4 flex-center-center">
						<view class="flex-center-center">
							<image style="width: 32rpx;" src="../../static/shopCar/order_hb.png" mode="widthFix">
							</image>
							<text class="text">平台红包</text>
						</view>
						<view class="flex-center-center">
							<!-- 先判断有无可用红包 在判断是否使用红包 -->
							<template v-if="myPackageNum">
								<template v-if="!item.userCarsVo.temp_package_money">
									<text class="isHb" @click="toggleRedenvelope(index)">{{ myPackageNum }}张可用</text>
								</template>
								<template v-else>
									<text class="cF75732">-</text><text class="cF75732"
										style="font-size: 22rpx;">￥</text><text class="cF75732"
										style="font-size: 32rpx;" @click="toggleRedenvelope(index)">{{ item.userCarsVo.temp_package_money }}</text>
								</template>
								<image style="width: 12rpx; margin-left: 12rpx;" src="../../static/shopCar/order_r.png"
									mode="widthFix"></image>
							</template>
							<template v-else>
								<text class="isQuan">暂无可用</text>
							</template>
						</view>
					</view>
					<view class="row5 flex-center-center">
						<view class="flex-center-center">
							<image style="width: 32rpx;" src="../../static/shopCar/order_quan.png" mode="widthFix">
							</image>
							<text class="text">商家代金券</text>
						</view>
						<view class="flex-center-center">
							<!-- item.userCarsVo.userCouponCard -->

							<!-- <text class="isQuan">暂无可用</text> -->
							<!-- <image style="width: 12rpx;" src="../../static/shopCar/order_r.png" mode="widthFix"></image> -->
							<!-- <text style="font-size: 32rpx;">-5元</text> -->
							<template v-if="item.userCarsVo.userCouponCard.length != 0">
								<template v-if="!item.userCarsVo.temp_coupon">
									<text class="isHb"
										@click="toggleCashCoupon(index,item.name,item.shopImgUrl,item.id)">{{ item.userCarsVo.userCouponCard.length }}张可用</text>
								</template>
								<template v-else>
									<text class="cF75732">-</text><text class="cF75732"
										style="font-size: 22rpx;">￥</text><text class="cF75732"
										style="font-size: 32rpx;" @click="toggleCashCoupon(index,item.name,item.shopImgUrl,item.id)">{{ item.userCarsVo.temp_coupon }}</text>
								</template>
								<image style="width: 12rpx; margin-left: 12rpx;" src="../../static/shopCar/order_r.png"
									mode="widthFix"></image>
							</template>
							<template v-else>
								<text class="isQuan">暂无可用</text>
							</template>
						</view>
					</view>
					<view class="row6 flex-center-center" @click="toggleAddnotes(index)">
						<view class="title">
							<text>备注</text>
						</view>
						<view class="flex-center-center">
							<text
								class="text">{{ item.userCarsVo.temp_remark?item.userCarsVo.temp_remark:'添加个人口味偏号' }}</text>
							<image style="width: 12rpx;" src="../../static/shopCar/order_r.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="row7 flex-center-center" style="margin-bottom: 38rpx;" @click="toggleTableware(index)">
						<view class="title">
							<text>餐具数量</text>
						</view>
						<view class="flex-center-center">
							<text v-if="item.userCarsVo.temp_tableware === 0" class="text"
								style="color: #56575B;">无需餐具</text>
							<text v-else class="text"
								style="color: #56575B;">{{ item.userCarsVo.temp_tableware?(item.userCarsVo.temp_tableware == '-1'? '根据餐量提供':item.userCarsVo.temp_tableware):'根据餐量提供' }}份</text>
							<image style="width: 12rpx;" src="../../static/shopCar/order_r.png" mode="widthFix"></image>
						</view>
					</view>
					<view v-if="invoice == 1" class="row8 flex-center-center" @click="toggleInvoice(index)"
						style="margin-bottom: 34rpx; margin-top: 0;">
						<view class="title">
							<text>发票</text>
						</view>
						<view class="flex-center-center">
							<text
								class="text">{{ item.userCarsVo.invoiceHeader?item.userCarsVo.invoiceHeader:'未选择' }}</text>
							<image style="width: 12rpx;" src="../../static/shopCar/order_r.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
				<!-- 合计 -->
				<view class="accounts">
					<view class="rules">
						<text>优惠规则</text>
					</view>
					<view class="">
						<text>已优惠：</text><text
							style="margin-left: 4rpx; font-weight: 500; font-size: 16rpx; color: #F75732;">￥</text><text
							style="font-weight: 500; font-size: 24rpx; color: #F75732;">{{ item.userCarsVo.fullReduce + item.userCarsVo.temp_coupon + item.userCarsVo.temp_package_money }}</text>
						<text style="margin-left: 20rpx;">小计</text><text
							style="font-weight: 500; font-size: 30rpx;">￥</text><text
							style="font-weight: 500; font-size: 44rpx;">{{ item.userCarsVo.payPrice - item.userCarsVo.temp_coupon - item.userCarsVo.temp_package_money }}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- zhifufangshi -->
		<view class="pay-way">
			<text class="way-q">支付方式</text>
			<text class="way-a">在线支付</text>
		</view>
		<!-- 商家数量 -->
		<!-- <view class="stores">
			<image style="width: 20rpx; margin-right: 10rpx;" src="../../static/shopCar/order_t.png" mode="widthFix">
			</image>
			<text style="margin-right: 10rpx;">商家</text>
			<text style="font-size: 32rpx; font-weight: 500;">2</text><text style="font-size: 22rpx;">/2</text>
			<image style="width: 20rpx; margin-left: 10rpx;" src="../../static/shopCar/order_b.png" mode="widthFix">
			</image>
		</view> -->
		<view class="submit">
			<view class="left">
				<text>已优惠￥{{ ctotalfullReduce }}</text>
				<view class="flex-center-center">
					<text style="margin-right: 6rpx;">合计</text><text
						style="font-size: 32rpx; font-weight: 500;">￥{{ ctotalPayPrice }}</text><text
						style="font-size: 40rpx; font-weight: 500;"></text>
				</view>
			</view>
			<view class="right" @click="togglePay()">
				<text>提交订单</text>
			</view>
		</view>


		<!-- 选择地址弹窗 -->
		<popup-adress ref="popupAdress" @sendAddress="sendAddress" />
		<!-- 选择送达时间弹窗 -->
		<popup-time ref="popupTime" :openCloseTime="openCloseTime" @sendTime="sendTime" />
		<!-- 选择餐具 -->
		<popup-tableware ref="popupTableware" @sendTwNum="sendTwNum" />
		<!-- 选择支付 -->
		<popup-pay ref="popupPay" />

		<uni-popup ref="alertDialog" type="dialog" style="z-index: 9999">
			<uni-popup-dialog type="info" cancelText="关闭" confirmText="同意" title="" :content="returnMsg"
				@confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import popupAdress from './popupAdress.vue';
	import popupTime from './popupTime.vue';
	import popupTableware from './popupTableware.vue';
	import popupPay from './popupPay.vue';
	import wxpay from '@/api/wxpay/wxpay.js'
	import shop from '@/api/shop/shop.js'
	import orderForm from '@/api/orderForm/orderForm.js'

	import * as util from '../../common/util.js'
	var main = util.main

	export default {
		components: {
			popupAdress,
			popupTime,
			popupTableware,
			popupPay
		},
		data() {
			return {
				shopId: '',
				invoice: 0,
				// openTime: '',
				// closeTime: '',
				openCloseTime: {
					todayTimesArr: ["08:00 - 09:00", "09:00 - 10:00", "10:00 - 11:00", "11:30 - 12:00", "12:00 - 13:00",
						"13:30 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00",
						"18:00 - 19:00", "19:00 - 20:00", "20:00 - 21:00"
					]
				},
				// shopName: '',
				// priceInfo: {
				// 	fullReduce: 0,
				// 	packagePrice: 0,
				// 	payPrice: 0
				// },
				orderList: [],
				myAddress: {

				},
				twindex: null, // 选中的餐具数量所属店铺index
				tmindex: null, // 选中的时间所属店铺index
				// totalPayPrice: null,
				// totalfullReduce: null,

				// 红包数量,列表,减
				myPackageNum: null,
				// myPackageList: [],
				// myPackageReduce: null,




				customerInfo: {
					// address: '星耀天地广场-1号楼',	
					// name: '曾',
					// sex: 'female',
					// phone: '1301234567'
				},
				orders: [
					// {
					// 	storename: '瑞幸咖啡luckincoffee(京华城店)',
					// 	goodslist: [{
					// 			pic: '/static/td_ncPic.png',
					// 			name: '厚乳拿铁',
					// 			num: '1',
					// 			guige: '大 + 冰 + 半糖',
					// 			price: '28.5'
					// 		},
					// 		{
					// 			pic: '/static/td_ncPic.png',
					// 			name: '厚乳拿铁',
					// 			num: '1',
					// 			guige: '大 + 冰 + 半糖',
					// 			price: '28.5'
					// 		}
					// 	],
					// 	packPrice: '2',
					// 	sendPrice: 0,
					// 	isHb: 1,
					// 	isQuan: 0
					// },
					// {
					// 	storename: '瑞幸咖啡luckincoffee(京华城店)',
					// 	goodslist: [{
					// 		pic: '/static/td_ncPic.png',
					// 		name: '厚乳拿铁',
					// 		num: '1',
					// 		guige: '大 + 冰 + 半糖',
					// 		price: '28.5'
					// 	}],
					// 	packPrice: '2',
					// 	sendPrice: 0,
					// 	isHb: 1,
					// 	isQuan: 0
					// }

				],
				returnMsg: '',
			}
		},
		computed: {
			ctotalPayPrice() {
				let totalPayPrice = 0;
				for (var i = 0; i < this.orderList.length; i++) {
					totalPayPrice = totalPayPrice + this.orderList[i].userCarsVo.payPrice - this.orderList[i]
						.userCarsVo.temp_coupon - this.orderList[i].userCarsVo.temp_package_money;
				}
				return totalPayPrice;
			},
			ctotalfullReduce() {
				let totalfullReduce = 0;
				for (var i = 0; i < this.orderList.length; i++) {
					totalfullReduce = totalfullReduce + this.orderList[i].userCarsVo.fullReduce + this.orderList[i]
						.userCarsVo.temp_coupon + this.orderList[i].userCarsVo.temp_package_money;
				}
				return totalfullReduce;
			}
		},
		onLoad(option) {
			// console.log('order-form: ')
			// console.log(option.shopId);
			this.shopId = option.shopId;
			this.distribution = option.distribution;
			this.invoice = option.invoice;
			// this.openTime = option.openTime;
			// this.closeTime = option.closeTime;
			if (option.openTime != 'null' && option.closeTime != 'null') {
				this.openCloseTime = main(option.openTime, option.closeTime)
			}
			// this.shopName = option.shopName;
			// 红包传值
			// this.myPackageReduce = option.reduce;
			// console.log(this.myPackageReduce)

			// 多个商家和单个商家接口不一样 
			// 
			this.getListAllUserCar(this.shopId);
			this.getMyPackageMoneyList();
		},
		onShow() {
			this.getMyAddressList();
			// let that = this
			// uni.$on('myPackageId',function(data){
			// 	console.log(data)
			// })
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
			toggleAddress() {
				// 可传参，控制组件popup open
				this.$refs.popupAdress.showPopup();
				// uni.hideTabBar();

			},
			toggleTime(tmindex) {
				// 可传参，控制组件popup open
				this.$refs.popupTime.showPopup();
				this.tmindex = tmindex;
				// uni.hideTabBar();

			},
			toggleTableware(twindex) {
				// 可传参，控制组件popup open
				// console.log(index)
				this.$refs.popupTableware.showPopup();
				this.twindex = twindex;
				// uni.hideTabBar();

			},
			/* 提交订单-准备订单参数 */
			togglePay() {
				// 可传参，控制组件popup open
				// uni.hideTabBar();
				let orders = [];
				let itemObj = {};
				for (var i = 0; i < this.orderList.length; i++) {
					itemObj.address = this.myAddress.address + this.myAddress.addressNum;
					itemObj.addressId = this.myAddress.id;
					itemObj.addressLatitude = this.myAddress.latitude;
					itemObj.addressLongitude = this.myAddress.longitude;
					itemObj.addressName = this.myAddress.userName;
					itemObj.addressSex = this.myAddress.sex;
					itemObj.addressTel = this.myAddress.mobile;
					itemObj.couponId = this.orderList[i].userCarsVo.couponId;
					itemObj.arriveTime = this.orderList[i].userCarsVo.temp_arriveTime; // 收货时间
					itemObj.invoiceHeader = this.orderList[i].userCarsVo.invoiceHeader;
					itemObj.invoiceHeaderType = this.orderList[i].userCarsVo.invoiceHeaderType;
					itemObj.invoiceId = this.orderList[i].userCarsVo.invoiceId;
					itemObj.invoiceTax = this.orderList[i].userCarsVo.invoiceTax;
					itemObj.packageId = this.orderList[i].userCarsVo.packageId;
					itemObj.remarks = this.orderList[i].userCarsVo.temp_remark;
					itemObj.shopId = this.orderList[i].id;
					itemObj.tableware = this.orderList[i].userCarsVo.temp_tableware;
					// let userCarids = [];
					// for (var j = 0; j < this.orderList[i].userCarsVo.data.length; j++) {
					// 	userCarids.push(this.orderList[i].userCarsVo.data[j].id)
					// }
					// itemObj.userCarids = userCarids
					itemObj.userCars = this.orderList[i].userCarsVo.data;
					orders.push(itemObj)
				}
				// console.log(orders)
				this.addOrder(orders);
			},
			/* 提交订单 */
			addOrder(orders) {
				orderForm.addOrder(orders).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: "生成订单成功",
							icon: 'success'
						})
						this.beforePay(res.data)
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
			/* 提交订单-准备支付参数 */
			beforePay(orders){
				wxpay.TakeOutOrderPayBeforePay(orders).then((res)=>{
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
									},
									fail: function (err) {
										console.log('支付失败:' + JSON.stringify(err));
									},
									complete:function(res){
										uni.switchTab({
											url:'/pages/tabBar/order/order',
										})
									}
								});
							}
						}
					});
				})
			},
			toggleRedenvelope(index) {
				uni.navigateTo({
					url: './redEnvelope/red-envelope?index=' + index
				})
			},
			toggleCashCoupon(index, name, imageUrl, id) {
				uni.navigateTo({
					url: './cashCoupon/cash-coupon?index=' + index + '&shopName=' + name + '&shopImageUrl=' +
						imageUrl + '&id=' + id
				})
			},
			toggleAddnotes(index) {
				uni.navigateTo({
					url: './addNotes/add-notes?index=' + index
				})
			},
			toggleInvoice(index) {
				uni.navigateTo({
					url: './invoiceHelper/invoice-helper?index=' + index
				})
			},
			// 获取购物车列表
			getListAllUserCar(shopId) {
				shop.getListAllUserCar(this.shopId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.data)
						// this.priceInfo.fullReduce = res.data.fullReduce;
						// this.priceInfo.packagePrice = res.data.packagePrice;
						// this.priceInfo.payPrice = res.data.payPrice;
						this.orderList = res.data;
						// 计算总价
						// for (var i = 0; i < res.data.length; i++) {
						// 	this.totalfullReduce = this.totalfullReduce + res.data[i].userCarsVo.fullReduce + res
						// 		.data[i].userCarsVo.temp_coupon + res.data[i].userCarsVo.temp_package_money;
						// 	this.totalPayPrice = this.totalPayPrice + res.data[i].userCarsVo.payPrice - res.data[i]
						// 		.userCarsVo.temp_coupon - res.data[i].userCarsVo.temp_package_money;
						// }

						// console.log(this.orderList)
						// this.shopCarNum = 0;
						// this.shopCarList = res.data.data;
						// this.fullReduceNum = res.data.fullReduce;
						// this.packagePrice = res.data.packagePrice;
						// this.payPrice = res.data.payPrice;
						// for (var i = 0; i < res.data.data.length; i++) {
						// 	// console.log(res.data.data[i].goodNum)
						// 	this.shopCarNum = this.shopCarNum + res.data.data[i].goodNum
						// }
					} else if (res.code == 401) {
						this.returnMsg = res.msg + '，请重新登录';
						this.dialogToggle();
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
				this.$refs.alertDialog.open()
			},
			dialogConfirm() {
				uni.removeStorageSync('token_key');
				uni.navigateTo({
					url: '/pages/login/login',
				})
			},
			dialogClose() {
				// console.log('点击关闭')
				uni.removeStorageSync('token_key');
				uni.navigateTo({
					url: '/pages/login/login',
				})
			},
			// 获取地址列表
			getMyAddressList() {
				orderForm.getMyAddressList().then(res => {
					if (res.code == 200) {
						// console.log(res.data)
						this.myAddress = res.data[0];
						this.$refs.popupAdress.closePopup();
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
			// 接收地址
			sendAddress(addressList) {
				// console.log(addressList)
				this.myAddress = addressList[0];
			},
			// 接收时间
			sendTime(time) {
				// this.myTime = time;
				this.orderList[this.tmindex].userCarsVo.temp_arriveTime = time;
			},
			// 接收餐具数量
			sendTwNum(tablewareNum) {
				this.orderList[this.twindex].userCarsVo.temp_tableware = tablewareNum;
				// console.log(this.orderList)
			},
			// 获取红包列表
			getMyPackageMoneyList() {
				orderForm.getMyPackageMoneyList().then(res => {
					if (res.code == 200) {
						// console.log(res.total)
						this.myPackageNum = res.total;
						// this.myPackageList = res.rows;
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
		background-image: url(../../static/shopCar/order_bcg.png);
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
