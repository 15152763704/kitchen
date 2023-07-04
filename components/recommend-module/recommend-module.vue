<template>
	<view class="recommend-module" @click="gotoStore()">
		<view class="flex flex-justify-center" style="">
			<view class="flex">
				<image style="width: 100rpx; height: 100rpx; border-radius: 10rpx;" :src="shopList.shopImgUrl" mode="">
				</image>
				<view class="">
					<view class="fs-32 fw-500" style="margin-left: 24rpx; width: 400rpx; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; ">{{ shopList.name }}</view>
					<view class="flex fs-20" style="margin-left: 28rpx; margin-top: 20rpx; color: #333333;">
						<view class="flex flex-items-center" style="margin-right: 28rpx;">
							<image style="width: 16rpx; margin-right: 4rpx;"
								src="../../static/ms_star.png" mode="widthFix"></image>
							<text class="" style="color: #F79930;">{{ shopList.score? Number(shopList.score).toFixed(1) : '0.0'}}分</text>
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
				</view>
			</view>
			<view class="fs-28 fw-500">
				<text>进店</text>
				<image style="width: 10rpx; height: 18rpx; margin-left: 10rpx;" src="../../static/ms_right.png" mode="">
				</image>
			</view>
		</view>
		<view class="flex" style="margin: 20rpx 0; flex-wrap: wrap;">
			<!-- <view class="goods-info-fullreduce fs-20" v-if="shopList.fullReduce">
				<template v-for="(value,iindex) in shopList.fllReduceArr.slice(0, 3)">
					<text class="fullreduce-text">{{ value }}</text>
					<text class="fullreduce-textline"
						:class="{'theLast': iindex == shopList.fllReduceArr.slice(0, 3).length - 1}"></text>
				</template>
			</view> -->
			<view class="flex" v-if="shopList.fullReduce">
				<view class="fullreduce-item" v-for="(value,iindex) in shopList.fllReduceArr.slice(0, 4)">
					<text class="fullreduce-text">{{ value }}</text>
				</view>
			</view>
		</view>
		<view class="flex">
			<view class="" style="margin-right: 16rpx;" v-for="(item,index) in shopList.foods" :key="index">
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
						style="text-decoration: line-through; color: #BABABA;">￥{{ item.priceOld.toFixed(1) }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// goodsData: [],
				// fullreduceData: [
				// 	{
				// 		"fullreduce": "25减7 "
				// 	},
				// 	{
				// 		"fullreduce": "30减8 "
				// 	},
				// 	{
				// 		"fullreduce": "35减10"
				// 	}
				// ]
			}
		},
		props: {
			// indexID : {
			// 	type: String
			// },
			shopList: {
				type: Object,
				default: () => ({
					shopImgUrl: '/static/dpzy_goodsPIC3.png',
					name: '杏园茶坊',
					score: '4.6',
					monthSellNum: 88,
					perCapita: 88,
					foods: [
						{
							imageUrl: '/static/sjzz_goodsPic.png',
							name: "金秋蟹礼哈哈哈哈哈哈哈",
							price: 88,
							priceOld: 99
						},
						{
							imageUrl: '/static/sjzz_goodsPic.png',
							name: "金秋蟹礼哈哈哈哈哈哈哈",
							price: 88,
							priceOld: 99
						},
						{
							imageUrl: '/static/sjzz_goodsPic.png',
							name: "金秋蟹礼哈哈哈哈哈哈哈",
							price: 88,
							priceOld: 99
						}
					]
				})
			}
		},
		methods: {
			gotoStore() {
				uni.navigateTo({
					url: '/pages/store/store?id=' + this.shopList.id
				});
			}
			// initGoodsData() {
			// 	switch(this.indexID) {
			// 	     case '0':
			// 	        this.goodsData = [
			// 	        	{

			// 					name: "清蒸野生鳗鱼",
			// 					picUrl: "/static/dpzy_goodsPIC3.png",
			// 					newPrice: "￥68.8",
			// 					oldPrice: "￥88"
			// 				},
			// 				{

			// 					name: "清蒸野生鳗鱼",
			// 					picUrl: "/static/dpzy_goodsPIC3.png",
			// 					newPrice: "￥68.8",
			// 					oldPrice: "￥88"
			// 				},
			// 				{

			// 					name: "清蒸野生鳗鱼",
			// 					picUrl: "/static/dpzy_goodsPIC3.png",
			// 					newPrice: "￥68.8",
			// 					oldPrice: "￥88"
			// 				}
			// 	        ];
			// 	        break;
			// 	     case '1':
			// 	        this.goodsData = [
			// 	        	{

			// 	        		name: "宫保鸡丁",
			// 	        		picUrl: "/static/yzc_goodPic.png",
			// 	        		newPrice: "￥68.8",
			// 	        		oldPrice: "￥88"
			// 	        	},
			// 	        	{

			// 	        		name: "宫保鸡丁",
			// 	        		picUrl: "/static/yzc_goodPic.png",
			// 	        		newPrice: "￥68.8",
			// 	        		oldPrice: "￥88"
			// 	        	},
			// 	        	{

			// 	        		name: "宫保鸡丁",
			// 	        		picUrl: "/static/yzc_goodPic.png",
			// 	        		newPrice: "￥68.8",
			// 	        		oldPrice: "￥88"
			// 	        	}
			// 	        ]
			// 	        break;
			// 		case '2':
			// 		   this.goodsData = [
			// 			{

			// 				name: "清蒸野生鳗鱼",
			// 				picUrl: "/static/sszy_goodsPic.png",
			// 				newPrice: "￥68.8",
			// 				oldPrice: "￥88"
			// 			},
			// 			{

			// 				name: "清蒸野生鳗鱼",
			// 				picUrl: "/static/sszy_goodsPic.png",
			// 				newPrice: "￥68.8",
			// 				oldPrice: "￥88"
			// 			},
			// 			{

			// 				name: "清蒸野生鳗鱼",
			// 				picUrl: "/static/sszy_goodsPic.png",
			// 				newPrice: "￥68.8",
			// 				oldPrice: "￥88"
			// 			}
			// 		   ]
			// 		   break;
			// 		   case '6':
			// 		      this.goodsData = [
			// 		   	{

			// 		   		name: "金秋蟹礼哈哈哈哈哈哈哈",
			// 		   		picUrl: "/static/sjzz_goodsPic.png",
			// 		   		newPrice: "￥68.8",
			// 		   		oldPrice: "￥88"
			// 		   	},
			// 		   	{

			// 		   		name: "金秋蟹礼哈哈哈哈哈哈哈",
			// 		   		picUrl: "/static/sjzz_goodsPic.png",
			// 		   		newPrice: "￥68.8",
			// 		   		oldPrice: "￥88"
			// 		   	},
			// 		   	{

			// 		   		name: "金秋蟹礼哈哈哈哈哈哈哈",
			// 		   		picUrl: "/static/sjzz_goodsPic.png",
			// 		   		newPrice: "￥68.8",
			// 		   		oldPrice: "￥88"
			// 		   	}
			// 		      ]
			// 		      break;
			// 	     default:
			// 	        this.goodsData = []
			// 	} 
			// }
		},
		mounted() {
			// this.initGoodsData();
			// console.log(this.shopList)
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

	// .goods-info-fullreduce {
	// 	flex-direction: row;
	// 	height: 32rpx;
	// 	line-height: 32rpx;
	// 	border-radius: 8rpx;
	// 	border: 0.6rpx solid rgba(247, 87, 50, 0.4);
	// 	padding-top: 2rpx;
	// 	padding-bottom: 2rpx;
	// 	align-items: center;
	// }

	// .fullreduce-text {
	// 	height: 28rpx;
	// 	line-height: 28rpx;
	// 	font-size: 20rpx;
	// 	color: #F75732;
	// 	// border-right: 1px solid #000000;
	// 	padding-left: 14rpx;
	// 	padding-right: 14rpx;
	// }

	// .fullreduce-textline {
	// 	height: 18rpx;
	// 	line-height: 18rpx;
	// 	border-right: 2rpx solid rgba(247, 87, 50, 0.4);
	// }

	// .theLast {
	// 	border-right: none !important;
	// }
	.fullreduce-item {
		background: #FEF3F1;
		color: rgb(247, 87, 50);
		font-weight: 600;
		font-size: 24rpx;
		margin-right: 12rpx;
		padding: 8rpx 16rpx;
		box-sizing: border-box;
		border-radius: 8rpx;
	}
</style>
