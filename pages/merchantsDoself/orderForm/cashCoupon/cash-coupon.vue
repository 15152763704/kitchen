<template>
	<view class="cash-coupon">
		<view v-if="myCouponCardList.length" class="hb-item" v-for="(item,index) in myCouponCardList">
			<view v-if="item.isOverdue || item.cardStatus" class="hb-item-mask"></view>
			<image v-if="item.isOverdue" class="isOverdue" style="width: 118rpx;" src="/static/shopCar/isOverdue.png" mode="widthFix"></image>
			<!-- 左 -->
			<view class="">
				<image style="width: 156rpx; height: 156rpx; border-radius: 16rpx;"
					:src="item.shopImgUrl" mode=""></image>
			</view>
			<!-- 右 -->
			<view class="" style="padding-left: 22rpx; box-sizing: border-box;">
				<view class="row-1">
					<view class="left">
						<view class="left-t">
							<text>{{ item.shopName }}</text>
						</view>
						<view class="left-b">
							<text>{{ item.dueTime.substring(0, 10) }}</text>
						</view>
					</view>
					<view class="right">
						<view class="right-t">
							<text style="font-size: 42rpx;">￥</text>
							<text>{{ item.reduceMoney }}</text>
						</view>
						<view class="right-b">
							<text>满{{ item.fullMoney }}可用</text>
						</view>
					</view>
				</view>
				<view class="row-2">
					<view class="left">
						<view class="" style="margin-bottom: 18rpx; display: flex; align-items: center;"
							@click="onZk(item)">
							<text class="intro">使用规则</text>
							<image style="width: 12rpx; margin-left: 24rpx; margin-top: 2rpx;"
								:src="item.isZK? '/static/eva_text_shouqi.png':'/static/eva_text_zhankai.png'"
								mode="widthFix"></image>
						</view>
						<text v-if="item.isZK" class="intro">{{ item.remark }}</text>
					</view>
					<view v-if="!item.cardStatus" class="right" @click="toUse(item)">
						<text>去使用</text>
					</view>
				</view>
			</view>

		</view>
		<!-- 兑换代金券 -->
		<!-- <uni-popup ref="inputDialog" type="dialog">
			<uni-popup-dialog ref="inputClose" mode="input" title="兑换代金券" value="" placeholder="请输入代金券兑换码"
				@confirm="dialogInputConfirm"></uni-popup-dialog>
		</uni-popup> -->
		<view v-if="!myCouponCardList.length" class="" style="display: flex; flex-direction: column; align-items: center; margin-top: 360rpx;">
			<image style="width: 96rpx;margin-bottom: 22rpx;" src="/static/none.png" mode="widthFix"></image>
			<text style="font-size: 24rpx; color: #56575B;">暂无可用代金券～</text>
		</view>
	</view>
</template>

<script>
	// import MoteLinesDivide from "@/components/mote-lines-divide/mote-lines-divide"
	import * as util from '@/common/util.js'
	import merchantsDoself from '@/api/merchantsDoself/merchantsDoself.js'
	
	var compareTime = util.compareTime;
	export default {
		components: {
			// MoteLinesDivide
		},
		data() {
			return {
				// searchValue: ""
				from: '',
				myCouponCardList: [],
				shopIndex: null,
				// shopImageUrl: '',
				// shopName: '',
				hbList: [
					
				],
				from: ''
			}
		},
		onLoad: function(option) {
			this.from = option.from;
			if(this.from == 'mine') {
				this.getSelfMadeGoodUserCouponCardList('');
			}else {
				this.getSelfMadeGoodUserCouponCardList(option.id);
				this.shopIndex = option.index;
			}
		},
		methods: {
			// 代金券去使用
			toUse(item) {
				// uni.showToast({
				// 	title: '去使用' + index,
				// 	icon: 'none'
				// })
				// console.log(item)
				if(this.from == 'mine') {
					// console.log('from mine')
					uni.navigateTo({
						url: '/pages/merchantsDoself/storeHome/store-home?id=' + item.shopId
					})
				}else {
					let pages = getCurrentPages();  //获取跳转的所有页面
					let nowPage = pages[ pages.length - 1]; //当前页
					let prevPage = pages[ pages.length - 2 ]; //上一页
					// prevPage.$vm //上一页的this
					prevPage.$vm.orderList[this.shopIndex].userCarsVo.temp_coupon = item.reduceMoney 
					prevPage.$vm.orderList[this.shopIndex].userCarsVo.couponId = item.id 
					uni.navigateBack({
						delta: 1
					})
				}
			},
			// 展开使用规则
			onZk(item) {
				// this.$set(item, 'isZK', true);
				item.isZK = !item.isZK;
			},
			dialogInputConfirm(val) {
				uni.showLoading({
					title: '3秒后会关闭'
				})

				setTimeout(() => {
					uni.hideLoading()
					console.log(val)
					this.value = val
					// 关闭窗口后，恢复默认内容
					this.$refs.inputDialog.close()
				}, 3000)
			},
			// 获取代金券列表
			getSelfMadeGoodUserCouponCardList(shopId) {
				merchantsDoself.getSelfMadeGoodUserCouponCardList(shopId).then(res => {
					if (res.code == 200) {
						// console.log(res.total)
						this.myCouponCardList = res.rows;
						for (var i = 0; i < this.myCouponCardList.length; i++) {
							// console.log(this.myCouponCardList[i].dueTime)
							this.myCouponCardList[i].isOverdue = compareTime(this.myCouponCardList[i].dueTime)
							this.myCouponCardList[i].isZK = false
						}
						// console.log(this.myCouponCardList)
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
			}
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;

		},
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {
			// console.log(e[0].text)
			this.$refs.inputDialog.open('center')
			// uni.showToast({
			// 	title: '点击了' + e.text
			// })
			// let webView = this.$mp.page.$getAppWebview();
			// webView.setTitleNViewButtonStyle(0, {
			// 	text: '',
			// });
		}
		// #endif
	}
</script>

<style lang="scss" scoped>
	.cash-coupon {
		padding: 4rpx 22rpx;
		box-sizing: border-box;
	
	.hb-item {
			width: 100%;
			background-color: #FFFFFF;
			border-radius: 28rpx;
			position: relative;
			margin-top: 16rpx;
			// border-top: 0.6rpx solid #FFFFFF;
			box-sizing: border-box;
			padding-left: 24rpx;
			padding-right: 28rpx;
			padding-top: 30rpx;
			padding-bottom: 20rpx;
			position: relative;
			display: flex;

			.isOverdue {
				position: absolute;
				bottom: 0;
				right: 0;
				z-index: 100;
			}

			.isShenquan {
				width: 84rpx;
				position: absolute;
				top: 0;
				left: 0;
			}

			.hb-item-mask {
				width: 100%;
				height: 100%;
				background-color: rgba(255, 255, 255, 0.6);
				position: absolute;
				top: 0;
				left: 0;
				border-radius: 28rpx;
				z-index: 99;
			}

			.row-1 {
				width: 482rpx;
				display: flex;
				justify-content: space-between;
				/* #ifdef APP-PLUS */
				margin-top: -14rpx;
				/* #endif */
				align-items: center;
				padding-bottom: 14rpx;
				box-sizing: border-box;
				border-bottom: 2rpx dashed #E3E3E3;

				.left {

					// margin-left: 24rpx;
					// margin-top: 24rpx;
					.left-t {
						font-size: 32rpx;
						font-weight: 500;
					}

					.left-b {
						font-size: 20rpx;
						font-weight: 500;
						color: #808080;
						// background-color: #FFE9DB;
						border-radius: 8rpx;
						display: inline-block;
						padding: 0 6rpx;
						box-sizing: border-box;
						margin-top: 10rpx;
					}
				}

				.right {
					// margin-right: 34rpx;
					text-align: center;

					.right-t {
						color: #F75732;
						font-size: 54rpx;
						font-weight: 500;
					}

					.right-b {
						color: #F75732;
						font-size: 24rpx
					}
				}
			}

			.row-2 {
				// box-sizing: border-box;
				// padding: 20rpx 24rpx 0 28rpx;
				display: flex;
				justify-content: space-between;
				padding-top: 14rpx;

				// 225
				.left {
					// width: 450rpx;
					width: 362rpx;

					.intro {
						font-size: 20rpx;
						color: #808080;
					}

					.isPZ {
						font-size: 20rpx;
						color: #808080;
						margin-right: 8rpx;
						border: 1rpx solid #707070;
						border-radius: 8rpx;
						padding: 0 6rpx;
					}
				}

				.right {
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
</style>
