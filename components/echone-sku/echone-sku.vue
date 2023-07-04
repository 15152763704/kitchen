<template>
	<view class="sku-box">
		<view class="sku-header">
			<!-- <image class="goods-img" :src="selectSkuInfo[cbImage]"></image> -->

			<!-- <view class="sku-goods-info">
						<view class="money" :style="{color:themeColor}">
							<text class="symbol fs-26">￥</text>
							<text class="amount fs-38">{{selectSkuInfo[cbPrice] | toFixed2}}</text>
						</view>
						<view class="stock fs-24">
							库存{{selectSkuInfo[cbStock]}}件
						</view>
						<view class="fs-24">
							已选："{{selectSkuInfo[cbValue]}}"
						</view>
					</view> -->
			<view class="details-title fw-500 fs-36">
				<text class="">{{ foodName }}</text>
			</view>
		</view>
		<scroll-view class="sku-list" scroll-y="true">
			<!-- <view class="sku-item container" v-for="(sku,sIndex) in mySpecifications" :key="sku[speId]">
						<view class="sku-name">{{sku[speName]}}</view>
						<view class="sku-content">
							<text 
								class="sku-content-item" 
								v-for="(item,index) in sku[speList]"
								:key="index" 
								:style="{
									borderColor: index===sku.sidx? themeColor: '#E3E3E3',
									color:index===sku.sidx?themeColor:'',
									backgroundColor: index===sku.sidx?'rgba(241, 138, 37, 0.07058823529411765)':'#ffffff' }" 
								@click="selectSku(sIndex,index)"
							>{{item}}</text>
						</view>
					</view> -->
			<view class="sku-item container" v-for="(item,index) in fSpecsList" :key="index + 1">
				<view class="sku-name">{{item.name}}</view>
				<view class="sku-content">
					<text :class="value.isChecked?'isChecked':''" class="sku-content-item"
						v-for="(value,iindex) in item.data" :key="iindex"
						@click="checkSkuItem(index, iindex)">{{value.name}} {{ value.price?value.price:'' }}</text>
				</view>
			</view>
		</scroll-view>
		<view class="fs-24" style="background-color: #F9FAFB; padding-left: 30rpx; height: 64rpx; line-height: 64rpx;">
			<text
				style="color: #808080;">已选规格：</text><text>{{ selectedNameString?selectedNameString:initialSelectedNameString }}</text>
		</view>
		<view class="flex-center"
			style="height: 100rpx; margin-left: 30rpx; margin-right: 30rpx; justify-content: space-between;">
			<view class="fw-500">
				<text class="fs-28">单价 </text><text class="fs-40"
					style="color: #F75732;">￥{{ totalPrice?totalPrice:initialTotalPrice }}</text>
			</view>
			<view v-if="!goodsIsHave" @click="addShopcar(1, 1)" class="fs-24 fw-500"
				style="width: 202rpx; height: 60rpx; border-radius: 10rpx; line-height: 60rpx; justify-content: center; background: linear-gradient(to right, #F0C819 , #FF9D00); display: flex; align-items: center;">
				<image style="width: 24rpx; height: 24rpx; margin-right: 10rpx;" src="../../static/dpzy_xggadd.png"
					mode=""></image><text>加入购物车</text>
			</view>
			<uni-number-box v-else @focus="focus" @blur="blur" :disabled="disabled" v-model="goodsNum"
				@change="changeValue" />
		</view>
		<!-- <view class="confirm-btn container" :class="{disabled:selectSkuInfo[cbStock]==0}" :style="{backgroundColor:themeColor}" @click="handleConfirm">{{selectSkuInfo[cbStock]>0?'立即购买':'缺货中'}}</view> -->
	</view>
</template>

<script>
	export default {
		components: {},
		filters: {
			// toFixed2: function(value) {
			// 	if (!value) return '0.00'
			// 	return Number(value).toFixed(2)
			// }
		},
		props: {
			show: {
				type: Boolean,
				default: false
			},
			foodName: {
				type: String,
				default: ''
			},
			fSpecsList: {
				type: Array,
				default () {
					return [{
						name: '',
						data: [{
								name: '',
								isChecked: true,
								price: 0
							},
							{
								name: '',
								isChecked: false
							},
							{
								name: '',
								isChecked: false
							}
						]
					}]
				}
			},
			shopCarList: {
				type: Array,
				default () {
					return [{
						foodSpecs: [],
						goodNum: 0
					}]
				}
			}
		},
		data() {
			return {
				disabled: false,
				// borderWidth: uni.rpx2px(2),
				// mySpecifications: [],
				// selectSkuInfo: {},
				// listArr: [],
				selectedNameArr: [],
				selectedIdArr: [],
				totalPrice: 0,
				goodsIsHave: false,
				goodsNum: 1,
				isDone: false
			}
		},
		watch: {
			// shopCarList(val) {
			// 	// this.initSkuData()
			// 	if (!this.isDone) {
			// 		this.isDone = true;
			// 		this.fSpecsListIsFirst()
			// 	}
			// 	// console.log(this.isDone)
			// }
			shopCarList: {
				handler() {
					// console.log(123)
					if (!this.isDone) {
						this.isDone = true;
						this.fSpecsListIsFirst()
					}
				},
				immediate: true
			}
		},
		computed: {
			// cbStock() {
			// 	return this.combinationsProps.stock
			// }
			selectedNameString() {
				return this.selectedNameArr.toString()
			},
			initialTotalPrice() {
				return this.fSpecsList[0].data[0].price
			},
			initialSelectedNameString() {
				let nameArr = [];
				let nameString = '';
				for (var i = 0; i < this.fSpecsList.length; i++) {
					// console.log(this.fSpecsList)
					nameArr.push(this.fSpecsList[i].data[0].name);
				}
				nameString = nameArr.toString()
				return nameString;
			}
		},
		created() {
			// if(this.specifications.length) {
			// 	this.initSkuData()
			// }
		},
		mounted() {},
		methods: {
			// 判断默认规格是否存在购物车
			fSpecsListIsFirst() {
				let idArr = [];
				let idString = '';
				for (var i = 0; i < this.fSpecsList.length; i++) {
					idArr.push(this.fSpecsList[i].data[0].id);
				}
				idString = idArr.join(';')
				// console.log(idString)
				for (var i = 0; i < this.shopCarList.length; i++) {
					// console.log(this.shopCarList[i].foodSpecsId)
					// console.log(idString)
					if(idString) {
						if (idString == this.shopCarList[i].foodSpecsId) {
							// 判断了默认规格商品在购物车是否已经存在
							// 若已经存在,显示数量 2022-06-07 20:30
							this.goodsIsHave = true;
							this.goodsNum = this.shopCarList[i].goodNum
							console.log(this.goodsNum)
						}
					}
				}
			},
			// initSkuData() {

			// },
			checkSkuItem(index, iindex) {
				// that.$set(that.level2List[index], 'isChecked', !that.level2List[index].isChecked);
				let _this = this;
				let idArr = [];
				let idString = '';
				_this.selectedNameArr = [];
				_this.selectedIdArr = [];
				for (var i = 0; i < _this.fSpecsList[index].data.length; i++) {
					_this.fSpecsList[index].data[i].isChecked = false
				}
				_this.fSpecsList[index].data[iindex].isChecked = true;
				if (_this.fSpecsList[index].data[iindex].price) {
					_this.totalPrice = _this.fSpecsList[index].data[iindex].price;
				}
				// console.log(_this.fSpecsList)
				for (var i = 0; i < _this.fSpecsList.length; i++) {
					// idArr.push(_this.fSpecsList[i].data[0].id);     // 1
					for (var j = 0; j < _this.fSpecsList[i].data.length; j++) {
						if (_this.fSpecsList[i].data[j].isChecked) {
							_this.selectedNameArr.push(_this.fSpecsList[i].data[j].name)
							_this.selectedIdArr.push(_this.fSpecsList[i].data[j].id)
							// id
							// return;
						}

					}
				}
				// 需要判断选择的规格商品（selectedIdArr）在购物车是否已经存在
				// 若已经存在,显示数量 goodsIsHave = true
				idString = _this.selectedIdArr.join(';');
				_this.goodsIsHave = false
				for (var i = 0; i < _this.shopCarList.length; i++) {
					if (idString == _this.shopCarList[i].foodSpecsId) {
						_this.goodsIsHave = true;
						_this.goodsNum = _this.shopCarList[i].goodNum;
						return;
					} else {
						_this.goodsNum = 1
					}

				}
				// console.log(_this.goodsNum)
			},
			addShopcar(type, newNum) {
				let _this = this;
				if (_this.selectedNameArr.length == 0) {
					for (var i = 0; i < _this.fSpecsList.length; i++) {
						for (var j = 0; j < _this.fSpecsList[i].data.length; j++) {
							if (_this.fSpecsList[i].data[j].isChecked) {
								_this.selectedNameArr.push(_this.fSpecsList[i].data[j].name)
								_this.selectedIdArr.push(_this.fSpecsList[i].data[j].id)
								// id
								// return;
							}
						}
					}
				}
				// console.log(_this.selectedNameArr)
				// console.log(_this.selectedIdArr)
				let selectedName = this.selectedNameString?this.selectedNameString:this.initialSelectedNameString;
				let totalPrice = this.totalPrice?this.totalPrice:this.initialTotalPrice
				this.$emit('sendShopcar', _this.selectedIdArr, selectedName, type, newNum, totalPrice);
				this.goodsIsHave = true
			},
			changeValue(value) {
				// console.log('：', this.goodsNum);
				// console.log('：', value);
				let oldNum = this.goodsNum;
				let newNum = value;
				// console.log(oldNum, newNum)
				if (newNum - oldNum > 0) {
					// console.log('+')
					// 增加购物车
					this.addShopcar(1, newNum);
				} else {
					// 移除购物车
					if (newNum == 0) {
						// this.goodsIsHave = false
						// this.$set(this, 'goodsIsHave', false)
						// console.log(this.goodsIsHave)
					}
					this.addShopcar(0, newNum);
				}
			},
			focus(e) {
				// this.disabled = true;
			},
			blur(e) {
				// this.disabled = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.isChecked {
		border: 0.6rpx solid #F18A25 !important;
		background: rgba(241, 138, 37, 0.07058823529411765) !important;
		color: #F18A25 !important;
		font-weight: 500 !important;
	}

	.flex-center {
		display: flex;
		align-items: center;
	}

	.flex-center-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	$font-color-light: #999999;
	$page-bg-color-grey: #f5f5f5;

	.fs-24 {
		font-size: 24rpx;
	}

	.fs-26 {
		font-size: 26rpx;
	}

	.fs-28 {
		font-size: 28rpx;
	}

	.fs-36 {
		font-size: 36rpx;
	}

	.fs-38 {
		font-size: 38rpx;
	}

	.fs-40 {
		font-size: 40rpx;
	}

	.fw-500 {
		font-weight: 500;
	}

	.container {
		// width: 614rpx;
		// margin: 0 auto;
		margin-left: 30rpx;
	}

	.sku-box {
		// min-height: 800rpx;
		border-radius: 12rpx;
		background-color: white;
		// padding-bottom: 20rpx;
		font-size: 28rpx;
		color: #333333;

		.sku-header {
			display: flex;
			padding: 26rpx 32rpx 0rpx;
			box-sizing: border-box;

		}

		.sku-goods-info {
			margin-left: 20rpx;

			.money {
				border: none;
				padding-bottom: 0;
			}

			.stock {
				color: $font-color-light;
			}
		}

		.sku-list {
			max-height: 800rpx;
			margin-bottom: 20rpx;
		}

		.sku-item {
			padding: 30rpx 0 26rpx;

			.sku-name {
				font-size: 30rpx;
			}

			.sku-content {
				border-bottom: 2rpx solid $page-bg-color-grey;
				padding: 20rpx 0;
				@extend .flex-center;
				flex-wrap: wrap;

				.sku-content-item {
					padding: 10rpx 20rpx;
					box-sizing: border-box;
					border-radius: 12rpx;
					margin: 0 20rpx 20rpx 0;
					border: 0.6rpx solid #E3E3E3;
					min-width: 160rpx;
				}
			}

			&.count {
				@extend .flex-center;
				justify-content: space-between;

				.count-box {
					@extend .flex-center;

					text,
					.count-content {
						@extend .flex-center-center;
						width: 70rpx;
						height: 70rpx;
						font-size: 32rpx;
						border: 2rpx solid $page-bg-color-grey;
					}

					.add,
					.minus {
						font-size: 44rpx;
					}

					.count-content {
						border-width: 2rpx 0;
						text-align: center;
					}
				}
			}
		}

		.confirm-btn {
			@extend .flex-center-center;
			height: 80rpx;
			border-radius: 80rpx;
			color: white;
			font-size: 32rpx;
			margin-top: 10rpx;
		}
	}

	[class*=disabled] {
		color: $font-color-light;
		opacity: .7;
	}
</style>
