<template>
	<view class="my-address">
		<view v-if="!isLoading" class="">
			<view v-if="addressList.length" class="adress-list">
				<view class="adress-li" v-for="(item,i) of addressList" :key="i">
					<!-- <image style="width: 34rpx; position: absolute; left: 24rpx; top: 36rpx;"
						src="/static/shopCar/checked.png" mode="widthFix"></image> -->
					<view class="">
						<view class="a-name">
							<text>{{ item.addressTitle }}{{ item.addressNum }}</text>
						</view>
						<view class="a-costomer">
							<text>{{ item.userName }}</text>
							<text>{{ item.mobile }}</text>
						</view>
					</view>
					<image style="width: 28rpx;" src="/static/shopCar/edit.png" mode="widthFix"
						@click.stop="editAdress(item.id)"></image>
					<!-- <view class=""
						style="border-bottom: 0.6rpx solid #E3E3E3;width: 708rpx; height: 24rpx; position: absolute; bottom: 0; left: 74rpx;">
					</view> -->
				</view>
				<!-- <view class="loading">{{loadingText}}</view> -->
			</view>
			<view v-else class=""
				style="display: flex; flex-direction: column; align-items: center; margin-top: 360rpx; background-color:#F5F5F5">
				<image style="width: 96rpx;margin-bottom: 22rpx;" src="/static/none.png" mode="widthFix"></image>
				<text style="font-size: 24rpx; color: #56575B;">暂无地址～</text>
			</view>
			<!-- <view class="add-adress" @click="addAdress()">
				<image style="width: 30rpx;" src="/static/shopCar/add.png" mode="widthFix"></image>
				<text>新增收货地址</text>
			</view> -->
		</view>
		<view v-else class="" style="background-color: #F5F5F5; text-align: center;">
			<image style="width: 288rpx; margin-top: 400rpx;" src="/static/loading1.gif" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	// import MoteLinesDivide from "@/components/mote-lines-divide/mote-lines-divide"
	import merchantsDoself from '@/api/merchantsDoself/merchantsDoself.js'
	export default {
		components: {
			// MoteLinesDivide
			
		},
		data() {
			return {
				addressList: [],
				isLoading: true,
				from: ''
			}
		},
		onLoad: function(option) {
			// if(option.from == 'home') {
			// 	console.log('from home ')
			// }
			this.from = option.from;
		},
		onShow() {
			this.getMyAddressList()
		},
		methods: {
			editAdress(id) {
				// let cont = "编辑第" + (index+1) + "条地址"
				// uni.showModal({
				//     content: JSON.stringify(cont)
				// })
				uni.navigateTo({
					url: '/pages/merchantsDoself/orderForm/shippingAddress/edit-address?id=' + id
				})
			},
			// 获取地址列表
			getMyAddressList() {
				merchantsDoself.getMyAddressList().then(res => {
					if (res.code == 200) {
						// console.log(res.data)
						this.isLoading = false;
						this.addressList = res.data;
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
			// addAdress() {
			// 	// uni.showToast({
			// 	// 	title: '新增收货地址'
			// 	// })
			// 	uni.navigateTo({
			// 		url: '/pages/merchantsDoself/orderForm/shippingAddress/shipping-address'
			// 	})
			// }
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;

		},
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/merchantsDoself/orderForm/shippingAddress/shipping-address'
			})
		}
		// #endif
	}
</script>

<style lang="scss" scoped>
	.my-address {
		width: 750rpx;
		// height: 800rpx;
		background-color: #FFFFFF;

		// border-radius: 20rpx 20rpx 0 0;
		.adress-list {
			width: 750rpx;
			padding: 0 34rpx 0 30rpx;
			box-sizing: border-box;

			.adress-li {
				display: flex;
				flex-direction: row;
				padding: 40rpx 0 24rpx 0;
				box-sizing: border-box;
				justify-content: space-between;
				position: relative;
				border-bottom: 0.6rpx solid #E3E3E3;

				.a-name {
					margin-bottom: 16rpx;

					text {
						font-size: 32rpx;
						font-weight: 500;
					}
				}

				.a-costomer {
					text {
						margin-right: 28rpx;
						font-size: 24rpx;
						color: #808080;
					}
				}
			}

			.adress-li:last-child {
				border-bottom: none;
			}
		}
	}
</style>
