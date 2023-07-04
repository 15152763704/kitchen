<template>
	<view class="red-envelope">
		<view v-if="myPackageList.length" class="hb-item" v-for="(item,index) in myPackageList">
			<!-- <view v-if="item.isOverdue" class="hb-item-mask"></view>
			<image v-if="item.isOverdue" class="isOverdue" style="width: 118rpx;"
				src="../../../static/shopCar/isOverdue.png" mode="widthFix"></image> -->
			<!-- <image class="isShenquan" v-if="item.isShenquan" style="" src="../../../static/shopCar/hb_shenquan.png" -->
			<!-- <image class="isShenquan" style="" src="../../../static/shopCar/hb_shenquan.png"
				mode="widthFix"></image> -->
			<view class="row-1">
				<view class="left">
					<view class="left-t">
						<text>{{ item.name }}</text>
						<text>天天红包</text>
					</view>
					<view class="left-b">
						<text>{{ item.dueTime }}到期</text>
					</view>
				</view>
				<view class="right">
					<view class="right-t">
						<text style="font-size: 42rpx;">￥</text>
						<text>{{ item.reduce }}</text>
					</view>
					<view class="right-b">
						<text>满{{ item.full }}可用</text>
					</view>
				</view>
			</view>
			<view class="row-2">
				<view class="left">
					<mote-lines-divide :line="1" expandText="展开" foldHint="收起">
						<!-- <text class="isPZ">已膨胀</text><text class="intro">{{ item.intro }}</text> -->
						<text class="intro">{{ item.remark }}</text>
					</mote-lines-divide>
				</view>
				<view class="right" @click="toUse(item)">
					<text>去使用</text>
				</view>
			</view>
		</view>
		<!-- 兑换红包 -->
		<!-- <uni-popup ref="inputDialog" type="dialog">
			<uni-popup-dialog ref="inputClose" mode="input" title="兑换红包" value="" placeholder="请输入红包兑换码"
				@confirm="dialogInputConfirm"></uni-popup-dialog>
		</uni-popup> -->
		<view v-if="!myPackageList.length" class="" style="display: flex; flex-direction: column; align-items: center; margin-top: 360rpx;">
			<image style="width: 96rpx;margin-bottom: 22rpx;" src="/static/none.png" mode="widthFix"></image>
			<text style="font-size: 24rpx; color: #56575B;">暂无可用红包～</text>
		</view>
	</view>
</template>

<script>
	import MoteLinesDivide from "@/components/mote-lines-divide/mote-lines-divide"
	import orderForm from '@/api/orderForm/orderForm.js'
	export default {
		components: {
			MoteLinesDivide
		},
		data() {
			return {
				myPackageList: [],
				shopIndex: null,
				from: '',
				// searchValue: ""
				// hbList: [{
				// 		isOverdue: false,
				// 		isShenquan: true,
				// 		name: '天天神券——膨胀专区',
				// 		time: '今日到期',
				// 		num: 8,
				// 		condition: '满23可用',
				// 		intro: '限商品现价+打包费-所有优惠金额满23,限商品现价+打包费-所有优惠金额满23.'
				// 	},
				// 	{
				// 		isOverdue: false,
				// 		isShenquan: true,
				// 		name: '天天神券——膨胀专区',
				// 		time: '今日到期',
				// 		num: 8,
				// 		condition: '满23可用',
				// 		intro: '限商品现价+打包费-所有优惠金额满23'
				// 	},
				// 	{
				// 		isOverdue: false,
				// 		isShenquan: false,
				// 		name: '外卖节红包',
				// 		time: '今日到期',
				// 		num: 8,
				// 		condition: '满23可用',
				// 		intro: '限商品现价+打包费-所有优惠金额满23,限商品现价+打包费-所有优惠金额满23.'
				// 	},
				// 	{
				// 		isOverdue: true,
				// 		isShenquan: false,
				// 		name: '外卖节红包',
				// 		time: '有效期至2022.03.30 10:33:23',
				// 		num: 8,
				// 		condition: '满23可用',
				// 		intro: '限商品现价+打包费-所有优惠金额满23,限商品现价+打包费-所有优惠金额满23.'
				// 	},
				// 	{
				// 		isOverdue: true,
				// 		isShenquan: false,
				// 		name: '外卖节红包',
				// 		time: '有效期至2022.03.30 10:33:23',
				// 		num: 8,
				// 		condition: '满23可用',
				// 		intro: '限商品现价+打包费-所有优惠金额满23,限商品现价+打包费-所有优惠金额满23.'
				// 	}
				// ]
			}
		},
		onLoad: function(option) {
			this.getMyPackageMoneyList();
			this.shopIndex = option.index;
			this.from = option.from;
		},
		methods: {
			// 红包去使用
			toUse(item) {
				// uni.showToast({
				// 	title: '去使用' + index,
				// 	icon: 'none'
				// })
				// console.log(item.id);
				// console.log(item.reduce);
				
				// uni.$emit('myPackageId', item.reduce)
				// uni.navigateBack({
				// 	delta: 1
				// })
				if(this.from == 'mine') {
					uni.switchTab({
						url: '/pages/tabBar/home/home'
					})
				}else {
					let pages = getCurrentPages();  //获取跳转的所有页面
					let nowPage = pages[ pages.length - 1]; //当前页
					let prevPage = pages[ pages.length - 2 ]; //上一页
					// prevPage.$vm //上一页的this
					prevPage.$vm.orderList[this.shopIndex].userCarsVo.temp_package_money = item.reduce
					prevPage.$vm.orderList[this.shopIndex].userCarsVo.packageId = item.id
					uni.navigateBack({
						delta: 1
					})
				}
			},
			dialogInputConfirm(val) {
				uni.showLoading({
					title: '3秒后会关闭'
				})

				setTimeout(() => {
					uni.hideLoading()
					// console.log(val)
					this.value = val
					// 关闭窗口后，恢复默认内容
					this.$refs.inputDialog.close()
				}, 3000)
			},
			// 获取红包列表
			getMyPackageMoneyList() {
				orderForm.getMyPackageMoneyList().then(res => {
					if (res.code == 200) {
						// console.log(res.total)
						this.myPackageList = res.rows;
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
	.red-envelope {
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
				display: flex;
				justify-content: space-between;
				// margin-top: 30rpx;
				align-items: center;
				padding-bottom: 20rpx;
				box-sizing: border-box;
				border-bottom: 2rpx dashed #E3E3E3;

				.left {
					// margin-left: 24rpx;
					margin-top: 24rpx;

					.left-t {
						font-size: 32rpx;
						font-weight: 500;
					}

					.left-b {
						font-size: 24rpx;
						font-weight: 500;
						color: #F75732;
						background-color: #FFE9DB;
						border-radius: 8rpx;
						display: inline-block;
						padding: 0 6rpx;
						box-sizing: border-box;
						margin-top: 12rpx;
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
				padding-top: 20rpx;

				// 225
				.left {
					width: 450rpx;

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
					// line-height: 48rpx;
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
