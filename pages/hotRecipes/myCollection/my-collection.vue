<template>
	<view class="classify-bread">
		<view class="search-ct">
			<view class="search">
				<image src="/static/search.png" mode=""></image>
				<!-- <text>搜索</text> -->
				<uni-easyinput :inputBorder="false" v-model="formData.name" placeholder="酸汤肥牛" @blur="searchBlur()" />
			</view>
		</view>
		<!-- 内容 -->
		<view class="container-tabs__list">
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
						<text style="font-size: 28rpx; color: #BABABA;">{{ v.seeNum }}人看过</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<foo-bar @toIndex="toIndex" :iidx="2"></foo-bar>
	</view>
</template>

<script>
	import hotRecipes from '@/api/hotRecipes/hotRecipes.js';
	import fooBar from '@/components/fooBarFH/fooBar.vue'
	export default {
		components: {
			fooBar
		},
		data() {
			return {
				recipeList: [],
				recipeTotal: null,
				formData: {
					name: '',
					pageNum: 1,
					pageSize: 10
				},
			}
		},
		created() {

		},
		onLoad(option) {
			this.getMyLikeFoodList();
		},
		onReady() {

		},
		methods: {
			toIndex(index) {
				switch (index) {
					case 0:
						uni.redirectTo({
							url: '/pages/hotRecipes/hot-recipes?ID=5'
						})
						break;
					case 1:
						uni.redirectTo({
							url: '/pages/hotRecipes/hotFoodTypeSelect'
						})
						break;
					default:
						break;
				}
			},
			toDetails(v) {
				uni.navigateTo({
					url: '/pages/hotRecipes/recipesDetails/recipes-details?id=' + v.id + '&name=' + v.name
				})
			},
			searchBlur() {
				// console.log(this.formData.name)
				this.formData.pageNum = 1;
				this.getMyLikeFoodListForFilt();
			},
			getMyLikeFoodListForFilt() {
				let name = this.formData.name;
				let pageNum = this.formData.pageNum
				let pageSize = this.formData.pageSize;
				hotRecipes.getMyLikeFoodList(name, pageNum, pageSize).then(res => {
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
			getMyLikeFoodList() {
				let name = this.formData.name;
				let pageNum = this.formData.pageNum
				let pageSize = this.formData.pageSize;
				hotRecipes.getMyLikeFoodList(name, pageNum, pageSize).then(res => {
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
				this.getMyLikeFoodList();
			}
			// click() {
			// 	uni.showToast({
			// 		title: '我被点击了',
			// 		icon: 'none'
			// 	})
			// }
		}
	}
</script>

<style lang="scss" scoped>
	.classify-bread {
		background-color: #FFFFFF;
		border-top: 0.2rpx solid #FFFFFF;

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
