<template>
	<view class="mine-container">
		<view class="">
			<view class="header">
				<view class="personal-info">
					<view class="avtor-img-wrap">
						<image class="avtor-img" :src="userInfo.avatar?userInfo.avatar:'/static/danxiaochu.png'" mode=""></image>
					</view>
					<view class="data-show">
						<view class="data-item">
							<text class="di-label">获赞</text>
							<view class="">
								<text class="di-num">{{statisticsNum.supportNum}}</text>
							</view>
						</view>
						<view class="data-item">
							<text class="di-label">关注</text>
							<view class="">
								<text class="di-num">{{statisticsNum.myFollowerCount}}</text>
							</view>
						</view>
						<view class="data-item">
							<text class="di-label">粉丝</text>
							<view class="">
								<text class="di-num">{{statisticsNum.followedMeCount}}</text>
							</view>
						</view>
					</view>
					<view class="avtor-name">
						<text>{{ userInfo.nickName }}</text>
					</view>
				</view>
			</view>
			<view class="tabs">
				<v-tabs ref="tabs" @change="changeTab" v-model="current" :fixed="false" :lineScale="0.6"
					lineHeight="4rpx" lineColor="#535353" :scroll="false" color="#535353" activeColor="#000000"
					fontSize="28rpx" bgColor='' :tabs="['作品', '点赞', '收藏']"></v-tabs>
			</view>
			<view class="container-tabs__list">
				<swiper class="container-tabs__swiper" :current="swiperCurrent" @change="animationFinished">
					<!--  -->
					<swiper-item class="swiper-item">
						<scroll-view scroll-y style="height: 100%" @scrolltolower="scrolltolower(1)">
							<view class="" class="works-item-view">
								<view class="works-item" v-for="(item,index) in myReleaseVideoData" @click="gotoVideoPage(item, index, 1)">
									<image class="works-item-img" :src="item.videoCutImageUrl" mode=""></image>
								</view>
							</view>
						</scroll-view>
					</swiper-item>
					<!--  -->
					<swiper-item class="swiper-item" style="">
						<scroll-view scroll-y style="height: 100%" @scrolltolower="scrolltolower(2)">
							<view class="" class="works-item-view">
								<view class="works-item" v-for="(item,index) in mySupportVideoData" @click="gotoVideoPage(item, index, 2)">
									<image class="works-item-img" :src="item.videoCutImageUrl" mode=""></image>
								</view>
							</view>
						</scroll-view>
					</swiper-item>
					<!--  -->
					<swiper-item class="swiper-item">
						<scroll-view scroll-y style="height: 100%" @scrolltolower="scrolltolower(3)">
							<view class="" class="works-item-view">
								<view class="works-item" v-for="(item,index) in myLikeVideoData" @click="gotoVideoPage(item, index, 3)">
									<image class="works-item-img" :src="item.videoCutImageUrl" mode="" ></image>
								</view>
							</view>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
			<!--  -->
			<!-- <view class="content">
				
			</view> -->
		</view>
	</view>
</template>

<script>
	import showCooking from '@/api/showCooking/showCooking.js';
	
	export default {
		data() {
			return {
				userInfo: uni.getStorageSync('userInfo_key'),
				current: 0,
				swiperCurrent: 0,
				/* 顶部统计数据 */
				statisticsNum:{
					supportNum: 0,
					followedMeCount: 0,
					myFollowerCount: 0,
				},
				/* 我发布的视频列表请求参数 */
				myReleaseVideoQueryParams:{
					pageSize: 9,
					pageNum: 1,
				},
				myReleaseVideoData:[],
				myReleaseVideoDataTotal: null,
				/* 我发布的视频列表请求参数 */
				mySupportVideoQueryParams:{
					pageSize: 9,
					pageNum: 1,
				},
				mySupportVideoData:[],
				mySupportVideoDataTotal: null,
				/* 我收藏的视频列表请求参数 */
				myLikeVideoQueryParams:{
					pageSize: 9,
					pageNum: 1,
				},
				myLikeVideoData:[],
				myLikeVideoDataTotal: null
				
				
			}
		},
		onLoad() {
			this.initCount()
			this.initMyReleaseVideoList()
			this.initMySupportVideoList()
			this.initMyLikeVideoList()
		},
		methods: {
			/* 跳转视频详情页面 */
			gotoVideoPage(item, index, type) {
				let _this = this;
				// type: 1作品 2点赞 3收藏
				// pageNum='+ this.queryParams.pageNum + '&index=' + index + '&pageSize=' + this.queryParams.pageSize
				switch (type){
					case 1:
						// console.log('作品')
						uni.navigateTo({
							url: '../../../videoPage/video-page?pageNum='+ _this.myReleaseVideoQueryParams.pageNum + '&index=' + index + '&pageSize=' + _this.myReleaseVideoQueryParams.pageSize + '&type=1'
						})
						break;
					case 2:
						// console.log('点赞')
						uni.navigateTo({
							url: '../../../videoPage/video-page?pageNum='+ _this.mySupportVideoQueryParams.pageNum + '&index=' + index + '&pageSize=' + _this.mySupportVideoQueryParams.pageSize + '&type=2'
						})
						break;
					default:
						// console.log('收藏')
						uni.navigateTo({
							url: '../../../videoPage/video-page?pageNum='+ _this.myLikeVideoQueryParams.pageNum + '&index=' + index + '&pageSize=' + _this.myLikeVideoQueryParams.pageSize + '&type=3'
						})
						break;
				}
				
			},
			/* 查询我收藏的作品列表 */
			initMyLikeVideoList(){
				showCooking.myLikeVideoList(this.myLikeVideoQueryParams).then((res)=>{
					// console.log(res)
					this.myLikeVideoData = this.myLikeVideoData.concat(res.rows);
					this.myLikeVideoDataTotal = res.total
				})
			},
			/* 查询我点赞的作品列表 */
			initMySupportVideoList(){
				showCooking.mySupportVideoList(this.mySupportVideoQueryParams).then((res)=>{
					this.mySupportVideoData = this.mySupportVideoData.concat(res.rows);
					this.mySupportVideoDataTotal = res.total
				})
			},
			/* 查询我发布的作品列表 */
			initMyReleaseVideoList(){
				showCooking.myReleaseVideoList(this.myReleaseVideoQueryParams).then((res)=>{
					this.myReleaseVideoData = this.myReleaseVideoData.concat(res.rows);
					this.myReleaseVideoDataTotal = res.total
				})
			},
			/* 初始化统计数据 */
			initCount(){
				showCooking.findFollowedMeCountAndMyFollowerCount().then((res)=>{
					this.statisticsNum.followedMeCount = res.data.followedMeCount
					this.statisticsNum.myFollowerCount = res.data.myFollowerCount
				});
				showCooking.findMyReceiveSupportNum().then((res)=>{
					this.statisticsNum.supportNum = res.data
				})
			},
			changeTab(index) {
				this.swiperCurrent = index
				// console.log(index)
			},
			animationFinished(e) {
				this.current = e.detail.current
				this.swiperCurrent = e.detail.current
			},
			scrolltolower(type) {
				// console.log('触底了~')
				switch (type){
					case 1:
						if (this.myReleaseVideoData.length >= this.myReleaseVideoDataTotal) return;
						this.myReleaseVideoQueryParams.pageNum++;
						this.initMyReleaseVideoList();
						break;
					case 2:
						if (this.mySupportVideoData.length >= this.mySupportVideoDataTotal) return;
						this.mySupportVideoQueryParams.pageNum++;
						this.initMySupportVideoList();
						break;
					default:
						if (this.myLikeVideoData.length >= this.myLikeVideoDataTotal) return;
						this.myLikeVideoQueryParams.pageNum++;
						this.initMyLikeVideoList();
						break;
				}
			}
		},
		onShow() {
			
		}
	}
</script>

<style scoped>
	.mine-container {
		width: 750rpx;
		/* height: 2000rpx; */
		background-color: #F5F6F7;
		position: relative;
	}

	.header {
		width: 750rpx;
		height: 400rpx;
		position: relative;
		/* padding-top: 130rpx; */
		/* box-sizing: border-box; */
		/* position: sticky; */
		background-color: #FFFFFF;
		background-image: linear-gradient(to bottom, #FFBF31, #FEFDFA);
		/* z-index: 99999; */
	}

	.personal-info {
		width: 750rpx;
		height: 200rpx;
		background-color: #FFFFFF;
		border-radius: 30rpx 30rpx 0 0;
		position: relative;
		bottom: -200rpx;
	}

	.avtor-img-wrap {
		width: 140rpx;
		height: 140rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: -40rpx;
		left: 30rpx;
		border-radius: 160rpx;
	}

	.avtor-img {
		width: 130rpx;
		height: 130rpx;
		border-radius: 140rpx;
	}

	.data-show {
		display: flex;
		justify-content: flex-end;
		width: 750rpx;
		padding-right: 40rpx;
		box-sizing: border-box;
	}

	.data-item {
		width: 160rpx;
		text-align: center;
	}

	.di-label {
		color: #333333;
		font-size: 24rpx;
	}

	.di-num {
		font-size: 32rpx;
		font-weight: 500;
	}

	.avtor-name {
		font-size: 40rpx;
		font-weight: 500;
		margin-left: 40rpx;
		margin-top: 30rpx;
	}
	
	.container-tabs__list {
		height: calc(100vh - 470rpx);
		box-sizing: border-box;
		background: #FFFFFF;
		/* margin-top: 52rpx; */
		padding: 16rpx 0 16rpx 16rpx;
	}
	
	.container-tabs__swiper {
		height: 100%;
	}
	
	.works-item-view {
		display: flex;
		flex-wrap: wrap;
		/* justify-content: space-around; */
	}
	
	.works-item {
		width: 236rpx;
		height: 300rpx;
		margin-right: 6rpx;
		margin-bottom: 12rpx;
	}
	
	.works-item-img {
		width: 100%;
		height: 100%;
	}
</style>
