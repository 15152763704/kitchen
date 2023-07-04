<template>
	<view class="car">
		<!-- 购物车商品 -->
		<template v-if="all_num>0">
			<view class="car_home_box">
				<view class="all_select_box">
					<view class="select_box" @click="clickAllSelect">
						<view class="select_icon" :class="is_all_checked?'active':''">
							<image v-if="is_all_checked" :lazy-load="true" src="/static/yes.svg" mode="widthFix">
							</image>
						</view>
						<text>全选择</text>
					</view>
					<view style="padding: 0 10rpx;" @click.stop="clearCar">清空</view>
				</view>

				<view class="car_home_foods">
					<view class="car_food_item" v-for="(item,index) in goodsProducts" :key="index"
						@click="toGoodsDetail(item.goodsId)">
						<view class="select_box" @click.stop="clickSingleGood(index,item)">
							<view class="select_icon" :class="item.checked?'active':''">
								<image v-if="item.checked" :lazy-load="true" src="/static/yes.svg" mode="widthFix">
								</image>
							</view>
						</view>
						<view class="car_food_info">
							<view class="car_food_img">
								<block v-if="item.image">
									<image class="food_img" :src="item.image[0]" mode="aspectFill"></image>
								</block>
								<block v-else>
									<image class="food_img default" src="@/static/default_good1.png" mode="aspectFill">
									</image>
								</block>
							</view>
							<view class="car_food_right">
								<view class="car_food_top">
									<view class="car_food_left">
										<view class="car_food_name">{{item.goodsName}}
										</view>
										<view class="car_food_label">{{item.label}}</view>
									</view>
									<view class="car_edit_right">
										<!-- <view class="car_edit_btn" @click.stop="editGoods(idx,index,item,car.storeNo)">Edit</view> -->
										<image class="car_del_icon" @click.stop="editGoods(index,item)"
											:lazy-load="true" src="/static/edit.png"
											style="width: 32rpx;height: 32rpx;"></image>
										<image class="car_del_icon" @click.stop="delGood(index,item)" :lazy-load="true"
											src="/static/trash.png" style="width: 27rpx;height: 33rpx;"></image>
									</view>
								</view>
								<view class="car_food_bottom">
									<view class="car_food_price">
										S$ {{item.price?parseFloat(item.price).toFixed(2):'0.00'}}
									</view>
									<view class="info_num">
										<view class="minus" :class="item.num>1?'active':''"
											@click.stop="minus(item,index)">
											<view v-show="item.num>1">
												<image src="@/static/minus.png" mode="widthFix"></image>
											</view>
											<view v-show="item.num<=1">
												<image src="@/static/minus2.png" mode="widthFix"></image>
											</view>
										</view>
										<view class="number">{{item.num}}</view>
										<!-- <input type="number" :value="item.number" disabled> -->
										<!-- @input="blurInput($event,item.number,index)" -->
										<view class="plus" :class="item.num<item.quantity?'active':''"
											@click.stop="plus(item,index)">
											<view v-show="item.num<item.quantity">
												<image src="@/static/add.png" mode="widthFix"></image>
											</view>
											<view v-show="item.num>=item.quantity">
												<image src="@/static/add2.png" mode="widthFix"></image>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</template>
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
		data() {
			return {
				//购物车商品数据列表----数据示例
				goodsProducts: [
					{
						goodsId: 1,//商品id
						goodsName: '商品名称',
						label: '',//商品选择的规格属性
						checked: 1,//1:选中  0:未选中
						quantity: 5,//商品库存
						image: null,//商品图片
						price: 1,//商品价格
						num: 1,//商品已选择的数量
					}
				],
				total_number: 0, //已选中的购物车商品数量
				total_price: '0.00', //购物车商品总价格
				is_all_checked: 1, //是否全选  0：不是  1：是
				all_num: 1,//购物车商品总数量  用于判断购物车页面是否为空 
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getCartList();
		},
		methods: {
			updateCartNum() {
				if (this.total_number == 0) {
					uni.removeTabBarBadge({
						index: 2
					})
				} else {
					uni.setTabBarBadge({
						index: 2,
						text: String(this.total_number)
					})
				}
			},
			toBuyGoods() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			toGoodsDetail(goodsId) {
				uni.setStorageSync('goods', {
					id: goodsId
				})
				uni.navigateTo({
					url: "/pages2/category/productDetail"
				})
			},
			getCartList() {
				// 获取初始化数据---获取后端接口返回的数据
				// getCartList().then((res) => {
				// 	if (res.code == 200) {
				// 		this.total_number = res.total;
				// 		this.all_num = res.total;
				// 		let white_list = getApp().globalData.white_list; //过滤属性，包含数组内的属性不显示。
				// 		this.goodsProducts = res.rows;
				// 		console.log(this.goodsProducts);
				// 		this.sumTotalPrice();
				// 		this.updateCartNum();
				// 	}
				// })
				
				// 无接口测试----有接口则删掉---start
				this.sumTotalPrice();
				// 无接口测试----有接口则删掉---end

				this.isInitAllSelect();
			},
			sumTotalPrice() {
				// 计算添加到购物车的数量和价格
				let total_number = 0;
				let total_price = 0;
				for (let i = 0; i < this.goodsProducts.length; i++) {
					if (this.goodsProducts[i].checked == 1) {
						this.is_all_checked = 1;
						total_number += parseInt(this.goodsProducts[i].num);
						total_price += parseFloat(this.goodsProducts[i].price * this.goodsProducts[i].num).toFixed(2) *
						100;
					}
				}

				this.clickHasSelect();
				this.total_number = total_number;
				this.total_price = parseFloat(total_price / 100).toFixed(2);
			},
			minus(item, index) {
				// console.log(this.goodsProducts[idx].goods[index].number)
				this.goodsProducts[index].num--;
				if (this.goodsProducts[index].num < 1) {
					this.goodsProducts[index].num = 1;
				} else {
					// 编辑购物车
					// editCart({
					// 	id: this.goodsProducts[index].cartId,
					// 	num: this.goodsProducts[index].num
					// }).then((res) => {
					// 	if (res.code == 200) {
					// 		this.updateCartNum();
					// 	}
					// })
				}

				// 选中某个商品才能计算该商品总价
				if (this.goodsProducts[index].checked == 1) {
					this.sumTotalPrice();
				}
			},
			plus(item, index) {
				// console.log(this.goodsProducts[idx].goods[index].number)
				this.goodsProducts[index].num++;
				if (this.goodsProducts[index].num > item.quantity) {
					this.goodsProducts[index].num = item.quantity;
				} else {
					// 编辑购物车
					// editCart({
					// 	id: this.goodsProducts[index].cartId,
					// 	num: this.goodsProducts[index].num
					// }).then((res) => {
					// 	if (res.code == 200) {
					// 		this.updateCartNum();
					// 	}
					// })
				}
				// 选中某个商品才能计算该商品总价
				if (this.goodsProducts[index].checked == 1) {
					this.sumTotalPrice();
				}
			},
			blurInput(e, number, index) {
				// 输入修改商品数量
				// console.log(e.detail.value,number,idx,index);
				if (e.detail.value == '') {
					e.detail.value = 0;
				}
				this.goodsProducts[index].num = e.detail.value;
				if (this.goodsProducts[index].checked == 1) {
					this.sumTotalPrice();
				}
			},
			clickHasSelect() {
				// 是否有选中商品
				let result1 = '';
				// console.log(JSON.stringify(this.goodsProducts));
				result1 = this.goodsProducts.find(item => {
					return item.checked
				})
				// console.log(result1);
				if (result1 == undefined || result1 == 'undefined') {
					this.is_all_checked = 0;
				}
			},
			clickSingleGood(index, item) {
				this.goodsProducts[index].checked = !this.goodsProducts[index].checked;
				this.sumTotalPrice();
				if (this.total_number == 0) {
					this.is_all_checked = 0;
				}
			},
			editGoods(index, cartItem) {
				let white_list = getApp().globalData.white_list; //过滤属性，包含数组内的属性不显示。
				let selectSku = [];
				for (let j = 0; j < cartItem.model.split(';').length; j++) {
					if (JSON.stringify(white_list).indexOf(cartItem.model.split(';')[j].split(':')[0]) == -1) {
						// 属性新增至表格的表头字段
						selectSku.push(cartItem.model.split(';')[j].split(':')[1]);
					}
				}
				this.cartId = cartItem.cartId;
				// uni.showLoading({
				//     title: 'loading...'
				// });
				// 点击商品进入商品详情页
				getGoodsInfoById(cartItem.goodsId).then((res) => {
					if (res.code == 200) {
						this.goodsDetail = res.data;
					}
				}).catch(() => {
					// uni.hideLoading();
				})
			},
			delGood(index, item) {
				// console.log('---item---'+JSON.stringify(item));
				// 从购物车删除单个商品
				// console.log(index);
				this.goodsProducts[index].checked = 0;
				let result = this.goodsProducts.find(item => {
					return item.checked > 0
				})
				if (result == undefined) {
					this.goodsProducts[index].checked = 0;
				}
				// 删除某个商品
				this.goodsProducts.splice(index, 1);
				this.clickHasSelect();
				this.sumTotalPrice(); //计算价格

				if (this.total_number == 0) {
					this.all_num = 0;
					this.total_price = '0.00';
					this.goodsProducts = [];
				}
				//删除购物车某个商品---调接口删除
				// removeCart([item.cartId]).then((res) => {
				// 	if (res.code == 200) {
				// 		this.updateCartNum();
				// 	}
				// })
			},
			clickAllSelect() {
				this.is_all_checked = !this.is_all_checked;
				this.isInitAllSelect();
			},
			isInitAllSelect() {
				for (let i in this.goodsProducts) {
					if (this.is_all_checked == 0) {
						this.goodsProducts[i].checked = 0;
					} else {
						this.goodsProducts[i].checked = 1;
					}
				}
				if (this.is_all_checked == 0) {
					// 取消全选
					this.total_number = 0;
					this.total_price = '0.00';
				} else {
					// 全选
					this.sumTotalPrice();
				}
			},
			clearCar() {
				// 清空购物车
				this.all_num = 0;
				this.total_number = 0;
				this.total_price = '0.00';
				this.goodsProducts = [];
				// 清空购物车---调接口清空
				// clearCart().then((res) => {
				// 	if (res.code == 200) {
				// 		this.updateCartNum();
				// 	}
				// })
			},
			toNext() {
				if (this.total_number == 0) {
					uni.showToast({
						title: "请选择商品去结算",
						icon: "none"
					})
					return;
				}

				let goodsList = this.goodsProducts.filter((item) => {
					return item.checked == 1;
				})
				let orderInfo = {
					goodsList: goodsList,//去结算的商品数据列表
					totalPrice: this.total_price,//去结算的商品总金额
					totalNum: this.total_number//去结算的商品总数量
				}
				uni.setStorageSync('orderInfo', orderInfo);
				uni.navigateTo({
					url: "/pages/car/checkout"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.car_home_box {
		font-size: 24rpx;

		.all_select_box {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx;
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
			padding: 20rpx;
			box-sizing: border-box;
			border-bottom: 2rpx solid #eaeaea;

			&:last-of-type {
				border-bottom: 0;
			}

			.car_food_info {
				display: flex;
				justify-content: space-between;
				align-items: stretch;
				width: 100%;

				.car_food_img {
					width: 160rpx;
					height: 160rpx;
					border: 2rpx solid #dfe2e7;
					box-sizing: border-box;
					margin-right: 20rpx;
					border-radius: 10rpx;
					overflow: hidden;
					position: relative;

					.food_img {
						width: 100% !important;
						height: 100%;
						border-radius: 10rpx;
					}
				}

				.car_food_right {
					width: 72%;
					display: flex;
					flex-wrap: wrap;
					align-content: space-between;

					.car_food_top {
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: flex-start;

						.car_food_left {
							width: 75%;

							.car_food_name {
								font-size: 20rpx;
								font-weight: bold;
								margin: 5rpx 0;
							}

							.car_food_remark {
								// color: #868ea4;
								// font-style: italic;
								font-size: 24rpx;
								margin-bottom: 5rpx;
							}

							.car_food_label {
								color: #7E7E7E;
								font-size: 20rpx;
								margin-bottom: 5rpx;
							}
						}

						.car_edit_right {
							display: flex;
							align-items: center;
							justify-content: flex-end;

							.car_edit_btn {
								color: #DB0E7E;
								font-size: 24rpx;
								font-weight: bold;
								font-smooth: Roboto;
								display: inline-block;
								padding: 5rpx 15rpx;
								border-radius: 30rpx;
								border: 1px solid #DB0E7E;
								margin-right: 20rpx;
							}

							.car_del_icon {
								width: 24rpx;
								height: 30rpx;
							}
						}

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
							color: #DB0E7E;
							font-size: 26rpx;
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
			font-size: 28rpx;
			font-weight: bold;
		}
	}

	.car {
		padding-bottom: 220rpx;
	}

	.car_del_icon {
		margin-right: 15rpx;
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
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.select_icon {
			display: block;
			width: 34rpx;
			height: 34rpx !important;
			border: 2rpx solid #cccccc;
			border-radius: 50%;
			margin-right: 20rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			image {
				width: 34rpx;
				height: 34rpx !important;
			}

			&.active {
				background: #DB0E7E;
			}
		}

		.del_all_icon {
			width: 24rpx;
			height: 30rpx;
			margin-left: 20rpx;
		}
	}
</style>
