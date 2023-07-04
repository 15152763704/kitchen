<template>
	<view class="recipes-details" style="">
		<!-- <view class="pic-show" style=""> -->
		<view class="pic-show"
			:style="{ backgroundImage: 'url(' + (recipesInfo.headerUrl ? recipesInfo.headerUrl : '') + ')' }">
			<!-- <view class="flex flex-space-between flex-items-center" style="">
				<view class="">
					<image @click="toBack()" style="width: 17rpx; height: 30rpx; margin-left: 30rpx;"
						src="../../../static/rmcp_back.png" mode=""></image>
				</view>
			</view> -->
		</view>
		<!-- 内容 -->
		<view class="content">
			<!-- 标题 评价 图片-->
			<view class="">
				<view class="title flex flex-space-between flex-items-center">
					<text>{{ recipesInfo.name }}</text>
					<text class="fs-24" style="color: #808080;">{{ recipesComments.length }}人评价</text>
					<view class="" @click="getLike()">
						<image v-if="!isLiked" style="width: 56rpx; height: 56rpx;" src="../../../static/cpxq_star.png"
							mode=""></image>
						<image v-else style="width: 56rpx; height: 56rpx;" src="../../../static/collected.png" mode="">
						</image>
						<!-- <image style="width: 56rpx; height: 56rpx;" src="../../../static/cpxq_lianjie.png" mode=""></image> -->
					</view>
				</view>
				<!-- <view class="flex flex-items-center">
					<uni-rate size="10" :value="recipesData.star" readonly />
					<text class="fs-24" style="margin-left: 20rpx; margin-right: 34rpx;">{{ recipesData.star }}</text>
				</view> -->
			</view>
			<!-- 所需材料 -->
			<view class="materials">
				<view class="title">
					<text>所需材料</text>
				</view>
				<view class="name-andAmount">
					<view class="item" v-for="(item,index) in recipesInfo.foodDetail">
						<text>{{ item.name }}</text>
						<text>{{ item.weight }}</text>
					</view>
				</view>
			</view>
			<!-- 烹饪步骤 -->
			<view class="steps">
				<view class="title">
					<text>烹饪步骤</text>
				</view>
				<rich-text class="ql-editor" :nodes="recipesInfo.content"></rich-text>
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
			<view class="video-tutorial" v-if="recipesInfo.videoUrl">
				<view class="title">
					<text>视频教程</text>
				</view>
				<view class="video-cont">
					<!-- <image style="width: 100%; height: 100%; border-radius: 36rpx;" :src="recipesData.videoPic" mode="">
					</image>
					<image class="v-play" style="" src="../../../static/cpxq_video-play.png" mode=""></image> -->
					<video id="video" class="video" :show-center-play-btn="false" :poster="recipesInfo.headerUrl"
						:show-progress="true" :src="recipesInfo.videoUrl" :enable-play-gesture="false"
						:show-play-btn="true" :show-fullscreen-btn="false" :autoplay="false" :loop="true"
						:controls="true"></video>
				</view>
			</view>
			<!-- 评价btn -->
			<!-- <view class="comment-btn" @click="gotoEva()">
				<text>评  价</text>
			</view> -->
			<view class="comment-view">
				<!-- <view class="search-view flex flex-items-center">
					<image style="width: 32rpx; margin-left: 18rpx; margin-right: 16rpx;"
						src="../../../static/biaoqing.png" mode="widthFix"></image>
					<text>说点什么，让TA也认识爱做饭的你</text>
				</view> -->
				<view class="search-view">
					<uni-easyinput type="text" v-model="commentText" :styles="{borderColor: 'transparent'}"
						placeholderStyle="color: #808080; font-size: 24rpx; font-weight: 500"
						placeholder="😊 说点什么，让TA也认识爱做饭的你~" confirm-type="send" @confirm="sendConfirm">
					</uni-easyinput>
				</view>
				<!-- 评论列表 -->
				<view class="comments-list">
					<view class="title">
						<text>精选评论</text>
					</view>
					<!-- <view class="comments-items" v-for="(item,index) in comments" :key="index">
						<view class="">
							<image style="width: 94rpx;" :src="item.avatarUrl" mode="widthFix"></image>
							<text>123</text>
						</view>
						<view class="">
							<text></text>
						</view>
					</view> -->
					<template v-if="recipesComments.length>2">
						<template v-if="!isSpread">
							<view class="comments-items" v-for="(item,index) in recipesComments.slice(0,2)"
								:key="index">
								<view class="avatar-info">
									<image style="width: 94rpx; border-radius: 8rpx;" :src="item.headerUrl?item.headerUrl:'/static/danxiaochu.png'"
										mode="widthFix">
									</image>
									<text>{{ item.userName }}</text>
								</view>
								<view class="comments-cnt">
									<text>{{ item.text }}</text>
								</view>
							</view>
						</template>
						<template v-else>
							<view class="comments-items" v-for="(item,index) in recipesComments" :key="index">
								<view class="avatar-info">
									<image style="width: 94rpx; border-radius: 8rpx;" :src="item.headerUrl?item.headerUrl:'/static/danxiaochu.png'"
										mode="widthFix">
									</image>
									<text>{{ item.userName }}</text>
								</view>
								<view class="comments-cnt">
									<text>{{ item.text }}</text>
								</view>
							</view>
						</template>
						<!-- 查看更多 -->
						<view v-if="!isSpread" class="look-more" @click="lookMore()">
							<text>查看更多</text>
						</view>
					</template>
					<template v-else>
						<view class="comments-items" v-for="(item,index) in recipesComments" :key="index">
							<view class="avatar-info">
								<image style="width: 94rpx; border-radius: 8rpx;" :src="item.headerUrl?item.headerUrl:'/static/danxiaochu.png'" mode="widthFix">
								</image>
								<text>{{ item.userName }}</text>
							</view>
							<view class="comments-cnt">
								<text>{{ item.text }}</text>
							</view>
						</view>
					</template>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import hotRecipes from '@/api/hotRecipes/hotRecipes.js';
	export default {
		components: {},
		data() {
			return {
				recipesId: null,
				recipesName: '',
				isSpread: false,
				recipesInfo: {},
				recipesComments: [],
				isLiked: false,
				commentText: ''
			}
		},
		onLoad(option) {
			// console.log(option.id)
			this.recipesId = option.id;
			this.recipesName = option.name;
			this.getHotFoodMenuContent(option.id);
			this.getHotFoodEvalList(option.id);
		},
		mounted() {

		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
			// console.log(this.scrollTop)
		},
		methods: {
			toBack() {
				uni.navigateBack({
					delta: 1,
					// animationType: 'slide-out-bottom',
					// animationDuration: 200
				});
			},
			gotoMore() {
				uni.navigateTo({
					url: '/pages/hotRecipes/evaluation/evaluation-list'
				})
			},
			lookMore() {
				// console.log(this.recipesData.comments)
				this.isSpread = !this.isSpread
			},
			// gotoEva() {
			// 	uni.navigateTo({
			// 		url: '/pages/hotRecipes/evaluation/evaluate',
			// 		animationType: 'slide-in-bottom',
			// 		animationDuration: 200
			// 	})
			// }
			// 菜谱详情
			getHotFoodMenuContent(id) {
				hotRecipes.getHotFoodMenuContent(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.recipesInfo = res.data;
						this.findIsLikeFood(id);
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
				hotRecipes.findIsLikeFood(id).then(res => {
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
			myLikeFoodContent() {
				let data = {
					hotFoodMenuContentId: this.recipesId,
					name: this.recipesName
				}
				hotRecipes.myLikeFoodContent(data).then(res => {
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
				hotRecipes.cancelLike(this.recipesId).then(res => {
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
					this.myLikeFoodContent();
				}
			},
			// 获取评价列表
			getHotFoodEvalList(id) {
				hotRecipes.getHotFoodEvalList(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.recipesComments = res.rows;
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
			// 新增评价
			addPublishHotFood() {
				let data = {
					orderId: this.recipesId,
					text: this.commentText
				}
				hotRecipes.addPublishHotFood(data).then(res => {
					// console.log(res)
					if (res.code == 200) {
						uni.showToast({
							title: '评价成功',
							icon: 'success'
						});
						this.commentText = '';
						this.getHotFoodEvalList(this.recipesId);
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
			sendConfirm() {
				this.addPublishHotFood();
			}
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

	.recipes-details {
		background-color: #FFFFFF;
		box-sizing: border-box;
		padding-bottom: 88rpx;

		.pic-show {
			box-sizing: border-box;
			width: 750rpx;
			height: 398rpx;
			// background-image: url(../../../static/cpxq_showPic.png);
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

			.pic {
				margin-top: 26rpx;
				// display: flex;
				// flex-wrap: nowrap;
				white-space: nowrap;
			}

			.materials,
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
				text-align: center;
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

			.comment-btn {
				width: 710rpx;
				height: 78rpx;
				line-height: 78rpx;
				text-align: center;
				background: linear-gradient(to right, #F0C819, #FF9D00);
				border-radius: 42rpx;
				font-size: 32rpx;
				font-weight: 500;
				margin-top: 90rpx;
			}

			.comment-view {
				width: 100%;
				min-height: 400rpx;
				background-color: #FFFFFF;
				margin-top: 32rpx;
				padding-top: 42rpx;

				.search-view {
					height: 74rpx;
					background-color: #F5F6F7;
					border-radius: 38rpx 38rpx 38rpx 38rpx;

				}

				.comments-list {
					.title {
						font-size: 24rpx;
						color: #808080;
						font-weight: 500;
						margin-top: 24rpx;
						margin-bottom: 18rpx;
					}

					.comments-items {
						width: 100%;
						padding-top: 40rpx;
						padding-bottom: 32rpx;
						border-bottom: 0.6rpx solid #BABABA;

						.avatar-info {
							display: flex;
							align-items: center;

							text {
								font-size: 20rpx;
								color: #808080;
								margin-left: 16rpx;
							}
						}

						.comments-cnt {
							margin-left: 110rpx;
							font-size: 24rpx;
						}
					}

					.look-more {
						margin: 40rpx auto;
						text-align: center;

						color: #FF9D2B;
						font-size: 24rpx;
					}
				}
			}
		}
	}
</style>
<style>
	.mask {
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

	}
	.ql-editor img{
		max-width: 100%!important;
	}
</style>
