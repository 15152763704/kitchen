<template>
	<view class="hot-recipes">
		<view class="title">
			<view class="" style="margin-bottom: 56rpx; position: relative;">
				<!-- <image @click="toBack()"
					style="width: 17rpx; height: 30rpx; position: absolute; top: 12rpx; left: 30rpx;"
					src="../../static/rmcp_back.png" mode=""></image> -->
				<text>热门菜谱</text>
			</view>
			<!-- 搜索 -->
			<!-- <f-sticky :scrollTop="scrollTop" :offsetTop="offsetTop" :enable="enable" :zIndex="10"> -->
			<!-- <view v-if="scrollTop >= 110" class="" style="width: 750rpx; height: 60rpx; background-color: #F2F3F4;"></view> -->
			<!-- <view class="search-ct" style="" :class="scrollTop >= 110?'actived':''"> -->
			<view class="search-ct">
				<view class="search" @click="toMore('search')">
					<image src="/static/search.png" mode=""></image>
					<text>酸汤肥牛</text>
					<!-- <uni-easyinput :inputBorder="false" v-model="formData.searchValue" placeholder="酸汤肥牛" @blur="searchBlur()" @confirm="searchConfirm()"/> -->
				</view>
				<image @click="toMycollect" style="width: 60rpx; height: 50rpx;" src="../../static/rmcp_shoucan.png"
					mode=""></image>
			</view>
			<!-- </f-sticky>	 -->
		</view>
		<!-- 广告 -->
		<view class="guanggao">
			<!-- <image src="../../static/rmcp_guanggaotu.png" mode=""></image> -->
			<swiper v-if="!isLoading1" class="banner_swiper" :indicator-dots="indicatorDots"
				:indicator-color="indicatorColor" :indicator-active-color="indicatorActiveColor" :autoplay="autoplay"
				:interval="interval" :duration="duration" :circular="circular">
				<swiper-item v-for="(item,index) in bannerData" v-if="item.bannerType == 2 && item.status" :key="index"
					@click="toAdvert(item)">
					<view class="">
						<image style="width: 750rpx; height: 306rpx;" :src="item.imgUrl" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
			<image v-else style="width: 288rpx; margin-left: 231rpx" src="../../static/loading1.gif" mode="widthFix">
			</image>
		</view>
		<!-- 分类区 -->
		<view class="classification">
			<template v-for="(item,index) in classifyData">
				<view class="items" @click="gotoClassifyItem(item, index)" style="line-height: 32rpx;">
					<image style="width: 44rpx; height: 44rpx;" :src="item.imgUrl" mode=""></image>
					<view class="" style="    font-size: 12px;color: #2e2e2e;">
						<text>{{ item.typeName }}</text>
					</view>
				</view>
			</template>
		</view>
		<!-- 内容区 -->
		<view class="content-list" style="">
			<view class="tit">
				<text>人气菜谱</text>
			</view>
			<scroll-view :scroll-x="true" class="recipe-list" style="">
				<view class="recipe-item" v-for="(v,i) in hotRecipeList" :key="i" @click="toDetails(v)">
					<image v-if="v.type == 1"
						style="width: 76rpx; height: 28rpx; position: absolute; z-index: 9; top: 14rpx; left: 34rpx;"
						src="../../static/rmcp_type_video.png" mode=""></image>
					<image v-else
						style="width: 76rpx; height: 28rpx; position: absolute; z-index: 9; top: 14rpx; left: 34rpx;"
						src="../../static/rmcp_type_pt.png" mode=""></image>
					<image :src="v.headerUrl" mode="" style="max-height: 330rpx;max-width: 210rpx;"></image>
					<view class="video_text" >
						<text class="name">{{ v.name }}</text>
					</view>
					<view class="video_text" style="">
						<image style="width: 26rpx; height: 26rpx; vertical-align: middle; margin-right: 8rpx;"
							src="../../static/rmcp_eyes.png" mode=""></image>
						<text style="font-size: 28rpx;; color: #BABABA;">{{ v.seeNum }}人看过</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="content-list">
			<view class="tit">
				<text>最新菜谱</text>
			</view>
			<scroll-view :scroll-x="true" class="recipe-list" style="">
				<view class="recipe-item" v-for="(v,i) in newRecipeList" :key="i" @click="toDetails(v)">
					<image v-if="v.type == 1"
						style="width: 76rpx; height: 28rpx; position: absolute; z-index: 9; top: 14rpx; left: 34rpx;"
						src="../../static/rmcp_type_video.png" mode=""></image>
					<image v-else
						style="width: 76rpx; height: 28rpx; position: absolute; z-index: 9; top: 14rpx; left: 34rpx;"
						src="../../static/rmcp_type_pt.png" mode=""></image>
					<image :src="v.headerUrl" mode="" style="max-height: 330rpx;max-width: 210rpx;"></image>
					<view class="video_text">
						<text class="name">{{ v.name }}</text>
					</view>
					<view class="video_text" style="">
						<image style="width: 26rpx; height: 26rpx; vertical-align: middle; margin-right: 8rpx;"
							src="../../static/rmcp_eyes.png" mode=""></image>
						<text style="font-size: 28rpx;; color: #BABABA;">{{ v.seeNum }}人看过</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="content-list" style="">
			<view class="tit" style="display: flex; justify-content: space-between; align-items: center;">
				<text>全部菜谱</text>
				<text @click="toMore('more')"
					style="font-size: 24rpx; font-weight: 400; margin-right: 18rpx; color: #333333;">更多</text>
			</view>
			<scroll-view :scroll-x="true" class="recipe-list" style="">
				<view class="recipe-item" v-for="(v,i) in recipeList" :key="i" @click="toDetails(v)">
					<image v-if="v.type == 1"
						style="width: 76rpx; height: 28rpx; position: absolute; z-index: 9; top: 14rpx; left: 34rpx;"
						src="../../static/rmcp_type_video.png" mode=""></image>
					<image v-else
						style="width: 76rpx; height: 28rpx; position: absolute; z-index: 9; top: 14rpx; left: 34rpx;"
						src="../../static/rmcp_type_pt.png" mode=""></image>
					<image :src="v.headerUrl" mode="" style="max-height: 330rpx;max-width: 210rpx;"></image>
					<view class="video_text">
						<text class="name">{{ v.name }}</text>
					</view>
					<view class="video_text" style="">
						<image style="width: 26rpx; height: 26rpx; vertical-align: middle; margin-right: 8rpx;"
							src="../../static/rmcp_eyes.png" mode=""></image>
						<text style="font-size: 28rpx;; color: #BABABA;">{{ v.seeNum }}人看过</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view style="height: 120rpx;"></view>
		<!-- 底部导航 -->
		<foo-bar @toIndex="toIndex" :iidx="0"></foo-bar>
	</view>
</template>

<script>
	// import goodsList from '@/components/goodslist/goodslist.vue';
	import hotRecipes from '@/api/hotRecipes/hotRecipes.js';
	import fooBar from '@/components/fooBarFH/fooBar.vue'
	import * as util from '@/common/util.js'
	var returnIP = util.returnIP;
	export default {
		components: {
			// goodsList
			fooBar
		},
		data() {
			return {
				isLoading1: true,
				bannerData: [],
				indicatorDots: true,
				indicatorColor: '#ffffff',
				indicatorActiveColor: '#efeff4',
				autoplay: true,
				interval: 4000,
				duration: 1000, // app-nvue不支持
				circular: true,
				formData: {
					searchValue: ''
				},
				scrollTop: 0,
				enable: true, //是否吸顶
				offsetTop: '0',
				classifyData: [],
				recipeList: [],
				hotRecipeList: [],
				newRecipeList: [],
			}
		},
		onLoad(option) {
			this.getBannerList();
			this.getFoodMenuType();
			this.getAllList();
			this.getHotList();
			this.getNewList();
		},
		methods: {
			toIndex(index) {
				// index 当前页面的索引
				// this.index = index
				// console.log(index)
				switch (index) {
					case 0:
						break;
					case 1:
						uni.redirectTo({
							url: '/pages/hotRecipes/hotFoodTypeSelect'
						})
						break;
					default:
						uni.redirectTo({
							url: '/pages/hotRecipes/myCollection/my-collection'
						})
						break;
				}
			},
			toBack() {
				uni.navigateBack({
					delta: 1,
					// animationType: 'slide-out-bottom',
					// animationDuration: 200
				});
			},
			toDetails(v) {
				uni.navigateTo({
					url: '/pages/hotRecipes/recipesDetails/recipes-details?id=' + v.id + '&name=' + v.name
				})
			},
			gotoClassifyItem(item, index) {
				// switch (index){
				// 	case 0:
				// 		uni.navigateTo({
				// 			url: '/pages/hotRecipes/bread/bread'
				// 		})
				// 		break;
				// 	default:
				// 		break;
				// }
				uni.navigateTo({
					url: '/pages/hotRecipes/bread/bread?dynamicTitle=' + item.typeName + '&foodTypeId=' + item.typeId
				})
			},
			toMore(from) {
				uni.navigateTo({
					url: '/pages/hotRecipes/bread/bread?dynamicTitle=全部菜谱' + '&from=' + from
				})
			},
			toMycollect() {
				uni.navigateTo({
					url: '/pages/hotRecipes/myCollection/my-collection'
				})
			},
			// 获取广告轮播图
			getBannerList() {
				uni.request({
					url: returnIP() + 'kitchen/bannerInfo/list',

					success: (res) => {
						// console.log(res.data);
						if (res.data.code == 200) {
							this.isLoading1 = false;
							// console.log(res.data.rows);
							this.bannerData = res.data.rows
						} else {
							// uni.hideLoading();
							// console.log(res.msg);
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
						}
					}
				});
			},
			searchConfirm() {
				// console.log(this.formData.searchValue)
			},
			searchBlur() {
				console.log(this.formData.searchValue)
			},
			toAdvert(item) {
				// console.log(item.type)
				if (!uni.getStorageSync('token_key')) {
					uni.navigateTo({
						url: '/pages/login/login',
					});
					return;
				}
				// if (item.type == 1) {
				// 	uni.navigateTo({
				// 		url: '../../orderForm/redEnvelope/get-envelope'
				// 	})
				// }else {
				// 	uni.navigateTo({
				// 		url: '../../imageText/image-text?id=' + item.id
				// 	})
				// }
			},
			// 获取热门菜谱类别信息
			getFoodMenuType() {
				hotRecipes.getFoodMenuType().then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.classifyData = res.data;
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
			// 所有菜谱列表
			getAllList() {
				let name = '';
				let pageNum = 1;
				let pageSize = 5;
				let foodTypeId = '';
				hotRecipes.getAllList(name, pageNum, pageSize, foodTypeId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.recipeList = res.rows;
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
			// 人气菜谱
			getHotList() {
				hotRecipes.getHotList().then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.hotRecipeList = res.rows;
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
			// 最新菜谱
			getNewList() {
				hotRecipes.getNewList().then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.newRecipeList = res.rows;
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
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;

		},
	}
</script>

<style lang="scss" scoped>
	.hot-recipes {
		width: 750rpx;
		background-color: #FFFFFF;

		// height: 1600rpx;
		// border-top: 0.2rpx solid #FD8931;
		.title {
			.actived {
				border-radius: 0 !important;
			}

			width: 750rpx;
			height: 308rpx;
			font-size: 40rpx;
			font-weight: 500;
			// background: linear-gradient(to right, #FD8931 , #FD8931);
			background-image: url(../../static/rmcp_bcg.png);
			background-repeat: no-repeat;
			background-size: 100%;
			position: relative;
			text-align: center;
			padding-top: 102rpx;
			box-sizing: border-box;

			.search-ct {
				box-sizing: border-box;
				padding: 0 22rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.search {
					width: 632rpx;
					height: 72rpx;
					background-color: #FFFFFF;
					border-radius: 32rpx;
					box-sizing: border-box;
					padding: 16rpx 0;
					font-size: 28rpx;
					color: #808080;
					display: flex;
					align-items: center;

					image {
						width: 28rpx;
						height: 28rpx;
						margin-left: 20rpx;
						margin-right: 16rpx;
					}
				}
			}

		}

		.guanggao {
			width: 750rpx;
			height: 306rpx;

			image {
				width: 100%;
				height: 100%;
			}

			.banner_swiper {
				height: 306rpx;
			}
		}

		.classification {
			box-sizing: border-box;
			padding: 26rpx 30rpx 8rpx;
			// background: #FFFFFF;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.items {
				width: 25%;
				text-align: center;
				margin-bottom: 14rpx;
			}
		}

		.content-list {
			background-color: #FFFFFF;
			margin-top: 24rpx;

			.tit {
				box-sizing: border-box;
				padding-left: 40rpx;
				padding-bottom: 12rpx;
				font-size: 32rpx;
				font-weight: 600;
			}

			.recipe-list {
				box-sizing: border-box;
				padding-left: 22rpx;
				white-space: nowrap;

				.recipe-item {
					width: 240rpx;
					// height: 488rpx;
					margin-right: 24rpx;
					//margin-bottom: 60rpx;
					//padding-left: 20rpx;
					display: inline-block;
					position: relative;
					text-align: center;

					image {
						width: 100%;
						height: 488rpx;
						border-radius: 14rpx;
					}
					.video_text{
						text-align: left;
						padding-left: 30rpx;
					}
					.name {
						font-size: 28rpx;
						font-weight: 500;
					}
				}

			}
		}
	}
</style>
