<template>
	<view class="car">
		<view class="flex">
			<view class="">
				<image style="width: 340rpx; height: 250rpx; border-radius: 12rpx;" :src="goodsInfo.imageUrl" mode=""></image>
			</view>
			<view class="" style="padding-left: 16rpx; box-sizing: border-box;">
				<text class="goods-name">{{ goodsInfo.name }}</text>
				<text class="goods-price">￥{{ goodsInfo.price }}</text>
				<text class="goods-desc">{{ goodsInfo.description }}</text>
				<text class="goods-have">库存：{{ goodsInfo.foodNum }}</text>
			</view>
		</view>
		<view class="flex flex-space-between flex-align-items-center" style="margin-top: 20rpx;">
			<view class="">
				<text>数量</text>
			</view>
			<uni-number-box :min="1" :max="999" :value="gSelectNum" @change="numChange" @blur="numBlur"/>
		</view>
		<view class="" style="margin-top: 40rpx;">
			<button @click="onSure()" style="background: #FF9118; color: #ffffff; height: 80rpx; line-height: 80rpx;" type="" size="">确 定</button>
		</view>
	</view>
</template>

<script>
	
	export default {
		props: {
			goodsInfo: {
				type: Object,
				default(){
					return {
						
					}
				}
			},
			// payPrice: {
			// 	type: Number,
			// 	default: 0
			// }
		},
		data() {
			return {
				gSelectNum: 1
			}
		},
		computed: {
			
		},
		onLoad() {
			
		},
		onShow() {
			// this.getCartList();
		},
		methods: {
			numChange(value) {
				this.gSelectNum = value;
			},
			numBlur(e) {
				this.gSelectNum = e.detail.value;
				// console.log(e.detail.value);
			},
			onSure() {
				// console.log(this.gSelectNum);
				// this.$refs.popup.close();
				// id，数量
				uni.navigateTo({
					url: '/pages/merchantsDoself/orderForm/order-form?userCarIds=0&goodNum=' + this.gSelectNum + '&goodId=' + this.goodsInfo.id
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.flex {
		display: flex;
	}
	.flex-space-between {
		justify-content: space-between;
	}
	.flex-align-items-center {
		align-items: center;
	}
	// .flex-
	.car {
		// padding-bottom: 220rpx;
		min-height: 400rpx;
		padding: 22rpx 16rpx;
		box-sizing: border-box;
		.goods-name {
			font-size: 38rpx;
			font-weight: 500;
			width: 300rpx;
			display: inline-block;
			overflow: hidden; 
		    text-overflow: ellipsis;
		    white-space: nowrap;
		}
		.goods-price {
			display: inline-block;
			font-size: 44rpx;
			color: #F75732;
			margin-top: 20rpx;
		}
		.goods-desc {
			font-size: 24rpx;
			color: rgb(186, 186, 186);
			width: 320rpx;
			display:-webkit-box;
			overflow: hidden; 
			text-overflow: ellipsis;
			-webkit-box-orient:vertical; 
			-webkit-line-clamp:2;
		}
		.goods-have {
			font-size: 24rpx;
			color: rgb(186, 186, 186);
		}
	}
</style>