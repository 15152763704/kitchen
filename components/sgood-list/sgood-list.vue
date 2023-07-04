<template name="goodslist">
	<view class="">
		<view class="goods-list" v-for="(item,index) in shopList" :key="index" @click="gotoStore(item)">
			<view class="listTop">
				<!-- 商品图片 -->
				<view class="goods-pic">
					<image style="width: 130rpx; height: 130rpx; border-radius: 10rpx;" :src="item.shopImgUrl" mode="">
					</image>
					<!-- <image style="width: 60rpx; height: 36rpx; position: absolute; top: 30rpx; right: -6rpx;"
						src="/static/youxuan.png" mode=""></image> -->
				</view>
				<!-- 商品信息 -->
				<view class="goods-info">
					<!-- <view class=""> -->
					<!-- 商品isDicount name more-->
					<view class="goods-info-1">
						<view class="goods-info-isDandName">
							<!-- <image style="width: 60rpx; height: 30rpx; margin-right: 18rpx;" src="/static/youhui.png"
								mode=""></image> -->
							<text class="isDandName-text">{{ item.name }}</text>
						</view>
						<!-- <view class="goods-info-more">
							<image style="width: 4rpx; height: 24rpx;" src="/static/more.png" mode=""></image>
						</view> -->
					</view>
					<!-- 评分 月售量 -->
					<view class="goods-info-2">
						<text class="score-text">{{ item.score?Number(item.score).toFixed(1): '0.0' }}分</text>
						<text class="monthSale-text">月售{{ item.monthSellNum?item.monthSellNum:0 }}</text>
						<text class="perConsumption-text">人均￥{{ item.perCapita?Number(item.perCapita).toFixed(0): 0 }}</text>
					</view>
					<!-- 起送、配送费 -->
					<view class="goods-info-3">
						<view class="goods-info-cost">
							<text class="uts-cost">起送￥{{ item.lowestMoney }}元</text>
							<text class="dis-cost" style="margin-right: 0;">配送￥{{ item.takeOutMoney?item.takeOutMoney: 0 }}元</text>
						</view>
						<view class="goods-info-timeAndDis">
							<text class="res-time" style="margin-left: 0;">{{ item.timeMinute? item.timeMinute: 0 }}分钟</text>
							<text class="res-distance">{{ (item.distance>1000)?((item.distance/1000).toFixed(1) + 'km'):(item.distance + 'm') }}</text>
						</view>
					</view>
					<!-- </view> -->
					<!-- 满减信息 -->
					<view class="goods-info-4">
						<view class="goods-info-fullreduce" v-if="item.fullReduce">
							<template v-for="(value,iindex) in item.fllReduceArr.slice(0, 3)">
								<text class="fullreduce-text">{{ value }}</text>
								<text class="fullreduce-textline"
									:class="{'theLast': iindex == item.fllReduceArr.slice(0, 3).length - 1}"></text>
							</template>
						</view>
						<!-- <view class="goods-info-more">
							<image style="width: 13rpx; height: 7rpx;" src="/static/bottom.png" mode=""></image>
						</view> -->
					</view>
				</view>
			</view>
			<!-- 商品图片 -->
			<scroll-view class="listBottom" :scroll-x="true" style="">
				<view class="flex">
					<view class="" style="margin-right: 6rpx; position: relative;" v-for="(v,index) in item.foods"
						:key="index">
						<!-- <image style="width: 44rpx; height: 20rpx; position: absolute; z-index: 9;"
							src="../../static/td_rexiao.png" mode=""></image> -->
							<view v-if="v.priceOld" class="" style="font-size: 16rpx; font-weight: 500; color: #FFFFFF; text-align: center; width: 50rpx; height: 24rpx; line-height: 24rpx; position: absolute; z-index: 9; border-radius: 10rpx 0 10rpx 0; background: rgba(247, 87, 50, 0.9);">
								<!-- <text style="font-size: 14rpx; color: #000000;">7.5折</text> -->
								{{ (v.price * 10 / v.priceOld).toFixed(1) }}折
							</view>
						<image style="width: 148rpx; height: 114rpx; border-radius: 10rpx;" :src="v.imageUrl" mode="">
						</image>
						<view class="fs-20"
							style="width: 120rpx; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
							{{ v.name }}</view>
						<view class="" style="color: #F75732; font-size: 32rpx; font-weight: 600;">
							<text style="font-size: 20rpx;">￥</text>
							<text style="">{{ v.price.toFixed(1) }}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'goodslist',
		props: {
			shopList: {
				type: Array,
				default(){
					return []
				}
			},
		},
		data() {
			return {
				
			}
		},
		methods: {
			gotoStore(item) {
				// console.log(this.indexID)
				// if(this.indexID == 6) {
				// 	uni.navigateTo({
				// 		url: '/pages/merchantsDoself/storeHome/store-home'
				// 	});
				// }else {
					uni.navigateTo({
						url: '/pages/store/store?id=' + item.id
					});
				// }
				
				// item.id
			}
		},
		mounted() {
			// this.initGoodsData();
		}
	}
</script>

<style scoped lang="scss">
	.flex {
		display: flex;
	}

	.fs-20 {
		font-size: 20rpx;
	}

	.goods-list {
		box-sizing: border-box;
		padding-top: 18rpx;
		padding-bottom: 16rpx;
		padding-left: 22rpx;
		padding-right: 24rpx;
		margin-bottom: 16rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		.listTop {
			/* height: 242rpx; */
			display: flex;
			flex-direction: row;
			display: flex;
		}
		.listBottom {
			padding-left: 152rpx;
			box-sizing: border-box;
			margin-top: 18rpx;
		}
	}

	.goods-pic {
		/* width: 220rpx; */
		/* height: 242rpx; */
		/* padding-left: 18rpx; */
		/* padding-top: 20rpx; */
		/* padding-bottom: 20rpx; */
		box-sizing: border-box;
		position: relative;
		margin-right: 22rpx;
		margin-top: 8rpx;
	}

	.goods-info {
		width: 100%;
		/* height: 242rpx; */
		/* background-color: #4CD964; */
		/* padding-left: 28rpx; */
		/* padding-right: 20rpx; */
		/* padding-top: 16rpx; */
		/* padding-bottom: 20rpx; */
		position: relative;
		box-sizing: border-box;
		/* justify-content: space-between; */
	}

	.goods-info-1 {
		display: flex;
		flex-direction: row;
		/* padding-right: 8rpx; */
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10rpx;
	}

	.goods-info-isDandName {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.isDandName-text {
		font-size: 32rpx;
		color: #000000;
		font-weight: 600;
		height: 44rpx;
	}

	/* --- padding-top padding-bottom ---- */
	.goods-info-2 {
		display: flex;
		/* padding-left: 2rpx; */
		/* padding-top: 6rpx; */
		/* padding-bottom: 10rpx; */
		flex-direction: row;
		align-items: center;
	}

	.score-text {
		/* height: 34rpx; */
		/* line-height: 34rpx; */
		font-size: 24rpx;
		font-weight: 600;
		color: #F75732;
		margin-left: 2rpx;
		margin-right: 16rpx;
	}

	.monthSale-text {
		/* height: 28rpx; */
		/* line-height: 28rpx; */
		font-size: 20rpx;
		color: #808080;
		margin-right: 24rpx;
		/* padding-left: 16rpx; */
		/* padding-right: 24rpx; */
	}

	.perConsumption-text {
		/* height: 28rpx; */
		/* line-height: 28rpx; */
		font-size: 20rpx;
		color: #808080;
	}

	.goods-info-3 {
		display: flex;
		/* padding-left: 2rpx; */
		flex-direction: row;
		justify-content: space-between;
		margin-top: 8rpx;
		margin-bottom: 6rpx;
	}

	.goods-info-cost {
		display: flex;
		flex-direction: row;
	}

	.uts-cost,
	.dis-cost {
		height: 28rpx;
		line-height: 28rpx;
		font-size: 20rpx;
		color: #808080;
		margin-right: 16rpx;
	}

	.goods-info-timeAndDis {
		display: flex;
		flex-direction: row;
	}

	.res-time,
	.res-distance {
		height: 28rpx;
		line-height: 28rpx;
		font-size: 20rpx;
		color: #808080;
		margin-left: 16rpx;
	}

	.goods-info-4 {
		display: flex;
		/* width: 438rpx; */
		flex-direction: row;
		/* margin-top: 56rpx; */
		/* position: absolute; */
		/* bottom: 20rpx; */
		margin-top: 20rpx;
		/* margin-bottom: 34rpx; */
		align-items: center;
		justify-content: space-between;
	}

	.goods-info-fullreduce {
		display: flex;
		flex-direction: row;
		height: 32rpx;
		/* line-height: 32rpx; */
		border-radius: 8rpx;
		border: 0.6rpx solid rgba(247, 87, 50, 0.4);
		padding-top: 2rpx;
		padding-bottom: 2rpx;
		align-items: center;
		box-sizing: border-box;
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
		border-right: 0.6rpx solid rgba(247, 87, 50, 0.4);
	}

	.theLast {
		border-right: none !important;
	}

	.goods-info-more {
		margin-right: 10rpx;
	}
</style>
