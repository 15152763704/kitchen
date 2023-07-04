<template>
	<view class="common-car">
		<view class="empty-shop-car" v-if="isEmpty">
			<image src="../../static/empty_shop_car.png" class="empty-shop-car-image" mode=""></image>
			<text>当前您的购物车是空的</text>
			<view class="empty-shop-car-btn">
				<text>去逛逛</text>
			</view>
		</view>
		<view class="shop-car" v-else>
			<!-- <view class="shop-car-header">
				<text @tap="cut">{{isCut?'编辑':'完成'}}</text>
			</view> -->
			<view class="store-box" v-for="(itemq,indexq) in datas" :key="indexq">
				<view class="store-header">
					<view class="" v-if="itemq.checked == 2">
						<image src="../../static/select.png" class="checked-image" mode=""
							@tap="storeCheck(indexq,itemq.checked)"></image>
					</view>
					<view class="" v-else>
						<image src="../../static/not_select.png" class="checked-image" mode=""
							@tap="storeCheck(indexq,itemq.checked)"></image>
					</view>
					<view class="">
						<text class="itemq-name">{{itemq.name}}</text>
						<image src="../../static/youjiantou1.png" class="label" mode=""></image>
					</view>
				</view>
				<view class="act-fullreduce">
					<template v-for="(item,index) in fullreduceData">
						<text class="fullreduce-text">{{ item.fullreduce }}</text>
						<text class="fullreduce-textline"
							:class="{'theLast': index == fullreduceData.length - 1}"></text>
					</template>
				</view>
				<view class="goodsInfo" v-for="(itemw,indexw) in itemq.goods" :key="indexw">
					<view class="">
						<image src="../../static/select.png" v-if="itemw.checked == 2" class="checked-image" mode=""
							@tap="goodsCheck(indexq,indexw,itemw.checked)"></image>
						<image src="../../static/not_select.png" v-else class="checked-image" mode=""
							@tap="goodsCheck(indexq,indexw,itemw.checked)"></image>
					</view>
					<view class="goodsInfo-right">
						<view class="">
							<image :src="itemw.img" class="goods-image" mode=""></image>
						</view>
						<view class="goodsInfo-box">
							<view class="goods-box">
								<text class="goods-name">{{itemw.title}}</text>
								<text class="goods-remark">规格：{{itemw.remark}}</text>
								<text class="goods-number">x{{itemw.number}}</text>
							</view>
							<view class="">
								<text class="goods-price"><text style="font-size: 18rpx;">¥</text>{{itemw.price}}</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 费用计算 单商家 -->
				<view class="cost-count">
					<view class="cost">
						<text class="cost-text">打包费</text>
						<text class="cost-price"><text style="font-size: 18rpx;">￥</text>{{itemq.packCost}}</text>
					</view>
					<view class="cost">
						<text class="cost-text">预估配送费</text>
						<text class="cost-price"><text
								style="font-size: 18rpx;">￥</text>{{itemq.dispatchingCost}}</text>
					</view>
					<view class="cost">
						<text class="cost-text">红包</text>
						<view class="">
							<text class="isHave">2张可用</text>
							<image style="width: 12rpx;" src="../../static/youjiantou1.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="cost">
						<text class="cost-text">商家代金券</text>
						<view class="">
							<text class="isNHave">暂无可用</text>
							<image style="width: 12rpx;" src="../../static/youjiantou1.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="cost">
						<view class="">
							<text class="cost-text">已优惠</text>
							<text style="font-weight: 500; font-size: 18rpx; color: #FF0000;">￥</text>
							<text
								style="font-weight: 500; font-size: 26rpx; color: #FF0000;">{{ itemq.discount }}</text>
						</view>
						<view class="settlement-box">
							<text class="settlement-price">
								<text style="font-size: 24rpx;">￥</text>
								{{ perTotalArr.length == 0? zero.toFixed(2) : perTotalArr[indexq]}}
							</text>
							<text class="settlement-btn-disabled" :class="perTotalArr[indexq] >= 15? 'settlement-btn': ''">
								{{ perTotalArr[indexq] < 15?'差￥'+ (15 - perTotalArr[indexq]) +'起送': '去结算' }}
							</text>
						</view>
					</view>
				</view>
			</view>
			<view class="statistics-box">
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
		<!-- 查看不可购买商品 -->
		<view class="do-not-buy" @click="showIsBuy()" :style="!nobuyIsShow?'':'border-radius: 24rpx 24rpx 0 0;'">
			<text class="text">查看不可购买商品</text>
			<image style="width: 16rpx;" :src="!nobuyIsShow?'../../static/bottom.png':'../../static/eva_text_shouqi.png'" mode="widthFix"></image>
		</view>
		<view v-if="nobuyIsShow" class="shop-car" style="position: relative;">
			<view class="mask" style="width: 100%; height: 100%; background-color: rgba(255, 255, 255,.8); position: absolute; z-index: 9;"></view>
			<!-- <view class="shop-car-header">
				<text @tap="cut">{{isCut?'编辑':'完成'}}</text>
			</view> -->
			<view class="store-box" v-for="(itemq,indexq) in datas" :key="indexq">
				<view class="store-header" style="margin-bottom: 8rpx;">
					<view class="">
						<text class="itemq-name">{{itemq.name}}</text>
						<image src="../../static/youjiantou1.png" class="label" mode=""></image>
					</view>
				</view>
				<view class="goodsInfo" v-for="(itemw,indexw) in itemq.goods" :key="indexw">
					<view class="goodsInfo-right">
						<view class="">
							<image :src="itemw.img" class="goods-image" mode=""></image>
						</view>
						<view class="goodsInfo-box">
							<view class="goods-box">
								<text class="goods-name">{{itemw.title}}</text>
								<text class="goods-remark">规格：{{itemw.remark}}</text>
								<text class="goods-number">x{{itemw.number}}</text>
							</view>
							<view class="">
								<text class="goods-price"><text style="font-size: 18rpx;">¥</text>{{itemw.price}}</text>
							</view>
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
				zero: 0,
				isEmpty: true, // 购物车是否为空
				// iPhoneX: false,
				datas: {}, // 商品列表     接收传过来的list
				statisticsIndex: false, // 判断是否全选
				total: 0.00, // 总计（钱）
				isCut: true, // 是否编辑状态
				fullreduceData: [{
						"fullreduce": "满25减7"
					},
					{
						"fullreduce": "满30减8"
					},
					{
						"fullreduce": "满35减10"
					}
				],
				nobuyIsShow: false,
				perTotalArr: []
			}
		},
		props: {
			list: {
				type: [Object, Array],
				default: {}
			}
		},
		created() {
			// this.iPhoneX = uni.getStorageSync('iPhoneX')
			if (this.list.length == 0) {
				this.isEmpty = true
			} else {
				this.datas = this.list
				this.isEmpty = false
			}
			this.statistics()
		},
		methods: {
			showIsBuy() {
				this.nobuyIsShow = !this.nobuyIsShow
			},
			//商品选择
			goodsCheck(storeIndex, goodsIndex, goodsChecked) {
				// console.log(storeIndex, goodsIndex, goodsChecked)
				if (goodsChecked == 1) {
					this.datas[storeIndex].goods[goodsIndex].checked = 2
				} else {
					this.datas[storeIndex].goods[goodsIndex].checked = 1
				}
				//判断是否该店铺全选
				let storeChecked = true
				this.datas[storeIndex].goods.map((item, index) => {
					if (item.checked == 1) {
						storeChecked = false
					}
				})
				if (storeChecked == false) {
					this.datas[storeIndex].checked = 1
				} else {
					this.datas[storeIndex].checked = 2
				}

				//判断是否全选
				let statisticsIndex = true
				this.datas.find((item, index) => {
					if (item.checked == 1) {
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
			//店铺选择
			storeCheck(storeIndex, storeCheck) {
				if (storeCheck == 1) {
					this.datas[storeIndex].checked = 2
					this.datas[storeIndex].goods.find((item, index) => {
						item.checked = 2
					})
				} else {
					this.datas[storeIndex].checked = 1
					this.datas[storeIndex].goods.find((item, index) => {
						item.checked = 1
					})
				}
				//判断是否全选
				let statisticsIndex = true
				this.datas.find((item, index) => {
					if (item.checked == 1) {
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
				if (this.statisticsIndex) {
					this.datas.find((item, index) => {
						item.checked = 1
						item.goods.find((itemq, indexq) => {
							itemq.checked = 1
						})
					})
					this.statisticsIndex = false
				} else {
					this.datas.find((item, index) => {
						item.checked = 2
						item.goods.find((itemq, indexq) => {
							itemq.checked = 2
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
				this.datas.find((item, index) => {
					// console.log(item, index)
					let perTotal = 0
					item.goods.find((itemq, indexq) => {
						if (itemq.checked == 2) {
							total = total + itemq.price * itemq.number
						}
						if (itemq.checked == 2) {
							perTotal = perTotal + itemq.price * itemq.number
						}
					})
					// console.log(perTotal)
					arr.push(perTotal.toFixed(2))
					// console.log(arr)
				})
				this.total = total.toFixed(2)
				this.perTotalArr = arr;
			},
			cut() {
				this.isCut = !this.isCut
				this.statisticsIndex = true
				this.allCheck()
			},
			accounts() {
				let judge = this.judgeSelect()
				if (judge) {
					this.$emit('accounts', this.datas)
				} else {
					uni.showToast({
						title: '您当前未选择任何商品,结算失败',
						icon: 'none'
					})
				}
			},
			// delect() {
			// 	let judge = this.judgeSelect()
			// 	if (judge) {
			// 		this.$emit('delect', this.datas)
			// 	} else {
			// 		uni.showToast({
			// 			title: '您当前未选择任何商品,删除失败',
			// 			icon: 'none'
			// 		})
			// 	}

			// },
			judgeSelect() {
				let judge = false
				this.datas.find((item, index) => {
					item.goods.find((itemq, indexq) => {
						if (itemq.checked == 2) {
							judge = true
						}
					})
				})
				return judge
			}
		}
	}
</script>

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
			height: 88rpx;
		}

		.do-not-buy {
			width: 100%;
			background-color: #ffffff;
			height: 66rpx;
			border-radius: 24rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			.text {
				font-size: 24rpx;
				font-weight: 500;
				margin-right: 6rpx;
			}
		}
	}

	.empty-shop-car {
		width: 750rpx;
		min-height: 680rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

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

		// .shop-car-header {
		// 	width: 690rpx;
		// 	height: 80rpx;
		// 	display: flex;
		// 	flex-direction: row;
		// 	align-items: center;
		// 	justify-content: flex-end;

		// 	text {
		// 		font-size: 28rpx;
		// 		font-weight: 400;
		// 		color: #313133;
		// 	}
		// }

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
				// border-bottom: 2rpx solid #EDEDED;
				// margin-top: 22rpx;

				&:nth-last-child(1) {
					border: none;
				}

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
						width: 98rpx;
						height: 98rpx;
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
								font-size: 28rpx;
							}

							.goods-remark {
								font-size: 20rpx;
							}

							.goods-number {
								font-size: 20rpx;
							}

						}

						.goods-price {
							font-size: 26rpx;
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
				margin-top: 18rpx;

				.cost {
					display: flex;
					justify-content: space-between;
					margin-bottom: 24rpx;
					align-items: center;

					.cost-text {
						font-size: 28rpx;
					}

					.cost-price {
						font-size: 26rpx;
						font-weight: 500;
					}

					.isHave {
						color: #FF0000;
						font-style: 28rpx;
						font-weight: 500;
						margin-right: 14rpx;
					}

					.isNHave {
						color: #000000;
						font-style: 28rpx;
						font-weight: 500;
						margin-right: 14rpx;
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
							color: #000000!important;
							background-color: #FFBD2B!important;
							border-radius: 0 36rpx 36rpx 0!important;
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
