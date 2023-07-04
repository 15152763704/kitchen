<template>
	<uni-popup ref="popup" type="bottom" :animation="true" :is-mask-click="true">
		<view class="p-boddy">
			<view class="header">
				<text class="header-text">选择收货地址</text>
				<image class="header-image" style="width: 26rpx;" src="/static/baskCooking/sy_close.png"
					mode="widthFix" @click="closePopup" />
			</view>

			<scroll-view style="" scroll-y="true" class="scroll" @scrolltolower="">
				<view class="adress-li" v-for="(item,i) of addressList" :key="i" @click="setAddressDef(item.id)">
					<image v-if="i == 0" style="width: 34rpx; position: absolute; left: 24rpx; top: 36rpx;" src="../../static/shopCar/checked.png" mode="widthFix"></image>
					<view class="" style="width: 600rpx;">
						<view class="a-name">
							<text>{{ item.addressTitle }}{{ item.addressNum }}</text>
						</view>
						<view class="a-costomer">
							<text>{{ item.userName }}</text>
							<text>{{ item.mobile }}</text>
						</view>
					</view>
					<image @click.stop="editMyaddress(item.id)" style="width: 28rpx;" src="../../static/shopCar/edit.png" mode="widthFix"></image>
					<view class=""
						style="border-bottom: 0.6rpx solid #E3E3E3;width: 708rpx; height: 24rpx; position: absolute; bottom: 0; left: 74rpx;">
					</view>
				</view>
				<!-- 超配送范围地址 -->
				<!-- <view class="beyond-range">
					<view class="title">
						<text>超配送范围地址</text>
					</view>
					<view class="adress-li-2" v-for="(item,i) of 2" :key="i">	
						<view class="">
							<view class="a-name">
								<text>星耀天地广场-一号楼</text>
							</view>
							<view class="a-costomer">
								<text>曾女士</text>
								<text>13012345678</text>
							</view>
						</view>
						<image style="width: 28rpx;" src="../../static/shopCar/edit.png" mode="widthFix"></image>
						<view class=""
							style="border-bottom: 0.6rpx solid #E3E3E3;width: 708rpx; height: 24rpx; position: absolute; bottom: 0; left: 0rpx;">
						</view>
					</view>
				</view> -->
				<!-- <view class="loading">{{loadingText}}</view> -->
			</scroll-view>

			<view class="add-adress" @click="addAdress()">
				<image style="width: 30rpx;" src="../../static/shopCar/add.png" mode="widthFix"></image>
				<text>新增收货地址</text>
			</view>

		</view>
	</uni-popup>
</template>

<script>
	// 测试服务器
	import orderForm from '@/api/orderForm/orderForm.js'
	export default {
		data() {
			return {
				addressList: [],
			}
		},
		filters: {

		},
		methods: {
			showPopup(item) {
				this.$refs.popup.open();
				this.getMyAddressList()
			},
			// 获取地址列表
			getMyAddressList() {
				orderForm.getMyAddressList().then(res => {
					if (res.code == 200) {
						// console.log(res.data)
						this.addressList = res.data;
						this.$emit('sendAddress',this.addressList);
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
			// 设为默认
			// setAddressDef
			setAddressDef(addressId) {
				orderForm.setAddressDef(addressId).then(res => {
					if (res.code == 200) {
						// console.log(res.data)
						this.getMyAddressList();
						this.closePopup();
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
			closePopup() {
				this.$refs.popup.close();
				// uni.showTabBar()

			},
			commentConfirm() {
				this.$refs.popup.close();
			},
			addAdress() {
				// uni.showToast({
				// 	title: '新增收货地址'
				// })
				uni.navigateTo({
					url: './shippingAddress/shipping-address'
				})
			},
			editMyaddress(id) {
				// console.log(id);
				uni.navigateTo({
					url: './shippingAddress/edit-address?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.p-boddy {
		width: 750rpx;
		height: 800rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx 20rpx 0 0;
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

	.p-boddy .scroll {
		width: 750rpx;
		height: 580rpx;
		/* #ifndef APP-NVUE */
		/* height: 580rpx; */
		/* #endif */
	}
	

	

	

	.p-boddy .adress-li {
		display: flex;
		flex-direction: row;
		padding: 30rpx 34rpx 24rpx 72rpx;
		box-sizing: border-box;
		justify-content: space-between;
		position: relative;
		
		.a-name {
			font-size: 30rpx;
			font-weight: 500;
			margin-bottom: 4rpx;
		}
		.a-costomer {
			font-size: 24rpx;
			color: #808080;
			text {
				margin-right: 28rpx;
			}
		}
	}
	
	.beyond-range {
		padding: 28rpx 54rpx 0 80rpx;
		box-sizing: border-box;
		.title {
			font-size: 28rpx;
			color: #808080;
		}
		.adress-li-2 {
			display: flex;
			flex-direction: row;
			// padding: 30rpx 34rpx 24rpx 72rpx;
			padding: 24rpx 0;
			
			justify-content: space-between;
			position: relative;
			color: #808080;
			
			.a-name {
				font-size: 32rpx;
				font-weight: 500;
				// color: #808080;
			}
			.a-costomer {
				font-size: 24rpx;
				// color: #808080;
				text {
					margin-right: 28rpx;
				}
			}
		}
	} 
	
	.p-boddy .add-adress {
		width: 700rpx;
		height: 76rpx;
		background-color: #F5F6F7;
		border-radius: 16rpx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		text {
			font-size: 32rpx;
			margin-left: 32rpx;
		}
	}
</style>
