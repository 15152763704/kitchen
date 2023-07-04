<template name="goodslist">
	<view class="">
		<view class="goods-list" v-for="(item,index) in shopList" :key="index" @click="gotoStore(item)">
			<!-- 商品图片 -->
			<view class="goods-pic">
				<image style="width: 202rpx; height: 202rpx; border-radius: 10rpx;" :src="item.shopImgUrl" mode=""></image>
				<!-- <image style="width: 60rpx; height: 36rpx; position: absolute; top: 30rpx; right: -6rpx;" src="/static/youxuan.png" mode=""></image> -->
			</view>
			<!-- 商品信息 -->
			<view class="goods-info">
				<!-- <view class=""> -->
					<!-- 商品isDicount name more-->
					<view class="goods-info-1">
						<view class="goods-info-isDandName">
							<image style="width: 60rpx; height: 30rpx; margin-right: 18rpx;" src="/static/youhui.png" mode=""></image>
							<text class="isDandName-text">{{ item.name }}</text>
						</view>
						<view class="goods-info-more">
							<!-- <image style="width: 4rpx; height: 24rpx;" src="/static/more.png" mode=""></image> -->
						</view>
					</view>
					<!-- 评分 月售量 -->
					<view class="goods-info-2">
						<text class="score-text">{{ item.score?Number(item.score).toFixed(1): '0.0' }}分</text>
						<text class="monthSale-text">月售{{ item.monthSellNum?item.monthSellNum: 0 }}</text>
						<text class="perConsumption-text">人均￥{{ item.perCapita?Number(item.perCapita).toFixed(0): 0 }}</text>
					</view>
					<!-- 起送、配送费 -->
					<view class="goods-info-3">
						<view class="goods-info-cost">
							<text class="uts-cost">起送￥{{ item.lowestMoney?item.lowestMoney: 0 }}元</text>
							<text class="dis-cost" style="margin-right: 0;">配送￥{{ item.takeOutMoney?item.takeOutMoney: 0 }}元</text>
						</view>
						<view class="goods-info-timeAndDis">
							<text class="res-time" style="margin-left: 0;">{{ item.timeMinute? item.timeMinute: 0 }}分钟</text>
							<!-- <text class="res-distance">{{ item.distance? (item.distance/1000).toFixed(1): 0 }}km</text> -->
							<text class="res-distance">{{ (item.distance>1000)?((item.distance/1000).toFixed(1) + 'km'):(item.distance + 'm') }}</text>
						</view>
					</view>	
				<!-- </view> -->
				<!-- 满减信息 -->
				<view class="goods-info-4">
					<view class="goods-info-fullreduce" v-if="item.fullReduce">
						<template v-for="(value,iindex) of item.fllReduceArr.slice(0, 3)">
							<text class="fullreduce-text">{{ value }}</text>
							<text class="fullreduce-textline" :class="{'theLast': iindex == item.fllReduceArr.slice(0, 3).length - 1}"></text>
						</template>
					</view>
					<!-- <view class="goods-info-more">
						<image style="width: 13rpx; height: 7rpx;" src="/static/bottom.png" mode=""></image>
					</view> -->
				</view>
			</view>
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
		// fullreduceData: [
		// 	{
		// 		"fullreduce": "25减7"
		// 	},
		// 	{
		// 		"fullreduce": "30减8"
		// 	},
		// 	{
		// 		"fullreduce": "35减10"
		// 	}
		// ],
		cShopList: []
    }
  },
  methods: {
        gotoStore(item) {
			if(!uni.getStorageSync('token_key')) {				uni.navigateTo({					url: '/pages/login/login',				});				return;			}
			uni.navigateTo({
				url: '/pages/store/store?id=' + item.id,
				animationDuration: 0
			});
		},
		getShopList() {
			// 有问题,需改成watch
			// this.cShopList = this.shopList;
		}
  },
  mounted() {
  	// this.getShopList()
  }
}
</script>

<style>
	.goods-list {
		/* height: 242rpx; */
		margin-bottom: 14rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		flex-direction: row;
		display: flex;
	}
	.goods-pic {
		width: 220rpx;
		height: 242rpx;
		padding-left: 18rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		box-sizing: border-box;
		position: relative;
	}
	.goods-info {
		width: 486rpx;
		height: 242rpx;
		/* background-color: #4CD964; */
		padding-left: 28rpx;
		padding-right: 20rpx;
		padding-top: 16rpx;
		padding-bottom: 20rpx;
		position: relative;
		box-sizing: border-box;
		/* justify-content: space-between; */
	}
	.goods-info-1 {
		display: flex;
		flex-direction: row;
		padding-right: 8rpx;
		align-items: center;
		justify-content: space-between;
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
		width: 300rpx;
		/* #ifndef H5 */
		lines: 1;
		text-overflow: ellipsis;
		/* #endif */
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	/* --- padding-top padding-bottom ---- */
	.goods-info-2 {
		display: flex;
		padding-left: 2rpx;
		padding-top: 6rpx;
		padding-bottom: 10rpx;
		flex-direction: row;
		align-items: center;    
	}
	.score-text {
		height: 34rpx;
		line-height: 34rpx;
		font-size: 24rpx;
		font-weight: 600;
		color: #F75732;
	}
	.monthSale-text {
		height: 28rpx;
		line-height: 28rpx;
		font-size: 20rpx;
		color: #808080;
		padding-left: 16rpx;
		padding-right: 24rpx;
	}
	.perConsumption-text {
		height: 28rpx;
		line-height: 28rpx;
		font-size: 20rpx;
		color: #808080;
	}
	.goods-info-3 {
		display: flex;
		padding-left: 2rpx;
		flex-direction: row;
		justify-content: space-between;
	}
	.goods-info-cost {
		display: flex;
		flex-direction: row;
	}
	.uts-cost, .dis-cost {
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
	.res-time, .res-distance {
		height: 28rpx;
		line-height: 28rpx;
		font-size: 20rpx;
		color: #808080;
		margin-left: 16rpx;
	}
	.goods-info-4 {
		display: flex;
		width: 438rpx;
		flex-direction: row;
		/* margin-top: 56rpx; */
		position: absolute;
		bottom: 30rpx;
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
		border-right: none!important;
	}
	.goods-info-more {
		
		
	}
	
</style>
