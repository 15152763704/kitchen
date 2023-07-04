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
						<text class="">速拌菜</text>
					</view>
				</view>
				<scroll-view class="sku-list" scroll-y="true">
					<view class="sku-item container" v-for="(sku,sIndex) in mySpecifications" :key="sku[speId]">
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
					</view>
				</scroll-view>
				<view class="fs-24" style="background-color: #F9FAFB; padding-left: 30rpx; height: 64rpx; line-height: 64rpx;">
					<text style="color: #808080;">已选规格：</text><text>单人份约220g、不辣、标准</text>
				</view>
				<view class="flex-center" style="height: 100rpx; margin-left: 30rpx; margin-right: 30rpx; justify-content: space-between;">
					<view class="fw-500">
						<text class="fs-28">总计 </text><text class="fs-40" style="color: #F75732;">￥28.5</text>
					</view>
					<view class="fs-24 fw-500" style="width: 202rpx; height: 60rpx; border-radius: 10rpx; line-height: 60rpx; justify-content: center; background: linear-gradient(to right, #F0C819 , #FF9D00); display: flex; align-items: center;">
						<image style="width: 24rpx; height: 24rpx; margin-right: 10rpx;" src="../../static/dpzy_xggadd.png" mode=""></image><text>加入购物车</text>
					</view>
				</view>
				<!-- <view class="confirm-btn container" :class="{disabled:selectSkuInfo[cbStock]==0}" :style="{backgroundColor:themeColor}" @click="handleConfirm">{{selectSkuInfo[cbStock]>0?'立即购买':'缺货中'}}</view> -->
			</view>
</template>

<script>
	export default {
		components:{
		},
		filters: {
			toFixed2: function (value) {
			  if(!value) return '0.00'
			  return Number(value).toFixed(2)
			}
		},
		props: {
			show: {
				type: Boolean,
				default: false
			},
			themeColor: {
				type: String,
				default: '#1ac792'
			},
			combinations: {
				type: Array,
				default(){
					return []
				}
			},
			specifications: {
				type: Array,
				default(){
					return []
				}
			},
			defaultSelectIndex: {
				type: Number,
				default: 0
			},
			combinationsProps: {
				type: Object,
				default(){
					return {
						id: 'id',
						value: 'value',
						image: 'image',
						price: 'price',
						stock: 'stock'
					}
				}
			},
			specificationsProps: {
				type: Object,
				default(){
					return {
						id: 'id',
						list: 'list',
						name: 'name'
					}
				}
			},
		},
		data() {
			return {
				buyCount: 1,
				selectedIndex: 0,
				// borderWidth: uni.rpx2px(2),
				mySpecifications: [],
				selectSkuInfo: {},
			}
		},
		watch:{
			specifications(val){
				this.initSkuData()
			}
		},
		computed: {
			speId() {
				return this.specificationsProps.id
			},
			speList() {
				return this.specificationsProps.list
			},
			speName() {
				return this.specificationsProps.name
			},
			cbValue() {
				return this.combinationsProps.value
			},
			cbImage() {
				return this.combinationsProps.image
			},
			cbPrice() {
				return this.combinationsProps.price
			},
			cbStock() {
				return this.combinationsProps.stock
			}
		},
		created() {
			if(this.specifications.length) {
				this.initSkuData()
			}
		},
		methods: {
			initSkuData() {
				this.selectedIndex = this.defaultSelectIndex
				this.selectSkuInfo = this.combinations[this.selectedIndex]
				this.mySpecifications = JSON.parse(JSON.stringify(this.specifications))
				this.mySpecifications.forEach((item,idx) => {
					//当前规格组合值
					const selects = this.combinations[this.selectedIndex][this.cbValue].split(',')
					//每类规格对应其列表的下标 并记录在属性sidx在mySpecifications的子对象中
					const sIndex = item[this.speList].indexOf(selects[idx])
					if(sIndex === -1) {
						uni.showToast({
							title:"默认规格值不存在"
						})
						return
					}
					this.$set(item,'sidx',sIndex)
				})
			},
			// selectSku(sIndex,index) {
			// 	this.mySpecifications[sIndex].sidx = index
			// 	const selectInfo = this.mySpecifications.reduce((prev,cur) => {
			// 		if(prev) {
			// 			return prev+','+cur[this.speList][cur.sidx]
			// 		}else {
			// 			return cur[this.speList][cur.sidx]
			// 		}
			// 	},'')
			// 	this.selectedIndex = this.combinations.findIndex(item => item[this.cbValue] === selectInfo)
			// 	this.selectSkuInfo = this.combinations[this.selectedIndex]
			// 	if(this.selectSkuInfo[this.cbStock] === 0) {
			// 		this.buyCount = 0
			// 	}
			// 	if(this.selectSkuInfo[this.cbStock] !== 0 && this.buyCount*1 === 0) {
			// 		this.buyCount = 1
			// 	}
			// },
			// handleBuyCount(type) {
			// 	if(type === 'minus') {
			// 		if(this.buyCount <= 1) return
			// 		this.buyCount = this.buyCount*1 - 1
			// 	}
			// 	if(type === 'add') {
			// 		if(this.buyCount >= this.selectSkuInfo[this.cbStock]) return
			// 		this.buyCount = this.buyCount*1 + 1
			// 	}
			// },
			// closeSkuBox() {
			// 	this.$emit('close')
			// },
			// handleConfirm() {
			// 	const result = this.selectSkuInfo
			// 	result.count = this.buyCount*1
			// 	this.$emit('confirm', result)
			// }
		}
	}
</script>

<style lang="scss" scoped>
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
					padding: 16rpx 20rpx;
					border-radius: 12rpx;
					margin: 0 20rpx 20rpx 0;
					border: 2rpx solid transparent;
					min-width: 160rpx;
				}
			}
			&.count {
				@extend .flex-center;
				justify-content: space-between;
				.count-box {
					@extend .flex-center;
					text,.count-content {
						@extend .flex-center-center;
						width: 70rpx;
						height: 70rpx;
						font-size: 32rpx;
						border: 2rpx solid $page-bg-color-grey;
					}
					.add,.minus {
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
