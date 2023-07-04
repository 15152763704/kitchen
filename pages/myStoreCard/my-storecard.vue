<template>
	<view class="my-storecard">
		<view v-if="myStoreCardList.length" class="storecard-item" v-for="(item, index) in myStoreCardList" :key="index + 1">
			<!-- <view class="shopImg"> -->
				<image class="shopImg" :src="item.shopImg" mode=""></image>
			<!-- </view> -->
			<view class="storecardCont">
				<view class="info">
					<text>{{ item.shopName }}</text>
					<text>￥{{ item.leftMoney }}</text>
				</view>
				<view class="action">
					<view class="detail" @click="toDetails(item.id)">
						<text>明细</text>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more v-if="myStoreCardList.length" :status="status" :content-text="contentText" />
		<view v-if="!myStoreCardList.length" class="" style="display: flex; flex-direction: column; align-items: center; margin-top: 360rpx;">
			<image style="width: 96rpx;margin-bottom: 22rpx;" src="/static/none.png" mode="widthFix"></image>
			<text style="font-size: 24rpx; color: #56575B;">暂无可用储值卡～</text>
		</view>
	</view>
</template>

<script>
	import login from '@/api/login/login.js'
	export default {
		components: {
			
		},
		data() {
			return {
				myStoreCardList: [],
				listForm: {
					pageNum: 1, 
					pageSize: 10,
					total: 0
				},
				status: 'more',   // more loading noMore
				contentText: {
					contentdown: '--- 查看更多 ---',
					contentrefresh: '--- 加载中 ---',
					contentnomore: '--- 没有更多了 ---'
				},
			}
		},
		onLoad: function(option) {
			this.findStoreCardController();
		},
		onShow() {
			
		},
		methods: {
			// 我的储值卡
			findStoreCardController() {
				this.status = 'loading';
				let pageNum = this.listForm.pageNum;
				let pageSize = this.listForm.pageSize;
				login.findStoreCardController(uni.getStorageSync('userInfo_key').phonenumber, pageNum, pageSize).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res);
						this.myStoreCardList = res.rows;
						this.listForm.total = res.total;
						if (this.myStoreCardList.length >= this.listForm.total) {
							this.status = 'noMore';
						} else {
							this.status = 'more';
						}
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
			toDetails(id) {
				uni.navigateTo({
					url: '/pages/myStoreCard/storecard-detail?id=' + id
				})
			}
		},
		onReachBottom() {
			// console.log('触底啦~')
			if (this.myStoreCardList.length >= this.listForm.total) return;
			this.listForm.pageNum++;
			this.findStoreCardController();
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;
		}
	}
</script>
<style lang="scss" scoped>
	.my-storecard {
		padding: 4rpx 22rpx;
		box-sizing: border-box;
		.storecard-item {
			width: 100%;
			background-color: #FFFFFF;
			border-radius: 28rpx;
			position: relative;
			margin-top: 16rpx;
			// border-top: 0.6rpx solid #FFFFFF;
			box-sizing: border-box;
			padding-left: 18rpx;
			padding-right: 18rpx;
			padding-top: 18rpx;
			padding-bottom: 16rpx;
			position: relative;
			display: flex;
			align-items: center;
			.shopImg {
				// image {
					width: 96rpx; 
					height: 96rpx; 
					border-radius: 8rpx;
				// }
			}
			.storecardCont {
				width: 574rpx;
				padding: 0 20rpx;
				box-sizing: border-box;
				.info {
					width: 100%;
					display: flex;
					justify-content: space-between;
					font-size: 32rpx;
					font-weight: 500;
				}
				.action {
					display: flex;
					justify-content: flex-end;
					.detail {
						// text-align: right;
						margin-top: 12rpx;
						width: 120rpx;
						height: 48rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						text-align: center;
						// padding: 6rpx 22rpx 6rpx 24rpx;
						// padding: 0 44rpx;
						background: linear-gradient(90deg, #FF852B, #F75732);
						border-radius: 12rpx;
						
						text {
							font-size: 24rpx;
							color: #FFFFFF;
						}
					}
				}
			}
		}
	}
</style>

