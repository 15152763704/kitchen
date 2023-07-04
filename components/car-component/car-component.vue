<template>
	<view class="car">
		<view class="" style="width: 750rpx; height: 44rpx; background-color: #FCE5A3; border-radius: 14rpx 14rpx 0 0; text-align: center;">
			<!-- <text class="f20">已享<text class="cF75732">减{{ item.fullReduce }}</text>,优于折扣,再买<text class="cF75732">13.9元</text>可再减<text class="cF75732">5元</text></text> -->
			<text class="f20">已享<text class="cF75732">减{{ fullReduceNum }}</text>元折扣</text>
		</view>
		<!-- 购物车商品 -->
		<template v-if="all_num>0"  >
			<scroll-view class="car_home_box" scroll-y="true">
				<view class="all_select_box">
					<!-- <view class="select_box" @click="clickAllSelect">
						<view class="select_icon" :class="is_all_checked?'active':''">
							<image v-if="is_all_checked" :lazy-load="true" src="/static/yes.svg" mode="widthFix">
							</image>
						</view>
						<text>全选择</text>
					</view> -->
					<view class="f24 flex-items-center">
						<image style="width: 36rpx; height: 36rpx; margin-right: 6rpx;" src="../../static/dot.png" mode=""></image>
						<text class="fw500">已选商品</text><text class="">（包装费<text class="cF75732">{{ packagePrice }}元</text>）</text>
					</view>
					<view style="padding: 0 10rpx; display: flex; align-items: center;" @click.stop="clearCar">
						<image class="car_del_icon" :lazy-load="true"
							src="/static/dpzy_lajixiang.png" style="width: 18.6rpx;height: 20rpx;">
						</image>
						<text>清空购物车</text>
					</view>
				</view>

				<view class="car_home_foods">
					<!-- <view class="car_food_item" v-for="(item,index) in goodsProducts" :key="index"
						@click="toGoodsDetail(item.goodsId)"> -->
						
						<!-- 删除点击商品去详情操作 @click="toGoodsDetail(item.goodsId)" -->
						<view class="car_food_item" v-for="(item,index) in shopCarList" :key="index">
						<!-- <view class="select_box" @click.stop="clickSingleGood(index,item)">
							<view class="select_icon" :class="item.checked?'active':''">
								<image v-if="item.checked" :lazy-load="true" src="/static/yes.svg" mode="widthFix">
								</image>
							</view>
						</view> -->
						<view class="car_food_info">
							<view class="car_food_img">
								<block v-if="item.food.imageUrl">
									<image class="food_img" :src="item.food.imageUrl" mode="aspectFill"></image>
								</block>
								<block v-else>
									<image class="food_img default" src="@/static/default_good1.png" mode="aspectFill">
									</image>
								</block>
							</view>
							<view class="car_food_right">
								<view class="car_food_top">
									<view class="car_food_left">
										<view class="car_food_name">{{item.food.name}}
										</view>
										<view class="car_food_label">{{item.foodSpecsName}}</view>
									</view>
									<!-- <view class="car_edit_right"> -->
										<!-- <view class="car_edit_btn" @click.stop="editGoods(idx,index,item,car.storeNo)">Edit</view> -->
										<!-- <image class="car_del_icon" @click.stop="editGoods(index,item)"
											:lazy-load="true" src="/static/edit.png"
											style="width: 32rpx;height: 32rpx;"></image> -->
										
									<!-- </view> -->
								</view>
								<view class="car_food_bottom">
									<view class="car_food_price">
										￥ {{item.money?parseFloat(item.money * item.goodNum).toFixed(2):'0.00'}}
									</view>
									<view class="info_num">
										<view class="minus" :class="item.goodNum>1?'active':''"
											@click.stop="changeNum(0, item)">
											<view>
												<image src="@/static/jian.png" mode="widthFix"></image>
											</view>
											<!-- <view v-show="item.goodNum<=1">
												<image src="@/static/minus2.png" mode="widthFix"></image>
											</view> -->
										</view>
										<view class="number">{{item.goodNum}}</view>
										<!-- <input type="number" :value="item.number" disabled> -->
										<!-- @input="blurInput($event,item.number,index)" -->
										<view class="plus"
											@click.stop="changeNum(1, item)">
											<!-- <view v-show="item.num<item.quantity">
												<image src="@/static/add.png" mode="widthFix"></image>
											</view>
											<view v-show="item.num>=item.quantity">
												<image src="@/static/add2.png" mode="widthFix"></image>
											</view> -->
											<view>
												<image src="@/static/addd.png" mode="widthFix"></image>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</template>
		<uni-popup ref="alertDialog" type="dialog" style="z-index: 9999">
			<uni-popup-dialog type="warn" cancelText="取消" confirmText="确定" title="" content="确定要清空购物车吗？"
				@confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	// import {
	// 	getCartList,
	// 	clearCart,
	// 	removeCart,
	// 	editCart
	// } from "@/api/common/car.js";
	// import {
	// 	getGoodsInfoById
	// } from "@/api/common/goods.js";
	export default {
		props: {
			shopCarList: {
				type: Array,
				default () {
					return [{
						goodNum: 0,
						foodSpecsId: ''
					}]
				}
			},
			payPrice: {
				type: Number,
				default: 0
			},
			fullReduceNum: {
				type: Number,
				default: 0
			},
			packagePrice: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				//购物车商品数据列表----数据示例
				// goodsProducts: [
				// 	{
				// 		goodsId: 1,//商品id
				// 		goodsName: '商品名称',
				// 		label: '一个、五香',//商品选择的规格属性
				// 		checked: 1,//1:选中  0:未选中
				// 		quantity: 5,//商品库存
				// 		image: null,//商品图片
				// 		price: 1,//商品价格
				// 		num: 1,//商品已选择的数量
				// 	}
				// ],
				// total_number: 0, //已选中的购物车商品数量
				// total_price: '0.00', //购物车商品总价格
				// // is_all_checked: 1, //是否全选  0：不是  1：是
				all_num: 1,//购物车商品总数量  用于判断购物车页面是否为空 
			}
		},
		computed: {
			
		},
		onLoad() {
			
		},
		onShow() {
			// this.getCartList();
		},
		methods: {
			clearCar() {
				// 清空购物车
				// this.all_num = 0;
				// this.total_number = 0;
				// this.total_price = '0.00';
				// this.goodsProducts = [];
				// 清空购物车---调接口清空
				// clearCart().then((res) => {
				// 	if (res.code == 200) {
				// 		this.updateCartNum();
				// 	}
				// })
				this.$refs.alertDialog.open()
			},
			changeNum(type, foodItem) {
				// console.log(type, foodItem)
				if(type == 0) {
					this.$set(foodItem, 'goodNum', foodItem.goodNum - 1);
				}else {
					this.$set(foodItem, 'goodNum', foodItem.goodNum + 1);
				}
				this.$emit('receviceGoodsNum', type, foodItem, foodItem.foodSpecsId, foodItem.goodNum);
			},
			dialogConfirm() {
				this.$emit('clearShopcar');
			},
			dialogClose() {
				// console.log('点击关闭')
			},
		}
	}
</script>

<style scoped lang="scss">
	.f20 {
		font-size: 20rpx;
	}
	.f24 {
		font-size: 24rpx;
	}
	.fw500 {
		font-weight: 500;
	}
	.cF75732 {
		color: #F75732;
	}
	.flex-items-center {
		display: flex;
		align-items: center;
	}
	.car_del_icon {
		// width: 24rpx;
		// height: 30rpx;
	}
	.car_home_box {
		font-size: 24rpx;
		height: 500rpx;
		overflow-y: scroll;

		.all_select_box {
			display: flex;
			justify-content: space-between;
			align-items: center;
			// padding: 20rpx;
			padding-top: 68rpx;
			padding-bottom: 34rpx;
			padding-left: 32rpx;
			padding-right: 32rpx;
			box-sizing: border-box;
			font-size: 22rpx;
		}

		.car_home_name {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: 20rpx;
			box-sizing: border-box;

			view {
				font-weight: bold;
				font-size: 26rpx;
			}
		}
	}

	.car_home_foods {
		background-color: #ffffff;

		.car_food_item {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding-left: 32rpx;
			padding-right: 40rpx;
			padding-bottom: 56rpx;
			padding-top: 20rpx;
			box-sizing: border-box;
			border-bottom: 2rpx solid #eaeaea;

			&:last-of-type {
				border-bottom: 0;
			}

			.car_food_info {
				display: flex;
				// justify-content: space-between;
				align-items: stretch;
				width: 100%;

				.car_food_img {
					width: 114rpx;
					height: 114rpx;
					// border: 2rpx solid #dfe2e7;
					// box-sizing: border-box;
					margin-right: 20rpx;
					border-radius: 4rpx;
					overflow: hidden;
					position: relative;

					.food_img {
						width: 100% !important;
						height: 100%;
						border-radius: 10rpx;
					}
				}

				.car_food_right {
					width: calc(100% - 67px);
					display: flex;
					flex-wrap: wrap;
					align-content: space-between;

					.car_food_top {
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: flex-start;

						.car_food_left {
							// width: 75%;

							.car_food_name {
								font-size: 32rpx;
								font-weight: 500;
								// margin: 5rpx 0;
							}

							.car_food_remark {
								// color: #868ea4;
								// font-style: italic;
								font-size: 24rpx;
								margin-bottom: 5rpx;
							}

							.car_food_label {
								color: #808080;
								font-size: 20rpx;
								margin-bottom: 12rpx;
							}
						}

						// .car_edit_right {
						// 	display: flex;
						// 	align-items: center;
						// 	justify-content: flex-end;

						// 	.car_edit_btn {
						// 		color: #DB0E7E;
						// 		font-size: 24rpx;
						// 		font-weight: bold;
						// 		font-smooth: Roboto;
						// 		display: inline-block;
						// 		padding: 5rpx 15rpx;
						// 		border-radius: 30rpx;
						// 		border: 1px solid #DB0E7E;
						// 		margin-right: 20rpx;
						// 	}
						// }

						text {
							font-weight: bold;
							font-size: 28rpx;
						}
					}

					.car_food_bottom {
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: center;

						.car_food_price {
							color: #F75732;
							font-size: 24rpx;
							font-weight: 500;

							text {
								color: #8E8E8E;
								font-size: 22rpx;
								text-decoration: line-through;
								margin-left: 15rpx;
								font-weight: 400;
							}
						}
					}
				}
			}
		}
	}

	.fixed_footer_next {
		background: #DB0E7E;
		position: fixed;
		width: calc(100% - 50rpx);
		left: 25rpx;
		right: 25rpx;
		bottom: calc(var(--window-bottom, 0) + 30rpx);
		z-index: 10;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		box-sizing: border-box;
		font-size: 26rpx;
		// box-shadow: 0 -1rpx 30rpx #cccccc;
		border-radius: 10rpx;
	}

	.next_box {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.next_num {
			color: #ffffff;
			width: 20%;
			text-align: left;

			view {
				width: 44rpx;
				height: 44rpx;
				border-radius: 50%;
				border: 1px solid #ffffff;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		.next_price {
			width: 20%;
			color: #ffffff;
			text-align: right;
		}

		.next_txt {
			width: 30%;
			color: #ffffff;
			font-size: 26rpx;
			text-align: center;
		}
	}

	// 计数器 加减样式
	.info_num {
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		height: 50rpx;

		.minus {
			width: 40rpx;
			height: 40rpx;
			font-size: 40rpx;
			font-weight: bold;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #ADB5BD;

			// border: 5rpx solid #ADB5BD;
			// border-radius: 8rpx;
			image {
				width: 40rpx;
				height: 40rpx;
			}

			&.active {
				color: #000000;
				border-color: #000000;
			}

			.txt {
				height: 42rpx;
				line-height: 38rpx;
				/* #ifdef MP-ALIPAY */
				line-height: 35rpx;
				/* #endif */
			}
		}

		.plus {
			width: 40rpx;
			height: 40rpx;
			font-size: 40rpx;
			font-weight: bold;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #ADB5BD;

			// border: 5rpx solid #ADB5BD;
			// border-radius: 8rpx;
			image {
				width: 40rpx;
				height: 40rpx;
			}

			&.active {
				color: #000000;
				border-color: #000000;
			}

			.txt {
				height: 42rpx;
				line-height: 38rpx;
				/* #ifdef MP-ALIPAY */
				line-height: 35rpx;
				/* #endif */
			}
		}

		input {
			width: 100rpx;
			color: #000000;
			font-size: 28rpx;
		}

		.number {
			width: 100rpx;
			height: 40rpx;
			color: #000000;
			font-size: 24rpx;
			color: #808080;
		}
	}

	.car {
		padding-bottom: 160rpx;
	}

	.car_del_icon {
		margin-right: 6rpx;
	}

	.no_car_data {
		text-align: center;
		padding-top: 250rpx;
		color: #333333;
		font-size: 24rpx;

		text {
			color: #DB0E7E;
			margin-left: 5rpx;
		}
	}

	.select_box {
		// display: flex;
		// justify-content: flex-start;
		// align-items: center;

		.select_icon {
			// display: block;
			// width: 34rpx;
			// height: 34rpx !important;
			// border: 2rpx solid #cccccc;
			// border-radius: 50%;
			// margin-right: 20rpx;
			// display: flex;
			// justify-content: center;
			// align-items: center;

			// image {
			// 	width: 34rpx;
			// 	height: 34rpx !important;
			// }

			// &.active {
			// 	background: #DB0E7E;
			// }
		}

		.del_all_icon {
			width: 24rpx;
			height: 30rpx;
			margin-left: 20rpx;
		}
	}
</style>