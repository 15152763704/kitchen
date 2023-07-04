<template>
	<view class="similar-shop">
		<!-- 在这里写相似商家列表页面 -->
			<!-- 自家 -->
			<view class="goods-list" @click="gotoStore(listPortForm.shopId)">
				<!-- 商品图片 -->
				<view class="goods-pic" style="padding-bottom: 0;">
					<image style="width: 202rpx; height: 136rpx; border-radius: 10rpx;" :src="shopself.shopImgUrl" mode=""></image>
					<!-- <image style="width: 60rpx; height: 36rpx; position: absolute; top: 30rpx; right: -6rpx;" src="/static/youxuan.png" mode=""></image> -->
				</view>
				<!-- 商品信息 -->
				<view class="goods-info" style="display: flex; flex-direction: column; justify-content: space-around;">
					<!-- <view class=""> -->
						<!-- 商品isDicount name more-->
						<view class="goods-info-1">
							<view class="goods-info-isDandName">
								<!-- <image style="width: 60rpx; height: 30rpx; margin-right: 18rpx;" src="/static/youhui.png" mode=""></image> -->
								<text class="isDandName-text">{{ shopself.name }}</text>
							</view>
							<view class="goods-info-more">
								<!-- <image style="width: 4rpx; height: 24rpx;" src="/static/more.png" mode=""></image> -->
							</view>
						</view>
					<!-- </view> -->
					<!-- 满减信息 -->
					<view class="goods-info-4" style="margin: 0;">
						<view class="goods-info-fullreduce" v-if="shopself.fullReduceArr.length > 0">
							<template v-for="(value,iindex) in shopself.fullReduceArr.slice(0, 3)">
								<text class="fullreduce-text">{{ value }}</text>
								<text class="fullreduce-textline" :class="{'theLast': iindex == shopself.fullReduceArr.slice(0, 3).length - 1}"></text>
							</template>
						</view>
						<!-- <view class="goods-info-more">
							<image style="width: 13rpx; height: 7rpx;" src="/static/bottom.png" mode=""></image>
						</view> -->
					</view>
				</view>
			</view>
			<!-- 间隔 -->
			<view class="isMiddle">
				<text class="isMiddle-text">为您找到以下相似商家</text>
			</view>
			<view v-if="!shopList.length" class="" style="display: flex; flex-direction: column; align-items: center; margin-top: 240rpx;">
				<image style="width: 96rpx;margin-bottom: 22rpx;" src="../../static/none.png" mode="widthFix"></image>
				<text style="font-size: 24rpx; color: #56575B;">暂无相似商家～</text>
			</view>
			<!-- 相似 -->
			<view class="goods-list" v-for="(item,index) in shopList" :key="index" @click="gotoStore(item.id)">
				<!-- 商品图片 -->
				<view class="goods-pic">
					<image style="width: 202rpx; height: 136rpx; border-radius: 10rpx;" :src="item.shopImgUrl" mode=""></image>
					<!-- <image style="width: 60rpx; height: 36rpx; position: absolute; top: 30rpx; right: -6rpx;" src="/static/youxuan.png" mode=""></image> -->
				</view>
				<!-- 商品信息 -->
				<view class="goods-info">
					<!-- <view class=""> -->
						<!-- 商品isDicount name more-->
						<view class="goods-info-1">
							<view class="goods-info-isDandName">
								<!-- <image style="width: 60rpx; height: 30rpx; margin-right: 18rpx;" src="/static/youhui.png" mode=""></image> -->
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
								<text class="uts-cost">起送￥{{ item.lowestMoney?item.lowestMoney: 0 }}</text>
								<!-- <text class="dis-cost">配送约￥{{ item.endm }}</text> -->
							</view>
							<view class="goods-info-timeAndDis">
								<text class="res-time">{{ item.timeMinute? item.timeMinute: 0 }}分钟</text>
								<text class="res-distance">{{ (item.distance>1000)?((item.distance/1000).toFixed(1) + 'km'):(item.distance + 'm') }}</text>
							</view>
						</view>	
					<!-- </view> -->
					<!-- 满减信息 -->
					<view class="goods-info-4">
						<view class="goods-info-fullreduce" v-if="item.fullReduce">
							<template v-for="(value,iindex) in item.fllReduceArr.slice(0, 3)">
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
		
		
		
		
		
		<view v-if="shopList.length" class="isBottom">
			<text class="isBottom-leftLine"></text>
			<text v-if="shopList.length >= shopTotal" class="isBottom-text">已经到底啦</text>
			<text v-else class="isBottom-text">加载中...</text>
			<text class="isBottom-rightLine"></text>
		</view>
		<uni-popup ref="alertDialog" type="dialog" style="z-index: 9999">
			<uni-popup-dialog type="info" cancelText="关闭" confirmText="同意" title="" :content="returnMsg"
				@confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import shop from '@/api/shop/shop.js'; // 引入api
	
	export default {
	    components: {
	        // goodsList
	    },
		data() {
			return {
				shopList: [],
				shopTotal: null,
				listPortForm: {
					pageNum: 1,
					pageSize: 10,
					shopId: '',
					shopTypeId: '',
					latitude: 0,
					longitude: 0,
				},
				returnMsg: '',
				shopself: {
					shopImgUrl: '',
					fullReduceArr: '',
					name: ''
				}
			}
		},
		onLoad:function(option){//opthin为object类型，会序列化上页面传递的参数
			this.listPortForm.latitude = uni.getStorageSync('location_key').latitude;
			this.listPortForm.longitude = uni.getStorageSync('location_key').longitude;
			this.listPortForm.shopTypeId = option.typeId;
			this.listPortForm.shopId = option.id;
			this.shopself.shopImgUrl = option.shopImgUrl;
			this.shopself.fullReduceArr = option.fullReduce.split(';');
			this.shopself.name = option.name;
			this.findSimilarShops();
		},
		methods: {
			findSimilarShops() {
				let pageNum = this.listPortForm.pageNum;
				let pageSize = this.listPortForm.pageSize;
				let shopTypeId = this.listPortForm.shopTypeId;
				let latitude = this.listPortForm.latitude;
				let longitude = this.listPortForm.longitude;
				let shopId = this.listPortForm.shopId;
				shop.findSimilarShops(pageNum, pageSize, latitude, longitude, shopId, shopTypeId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.total)
						// console.log(res.rows)
						this.shopList = this.shopList.concat(res.rows);
						this.shopTotal = res.total;
						// console.log(this.shopList)
					} else if (res.code == 401) {
						this.returnMsg = res.msg + '，请重新登录';
						this.dialogToggle();
					} else {
						// uni.hideLoading();
						// console.log(res.msg)
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
					}
			
				}).catch(err => {
					// uni.hideLoading();
					uni.showToast({
						title: err.msg,
						icon: 'none'
					});
				});
			},

			dialogToggle() {
				this.$refs.alertDialog.open()
			},
			dialogConfirm() {
				uni.removeStorageSync('token_key');
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			dialogClose() {
				// console.log('点击关闭')
				uni.removeStorageSync('token_key');
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			gotoStore(id) {
				uni.navigateTo({
					url: "../store/store?id=" + id
				})
			}
		},
		onReachBottom() {
			// console.log('触底啦~')
			if (this.shopList.length >= this.shopTotal) return;
			this.listPortForm.pageNum++;
			this.findSimilarShops();
		},
	    onPageScroll(e) {
	    	this.scrollTop = e.scrollTop;
		
	    },
	}
</script>

<style lang="scss" scoped>
	.similar-shop {
		width: 750rpx;
		// height: 1600rpx;
		// border-top: 0.2rpx solid #8EC95A;
		.isBottom {
			position: relative;
			// margin-top: 22rpx;
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
		.isMiddle {
			text-align: center;
			margin-bottom: 16rpx;
			.isMiddle-text {
				font-size: 20rpx;
				color: #808080;
				text-align: center;
			}
		}
		.flex {
			display: flex;
		}
		.fs-20 {
			font-size: 20rpx;
		}
		.goods-list {
			/* height: 242rpx; */
			margin-bottom: 14rpx;
			background-color: #FFFFFF;
			// border-radius: 24rpx;
			flex-direction: row;
			display: flex;
		}
		.goods-pic {
			width: 220rpx;
			// height: 242rpx;
			padding-left: 18rpx;
			padding-top: 20rpx;
			padding-bottom: 20rpx;
			box-sizing: border-box;
			position: relative;
		}
		.goods-info {
			width: 486rpx;
			/* height: 242rpx; */
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
			font-size: 28rpx;
			color: #000000;
			font-weight: 500;
			height: 44rpx;
		}
		/* --- padding-top padding-bottom ---- */
		.goods-info-2 {
			display: flex;
			padding-left: 2rpx;
			padding-top: 10rpx;
			padding-bottom: 12rpx;
			flex-direction: row;
			align-items: center;    
		}
		.score-text {
			height: 34rpx;
			line-height: 34rpx;
			font-size: 24rpx;
			font-weight: 500;
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
			/* position: absolute; */
			/* bottom: 20rpx; */
			margin-top: 18rpx;
			margin-bottom: 24rpx;
			align-items: center;
			justify-content: space-between;
		}
		.goods-info-fullreduce {
			display: flex;
			flex-direction: row;
			height: 32rpx;
			/* line-height: 32rpx; */
			border-radius: 4rpx;
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
			border-right: none!important;
		}
	}
</style>
