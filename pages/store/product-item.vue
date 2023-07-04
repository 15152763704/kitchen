<template>
	<view @click="clickGoods(item)" class="flex inner pb20">
		<image :src="item.imageUrl" class="li-img" />
		<view class="flex-1 ml14">
			<view class="f32">
				<text class="li-txt">{{ item.name }}</text>
			</view>
			<view class="black f20 introduce" style="margin-top: 12rpx; ">{{ item.ingredients }}</view>
			<view class="black f20 introduce" style="margin-bottom: 30rpx;">口味：{{ item.flavor }}</view>
			<view class="shengray f20">月售{{ item.monthSell?item.monthSell: 0 }}</view>
			<!-- <view class="gray f26">进价：8.32 元</view> -->
			<!-- 满减 -->
			<!-- <view class="info-act">
				<view class="act-fullreduce">
					<template v-for="(item,index) in fullreduceData">
						<text class="fullreduce-text">{{ item.fullreduce }}</text>
						<text class="fullreduce-textline" :class="{'theLast': index == fullreduceData.length - 1}"></text>
					</template>
				</view>
			</view> -->
			<view class="">
				<text class="f24 fw500" style="color: #F75732;">￥{{ item.price }}</text><text v-if="item.priceOld" class="f20"
					style="color: #BABABA; margin-left: 12rpx; text-decoration:line-through;">￥{{ item.priceOld }}</text>
			</view>
		</view>
		<view class="flex-end">
			<template v-if="item.foodNum == 0">
				<view class="isnone"><text
						class="f24 fw500" style="">已售罄</text></view>
			</template>
			<template v-else>
				<view class="" v-if="item.foodSpecs == '0'">
					<view class="" style="display: flex; align-items: center; margin-right: 20rpx;">
						<image @click.stop="changeNum(0, item)" v-if="item.userCarNum != 0"
							style="width: 38rpx; height: 38rpx;" src="../../static/jian.png" mode=""></image>
						<text v-if="item.userCarNum != 0"
							style="font-size: 24rpx; font-weight: 500; color: #666; margin: 0 20rpx;">{{ item.userCarNum }}</text>
						<image @click.stop="changeNum(1, item)" style="width: 38rpx; height: 38rpx;"
							src="../../static/addd.png" mode=""></image>
					</view>
				</view>
				<uni-badge v-else class="uni-badge-left-margin" :text="item.userCarNum" absolute="rightTop" :offset="[0, 0]"
					size="small" style="margin-right: 20rpx;">
					<view class="add-btn" @click.stop="clickToggle('center', item)"><text
							class="f24 fw500" style="">选规格</text></view>
				</uni-badge>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'productItem',
		props: {
			item: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {
				fullreduceData: [{
						"fullreduce": "25减7"
					},
					{
						"fullreduce": "30减8"
					}
				]
			}
		},
		computed: {},
		created() {},
		methods: {
			clickToggle(type, item) {
				this.$emit('toggle', type, item);
			},
			clickGoods(item) {
				this.$emit('clickAGood',item);
			},
			changeNum(type, foodItem) {
				// .userCarNum
				if(type == 0) {
					this.$set(this.item, 'userCarNum', this.item.userCarNum - 1);
				}else {
					this.$set(this.item, 'userCarNum', this.item.userCarNum + 1);
				}
				// console.log(type, foodItem)
				this.$emit('receviceGoodsNum', type, foodItem, '', this.item.userCarNum);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.inner {
		padding-left: 14rpx;
		padding-right: 14rpx;
	}

	.flex {
		display: flex;
	}

	.flex-1 {
		flex: 1;
	}

	.flex-sb {
		display: flex;
		justify-content: space-between;
	}

	.flex-end {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.pb20 {
		padding-bottom: 20rpx;
	}

	.ml20 {
		margin-left: 20rpx;
	}

	.ml14 {
		margin-left: 14rpx;
	}

	.gray {
		color: #999;
	}

	.shengray {
		color: #808080;
	}

	.black {
		color: #000000;
	}

	.f20 {
		font-size: 20rpx;
	}

	.f24 {
		font-size: 24rpx;
	}

	.f26 {
		font-size: 26rpx;
	}

	.f32 {
		font-size: 32rpx;
	}

	.fw500 {
		font-weight: 500;
	}

	.li-img {
		width: 202rpx;
		height: 202rpx;
		border-radius: 10rpx;
	}

	.li-txt {
		color: #242424;
		font-weight: 500;
	}

	.info-act {
		display: flex;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
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
	}

	.fullreduce-text {
		height: 28rpx;
		line-height: 28rpx;
		font-size: 20rpx;
		color: #F75732;
		/* border-right: 1px solid #000000; */
		padding-left: 14rpx;
		padding-right: 14rpx;
	}

	.fullreduce-textline {
		height: 18rpx;
		line-height: 18rpx;
		border-right: 0.6rpx solid rgba(247, 87, 50, 0.7764705882352941);
	}

	.theLast {
		border-right: none !important;
	}

	.add-btn {
		padding: 0rpx 12rpx;
		background: linear-gradient(to right, #FFE471, #FCAD00) !important;
		box-sizing: border-box;
		border-radius: 10rpx;
		height: 48rpx;
		// line-height: 48rpx;
		display: flex;
		align-items: center;
	}
	
	.isnone {
		padding-right: 22rpx;
	}

	.introduce {
		/* #ifndef H5 */
		margin-top: 4rpx;
		lines: 2;
		text-overflow: ellipsis;
		/* #endif */
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
