<template>
	<view class="my-evaluation">
		<view v-if="evaluationList.length" class="evaluation-list">
			<view class="total">
				<text>已贡献{{ evalutionsTotal }}条评价</text>
			</view>
			<view class="evaluation-li" v-for="(item,index) in evaluationList" @click="toStore(item)">
				<view class="li-content">
					<view class="store-pic">
						<image :src="item.shop.shopImgUrl" mode=""></image>
					</view>
					<!-- <view class="" style="margin-left: 10rpx; width: 566rpx; border-bottom: 1rpx solid #E3E3E3;"> -->
					<view class="" style="margin-left: 10rpx; width: 566rpx;">
						<view class="row-1">
							<view class="store-name">
								<text>{{ item.shop.name }}</text>
							</view>
							<view class="evaluation-time">
								<text>{{ item.createTime }}</text>
							</view>
						</view>
						<view class="row-2" style="">
							<text class="storeStar">商家：</text>
							<uni-rate style="margin-right: 32rpx;" size="12" :value="item.star" readonly />
							<!-- <text class="kwStar">口味{{ item.kwStar }}星</text>
							<text class="bzStar">包装{{ item.bzStar }}星</text> -->
						</view>
						<!-- <view class="row-3 qsStar">
							<text>骑手：{{ item.qsStar }}</text>
						</view> -->
						<view class="row-4 cont">
							<text>{{ item.text }}</text>
						</view>
						<view class="row-5 goodsImg-list" @click.stop="previewImage(item)">
							<view class="goodsImg-item" v-for="(val,idx) in item.picurlArr">
								<image :src="val" mode=""></image>
							</view>
						</view>
						<view class="row-6 goods-name">
							<!-- <image style="width: 22rpx; margin-right: 6rpx;" src="../../static/mine/icon_zan.png"
								mode="widthFix"></image>
							<text>{{ item.name }}</text> -->
						</view>
						<!-- 商家回复 -->
						<!-- <view class="store-response">
							<view class="label">
								<text>商家回复</text>
								<text>{{ item.storeResponse.time }}</text>
							</view>
							<view class="cont">
								<text>{{ item.storeResponse.cont }}</text>
							</view>
						</view> -->
					</view>
				</view>
				<!-- <view class="actions">
					<view class="" @click="addEva(index)">
						<image style="width: 20rpx;" src="../../static/mine/icon_zhuiping.png" mode="widthFix"></image>
						<text style="margin-right: 42rpx;">追评</text>
					</view>
					<view class="" @click="delEva(index)">
						<image style="width: 20rpx;" src="../../static/mine/icon_shanchu.png" mode="widthFix"></image>
						<text style="color: #101010;">删除</text>
					</view>
				</view> -->
			</view>
		</view>
		<view v-else class=""
			style="display: flex; flex-direction: column; align-items: center; margin-top: 360rpx; background-color:#F5F5F5">
			<image style="width: 96rpx;margin-bottom: 22rpx;" src="/static/none.png" mode="widthFix"></image>
			<text style="font-size: 24rpx; color: #56575B;">暂无评价～</text>
		</view>
	</view>
</template>

<script>
	// import MoteLinesDivide from "@/components/mote-lines-divide/mote-lines-divide"
	import shop from '@/api/shop/shop.js'
	import * as util from '../../common/util.js'

	var renderTime = util.renderTime;
	export default {
		components: {
			// MoteLinesDivide
		},
		data() {
			return {
				evaluationList: [],
				evalutionsTotal: 0
			}
		},
		onLoad: function(option) {
			this.findMyEvalList()
		},
		methods: {
			toStore(item) {
				uni.navigateTo({
					url: '../store/store?id=' + item.shopId
				})
			},
			// 追评
			addEva(index) {
				// let cont = "追评第" + (index+1) + "条评价"
				// uni.showModal({
				//     content: JSON.stringify(cont)
				// })
			},
			// 删除
			delEva(index) {
				// let cont = "删除第" + (index+1) + "条评价"
				// uni.showModal({
				//     content: JSON.stringify(cont)
				// })
			},
			// 预览图片
			previewImage(item) {
				// item.picurlArr
				uni.previewImage({
					urls: item.picurlArr,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			// 获取评价列表
			findMyEvalList() {
				shop.findMyEvalList().then(res => {
					if (res.code == 200) {
						// console.log(res.rows)
						for (var i = 0; i < res.rows.length; i++) {
							res.rows[i].createTime = renderTime(res.rows[i].createTime)
						}
						this.evaluationList = res.rows;
						this.evalutionsTotal = res.total;
						// this.evaluationList = 
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
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {

		}
		// #endif
	}
</script>

<style lang="scss" scoped>
	.my-evaluation {
		width: 750rpx;
		padding: 0 22rpx 0 24rpx;
		box-sizing: border-box;

		.evaluation-list {

			// background-color: #FFFFFF;
			.total {
				margin: 26rpx 0;

				text {
					font-size: 32rpx;
				}
			}

			.evaluation-li {
				background-color: #FFFFFF;
				margin-bottom: 40rpx;
				border-radius: 10rpx;

				.li-content {
					display: flex;
					padding: 34rpx 24rpx 0 22rpx;
					box-sizing: border-box;

					.store-pic {
						image {
							width: 82rpx;
							height: 82rpx;
							border-radius: 12rpx;
						}
					}

					.row-1 {
						display: flex;
						justify-content: space-between;
						align-items: center;

						.store-name {
							padding-left: 2rpx;

							text {
								font-size: 32rpx;
								font-weight: 500;
							}
						}

						.evaluation-time {
							font-size: 24rpx;
							color: #959595;
						}
					}

					.row-2 {
						margin-top: 10rpx;
						display: flex;
						align-items: center;

						text {
							font-size: 24rpx;
							color: #959595;

						}

						.kwStar {
							margin-right: 28rpx;
						}
					}

					.row-3 {
						margin-top: 10rpx;

						text {
							font-size: 24rpx;
							color: #959595;
						}
					}

					.row-4 {
						margin-top: 30rpx;

						text {
							font-size: 28rpx;
							color: #141313;
						}
					}

					.row-5 {
						margin-top: 10rpx;
						display: flex;

						.goodsImg-item {
							image {
								width: 162rpx;
								height: 162rpx;
								border-radius: 14rpx;
								margin-right: 8rpx;
							}
						}
					}

					.row-6 {
						margin-top: 16rpx;
						display: flex;
						align-items: center;

						text {
							font-size: 24rpx;
							color: #959595;
						}
					}

					.store-response {
						margin-top: 28rpx;
						width: 100%;
						// height: 200rpx;
						border-radius: 16rpx;
						background-color: #F9FAFB;
						box-sizing: border-box;
						padding: 22rpx 18rpx 56rpx 24rpx;
						margin-bottom: 30rpx;

						.label {
							display: flex;
							justify-content: space-between;
							margin-bottom: 8rpx;

							text {
								font-size: 24rpx;
								color: #959595;
							}
						}

						.cont {
							text {
								font-size: 24rpx;
								color: #56575B;
							}
						}
					}
				}

				.actions {
					margin-top: 40rpx;
					display: flex;
					justify-content: flex-end;
					padding-right: 24rpx;
					padding-bottom: 34rpx;
					box-sizing: border-box;

					text {
						font-size: 28rpx;
						color: #959595;
					}

					image {
						margin-right: 10rpx;
					}
				}
			}
		}
	}
</style>
