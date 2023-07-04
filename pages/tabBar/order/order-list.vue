<template name="orderlist">
	<view class="orderlist">
		<view v-if="orderList.length >0" @click="toStore(iiitem)" class="order-list-item" v-for="(iiitem,iiindex) in orderList">
			<view class="order-list-item-storeInfo">
				<view class="flex-row">
					<view class="">
						<image style="width: 92rpx; height: 92rpx; border-radius: 8rpx;" :src="iiitem.shopImgUrl"
							mode=""></image>
					</view>
					<view class="" style="margin-left: 18rpx; position: relative;">
						<view class="flex-row flex-items-center" style="position: absolute;">
							<text class="fs-30 storeInfo-name fw-500"
								style="width: 180rpx; lines: 1; text-overflow: ellipsis;">{{ iiitem.shopName }}</text>
							<image style="width: 8.4rpx; margin-left: 26rpx;" src="../../../static/order/right.png"
								mode="widthFix"></image>
						</view>
						<view class="goods-info-fullreduce" v-if="iiitem.fllReduceArr.length > 0">
							<template v-for="(item,index) in iiitem.fllReduceArr.slice(0, 3)">
								<text class="fullreduce-text">{{ item }}</text>
								<text class="fullreduce-textline"
									:class="{'theLast': index == iiitem.fllReduceArr.slice(0, 3).length - 1}"></text>
							</template>
						</view>
					</view>
				</view>
				<view class="">
					<text v-if="iiitem.orderStatus == 0" class="fs-28" style="color: #808080;">待支付</text>
					<text v-if="iiitem.orderStatus == 1" class="fs-28" style="color: #808080;">待派送</text>
					<text v-if="iiitem.orderStatus == 2" class="fs-28" style="color: #808080;">待收货</text>
					<text v-if="iiitem.orderStatus == 3" class="fs-28" style="color: #808080;">已完成</text>
					<text v-if="iiitem.orderStatus == 4 && iiitem.refundMoneyStatus == null" class="fs-28" style="color: #808080;">售后/取消</text>
					<text v-if="iiitem.orderStatus == 4 && iiitem.refundMoneyStatus == 0" class="fs-28" style="color: #808080;">申请退款</text>
					<text v-if="iiitem.orderStatus == 4 && iiitem.refundMoneyStatus == 1" class="fs-28" style="color: #808080;">退款成功</text>
					<text v-if="iiitem.orderStatus == 4 && iiitem.refundMoneyStatus == 2" class="fs-28" style="color: #808080;">退款失败</text>
				</view>
			</view>
			<scroll-view class="" :scroll-x="true" style="flex-direction:row;">
				<view @click="toStore(iiitem)" class="order-list-item-goodsList">
					<view class="goodsList-item" v-for="(v,i) in iiitem.historyUserCars" :style="iiitem.historyUserCars.length <= 1?'flex-direction:row; align-items: center;':''">
						<view class="">
							<image style="width: 168rpx; height: 124rpx; margin-bottom: 10rpx;" :src="v.food.imageUrl" mode="">
							</image>
						</view>
						<view class="">
							<text class="goods-name" :style="iiitem.historyUserCars.length <= 1?'margin-left: 16rpx;':''">{{ v.food.name }}</text>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="collection-item-mask">
				<view class="">
					<view class="flex-items-center">
						<text class="fs-30 fw-600" style="margin-bottom: 4rpx;">￥{{ iiitem.productAmountTotal }}</text>
						<text class="fs-24" style="color: #666;">共 {{ iiitem.historyUserCars.length }} 件</text>
					</view>
				</view>
			</view>
			<view v-if="true" class="order-list-item-actions">
				<view v-if="iiitem.orderStatus == 3" class="again-one" @click.stop="againOne($event,iiitem)">
					<text class="actions-text">再来一单</text>
				</view>
				<view v-if="iiitem.orderStatus == 0" class="again-one" @click.stop="toPay($event,iiitem)">
					<text class="actions-text">去支付</text>
				</view>
				<view v-if="iiitem.orderStatus == 2" class="again-one" @click.stop="toAchieve($event,iiitem)">
					<text class="actions-text">确认收货</text>
				</view>
				<view v-if="iiitem.orderStatus == 0 || iiitem.orderStatus == 1 || iiitem.orderStatus == 2" class="again-one" @click.stop="cancelOrder($event,iiitem)">
					<text class="actions-text">取消订单</text>
				</view>
				<view v-if="iiitem.orderStatus == 4 && iiitem.refundMoneyStatus == null && iiitem.isPayMoney == 1" class="again-one" @click.stop="refundMoney($event, iiitem)">
					<text class="actions-text">申请退款</text>
				</view>
				<view v-if="!iiitem.isPublish && iiitem.orderStatus == 3" class="goods-evaluate" @click.stop="evaluate($event,iiitem)">
					<text class="actions-text" style="border: none;">评价</text>
				</view>
			</view>
		</view>
		<view v-if="orderList.length == 0" class="" style="display: flex; flex-direction: column; align-items: center; margin-top: 240rpx;">
			<image style="width: 96rpx;margin-bottom: 22rpx;" src="../../../static/none.png" mode="widthFix"></image>
			<text style="font-size: 24rpx; color: #56575B;">暂无订单～</text>
		</view>
	</view>
</template>

<script>
	import wxpay from '@/api/wxpay/wxpay.js'
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
				// orderList: [{
				// 	storeImg: '/static/order/xycf.png',
				// 	name: '杏园茶舫杏园茶舫（虹桥坊店）',
				// 	state: 1,
				// 	orderImg: [{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	},
				// 	{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	},{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	},{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	},{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	},{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	}]
				// },{
				// 	storeImg: '/static/order/xycf.png',
				// 	name: '杏园茶舫杏园茶舫（虹桥坊店）',
				// 	state: 3,
				// 	orderImg: [{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	},
				// 	{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	},{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	},{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	},{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	},{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	}]
				// },
				// {
				// 	storeImg: '/static/order/xycf.png',
				// 	name: '杏园茶舫（虹桥坊店）',
				// 	state: 2,
				// 	orderImg: [{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	},{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	},{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	},{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	},{
				// 		pic: '/static/order/ycfs_pic1.png',
				// 		name: '花胶鸡汤'
				// 	}]
				// }],
				// fullreduceData: [{
				// 		"fullreduce": "满25减7"
				// 	},
				// 	{
				// 		"fullreduce": "满30减8"
				// 	}
				// ]
			}
		},
		methods: {
			toStore(item) {
				// console.log(item.shopId)
				uni.navigateTo({
					// url: '../../store/store?id=' + item.shopId
					url: './order-details?orderId=' + item.orderId
				})
			},
			// 评价
			evaluate(e,item) {
				// console.log(item)
				uni.navigateTo({
					url: '../../hotRecipes/evaluation/evaluate?orderId=' + item.orderId + '&from=1'
				})
				
				// #ifdef APP-NVUE
				e.stopPropagation()
				// #endif
			},
			// 再来一单
			againOne(e,item) {
				// uni.showToast({
				// 	title: '再来一单',
				// 	icon: 'none'
				// });
				this.$emit('againOne', item);
				// #ifdef APP-NVUE
				e.stopPropagation()
				// #endif
			},
			// 取消订单
			cancelOrder(e,item) {
				// uni.showToast({
				// 	title: '取消订单',
				// 	icon: 'none'
				// });
				this.$emit('cancelOrder', item);
				// #ifdef APP-NVUE
				e.stopPropagation()
				// #endif
			},
			// 申请退款
			refundMoney(e,item) {
				this.$emit('refundMoney', item);
				// #ifdef APP-NVUE
				e.stopPropagation()
				// #endif
			},
			// 确认收货
			toAchieve(e,item) {
				this.$emit('toAchieve', item);
				// #ifdef APP-NVUE
				e.stopPropagation()
				// #endif
			},
			// 去支付
			toPay(e,item) {
				//uni.showToast({
				//	title: '去支付',
				//	icon: 'none'
				//});
				//this.$emit('toPay', item);
				 // #ifdef APP-PLUS
				 e.stopPropagation()
				 // #endif
				wxpay.TakeOutOrderPayBeforePay([{id:item.orderId}]).then((res)=>{
					// appid: "wx93c29ea349ef0f35"
					// codeURL: null
					// errCode: null
					// errCodeDes: null
					// errorCode: null
					// mchId: "1628565003"
					// mwebUrl: null
					// nonceStr: "oqcUjReKD3D4JoJA"
					// prepayId: "wx15181735729371b4393402634942bc0000"
					// resultCode: "SUCCESS"
					// returnCode: "SUCCESS"
					// returnMsg: "OK"
					// sign: "2FD8C96BB270D9111F330462E96AF3B7"
					// subAppId: null
					// subMchId: null
					// tradeType: "APP"
					// xmlString: "<xml><return_code><![CDATA[SUCCESS]]></return_code>\n<return_msg><![CDATA[OK]]></return_msg>\n<result_code><![CDATA[SUCCESS]]></result_code>\n<mch_id><![CDATA[1628565003]]></mch_id>\n<appid><![CDATA[wx93c29ea349ef0f35]]></appid>\n<nonce_str><![CDATA[oqcUjReKD3D4JoJA]]></nonce_str>\n<sign><![CDATA[2FD8C96BB270D9111F330462E96AF3B7]]></sign>\n<prepay_id><![CDATA[wx15181735729371b4393402634942bc0000]]></prepay_id>\n<trade_type><![CDATA[APP]]></trade_type>\n</xml>"
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
					console.log(orderInfo)
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
									}
								});
							}
						}
					});
				})
			},
		},
		mounted() {

		}
	}
</script>

<style scoped lang="scss">
	.collection-item-mask {
		width: 138rpx;
		height: 216rpx;
		background: rgba(255, 255, 255, 0.9);
		position: absolute;
		/* z-index: 99; */
		top: 122rpx;
		right: 0;
		// padding-left: 28rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		/* #ifdef H5 */
		right: -2rpx;
		// padding-top: 108rpx;
		/* #endif */
		/* #ifdef APP-NVUE */
		// padding-top: 118rpx;
		/* #endif */
		text-align: center;
	}
	.fw-500 {
		font-weight: 500;
	}
	.fw-600 {
		font-weight: 600;
	}
	.fs-30 {
		font-size: 30rpx;
	}
	.fs-28 {
		font-size: 28rpx;
	}
	.fs-24 {
		font-size: 24rpx;
	}
	.flex-row {
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
		font-size: 28rpx;
		color: #5D5D5D;
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
		font-size: 24rpx;
		width: 142rpx;
		height: 62rpx;
		line-height: 62rpx;
		border-radius: 14rpx;
		border: 1rpx solid #BABABA;
		text-align: center;
	}
</style>
