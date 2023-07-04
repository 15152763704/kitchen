<template>
	<view class="pfood-details" style="">
		<view class="pic-show"
			:style="{ backgroundImage: 'url(' + (recipesData.headerUrl ? recipesData.headerUrl : '') + ')' }">
			<view class="flex flex-space-between flex-items-center">
				<view class="">
					<image @click="toBack()" style="width: 17rpx; height: 30rpx; margin-left: 30rpx;"
						src="../../../static/rmcp_back.png" mode=""></image>
				</view>
				<view class="flex">
					<view v-if="fromType == 2" class="" @click="getSupport()">
						<image v-if="!isSupport" style="width: 56rpx; height: 56rpx; margin-right: 20rpx;"
							src="../../../static/cpxq_zan.png" mode=""></image>
						<image v-else style="width: 56rpx; height: 56rpx; margin-right: 20rpx;"
							src="../../../static/zaned.png" mode=""></image>
					</view>
					<view class="" @click="getLike()">
						<image v-if="!isLiked" style="width: 56rpx; height: 56rpx;" src="../../../static/cpxq_star.png"
							mode=""></image>
						<image v-else style="width: 56rpx; height: 56rpx;" src="../../../static/collected.png" mode="">
						</image>
					</view>
					<!-- <image style="width: 56rpx; height: 56rpx;" src="../../../static/cpxq_lianjie.png" mode=""></image> -->
				</view>
			</view>
		</view>
		<!-- 内容 -->
		<view v-if="fromType == 1" class="content">
			<!-- 标题 评价 图片-->
			<view class="">
				<view class="title">
					<text>{{ recipesData.name }}</text>
				</view>
				<view class="fs-24" style="color: #808080;">
					<text class="">浏览{{ recipesData.seeNum?recipesData.seeNum:0 }}</text>
					<text style="margin: 0 12rpx;">·</text>
					<text class="">收藏{{ recipesData.supportNum?recipesData.supportNum:0 }}</text>
				</view>
				<view class="fs-24" style="margin-top: 16rpx; color: #56575B;">
					<text>{{ recipesData.description }}</text>
				</view>
				<!-- <view class="flex flex-items-center">
					<uni-rate size="10" :value="recipesData.star" readonly />
					<text class="fs-24" style="margin-left: 20rpx; margin-right: 34rpx;">{{ recipesData.star }}</text>
					<text class="fs-24" style="color: #808080;">{{ recipesData.num }}人评价</text>
				</view> -->
				<!-- <view class="pic">
					<view class=""
						style="width: 168rpx; height: 168rpx; border-radius: 12rpx; margin-right: 12rpx; position: relative; display: inline-block;"
						v-for="(item,index) in recipesData.commontPic">
						<image :src="item" mode="" style="width: 100%; height: 100%; border-radius: 12rpx;">
						</image>
						<view @click="gotoMore()" class="mask" v-if="index == recipesData.commontPic.length - 1">
							<text>更多评价</text>
						</view>
					</view>
				</view> -->
			</view>
			<!-- 难易度 -->
			<view class="time-and-level">
				<view class="flex-items-center flex">
					<image style="width: 40rpx; height: 40rpx; margin-right: 12rpx;"
						src="../../../static/ycfs_xq_time.png" mode=""></image>
					<text class="fs-28 fw-500" style="">{{ recipesData.time }}</text>
				</view>
				<view class="flex-items-center flex">
					<template v-if="recipesData.difficulty == 1">
						<image style="width: 42rpx; height: 40rpx; margin-right: 12rpx;"
							src="../../../static/ycfs_xq_l1.png" mode=""></image>
						<text class="fs-28 fw-500">难易度（简单）</text>
					</template>
					<template v-if="recipesData.difficulty == 2">
						<image style="width: 42rpx; height: 40rpx; margin-right: 12rpx;"
							src="../../../static/ycfs_xq_l2.png" mode=""></image>
						<text class="fs-28 fw-500">难易度（适中）</text>
					</template>
					<template v-if="recipesData.difficulty == 3">
						<image style="width: 42rpx; height: 40rpx; margin-right: 12rpx;"
							src="../../../static/ycfs_xq_l3.png" mode=""></image>
						<text class="fs-28 fw-500">难易度（困难）</text>
					</template>
				</view>
			</view>
			<!-- 所需材料 -->
			<view class="materials">
				<view class="title">
					<text>所需材料</text>
				</view>
				<view class="name-andAmount">
					<view class="item" v-for="(item,index) in recipesData.foodDetail">
						<text>{{ item.name }}</text>
						<text>{{ item.weight }}</text>
					</view>
				</view>
			</view>
			<!-- 营养分析 -->
			<view class="trophic-analysis">
				<view class="title">
					<text>营养分析</text>
				</view>
				<view class="charts-box" style="">
					<qiun-data-charts type="ring"
						:opts="{legend:{position: 'right'},title:{name: ''},extra:{ring:{ringWidth: 20,linearType:'custom',centerColor:'#ffffff'}}}"
						:chartData="chartsDataRing1" />
				</view>
				<!--<view class="name-andAmount">
					<view class="item" v-for="(item,index) in recipesData.materials">
						<text>{{ item.name }}</text>
						<text>{{ item.num }}</text>
					</view>
				</view> -->
			</view>
			<!-- 烹饪步骤 -->
			<view class="steps">
				<view class="title">
					<text>烹饪步骤</text>
				</view>
				<rich-text class="ql-editor" :nodes="recipesData.content"></rich-text>
				<!-- <view class="steps-item" v-for="(item,index) in recipesData.steps">
					<view class="steps-tit">
						<text>步骤{{ index + 1 }}/{{ recipesData.steps.length }}</text>
					</view>
					<view class="steps-pic">
						<image :src="item.picUrl" mode="" style="width: 706rpx; height: 400rpx; border-radius: 36rpx;">
						</image>
					</view>
					<view class="steps-content">
						<text>{{ item.cont }}</text>
					</view>
				</view> -->
			</view>
			<!-- 视频教程 -->
			<view class="video-tutorial" v-if="recipesData.videoUrl">
				<view class="title">
					<text>视频教程</text>
				</view>
				<view class="video-cont">
					<!-- <image style="width: 100%; height: 100%; border-radius: 36rpx;" :src="recipesData.videoPic" mode="">
					</image>
					<image class="v-play" style="" src="../../../static/cpxq_video-play.png" mode=""></image> -->
					<video id="video" class="video" :show-center-play-btn="false" :poster="recipesData.headerUrl"
						:show-progress="true" :src="recipesData.videoUrl" :enable-play-gesture="false"
						:show-play-btn="true" :show-fullscreen-btn="false" :autoplay="false" :loop="true"
						:controls="true"></video>
				</view>
			</view>
			<!-- 评价btn -->
			<!-- <view class="comment-btn" @click="gotoEva()">
				<text>评  价</text>
			</view> -->
		</view>
		<view v-else class="content">
			<rich-text class="ql-editor" :nodes="recipesData.content"></rich-text>
		</view>
	</view>
</template>

<script>
	import pregnancyFood from '@/api/pregnancyFood/pregnancyFood.js';
	export default {
		components: {},
		data() {
			return {
				chartsDataRing1: {
					series: [],
					// kaluli: 666,
				},
				recipesData: {

				},
				fromType: null,
				recipesId: null,
				recipesName: '',
				isLiked: false,
				isSupport: false
			}
		},
		onLoad(options) {
			// console.log(options.type);
			this.fromType = options.type;
			this.recipesId = options.id;
			this.recipesName = options.name;
			this.getMotherBabyFoodDetails(options.id)
		},

		mounted() {

		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
			// console.log(this.scrollTop)
		},
		methods: {
			toBack() {
				let pages = getCurrentPages(); //获取跳转的所有页面
				let prevPage = pages[pages.length - 2]; //上一页
				// prevPage.$vm //上一页的this
				// prevPage.$vm.recipesListR = [];
				// prevPage.$vm.$refs.waterfallsFlowRef.refresh();
				prevPage.$vm.getMotherBabyFoodListForFit(2);
				uni.navigateBack({
					delta: 1,
					// animationType: 'slide-out-bottom',
					// animationDuration: 200
				});
			},
			// 详情
			getMotherBabyFoodDetails(id) {
				pregnancyFood.getMotherBabyFoodDetails(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.recipesData = res.data;
						for (var i = 0; i < res.data.nutritionAnalyses.length; i++) {
							let obj = {};
							obj.name = res.data.nutritionAnalyses[i].name;
							obj.data = Number(res.data.nutritionAnalyses[i].weight);
							this.chartsDataRing1.series.push(obj);
						}
						// this.chartsDataRing1.series = res.data.nutritionAnalyses;
						// console.log(this.chartsDataRing1)
						this.findIsLikeFood(id);
						this.findIsSupportFood(id);
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
			// 是否收藏
			findIsLikeFood(id) {
				pregnancyFood.findIsLikeFood(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.isLiked = res.data;
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
			// 收藏
			motherBabyFoodMyLike() {
				let data = {
					motherBabyFoodId: this.recipesId,
					name: this.recipesName
				}
				pregnancyFood.motherBabyFoodMyLike(data).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.isLiked = true;
						uni.showToast({
							title: '收藏成功',
							icon: 'success'
						});
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
			// 取消收藏
			cancelLike() {
				pregnancyFood.cancelLike(this.recipesId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.isLiked = false;
						uni.showToast({
							title: '取消收藏',
							icon: 'success'
						});
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
			// 收藏/取消收藏
			getLike() {
				if (this.isLiked) {
					// 取消收藏
					this.cancelLike();
				} else {
					// 收藏
					this.motherBabyFoodMyLike();
				}
			},
			// 是否点赞
			findIsSupportFood(id) {
				pregnancyFood.findIsSupportFood(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.isSupport = res.data;
					} else {
						// uni.hideLoading();
						// console.log(res.msg);
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
			// 点赞
			motherBabyFoodSupport() {
				let data = {
					motherBabyFoodId: this.recipesId,
					name: this.recipesName
				}
				pregnancyFood.motherBabyFoodSupport(data).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.isSupport = true;
						uni.showToast({
							title: '点赞成功',
							icon: 'success'
						});
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
			// 取消点赞
			cancelSupport() {
				pregnancyFood.cancelSupport(this.recipesId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.isSupport = false;
						uni.showToast({
							title: '取消点赞',
							icon: 'success'
						});
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
			// 收藏/取消收藏
			getSupport() {
				if (this.isSupport) {
					// 取消收藏
					this.cancelSupport();
				} else {
					// 收藏
					this.motherBabyFoodSupport();
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	button::after {
		border: none;
	}

	.flex {
		display: flex;
	}

	.flex-space-between {
		justify-content: space-between;
	}

	.flex-items-center {
		align-items: center;
	}

	.fs-20 {
		font-size: 20rpx;
	}

	.fs-24 {
		font-size: 24rpx;
	}

	.fs-28 {
		font-size: 28rpx;
	}

	.fs-30 {
		font-size: 30rpx;
	}

	.fs-32 {
		font-size: 32rpx;
	}

	.fs-36 {
		font-size: 36rpx;
	}

	.fs-38 {
		font-size: 38rpx;
	}

	.fs-44 {
		font-size: 44rpx;
	}

	.fw-500 {
		font-weight: 500;
	}

	.pfood-details {
		background-color: #FFFFFF;
		box-sizing: border-box;
		padding-bottom: 88rpx;

		.pic-show {
			box-sizing: border-box;
			width: 750rpx;
			height: 398rpx;
			background-image: url(../../../static/cpxq_showPic.png);
			background-repeat: no-repeat;
			background-size: 100%;
			padding-top: 98rpx;
			padding-right: 38rpx;
		}

		.content {
			box-sizing: border-box;
			padding-top: 36rpx;
			padding-left: 22rpx;
			padding-right: 22rpx;

			.title {
				font-size: 40rpx;
				font-weight: 500;
				margin-bottom: 14rpx;
			}

			.materials,
			.trophic-analysis,
			.steps,
			.video-tutorial {
				.title {
					font-size: 32rpx;
					font-weight: 500;
					width: 140rpx;
					margin: 52rpx auto 44rpx;
					text-align: center;
					background: url(../../../static/cpxq_titbcg.png);
					background-position: bottom;
					background-repeat: no-repeat;
					background-size: 100%;
				}

				.name-andAmount {
					box-sizing: border-box;
					padding-right: 18rpx;

					.item {
						font-size: 32rpx;
						display: flex;
						justify-content: space-between;
						margin-bottom: 36rpx;
					}
				}
			}

			.time-and-level {
				margin-top: 32rpx;
				padding: 0 90rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
			}

			.steps-item {
				margin-bottom: 40rpx;

				.steps-tit {
					font-size: 28rpx;
					font-weight: 500;
				}

				.steps-pic {
					margin-top: 32rpx;
					margin-bottom: 32rpx;
				}

				.steps-content {
					font-size: 32rpx;
				}
			}

			.video-cont {
				width: 706rpx;
				// height: 400rpx;
				position: relative;

				.video {
					width: 100%;
				}

				.v-play {
					width: 96rpx;
					height: 96rpx;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
			}

			// .comment-btn {
			// 	width: 710rpx;
			// 	height: 78rpx;
			// 	line-height: 78rpx;
			// 	text-align: center;
			// 	background: linear-gradient(to right, #F0C819, #FF9D00);
			// 	border-radius: 42rpx;
			// 	font-size: 32rpx;
			// 	font-weight: 500;
			// 	margin-top: 90rpx;
			// }
		}

		.ql-editor {
			img {
				max-width: 100%;
			}
		}
	}
</style>
<style>
	/* 	.mask {
		background: rgb(0, 0, 0, 0.5);
		width: 168rpx;
		height: 168rpx;
		border-radius: 12rpx;
		position: absolute;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
	.mask text {
			color: #FFFFFF;
			font-size: 24rpx;
			
		} */
</style>
