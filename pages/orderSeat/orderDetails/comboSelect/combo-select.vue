<template>
	<view class="combo-select-container">
		<!-- <view v-for="(item,index) in comboList" :key="index + 1" class="rooms-item" style=""
			v-if="item.packageType == 1 || item.packageType == 3">
			<view class="rooms-item-info" style="">
				<image :src="item.imgUrl" mode="" style=""></image>
				<view class="info flex-space-between" style="">
					<view class="info-1" style="">
						<text class="name" style="">{{ item.name }}</text>
						<text style="font-size: 24rpx; color: #999999;">可预约时间：{{ item.time }}</text>
					</view>
					<view class="price" style="">
						<text style="font-size: 20rpx;">￥</text>
						<text style="font-size: 36rpx;">{{ item.price }}</text>
						<text class="fs-20">/人</text>
					</view>
				</view>
			</view>
			<view class="action" style="" @click="clickItem(index)" :class="item.state?'selected':''">
				{{ item.state? '已选': '选择' }}
			</view>
		</view> -->
		<!-- ===========================   老版本人均套餐样式   =================================== -->
		<view style="display: flex; align-items: center; justify-content: space-between; padding-right: 18rpx; margin-top: 12rpx; background-color: #ffffff;" v-for="(item,index) in comboList" :key="index+ 1" v-if="item.packageType == 1 || item.packageType == 3">
			<view class="combo-select flex flex-space-between flex-align-center"
				 style="max-width: 600rpx;">
				<view class="">
					<view class="fs-24 fw-500" style="margin-bottom: 20rpx;">
						<text>{{ item.name }}</text>
					</view>
					<view class="fs-20">
						<text>可预约时间：{{ item.time }}</text>
					</view>
				</view>
				<view v-if="item.packageType != 3" class="fw-500">
					<text class="fs-20">￥</text>
					<text class="fs-36">{{ item.price }}</text>
					<text class="fs-20">/人</text>

				</view>
				<view v-else class="fw-500">
					<text class="fs-20">￥</text>
					<image @click.stop="decreaseNum(item)"
						style="width: 26rpx; height: 26rpx; margin-left: 8rpx; margin-right: 8rpx;"
						src="../../../../static/dzxq_jian.png" mode=""></image>
					<text class="fs-36">{{ item.price }}</text>
					<image @click.stop="addNum(item)"
						style="width: 26rpx; height: 26rpx; margin-left: 8rpx; margin-right: 8rpx;"
						src="../../../../static/dzxq_add.png" mode=""></image>
					<text class="fs-20">/人</text>
				</view>
			</view>
			<view class="action" @click="clickItem(index)" :class="item.state?'selected':''">
				{{ item.state? '预约': '预约' }}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'comboSelect',
		props: {
			comboList: {
				type: Array
			}
		},
		data() {
			return {

			}
		},
		computed: {},
		created() {},
		methods: {
			clickItem(type) {
				let _this = this;
				let comboList = _this.comboList;
				// if (comboList[type].state) {
				// 	for (var i = 0; i < comboList.length; i++) {
				// 		comboList[i].state = false;
				// 	}
				// } else {
				// 	for (var i = 0; i < comboList.length; i++) {
				// 		comboList[i].state = false;
				// 	}
				// 	comboList[type].state = !comboList[type].state;
				// }
				for (var i = 0; i < comboList.length; i++) {
					comboList[i].state = false;
				}
				comboList[type].state = !comboList[type].state;
				_this.$emit('clickItem', comboList, type);
				// console.log(type)
			},
			decreaseNum(item) {
				// console.log(item.price)
				if (item.price <= 500) {
					return
				}
				item.price = item.price - 100
			},
			addNum(item) {
				// console.log(item.price)
				item.price = item.price + 100
			}
		}
	}
</script>

<style lang="scss" scoped>
	.combo-select-container {
		background-color: #f5f5f5;
	}
	.flex {
		display: flex;
	}

	.flex-align-center {
		align-items: center;
	}

	.flex-space-between {
		justify-content: space-between;
	}

	.flex-justify-center {
		justify-content: center;
	}

	.fs-20 {
		font-size: 20rpx;
	}

	.fs-24 {
		font-size: 24rpx;
	}

	.fs-36 {
		font-size: 36rpx;
	}

	.fw-500 {
		font-weight: 500;
	}

	.combo-select {
		width: 712rpx;
		height: 120rpx;
		border-radius: 12rpx;
		margin-bottom: 8rpx;
		// background-color: #F6F7F9;
		box-sizing: border-box;
		padding: 20rpx 44rpx 18rpx 22rpx;

	}

	.selected {
		background: #999999!important;
		// color: #000000;
	}
	.action {
		height: 50rpx;
		line-height: 50rpx;
		border-radius: 40rpx;
		background: #F75732;
		color: #ffffff;
		text-align: center;
		padding: 0 20rpx;
		margin-right: 20rpx;
		font-size: 28rpx;
	}
	.rooms-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 18rpx;
		box-sizing: border-box;
		margin-bottom: 28rpx;
	
		.rooms-item-info {
			max-width: 560rpx;
			display: flex;
			// white-space: nowrap;
	
			image {
				width: 200rpx;
				min-width: 200rpx;
				height: 160rpx;
				border-radius: 8rpx;
			}
			
			.info {
				display: flex;
				flex-direction: column;
				margin-left: 20rpx;
				.info-1 {
					display: flex;
					flex-direction: column;
				}
				.name {
					font-size: 32rpx;
					font-weight: 600;
				}
	
				.range {
					font-size: 24rpx;
					color: #999999;
				}
	
				.price {
					color: rgb(247, 87, 50);
					font-weight: 600;
					// margin-top: 18rpx;
				}
				
				.info-text {
					font-size: 24rpx;
					color: #999999;
					margin-top: 24rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}
		}
	
		.rooms-item-action {
			height: 50rpx;
			line-height: 50rpx;
			border-radius: 40rpx;
			background: #F75732;
			color: #ffffff;
			text-align: center;
			padding: 0 20rpx;
			margin-right: 20rpx;
			font-size: 28rpx;
		}
		.selected {
			background: #999999!important;
			// color: #000000;
		}
		.isOrdered {
			background: #E3E3E3!important;
			color: #999999
		}
	}
</style>
