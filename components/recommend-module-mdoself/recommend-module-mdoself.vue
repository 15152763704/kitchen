<template>
	<view class="recommend-module" @click="gotoStore()">
		<view class="flex flex-justify-center" style="margin-bottom: 32rpx;">
			<view class="flex">
				<image style="width: 86rpx; height: 86rpx; border-radius: 10rpx;" :src="shopList.shopImgUrl" mode="">
				</image>
				<view class="">
					<view class="fs-32 fw-500" style="margin-left: 24rpx;">{{ shopList.name }}</view>
					<view class="flex fs-20" style="margin-left: 28rpx; margin-top: 12rpx; margin-bottom: 30rpx;">
						<view class="flex flex-items-center" style="margin-right: 28rpx;">
							<image style="width: 14rpx; height: 13rpx; margin-right: 4rpx;"
								src="../../static/ms_star.png" mode=""></image>
							<text class="">{{ shopList.score? Number(shopList.score).toFixed(1) : '0.0'}}分</text>
						</view>
						<view class="flex flex-items-center" style="margin-right: 28rpx;">
							<image style="width: 21rpx; height: 20.6rpx; margin-right: 4rpx;"
								src="../../static/dpzy_yueshou2x.png" mode=""></image>
							<text class="">月售{{ shopList.monthSellNum? shopList.monthSellNum: 0 }}</text>
						</view>
						<view class="flex flex-items-center">
							<image style="width: 17.6rpx; height: 18.6rpx; margin-right: 4rpx;"
								src="../../static/dpzy_daocha.png" mode=""></image>
							<text class="">人均￥{{ shopList.perCapita?Number(shopList.perCapita).toFixed(0): 0 }}</text>
						</view>
					</view>
					<view class="flex" style="margin-left: 24rpx;">
						<!-- <view class="goods-info-fullreduce fs-20" v-if="shopList.selfMadeGoodCouponCard">
							<template v-for="(value,iindex) in shopList.selfMadeGoodFullReduceArr.slice(0, 3)">
								<text class="fullreduce-text">{{ value }}</text>
								<text class="fullreduce-textline"
									:class="{'theLast': iindex == shopList.selfMadeGoodFullReduceArr.slice(0, 3).length - 1}"></text>
							</template>
						</view> -->
					</view>
				</view>
			</view>
			<view class="fs-28 fw-500">
				<text>进店</text>
				<image style="width: 10rpx; height: 18rpx; margin-left: 10rpx;" src="../../static/ms_right.png" mode="">
				</image>
			</view>
		</view>
		<view class="flex">
			<view class="" style="margin-right: 16rpx;" v-for="(item,index) in shopList.selfMadeGoods" :key="index">
				<image style="width: 212rpx; height: 148rpx; border-radius: 10rpx;" :src="item.imageUrl" mode="">
				</image>
				<view class="fs-28"
					style="width: 190rpx; overflow:hidden; text-overflow:ellipsis; white-space: nowrap;">
					<text>{{ item.name }}</text>
				</view>
				<view class="">
					<text class="fs-32 fw-600"
						style="color: #F75732; margin-right: 6rpx;">￥{{ item.price?item.price.toFixed(1):0 }}</text>
					<text v-if="item.priceOld" class="fs-20"
						style="text-decoration: line-through; color: #BABABA;">￥{{ Number(item.priceOld).toFixed(1) }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: {
			// indexID : {
			// 	type: String
			// },
			shopList: {
				type: Object,
				default: () => ({
					
				})
			}
		},
		methods: {
			gotoStore() {
				uni.navigateTo({
					url: '/pages/merchantsDoself/storeHome/store-home?id=' + this.shopList.id
				});
			}
		},
		mounted() {
			// this.initGoodsData();
			// console.log(this.shopList);
			
		}
	}
</script>

<style lang="scss" scoped>
	.flex {
		display: flex;
	}

	.flex-items-center {
		align-items: center;
	}

	.flex-justify-center {
		justify-content: space-between;
	}

	.fs-24 {
		font-size: 24rpx;
	}

	.fs-28 {
		font-size: 28rpx;
	}

	.fs-32 {
		font-size: 32rpx;
	}

	.fs-20 {
		font-size: 20rpx;
	}

	.fw-500 {
		font-weight: 500;
	}

	.fw-600 {
		font-weight: 600;
	}

	.c56575B {
		color: #56575B;
	}

	.recommend-module {
		background-color: #FFFFFF;
		border-radius: 22rpx;
		padding-top: 24rpx;
		padding-left: 24rpx;
		padding-right: 24rpx;
		padding-bottom: 18rpx;
		box-sizing: border-box;
	}

	.goods-info-fullreduce {
		flex-direction: row;
		height: 32rpx;
		line-height: 32rpx;
		border-radius: 8rpx;
		border: 0.6rpx solid rgba(247, 87, 50, 0.4);
		padding-top: 2rpx;
		padding-bottom: 2rpx;
		align-items: center;
	}

	.fullreduce-text {
		height: 28rpx;
		line-height: 28rpx;
		font-size: 20rpx;
		color: #F75732;
		// border-right: 1px solid #000000;
		padding-left: 14rpx;
		padding-right: 14rpx;
	}

	.fullreduce-textline {
		height: 18rpx;
		line-height: 18rpx;
		border-right: 2rpx solid rgba(247, 87, 50, 0.4);
	}

	.theLast {
		border-right: none !important;
	}
</style>




