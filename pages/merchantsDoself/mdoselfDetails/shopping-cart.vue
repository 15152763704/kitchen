<template>
	<view style="background-color: #F1F1F1;">
		<view class="cont">
			<view class="common-car">
				<view class="empty-shop-car" v-if="isEmpty">
					<image src="/static/empty_shop_car.png" class="empty-shop-car-image" mode=""></image>
					<text>当前您的购物车是空的</text>
					<view class="empty-shop-car-btn" @click="toLook()">
						<text>去逛逛</text>
					</view>
				</view>
				<view class="shop-car" v-else>
					<view class="shop-car-header">
						<text @tap="cut">{{isCut?'编辑':'完成'}}</text>
					</view>
					<view class="store-box" v-for="(itemq,indexq) in goodsProducts" :key="indexq">
						<view class="store-header">
							<view class="" v-if="itemq.temp_checked == 2">
								<image src="/static/select.png" class="checked-image" mode=""
									@tap="storeCheck(indexq,itemq.temp_checked)"></image>
							</view>
							<view class="" v-else>
								<image src="/static/not_select.png" class="checked-image" mode=""
									@tap="storeCheck(indexq,itemq.temp_checked)"></image>
							</view>
							<view class="">
								<text class="itemq-name">{{itemq.shop}}</text>
								<image src="/static/youjiantou1.png" class="label" mode=""></image>
							</view>
						</view>
						<view class="goodsInfo" v-for="(itemw,indexw) in itemq.data" :key="indexw">
							<view class="">
								<image src="/static/select.png" v-if="itemw.temp_checked == 2" class="checked-image" mode=""
									@tap="goodsCheck(indexq,indexw,itemw.temp_checked)"></image>
								<image src="/static/not_select.png" v-else class="checked-image" mode=""
									@tap="goodsCheck(indexq,indexw,itemw.temp_checked)"></image>
							</view>
							<view class="goodsInfo-right">
								<view class="">
									<image :src="itemw.selfMadeGood.imageUrl" class="goods-image" mode=""></image>
								</view>
								<view class="goodsInfo-box">
									<view class="goods-box">
										<text class="goods-name">{{itemw.selfMadeGood.name}}</text>
										<!-- <text class="goods-remark">规格：{{itemw.selfMadeGood.}}</text> -->
										<text class="goods-number">x{{itemw.goodNum}}</text>
									</view>
									<view class="">
										<text class="goods-price"><text
												style="font-size: 18rpx;">¥</text>{{itemw.money}}</text>
									</view>
								</view>
							</view>
						</view>
						<!-- 费用计算 单商家 -->
						<!-- <view class="cost-count">
							<view class="cost">
								<view v-if="isCut" class="settlement-box">
									<text class="settlement-price">
										<text style="font-size: 24rpx;">￥</text>
										{{ perTotalArr.length == 0? zero.toFixed(2) : perTotalArr[indexq]}}
									</text>
									<text class="settlement-btn-disabled"
										:class="perTotalArr[indexq] >= 1? 'settlement-btn': ''">
										去结算
									</text>
								</view>
							</view>
						</view> -->
					</view>
					<view class="statistics-box">
						<view class="statistics">
							<view class="statistics-left" v-if="statisticsIndex" @tap="allCheck">
								<image src="/static/select.png" class="checked-image" mode="">
								</image>
								<text>全选</text>
							</view>
							<view class="statistics-left" v-else @tap="allCheck">
								<image src="/static/not_select.png" class="checked-image" mode="">
								</image>
								<text>全选</text>
							</view>
							<view class="statistics-right" v-if="isCut" @click="accounts()">
								<text>合计</text><text class="text-color">¥{{total == 0?zero.toFixed(2):total}}</text>
								<view class="btn">
									<text>一键结算</text>
								</view>
							</view>
							<view class="statistics-right" v-else @tap="delect">
								<view class="btn">
									<text>删除</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="!isEmpty" class="gap"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import merchantsDoself from '@/api/merchantsDoself/merchantsDoself.js';
	export default {
		data() {
			return {
				shopId: '',
				goodsProducts0: [],
				goodsProducts: [],
				zero: 0,
				isEmpty: false, // 购物车是否为空
				// iPhoneX: false,
				statisticsIndex: true, // 判断是否全选
				total: 0.00, // 总计（钱）
				isCut: true, // 是否编辑状态
				perTotalArr: []
			}
		},
		onLoad(options) {
			// console.log(options.id)
			this.shopId = options.shopId;
		},
		onShow() {
			this.getListUserCar(this.shopId);
		},
		created() {
			
		},
		methods: {
			// 去逛逛
			toLook() {
				uni.navigateBack();
			},
			// 查询指定店铺购物车
			getListUserCar(id) {
				// let id = this.listPortForm.pageNum;
				merchantsDoself.getListUserCar(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.data)
						this.goodsProducts0 = [];
						this.goodsProducts = [];
						this.goodsProducts0.push(res.data);
						this.goodsProducts.push(res.data);
						// console.log(this.goodsProducts)
						if (this.goodsProducts[0].data.length == 0) {
							this.isEmpty = true
						} else {
							let _obj = JSON.stringify(this.goodsProducts)
							this.goodsProducts = JSON.parse(_obj)
							// this.datas = this.list
							this.isEmpty = false
						}
						this.statistics()
					} else if (res.code == 401) {
						// this.returnMsg = res.msg + '，请重新登录';
						// this.dialogToggle();
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
						title: err,
						icon: 'none'
					});
					// console.log(err)
				});
			},
			goodsCheck(storeIndex, goodsIndex, goodsChecked) {
				// console.log(storeIndex, goodsIndex, goodsChecked)
				if (goodsChecked == 1) {
					this.goodsProducts[storeIndex].data[goodsIndex].temp_checked = 2
				} else {
					this.goodsProducts[storeIndex].data[goodsIndex].temp_checked = 1
				}
				// 判断是否该店铺全选
				let storeChecked = true
				this.goodsProducts[storeIndex].data.map((item, index) => {
					if (item.temp_checked == 1) {
						storeChecked = false
					}
				})
				if (storeChecked == false) {
					this.goodsProducts[storeIndex].temp_checked = 1
				} else {
					this.goodsProducts[storeIndex].temp_checked = 2
				}

				// 判断是否全选
				let statisticsIndex = true
				this.goodsProducts.find((item, index) => {
					if (item.temp_checked == 1) {
						statisticsIndex = false
					}
				})
				if (statisticsIndex == false) {
					this.statisticsIndex = false
				} else {
					this.statisticsIndex = true
				}

				this.statistics()
			},
			// 店铺选择
			storeCheck(storeIndex, storeCheck) {
				// console.log(storeIndex, storeCheck);
				if (storeCheck == 1) {
					this.goodsProducts[storeIndex].temp_checked = 2
					this.goodsProducts[storeIndex].data.find((item, index) => {
						item.temp_checked = 2
					})
				} else {
					this.goodsProducts[storeIndex].temp_checked = 1
					this.goodsProducts[storeIndex].data.find((item, index) => {
						item.temp_checked = 1
					})
				}
				//判断是否全选
				let statisticsIndex = true
				this.goodsProducts.find((item, index) => {
					if (item.temp_checked == 1) {
						statisticsIndex = false
					}
				})
				if (statisticsIndex == false) {
					this.statisticsIndex = false
				} else {
					this.statisticsIndex = true
				}
				this.statistics()
			},
			//全选
			allCheck() {
				if (this.statisticsIndex) {
					this.goodsProducts.find((item, index) => {
						item.temp_checked = 1
						item.data.find((itemq, indexq) => {
							itemq.temp_checked = 1
						})
					})
					this.statisticsIndex = false
				} else {
					this.goodsProducts.find((item, index) => {
						item.temp_checked = 2
						item.data.find((itemq, indexq) => {
							itemq.temp_checked = 2
						})
					})
					this.statisticsIndex = true
				}
				this.statistics()
			},
			//统计
			statistics() {
				let total = 0
				var arr = [];
				this.goodsProducts.find((item, index) => {
					// console.log(item, index)
					let perTotal = 0
					item.data.find((itemq, indexq) => {
						if (itemq.temp_checked == 2) {
							total = total + itemq.money * itemq.goodNum
						}
						if (itemq.temp_checked == 2) {
							perTotal = perTotal + itemq.money * itemq.goodNum
						}
					})
					// console.log(perTotal)
					arr.push(perTotal.toFixed(2))
					// console.log(arr)
				})
				this.total = total.toFixed(2)
				this.perTotalArr = arr;
			},
			// 编辑
			cut() {
				this.isCut = !this.isCut
				if (!this.isCut) {
					this.statisticsIndex = true
					this.allCheck()
				} else {
					let _obj = JSON.stringify(this.goodsProducts0)
					this.goodsProducts = JSON.parse(_obj)
					this.statisticsIndex = true;
					this.statistics();
					// this.datas = this.list;
				}
			},
			// 结算
			accounts() {
				let judge = this.judgeSelect()
				if (judge) {
					let idArr = [];
					this.goodsProducts.find((item, index) => {
						item.data.find((itemq, indexq) => {
							if (itemq.temp_checked == 2) {
								// console.log(itemq.goodId)
								idArr.push(itemq.id);
							}
						})
					})
					// console.log(idArr);
					uni.navigateTo({
						url: '/pages/merchantsDoself/orderForm/order-form?userCarIds=' + idArr.join(";")
					})
				} else {
					uni.showToast({
						title: '您当前未选择任何商品,结算失败',
						icon: 'none'
					})
				}
			},
			// 删除
			delect() {
				let judge = this.judgeSelect()
				if (judge) {
					// this.$emit('delect', this.goodsProducts)
					// console.log(this.goodsProducts);
					let goodIdArr = [];
					this.goodsProducts.find((item, index) => {
						item.data.find((itemq, indexq) => {
							if (itemq.temp_checked == 2) {
								// console.log(itemq.goodId)
								goodIdArr.push(itemq.goodId);
							}
						})
					})
					this.deleteUserCarByFoodId(goodIdArr.join(";"));
				} else {
					uni.showToast({
						title: '您当前未选择任何商品,删除失败',
						icon: 'none'
					})
				}
			},
			judgeSelect() {
				let judge = false
				this.goodsProducts.find((item, index) => {
					item.data.find((itemq, indexq) => {
						if (itemq.temp_checked == 2) {
							judge = true
						}
					})
				})
				return judge
			},
			// 批量删除接口
			deleteUserCarByFoodId(foodId) {
				merchantsDoself.deleteUserCarByFoodId(foodId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						uni.showToast({
							title: "从购物车移除",
							icon: 'success'
						})
						// this.getShopFoodTree(this.shopId);
						this.goodsProducts0 = [];
						this.goodsProducts = [];
						this.getListUserCar(this.shopId);
						this.isCut = !this.isCut;
					} else if (res.code == 401) {
						// this.returnMsg = res.msg + '，请重新登录';
						// this.dialogToggle();
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
		}
	}
</script>

<style>
	.cont {
		width: 100vw;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
<style lang="scss" scoped>
	.common-car {
		width: 750rpx;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #F8F9F9;
		box-sizing: border-box;
		padding: 20rpx 24rpx;

		.gap {
			width: 100%;
			height: 178rpx;
		}
	}

	.empty-shop-car {
		width: 750rpx;
		min-height: calc(100vh - 120rpx);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.empty-shop-car-image {
			width: 340rpx;
			height: 278rpx;
			margin-top: 102rpx;
		}

		text {
			margin-top: 40rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #666666;
		}

		.empty-shop-car-btn {
			width: 240rpx;
			height: 90rpx;
			background: #FBBC02;
			border-radius: 200rpx;
			margin-top: 40rpx;
			text-align: center;
			line-height: 90rpx;
			font-size: 30rpx;
			font-weight: 400;
			color: #313133;
		}
	}

	.shop-car {
		width: 702rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.shop-car-header {
			width: 690rpx;
			height: 100rpx;
			display: flex;
			flex-direction: row;
			align-items: flex-end;
			justify-content: flex-end;
			padding-bottom: 10rpx;
			box-sizing: border-box;

			text {
				font-size: 28rpx;
				font-weight: 400;
				color: #313133;
			}
		}

		.store-box {
			width: 100%;
			margin-bottom: 20rpx;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			background-color: #FFFFFF;
			border-radius: 24rpx;
			box-sizing: border-box;
			padding: 20rpx 22rpx 26rpx;

			.store-header {
				width: 100%;
				// height: 78rpx;
				// padding: 0 30rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				font-size: 28rpx;
				font-weight: 400;
				color: #313133;
				margin-bottom: 20rpx;

				.checked-image {
					width: 34rpx;
					height: 34rpx;
					margin-top: 8rpx;
				}

				.itemq-name {
					font-size: 28rpx;
					font-weight: 500;
					color: #000000;
					margin-left: 18rpx;


				}

				.label {
					width: 10rpx;
					height: 16rpx;
					margin-left: 18rpx;
					// margin-top: 5rpx;
				}
			}

			.goodsInfo {
				width: 100%;
				// height: 246rpx;
				display: flex;
				// flex-direction: row;
				align-items: center;
				// border-bottom: 2rpx solid #EDEDED;
				// margin-top: 22rpx;
				margin-bottom: 22rpx;
				// &:nth-last-child(1) {
				// 	border: none;
				// }

				.checked-image {
					width: 34rpx;
					height: 34rpx;
				}

				.goodsInfo-right {
					width: 100%;
					// height: 246rpx;
					margin-left: 18rpx;
					display: flex;
					flex-direction: row;
					// align-items: center;

					.goods-image {
						width: 160rpx;
						height: 160rpx;
						border-radius: 14rpx;
					}

					.goodsInfo-box {
						width: 100%;
						margin-left: 18rpx;
						display: flex;
						// flex-direction: column;
						// align-items: center;
						justify-content: space-between;

						.goods-box {
							display: flex;
							flex-direction: column;
							
							.goods-name {
								font-size: 32rpx;
							}

							.goods-remark {
								font-size: 20rpx;
							}

							.goods-number {
								font-size: 30rpx;
								margin-top: 12rpx;
							}

						}

						.goods-price {
							font-size: 32rpx;
							font-weight: 500;
						}

					}
				}
			}

			.cost-count {
				// background-color: #0077AA;
				width: 100%;
				// height: 400rpx;
				padding-left: 52rpx;
				box-sizing: border-box;
				margin-top: 40rpx;

				.cost {
					display: flex;
					justify-content: flex-end;
					// margin-bottom: 24rpx;
					align-items: center;

					.cost-text {
						font-size: 28rpx;
					}

					.cost-price {
						font-size: 26rpx;
						font-weight: 500;
					}

					.settlement-box {
						display: flex;
						align-items: center;

						.settlement-price {
							// min-width: 120rpx;
							height: 70rpx;
							line-height: 70rpx;
							font-size: 34rpx;
							font-weight: 500;
							padding: 0rpx 14rpx;
							box-sizing: border-box;
							background-color: #FFE8B5;
							border-radius: 36rpx 0 0 36rpx;
						}

						.settlement-btn {
							height: 70rpx;
							line-height: 70rpx;
							font-size: 28rpx;
							font-weight: 500;
							// padding: 12rpx 24rpx 12rpx 14rpx;
							padding-left: 14rpx;
							padding-right: 24rpx;
							box-sizing: border-box;
							color: #000000 !important;
							background-color: #FFBD2B !important;
							border-radius: 0 36rpx 36rpx 0 !important;
						}

						.settlement-btn-disabled {
							height: 70rpx;
							line-height: 70rpx;
							font-size: 28rpx;
							font-weight: 500;
							// padding: 12rpx 24rpx 12rpx 14rpx;
							padding-left: 14rpx;
							padding-right: 24rpx;
							box-sizing: border-box;
							background-color: #BABABA;
							border-radius: 0 16rpx 16rpx 0;
							color: #FFFFFF;
						}
					}
				}
			}
		}


		.statistics-box {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #FFFFFF;
			position: fixed;
			// bottom: 110rpx;
			bottom: 0rpx;
			/* #ifdef APP-PLUS */
			// bottom: 100rpx;
			/* #endif */
			z-index: 99;

			.statistics {
				width: 100%;
				// padding: 0 40rpx;
				height: 98rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

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
						// color: #313133;
					}
				}

				.statistics-right {
					margin-right: 30rpx;
					// width: 600rpx;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: flex-end;

					.btn {
						width: 194rpx;
						height: 76rpx;
						background: #FBBC02;
						text-align: center;
						line-height: 76rpx;
						margin-left: 16rpx;
						box-sizing: border-box;
						border-radius: 42rpx;

						text {
							font-size: 32rpx;
							font-weight: 500;
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
	}
</style>
