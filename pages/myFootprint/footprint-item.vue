<template>
	<view class="common-car">
		<view class="shop-car">
			<view class="store-box" v-for="(itemq,indexq) in list" :key="indexq">
				<view class="store-header">
					<view class="" v-if="isCut">
						<view class="" v-if="itemq.checked == 2">
							<image src="../../static/select.png" class="checked-image" mode=""
								@tap="storeCheck(indexq,itemq.checked)"></image>
						</view>
						<view class="" v-else>
							<image src="../../static/not_select.png" class="checked-image" mode=""
								@tap="storeCheck(indexq,itemq.checked)"></image>
						</view>
					</view>
					
					<view class="">
						<text class="itemq-name">{{itemq.time}}</text>
					</view>
				</view>
				<view class="goodsInfo" v-for="(itemw,indexw) in itemq.data" :key="indexw" @click="toStore(itemw)">
					<view class="" v-if="isCut">
						<image src="../../static/select.png" v-if="itemw.checked == 2" class="checked-image" mode=""
							@tap="goodsCheck(indexq,indexw,itemw.checked)"></image>
						<image src="../../static/not_select.png" v-else class="checked-image" mode=""
							@tap="goodsCheck(indexq,indexw,itemw.checked)"></image>
					</view>
					<view class="goodsInfo-right">
						<view class="">
							<image :src="itemw.shopImgUrl" class="goods-image" mode=""></image>
						</view>
						<view class="goodsInfo-box">
							<view class="goods-box">
								<!-- 店铺名称 -->
								<view class="goods-name">
									<!-- <text>{{itemw.title}}</text> -->
									<text>{{ itemw.name }}</text>
								</view>
								<!-- 评分，月售，配送时间，距离 -->
								<view class="goods-remark">
									<!-- <text>规格：{{itemw.remark}}</text> -->
									<view class="">
										<text style="font-size: 24rpx; font-weight: 500; color: #F75732;">{{ itemw.score }}分</text>
										<text>月售{{ itemw.monthSellNum }}</text>
									</view>
									<view class="">
										<text>分钟</text>
										<text style="margin: 0;">km</text>
									</view>
								</view>
								<!-- 起送费用，配送费用，人均消费 -->
								<view class="goods-number">
									<!-- <text>{{itemw.number}}</text> -->
									<text>起送￥</text>
									<text>配送约￥</text>
									<text>人均￥</text>
								</view>
								<!-- 满减活动 -->
								<view class="goods-info-4">
									<view class="goods-info-fullreduce" v-if="itemw.fllReduceArr">
										<template v-for="(val,idx) in itemw.fllReduceArr.slice(0, 3)">
											<text class="fullreduce-text">{{ val }}</text>
											<text class="fullreduce-textline"
												:class="{'theLast': idx == itemw.fllReduceArr.slice(0, 3).length - 1}"></text>
										</template>
									</view>
									<!-- <view class="goods-info-more">
										<image style="width: 13rpx; height: 7rpx;" src="/static/bottom.png" mode=""></image>
									</view> -->
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="statistics-box" v-if="isCut">
				<view class="statistics">
					<view class="statistics-left" v-if="statisticsIndex" @tap="allCheck">
						<image src="../../static/select.png" class="checked-image" mode="">
						</image>
						<text>全选</text>
					</view>
					<view class="statistics-left" v-else @tap="allCheck">
						<image src="../../static/not_select.png" class="checked-image" mode="">
						</image>
						<text>全选</text>
					</view>
					<view class="statistics-right" @tap="delect">
						<view class="btn">
							<text>删除</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <slot></slot> -->
		<view class="gap"></view>
	</view>
</template>

<script>
	export default {
		name: "commonCar",
		data() {
			return {
				isEmpty: true, // 购物车是否为空
				// iPhoneX: false,
				datas: [], // 商品列表     接收传过来的list
				statisticsIndex: false, // 判断是否全选
				// total: 0.00, // 总计（钱）
			}
		},
		props: {
			list: {
				type: [Object, Array],
				default: {}
			},
			isCut: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
			// this.iPhoneX = uni.getStorageSync('iPhoneX')
			if (this.list.length == 0) {
				this.isEmpty = true
			} else {
				this.datas = this.list
				this.isEmpty = false
			}
		},
		methods: {
			toStore(item) {
				// console.log(item.id);
				uni.navigateTo({
					url: '../store/store?id=' + item.id
				})
			},
			//商品选择
			goodsCheck(storeIndex, goodsIndex, goodsChecked) {
				// // console.log(storeIndex, goodsIndex, goodsChecked)
				// if (goodsChecked == 1) {
				// 	this.datas[storeIndex].goods[goodsIndex].checked = 2
				// } else {
				// 	this.datas[storeIndex].goods[goodsIndex].checked = 1
				// }
				// //判断是否该店铺全选
				// let storeChecked = true
				// this.datas[storeIndex].goods.map((item, index) => {
				// 	if (item.checked == 1) {
				// 		storeChecked = false
				// 	}
				// })
				// if (storeChecked == false) {
				// 	this.datas[storeIndex].checked = 1
				// } else {
				// 	this.datas[storeIndex].checked = 2
				// }

				// //判断是否全选
				// let statisticsIndex = true
				// this.datas.find((item, index) => {
				// 	if (item.checked == 1) {
				// 		statisticsIndex = false
				// 	}
				// })
				// if (statisticsIndex == false) {
				// 	this.statisticsIndex = false
				// } else {
				// 	this.statisticsIndex = true
				// }

				// // this.statistics()
			},
			//店铺选择
			storeCheck(storeIndex, storeCheck) {
				// if (storeCheck == 1) {
				// 	this.datas[storeIndex].checked = 2
				// 	this.datas[storeIndex].goods.find((item, index) => {
				// 		item.checked = 2
				// 	})
				// } else {
				// 	this.datas[storeIndex].checked = 1
				// 	this.datas[storeIndex].goods.find((item, index) => {
				// 		item.checked = 1
				// 	})
				// }
				// //判断是否全选
				// let statisticsIndex = true
				// this.datas.find((item, index) => {
				// 	if (item.checked == 1) {
				// 		statisticsIndex = false
				// 	}
				// })
				// if (statisticsIndex == false) {
				// 	this.statisticsIndex = false
				// } else {
				// 	this.statisticsIndex = true
				// }
				// // this.statistics()
			},
			//减少
			// sub(storeIndex, goodsIndex, goodsnum){
			// 	if(goodsnum == 1){
			// 		return
			// 	}else{
			// 		this.datas[storeIndex].goods[goodsIndex].number--
			// 	}
			// 	this.statistics()
			// },
			//增加
			// add(storeIndex, goodsIndex, goodsnum){
			// 	this.datas[storeIndex].goods[goodsIndex].number++
			// 	this.statistics()
			// },
			//全选
			allCheck() {
				// if (this.statisticsIndex) {
				// 	this.datas.find((item, index) => {
				// 		item.checked = 1
				// 		item.goods.find((itemq, indexq) => {
				// 			itemq.checked = 1
				// 		})
				// 	})
				// 	this.statisticsIndex = false
				// } else {
				// 	this.datas.find((item, index) => {
				// 		item.checked = 2
				// 		item.goods.find((itemq, indexq) => {
				// 			itemq.checked = 2
				// 		})
				// 	})
				// 	this.statisticsIndex = true
				// }
				// // this.statistics()
			},
			//统计
			// statistics() {
			// 	let total = 0
			// 	var arr = [];
			// 	this.datas.find((item, index) => {
			// 		// console.log(item, index)
			// 		let perTotal = 0
			// 		item.goods.find((itemq, indexq) => {
			// 			if (itemq.checked == 2) {
			// 				total = total + itemq.price * itemq.number
			// 			}
			// 			if (itemq.checked == 2) {
			// 				perTotal = perTotal + itemq.price * itemq.number
			// 			}
			// 		})
			// 		// console.log(perTotal)
			// 		arr.push(perTotal.toFixed(2))
			// 		// console.log(arr)
			// 	})
			// 	this.total = total.toFixed(2)
			// 	this.perTotalArr = arr;
			// },
			// cut() {
			// 	this.isCut = !this.isCut
			// 	this.statisticsIndex = true
			// 	this.allCheck()
			// },
			// accounts() {
			// 	let judge = this.judgeSelect()
			// 	if (judge) {
			// 		this.$emit('accounts', this.datas)
			// 	} else {
			// 		uni.showToast({
			// 			title: '您当前未选择任何商品,结算失败',
			// 			icon: 'none'
			// 		})
			// 	}
			// },
			delect() {
				// let judge = this.judgeSelect()
				// if (judge) {
				// 	this.$emit('delect', this.datas)
				// } else {
				// 	uni.showToast({
				// 		title: '您当前未选择任何商品,删除失败',
				// 		icon: 'none'
				// 	})
				// }

			},
			judgeSelect() {
				// let judge = false
				// this.datas.find((item, index) => {
				// 	item.goods.find((itemq, indexq) => {
				// 		if (itemq.checked == 2) {
				// 			judge = true
				// 		}
				// 	})
				// })
				// return judge
			}
		},
	}
</script>

<style lang="scss" scoped>
	.common-car {
		width: 750rpx;
		min-height: 100vh;
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		background: #FFFFFF;
		box-sizing: border-box;
		// padding: 20rpx 24rpx;

		.gap {
			width: 100%;
			height: 88rpx;
		}
	}


	.shop-car {
		width: 750rpx;
		// display: flex;
		// flex-direction: column;
		// align-items: center;

		.store-box {
			width: 100%;
			// margin-bottom: 20rpx;
			// display: flex;
			// flex-direction: column;
			// align-items: flex-start;
			background-color: #FFFFFF;
			// border-radius: 24rpx;
			box-sizing: border-box;
			// padding: 20rpx 22rpx 26rpx;

			.store-header {
				width: 100%;
				height: 60rpx;
				padding: 0 24rpx;
				box-sizing: border-box;
				display: flex;
				flex-direction: row;
				align-items: center;
				font-size: 28rpx;
				font-weight: 400;
				color: #313133;
				background: #F1F2F3;

				.checked-image {
					width: 34rpx;
					height: 34rpx;
					margin-top: 8rpx;
				}

				.itemq-name {
					font-size: 20rpx;
					font-weight: 400;
					color: #808080;
					margin-left: 18rpx;


				}

				.label {
					width: 10rpx;
					height: 16rpx;
					margin-left: 18rpx;
					// margin-top: 5rpx;
				}
			}

			.act-fullreduce {
				display: flex;
				flex-direction: row;
				height: 32rpx;
				/* line-height: 32rpx; */
				border-radius: 8rpx;
				border: 0.6rpx solid rgba(247, 87, 50, 0.7764705882352941);
				padding-top: 2rpx;
				padding-bottom: 2rpx;
				align-items: center;
				// margin-top: 8rpx;
				margin-left: 52rpx;
				margin-bottom: 22rpx;

				.fullreduce-text {
					height: 28rpx;
					line-height: 28rpx;
					font-size: 20rpx;
					color: #F75732;
					/* border-right: 1px solid #000000; */
					padding-left: 8rpx;
					padding-right: 8rpx;
				}

				.fullreduce-textline {
					height: 18rpx;
					line-height: 18rpx;
					border-right: 0.6rpx solid rgba(247, 87, 50, 0.7764705882352941);
				}

				.theLast {
					border-right: none !important;
				}
			}

			.goodsInfo {
				width: 100%;
				// height: 246rpx;
				display: flex;
				// flex-direction: row;
				align-items: center;
				// border-bottom: 1rpx solid #E3E3E3;
				// margin-top: 22rpx;
				box-sizing: border-box;
				padding: 28rpx 32rpx 0rpx 24rpx;

				&:nth-last-child(1) {
					border: none;
				}

				.checked-image {
					width: 34rpx;
					height: 34rpx;
					bottom: 28rpx;
				}

				.goodsInfo-right {
					width: 100%;
					// height: 246rpx;
					margin-left: 18rpx;
					display: flex;
					flex-direction: row;
					border-bottom: 1rpx solid #E3E3E3;
					padding-bottom: 28rpx;
					// align-items: center;

					.goods-image {
						width: 148rpx;
						height: 148rpx;
						border-radius: 14rpx;
					}

					.goodsInfo-box {
						width: 100%;
						margin-left: 24rpx;
						display: flex;
						// flex-direction: column;
						// align-items: center;
						justify-content: space-between;

						.goods-box {
							display: flex;
							flex-direction: column;
							width: 470rpx;
							.goods-name {
								font-size: 32rpx;
								font-weight: 600;
							}

							.goods-remark {
								display: flex;
								justify-content: space-between;
								align-items: center;
								text {
									font-size: 20rpx;
									color: #808080;
									margin-right: 16rpx;
								}
							}

							.goods-number {
								
								text {
									color: #808080;
									font-size: 20rpx;
									margin-right: 16rpx;
								}
							}

						}

						.goods-price {
							font-size: 26rpx;
							font-weight: 500;
						}

					}
				}
			}
		}

		// ===================================================================






		.statistics-box {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #FFFFFF;
			position: fixed;
			bottom: 0;
			z-index: 99;

			.statistics {
				width: 100%;
				// padding: 0 40rpx;
				height: 160rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				background-color: #333333;

				.statistics-left {
					// width: 120rpx;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					margin-left: 30rpx;

					image {
						width: 34rpx;
						height: 34rpx;
						margin-right: 12rpx;
					}

					text {
						font-size: 28rpx;
						font-weight: 400;
						color: #FFFFFF;
					}
				}

				.statistics-right {
					// margin-right: 30rpx;
					// width: 600rpx;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: flex-end;

					.btn {
						width: 270rpx;
						height: 160rpx;
						background: #FBBC02;
						text-align: center;
						line-height: 160rpx;
						margin-left: 16rpx;
						box-sizing: border-box;
						// border-radius: 42rpx;

						text {
							font-size: 32rpx;
							// font-weight: 500;
							color: #000000;
						}
					}

					text {
						font-size: 28rpx;
						font-weight: 400;
						color: #000;
					}

					.text-color {
						// color: rgba(242, 18, 18, 1);
						font-weight: 500;
						margin-left: 8rpx;
					}
				}
			}
		}
		.goods-info-4 {
			display: flex;
			/* width: 438rpx; */
			flex-direction: row;
			margin-top: 4rpx;
			align-items: center;
			justify-content: space-between;
		}
		
		.goods-info-fullreduce {
			display: flex;
			flex-direction: row;
			height: 32rpx;
			/* line-height: 32rpx; */
			border-radius: 4rpx;
			border: 0.6rpx solid rgba(247, 87, 50, 0.7764705882352941);
			padding-top: 2rpx;
			padding-bottom: 2rpx;
			align-items: center;
			box-sizing: border-box;
		}
		
		.fullreduce-text {
			height: 28rpx;
			line-height: 28rpx;
			font-size: 20rpx;
			color: #F75732;
			/* border-right: 1px solid #000000; */
			padding-left: 14rpx;
			padding-right: 14rpx;
			box-sizing: border-box;
		}
		
		.fullreduce-textline {
			height: 18rpx;
			line-height: 18rpx;
			border-right: 0.6rpx solid rgba(247, 87, 50, 0.7764705882352941);
		}
		
		.theLast {
			border-right: none !important;
		}
	}
</style>
