<template>
	<view class="classify-bread">
		<view class="search-ct">
			<view class="search">
				<image src="/static/search.png" mode=""></image>
				<!-- <text>搜索</text> -->
				<uni-easyinput :focus="onFocus" :inputBorder="false" v-model="formData.name" placeholder="酸汤肥牛"
					@blur="searchBlur()" @confirm="searchConfirm()" />
			</view>
			<!-- <view class="tabs">
				<v-tabs ref="tabs" @change="changeTab" v-model="current" :fixed="false" :lineScale="0.2"
					lineHeight="4rpx" lineColor="#FEBD2C" :scroll="false" color="#535353" activeColor="#000000"
					fontSize="28rpx" :tabs="['综合', '新上新']"></v-tabs>
			</view> -->
		</view>
		<!-- 内容 -->
		<view class="container-tabs__list">
			<!-- <swiper class="container-tabs__swiper" :current="swiperCurrent" @change="animationFinished"> -->
			<scroll-view @scrolltolower="lower" scroll-y style="height: 100%">
				<view class="recipe-item" v-for="(v,i) in recipeList" :key="i" @click="toDetails(v)">
					<image v-if="v.type == 1"
						style="width: 76rpx; height: 28rpx; position: absolute; z-index: 9; top: 14rpx; left: 14rpx;"
						src="../../../static/rmcp_type_video.png" mode=""></image>
					<image v-else
						style="width: 76rpx; height: 28rpx; position: absolute; z-index: 9; top: 14rpx; left: 14rpx;"
						src="../../../static/rmcp_type_pt.png" mode=""></image>
					<image :src="v.headerUrl" mode=""></image>
					<view class="">
						<text class="name">{{ v.name }}</text>
					</view>
					<view class="" style="margin-left: 24rpx;">
						<image style="width: 26rpx; height: 26rpx; vertical-align: middle; margin-right: 8rpx;"
							src="../../../static/rmcp_eyes.png" mode=""></image>
						<text style="font-size: 28rpx;; color: #BABABA;">{{ v.seeNum }}人看过</text>
					</view>
				</view>
				<!-- <view v-if="!isLoading2" class="isBottom"> -->
				<view v-if="" class="isBottom">
					<text class="isBottom-leftLine"></text>
					<text v-if="recipeList.length >= recipeTotal" class="isBottom-text">已经到底啦</text>
					<text v-else class="isBottom-text">加载中...</text>
					<text class="isBottom-rightLine"></text>
				</view>
			</scroll-view>
			<!-- </swiper> -->
		</view>
	</view>
</template>
<script>
	import hotRecipes from '@/api/hotRecipes/hotRecipes.js';
	export default {
		data() {
			return {
				current: 0,
				// swiperCurrent: 0,
				recipeList: [],
				recipeTotal: null,
				// indexid: null,
				// dynamicTitle: '',
				formData: {
					name: '',
					foodTypeId: '',
					pageNum: 1,
					pageSize: 10
				},
				onFocus: false
			}
		},
		created() {

		},
		onLoad(option) {
			// this.indexid = option.id;
			// this.dynamicTitle = option.dynamicTitle;
			if (option.from == 'search') {
				this.onFocus = true;
			};
			if (option.foodTypeId) {
				this.formData.foodTypeId = option.foodTypeId;
			}
			uni.setNavigationBarTitle({
				title: option.dynamicTitle
			});
			this.getAllList();
		},
		onReady() {
			// let indexid = this.indexid;
			// let dynamicTitle = this.dynamicTitle;
			// switch (indexid) {
			// 	case '0':
			// 		this.dynamicTitle = '面包'
			// 		break;
			// 	case '1':
			// 		this.dynamicTitle = '甜点'
			// 		break;
			// 	case '2':
			// 		this.dynamicTitle = '中式面点'
			// 		break;
			// 	case '3':
			// 		this.dynamicTitle = '特色小吃'
			// 		break;
			// 	case '4':
			// 		this.dynamicTitle = '家常菜'
			// 		break;
			// 	case '5':
			// 		this.dynamicTitle = '蛋糕'
			// 		break;
			// 	case '6':
			// 		this.dynamicTitle = '饮品'
			// 		break;
			// 	default:
			// 		this.dynamicTitle = '宝宝辅食'
			// 		break;
			// }
		},
		methods: {
			// 滑动动画结束时会触发事件
			// animationFinished(e) {
			// 	this.current = e.detail.current
			// 	// this.swiperCurrent = e.detail.current
			// },
			// changeTab(index) {
			// 	// this.swiperCurrent = index
			// },
			toDetails(v) {
				uni.navigateTo({
					url: '/pages/hotRecipes/recipesDetails/recipes-details?id=' + v.id + '&name=' + v.name
				})
			},
			searchConfirm() {
				// console.log(this.formData.name)
			},
			searchBlur() {
				// console.log(this.formData.name)
				this.formData.pageNum = 1;
				this.getAllListForFilt();
			},
			getAllListForFilt() {
				let name = this.formData.name;
				let pageNum = this.formData.pageNum
				let pageSize = this.formData.pageSize;
				let foodTypeId = this.formData.foodTypeId;
				hotRecipes.getAllList(name, pageNum, pageSize, foodTypeId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.recipeList = res.rows;
						this.recipeTotal = res.total;
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
			getAllList() {
				let name = this.formData.name;
				let pageNum = this.formData.pageNum
				let pageSize = this.formData.pageSize;
				let foodTypeId = this.formData.foodTypeId;
				hotRecipes.getAllList(name, pageNum, pageSize, foodTypeId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.recipeList = this.recipeList.concat(res.rows);
						this.recipeTotal = res.total;
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
			lower() {
				if (this.recipeList.length >= this.recipeTotal) return;
				this.formData.pageNum++;
				this.getAllList();
			}
			// click() {
			// 	uni.showToast({
			// 		title: '我被点击了',
			// 		icon: 'none'
			// 	})
			// }
		},
		onReachBottom() {
			// console.log('触底啦~')
		},
	}
</script>

<style lang="scss" scoped>
	.classify-bread {
		background-color: #FFFFFF;
		border-top: 0.2rpx solid #FFFFFF;

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

		.search-ct {
			box-sizing: border-box;
			// padding: 0 22rpx;
			position: fixed;
			z-index: 99;
			background-color: #FFFFFF;

			.search {
				box-sizing: border-box;
				width: 706rpx;
				height: 72rpx;
				border-radius: 32rpx;
				font-size: 28rpx;
				color: #808080;
				display: flex;
				align-items: center;
				background-color: #F6F7F9;
				margin: 0 22rpx;

				image {
					width: 28rpx;
					height: 28rpx;
					margin-left: 20rpx;
					margin-right: 16rpx;
				}
			}
		}

		.tabs {
			// position: fixed;
			// /* #ifdef H5 */
			// top: 44px;
			// /* #endif */
			// /* #ifndef H5 */
			// top: 0;
			// /* #endif */
			// left: 0;
			// display: flex;
			// align-items: center;
			// width: 100%;
			// height: 100rpx;
			// box-sizing: border-box;
			// background-color: #fff;
			// box-shadow: 0px 0px 10rpx rgba(0, 0, 0, 0.1);
			// border-radius: 0px 0px 10rpx 10rpx;
			// z-index: 3;
			border-bottom: 0.6rpx solid #D6D6D6;
		}

		.container-tabs__list {
			height: calc(100vh - 76rpx);
			box-sizing: border-box;
			margin-top: 74rpx;
			padding-top: 18rpx;
			padding-left: 10rpx;

			// background-color: red;
			.container-tabs__swiper {
				height: 100%;
			}
		}

		.recipe-item {
			width: 358rpx;
			// height: 488rpx;
			margin-right: 8rpx;
			margin-bottom: 40rpx;
			display: inline-block;
			position: relative;

			image {
				width: 100%;
				height: 544rpx;
				border-radius: 14rpx;
			}

			.name {
				font-size: 32rpx;
				font-weight: 500;
				margin-left: 20rpx;
			}
		}

	}
</style>
