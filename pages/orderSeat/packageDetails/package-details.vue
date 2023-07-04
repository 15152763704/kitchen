<template>
	<view class="package-details" style="">
		<view class="module_1">
			<image :src="foodPackageDetails.imgUrl" mode=""></image>
			<view class="package-name">
				{{ foodPackageDetails.packageName }}
			</view>
			<view class="package-price">
				<view class="new-price">
					￥<text>{{ foodPackageDetails.price }}</text>
				</view>
				<view class="old-price">
					￥<text>{{ foodPackageDetails.oldPrice }}</text>
				</view>
			</view>
		</view>
		<view class="module_2">
			<view class="title">
				套餐内容
			</view>
			<view class="package-content">
				<view class="package-content-item" v-for="(item,index) in foodPackageDetails.foodPackageContentData" :key="index + 1">
					<view class="name">
						<text>{{ item.name }}</text>
						<text class="fenliang">（{{ item.num }}份）</text>
					</view>
					<view class="price">
						￥<text>{{ item.price }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="module_3">
			<view class="title">
				使用规则
			</view>
			<view class="" style="padding: 0 36rpx; box-sizing: border-box;">
				<rich-text class="rich-text" :nodes="foodPackageDetails.useRule" style="font-size: 28rpx; line-height: 2; color: #000000!important;"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	import orderSeat from '@/api/orderSeat/orderSeat.js'
	export default {
		components: {},
		data() {
			return {
				foodPackageDetails: {}
			}
		},
		onLoad: function(option) {
			this.getFoodPackageDetails(option.id)
		},
		onShow() {

		},
		methods: {
			getFoodPackageDetails(id) {
				orderSeat.getFoodPackageDetails(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res)
						this.foodPackageDetails = res.data;
						// this.getFileUrl(res.data.seatPic);
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
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;
		},
	}
</script>

<style lang="scss" scoped>
	.package-details {
		padding: 22rpx 22rpx;
		box-sizing: border-box;
		.module_1 {
			padding: 22rpx 22rpx;
			box-sizing: border-box;
			background: #ffffff;
			border-radius: 0 0 12rpx 12rpx;
			image {
				width: 100%;
				border-radius: 16rpx;
			}
			.package-name{
				font-size: 40rpx;
				font-weight: 500;
				padding: 20rpx 0rpx 28rpx;
				box-sizing: border-box;
			}
			.package-price {
				display: flex;
				align-items: flex-end;
				.new-price {
					font-weight: 500;
					margin-right: 8rpx;
					color: #F75732;
					text {
						font-size: 42rpx;
					}
				}
				.old-price{
					font-size: 28rpx;
					// font-weight: 500;
					color: #999999;
					text-decoration: line-through;
				}
			}
		}
		.module_2 {
			padding: 22rpx 22rpx;
			box-sizing: border-box;
			background: #ffffff;
			border-radius: 12rpx 12rpx;
			margin-top: 20rpx;
			.title {
				font-size: 30rpx;
				font-weight: 600;
				padding: 0rpx 0rpx 28rpx;
				box-sizing: border-box;
			}
			.package-content {
				.package-content-item {
					display: flex;
					margin-bottom: 16rpx;
					font-size: 26rpx;
					.name{
						width: 620rpx;
						display: flex;
						justify-content: space-between;
						.fenliang {
							color: #999999;
						}
					}
					.price {
						width: 140rpx;
						text-align: left;
						font-weight: 500;
					}
				}
				
			}
		}
		.module_3{
			.title {
				font-size: 30rpx;
				font-weight: 600;
				padding: 0rpx 0rpx 28rpx;
				box-sizing: border-box;
			}
			padding-top: 40rpx;
			padding-right: 18rpx;
		}
	}
</style>>
