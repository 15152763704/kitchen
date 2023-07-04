<template>
	<view class="my-collection">
		<view class="mc-item" v-for="(item,index) in myClist" :key="index + 1" @click="toStore(item)">
			<view class="flex flex-justify-center" style="margin-bottom: 28rpx;">
				<view class="flex">
					<image style="width: 114rpx; height: 114rpx; border-radius: 8rpx;"
						:src="item.shopImgUrl" mode="">
					</image>
					<view class="">
						<view class="fs-32 fw-500" style="margin-left: 10rpx;">{{ item.name }}</view>
						<view class="flex fs-20" style="margin-left: 12rpx; margin-bottom: 8rpx;">
							<view class="flex flex-items-center" style="margin-right: 28rpx;">
								<text class="">月售{{ item.monthSellNum?item.monthSellNum:0 }}</text>
							</view>
							<view class="flex flex-items-center" style="margin-right: 28rpx;">
								<text class="">起送￥{{ item.lowestMoney?item.lowestMoney:0 }}</text>
							</view>
							<!-- <view class="flex flex-items-center" style="margin-right: 28rpx;">
								<text class="">配送{{ item.monthSellNum?item.monthSellNum:0 }}</text>
							</view> -->
							<view class="flex flex-items-center">
								<text class="">{{ item.timeMinute?item.timeMinute:0 }}分钟</text>
							</view>
						</view>
						<view class="flex" style="margin-left: 10rpx;">
							<!-- <view class="goods-info-fullreduce fs-20" v-if="shopList.fllReduceArr.length > 0"> -->
							<view class="goods-info-fullreduce fs-20" v-if="item.fullReduce">
								<template v-for="(value,iindex) in item.fllReduceArr.slice(0, 3)">
									<text class="fullreduce-text">{{ value }}</text>
									<text class="fullreduce-textline"
										:class="{'theLast': iindex == item.fllReduceArr.slice(0, 3).length - 1}"></text>
								</template>
							</view>
						</view>
					</view>
				</view>
				<view class="fs-20" @click.stop="similarStore(item)">
					<text style="border: 1rpx solid #BABABA; border-radius: 10rpx; padding: 4rpx 8rpx;">相似商家</text>
				</view>
			</view>
			<view class="flex">
				<!-- 限制3张 -->
				<view class="" style="margin-right: 16rpx;" v-for="(val,idx) in item.foods" :key="index">
					<image style="width: 212rpx; height: 148rpx; border-radius: 10rpx;"
						:src="val.imageUrl" mode="">
					</image>
					<view class="fs-28"
						style="width: 190rpx; overflow:hidden; text-overflow:ellipsis; white-space: nowrap;">
						<text>{{ val.name }}</text>
					</view>
					<view class="">
						<text class="fs-32 fw-600" style="color: #F75732; margin-right: 6rpx;">￥{{ val.price }}</text>
						<!-- <text v-if="item.priceOld" class="fs-20" -->
						<text v-if="val.priceOld" class="fs-20" style="text-decoration: line-through; color: #BABABA;">￥{{ val.priceOld }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="isBottom">
			<text class="isBottom-leftLine"></text>
			<text v-if="myClist.length >= clistTotal" class="isBottom-text">已经到底啦</text>
			<text v-else class="isBottom-text">加载中...</text>
			<text class="isBottom-rightLine"></text>
		</view>
	</view>
</template>

<script>
	import shop from '@/api/shop/shop.js'
	// import * as util from '../../common/util.js'

	// var renderTime = util.renderTime;
	export default {
		components: {

		},
		data() {
			return {
				// fllReduceArr: ['满20减5', '满30减7', '满50减10'],
				listForm: {
					pageNum: 1, 
					pageSize: 10
				},
				myClist: [],
				clistTotal: 0
			}
		},
		onLoad: function(option) {
			this.findMyLikeShop()
		},
		methods: {
			toStore(item) {
				uni.navigateTo({
					url: '/pages/store/store?id=' + item.id
				})
			},
			// 相似商家
			similarStore(item) {
				uni.navigateTo({
					url: '/pages/myCollection/similar-shop?typeId=' + item.typeId + '&id=' + item.id + '&name=' + item.name + '&fullReduce=' + item.fullReduce + '&shopImgUrl=' + item.shopImgUrl
				})
			},
			// 我的收藏
			findMyLikeShop() {
				let pageNum = this.listForm.pageNum;
				let pageSize = this.listForm.pageSize;
				shop.findMyLikeShop(pageNum, pageSize).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.myClist = this.myClist.concat(res.data);
						this.clistTotal = res.total;
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
		onReachBottom() {
			// console.log('触底啦~')
			if (this.myClist.length >= this.clistTotal) return;
			this.listForm.pageNum++;
			this.findMyLikeShop();
		},
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {

		}
		// #endif
	}
</script>

<style lang="scss" scoped>
	.my-collection {
		padding: 12rpx 22rpx 0 22rpx;
		box-sizing: border-box;

		.mc-item {
			margin-top: 16rpx;
			background-color: #FFFFFF;
			border-radius: 28rpx;
			padding: 30rpx 18rpx 22rpx 20rpx;
			box-sizing: border-box;
		}
		
		.isBottom {
			position: relative;
			margin-top: 22rpx;
			margin-bottom: 22rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			.isBottom-text {
				font-size: 24rpx;
				color: rgb(186, 186, 186);
				text-align: center;
				margin: 0 20rpx;
			}
			.isBottom-leftLine {
				width: 160rpx;
				height: 4rpx;
				background: #e5e5e5;
			}
			
			.isBottom-rightLine {
				width: 160rpx;
				height: 4rpx;
				background: #e5e5e5;
			}
		}
	}

	// =====
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
		border: 0.6rpx solid rgba(247, 87, 50, 0.7764705882352941);
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
		border-right: 2rpx solid rgba(247, 87, 50, 0.7764705882352941);
	}

	.theLast {
		border-right: none !important;
	}
</style>
